#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把 src/ 与 assets/ 打成一个自包含的单文件网页，输出到 dist/index.html

用法：
    python3 build.py

产物：dist/index.html（约 12.8 MB，所有图片编码在内，双击即开、断网可用）
"""

import base64
import os
import re
import sys

BASE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(BASE, 'src')
ASSETS = os.path.join(BASE, 'assets')
OUT_DIR = os.path.join(BASE, 'dist')
OUT = os.path.join(OUT_DIR, 'index.html')

_cache = {}


def data_uri(rel):
    """assets/xxx.jpg -> data:image/...;base64,..."""
    if rel in _cache:
        return _cache[rel]
    path = os.path.join(BASE, rel)
    if not os.path.exists(path):
        raise SystemExit('缺少文件：%s' % path)
    mime = 'image/webp' if path.endswith('.webp') else 'image/jpeg'
    with open(path, 'rb') as f:
        uri = 'data:%s;base64,%s' % (mime, base64.b64encode(f.read()).decode())
    _cache[rel] = uri
    return uri


def read(name):
    with open(os.path.join(SRC, name), encoding='utf-8') as f:
        return f.read()


def main():
    html = read('index.html')
    app = read('app.js')
    kb = read('knowledge.js')
    fb = read('feedback.js')

    # app.js / knowledge.js 里以 assets/xxx 形式引用的图
    pat = r'assets/(?:(?:[a-z]+_(?:mid|near|wang|pre))|(?:uv_\d+)|(?:mt_\d+)|(?:ch_[a-z]+))\.(?:jpg|webp)'
    app = re.sub(pat, lambda m: data_uri(m.group(0)), app)
    kb = re.sub(pat, lambda m: data_uri(m.group(0)), kb)

    # app.js 里的占位符
    ph_app = [
        ('__XXG1__', 'assets/room_xxg_1.jpg'), ('__XXG2__', 'assets/room_xxg_2.jpg'),
        ('__YHY1__', 'assets/room_yhy_1.jpg'), ('__HY1__', 'assets/room_hy_1.jpg'),
        ('__HY2__', 'assets/room_hy_2.jpg'), ('__QS1__', 'assets/room_qs_1.jpg'),
        ('__DX1__', 'assets/room_dx_1.jpg'), ('__LC1__', 'assets/room_lc_1.jpg'),
        ('__ZL1__', 'assets/room_zl_1.jpg'), ('__NX1__', 'assets/room_nx_1.jpg'),
    ]
    for i in range(1, 11):
        ph_app.append(('__LL%02d__' % i, 'assets/ll_%02d.jpg' % i))
    for n in ['zhujing', 'jiaotang', 'changlang', 'shanpo', 'shiti',
              'zhuqiao', 'liaohua', 'chuanyun', 'shanjing', 'zhengdian']:
        ph_app.append(('__RD_%s__' % n, 'assets/road_%s.jpg' % n))
    for i in range(1, 13):
        ph_app.append(('__SZJ%02d__' % i, 'assets/seq_zhujing_%02d.jpg' % i))
    ph_app += [
        ('__HLMTEXT__', None),   # 特殊：正文 gzip，直接读文件内容
        ('__WANGMAP__', 'assets/map_wang.webp'),
        ('__HUIMU__', None),
    ]
    for ph, f in ph_app:
        if f:
            app = app.replace(ph, data_uri(f))
        elif ph == '__HLMTEXT__':
            with open(os.path.join(ASSETS, 'hlm_text.b64'), encoding='utf-8') as fh:
                app = app.replace(ph, fh.read().strip())
        elif ph == '__HUIMU__':
            with open(os.path.join(ASSETS, 'huimu.json'), encoding='utf-8') as fh:
                app = app.replace(ph, fh.read().strip())

    # 防止 </script> 提前闭合
    app = app.replace('</script>', '<\\/script>')
    kb = kb.replace('</script>', '<\\/script>')
    fb = fb.replace('</script>', '<\\/script>')

    # index.html 里的图
    html = re.sub(pat, lambda m: data_uri(m.group(0)), html)
    html = html.replace('__FARIMG__', 'url("' + data_uri('assets/far_common.jpg') + '")')
    html = html.replace('src="assets/map.jpg"', 'src="' + data_uri('assets/map.jpg') + '"')

    # 三个脚本内联
    html = html.replace('<script src="knowledge.js"></script>',
                        '<script>\n' + kb + '\n</script>')
    html = html.replace('<script src="app.js"></script>',
                        '<script>\n' + app + '\n</script>')
    html = html.replace('<script src="feedback.js"></script>',
                        '<script>\n' + fb + '\n</script>')

    os.makedirs(OUT_DIR, exist_ok=True)
    with open(OUT, 'w', encoding='utf-8') as f:
        f.write(html)

    left = re.findall(r'src="assets/|url\("assets/', html)
    print('输出：%s' % OUT)
    print('大小：%.2f MB' % (os.path.getsize(OUT) / 1048576))
    print('script 块：%d 开 / %d 闭' % (html.count('<script'), html.count('</script>')))
    print('残留外部引用：%d 处' % len(left))
    if left:
        print('  ⚠ 有图片没被内联，请检查上面的 assets 引用')
        sys.exit(1)
    print('✓ 构建完成')


if __name__ == '__main__':
    main()
