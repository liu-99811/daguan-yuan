# 改动指南

所有内容都在 `src/` 里。改完跑一次 `python3 build.py`，`dist/index.html` 就是新的。

---

## 一、加一处院落

1. **准备图**：四张放进 `assets/`，命名规范是 `<缩写>_near.jpg`、`<缩写>_mid.jpg`、`<缩写>_far.jpg`、`<缩写>_wang.webp`
   - 已有的缩写：`qf` 沁芳亭、`xxg` 潇湘馆、`yhy` 怡红院、`hy` 蘅芜苑、`qs` 秋爽斋、`dx` 稻香村、`lc` 栊翠庵、`zl` 紫菱洲、`nx` 暖香坞、`ox` 藕香榭、`dg` 省亲别墅
2. **改 `src/app.js`**：搜 `label: '沁芳亭'`，照抄一整块，改 `id`、`label`、图路径、匾额、楹联
3. **改地图热点**：搜 `mapspot`，加一个红点

> 注意：`build.py` 里的正则只认 `[a-z]+_(near|mid|far|wang)` 这种命名。新缩写别用数字和中文。

---

## 二、改判词

搜 `src/app.js` 里的 `const UNIVERSE`，每一项是一页：

```js
{ no: '第 一 页', who: '林黛玉 · 薛宝钗', img: 'assets/uv_01.webp',
  hua: '两株枯木，木上悬着一围玉带……',   // 册子上的画
  ci: '可叹停机德，堪怜咏絮才……',        // 判词原文
  shi: '……',                              // 注解
  chars: ['林黛玉','薛宝钗'] }             // 可点的人物
```

第一项 `isIndex: true` 是目录页，会自动统计正册人数，不用手改。

---

## 三、加知识条目

`src/knowledge.js`，结构是一组对象，字段见文件开头的注释。

---

## 四、常见坑

| 现象 | 原因 |
|---|---|
| 构建后网页空白 | `src/app.js` 有语法错误，用 `node --check src/app.js` 查 |
| 图片不显示 | 文件名不符合正则，或文件不在 `assets/` |
| 构建报“缺少文件” | 占位符映射（`build.py` 里的 `__XXG1__` 之类）指向的图不存在 |
| 打开是代码 | 文件后缀不是 `.html`，或用了编辑器打开 |

---

## 五、改完怎么提交

```bash
git add -A
git commit -m "说明改了什么"
git push
```

推上去后，GitHub Pages 会自动更新（约一分钟）。**记得先跑 build.py**，否则 `dist/` 还是旧的。
