/* ================= 问题反馈（私用） =================
   提交：主页左下角「反馈」按钮，点开即可写
   查看：连点左上角「園」印 5 下
   存储：本机浏览器 localStorage，不上传
   ==================================================== */
(function () {
  'use strict';

  var KEY = 'hlm_fb_v1';
  var items = [];
  try { items = JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { items = []; }
  if (!Array.isArray(items)) items = [];

  function save() { try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (e) {} }

  /* ---------- 样式 ---------- */
  var css = [
    /* 提交按钮 */
    '#fbFab{position:fixed;left:14px;top:54px;z-index:69;font-family:inherit;font-size:11.5px;',
    '  letter-spacing:2px;cursor:pointer;padding:6px 12px;border-radius:14px;color:#6a5a40;',
    '  background:rgba(252,247,236,.72);border:1px solid rgba(140,110,70,.32);',
    '  backdrop-filter:blur(3px);transition:.2s;opacity:.62;}',
    '#fbFab:hover{opacity:1;background:#fbf0d8;border-color:#b98a3a;}',
    '#fbFab .dot{display:inline-block;width:5px;height:5px;border-radius:50%;background:#a8322a;',
    '  margin-left:5px;vertical-align:1px;}',
    /* 面板 */
    '.fb-panel{position:fixed;right:16px;top:60px;width:min(364px,93vw);max-height:72vh;z-index:96;',
    '  background:linear-gradient(180deg,#fdfaf3,#f3ebda);border:1px solid rgba(120,90,50,.45);',
    '  border-radius:12px;box-shadow:0 18px 44px rgba(40,25,5,.38);display:none;flex-direction:column;',
    '  font-family:inherit;overflow:hidden;color:#2b241a;}',
    '.fb-panel.on{display:flex;}',
    '.fb-h{display:flex;align-items:center;gap:8px;padding:11px 13px;border-bottom:1px solid rgba(120,90,50,.22);',
    '  background:linear-gradient(180deg,rgba(255,252,245,.9),rgba(246,238,222,.8));}',
    '.fb-h .s{width:22px;height:22px;display:grid;place-items:center;background:#a8322a;color:#fdf6e6;',
    '  font-size:12px;border-radius:4px;}',
    '.fb-h .t{font-size:14px;letter-spacing:3px;}',
    '.fb-h .n{font-size:11px;color:#8a7a5c;letter-spacing:1px;margin-left:auto;}',
    '.fb-h .x{background:none;border:none;font-size:15px;color:#8a7a5c;cursor:pointer;padding:2px 4px;}',
    '.fb-tools{display:flex;gap:6px;padding:9px 12px;border-bottom:1px solid rgba(120,90,50,.16);}',
    '.fb-tools button{font-family:inherit;font-size:11.5px;letter-spacing:1.5px;cursor:pointer;',
    '  padding:6px 10px;border-radius:14px;color:#4a3f2c;background:linear-gradient(180deg,#fdfaf3,#efe6d2);',
    '  border:1px solid rgba(120,90,50,.35);transition:.18s;}',
    '.fb-tools button:hover{background:#fbf0d8;border-color:#b98a3a;}',
    '.fb-tools button.on{background:linear-gradient(180deg,#3b3020,#241c10);color:#f6ecd8;border-color:#241c10;}',
    '.fb-tools button.dg{color:#a8322a;border-color:rgba(168,50,42,.35);}',
    '.fb-list{overflow:auto;padding:8px 10px 12px;flex:1;min-height:60px;}',
    '.fb-item{border:1px solid rgba(120,90,50,.22);border-radius:8px;padding:8px 10px;margin-bottom:7px;',
    '  background:rgba(255,253,248,.75);position:relative;}',
    '.fb-item .m{font-size:10px;color:#9a8a6a;letter-spacing:.5px;display:flex;gap:6px;flex-wrap:wrap;padding-right:16px;}',
    '.fb-item .w{font-size:13px;line-height:1.6;margin-top:4px;word-break:break-word;white-space:pre-wrap;}',
    '.fb-item .l{font-size:10px;color:#a89370;margin-top:4px;word-break:break-all;}',
    '.fb-item .d{position:absolute;right:5px;top:4px;background:none;border:none;color:#c0ab8e;',
    '  cursor:pointer;font-size:12px;padding:2px;}',
    '.fb-item .d:hover{color:#a8322a;}',
    '.fb-empty{font-size:12px;color:#9a8a6a;text-align:center;padding:22px 8px;line-height:1.9;}',
    /* 输入框 */
    '.fb-comp{position:fixed;left:50%;bottom:52px;transform:translateX(-50%);z-index:99;',
    '  width:min(420px,92vw);display:none;',
    '  background:linear-gradient(180deg,#fdfaf3,#f2ead9);border:1px solid rgba(120,90,50,.5);',
    '  border-radius:12px;box-shadow:0 18px 44px rgba(40,25,5,.42);padding:12px;}',
    '.fb-comp.on{display:block;}',
    '.fb-comp .hd{display:flex;align-items:center;gap:7px;margin-bottom:8px;}',
    '.fb-comp .hd .s{width:20px;height:20px;display:grid;place-items:center;background:#a8322a;',
    '  color:#fdf6e6;font-size:11px;border-radius:3px;}',
    '.fb-comp .hd .t{font-size:13px;letter-spacing:2px;}',
    '.fb-comp .c{font-size:10px;color:#8a7a5c;letter-spacing:.5px;margin-bottom:7px;}',
    '.fb-comp textarea{width:100%;height:78px;resize:none;font-family:inherit;font-size:13.5px;',
    '  line-height:1.6;padding:8px 9px;border-radius:6px;border:1px solid rgba(120,90,50,.3);',
    '  background:#fffdf7;color:#2b241a;outline:none;}',
    '.fb-comp textarea:focus{border-color:#b98a3a;}',
    '.fb-comp .r{display:flex;gap:6px;justify-content:flex-end;align-items:center;margin-top:8px;}',
    '.fb-comp .r .tip{font-size:10px;color:#a89370;margin-right:auto;}',
    '.fb-comp .r button{font-family:inherit;font-size:11.5px;letter-spacing:1.5px;cursor:pointer;',
    '  padding:6px 15px;border-radius:14px;border:1px solid rgba(120,90,50,.35);',
    '  background:linear-gradient(180deg,#fdfaf3,#efe6d2);color:#4a3f2c;}',
    '.fb-comp .r button.p{background:linear-gradient(180deg,#3b3020,#241c10);color:#f6ecd8;border-color:#241c10;}',
    '.fb-toast{position:fixed;left:50%;transform:translateX(-50%);bottom:120px;z-index:99;',
    '  padding:7px 16px;border-radius:16px;background:rgba(24,18,10,.84);color:#f6ecd8;font-size:12px;',
    '  letter-spacing:1.5px;opacity:0;transition:opacity .3s;pointer-events:none;}',
    '.fb-toast.on{opacity:1;}'
  ].join('\n');
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  var pressTimer = null;

  /* ---------- 提交按钮 ---------- */
  var fab = document.createElement('button');
  fab.id = 'fbFab';
  fab.innerHTML = '反 馈<span class="dot"></span>';
  document.body.appendChild(fab);

  /* ---------- 输入框 ---------- */
  var comp = document.createElement('div');
  comp.className = 'fb-comp';
  comp.innerHTML =
    '<div class="hd"><span class="s">记</span><span class="t">问题反馈</span></div>' +
    '<div class="c" id="fbCtx"></div>' +
    '<textarea id="fbText" placeholder="哪里不对？按钮没反应、字显示错了、图不对……写一句就行"></textarea>' +
    '<div class="r"><span class="tip">Ctrl+回车 保存</span>' +
    '<button id="fbCancel">取消</button><button class="p" id="fbSave">保存</button></div>';
  document.body.appendChild(comp);

  /* ---------- 列表面板 ---------- */
  var panel = document.createElement('div');
  panel.className = 'fb-panel';
  panel.innerHTML =
    '<div class="fb-h"><span class="s">记</span><span class="t">问题反馈</span>' +
    '<span class="n" id="fbCount">0</span><button class="x" id="fbClose">✕</button></div>' +
    '<div class="fb-tools">' +
      '<button id="fbExport">导出 txt</button>' +
      '<button id="fbClear" class="dg">清空</button>' +
    '</div>' +
    '<div class="fb-list" id="fbList"></div>';
  document.body.appendChild(panel);

  var toastEl = document.createElement('div');
  toastEl.className = 'fb-toast';
  document.body.appendChild(toastEl);

  function toast(t) {
    toastEl.textContent = t;
    toastEl.classList.add('on');
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function () { toastEl.classList.remove('on'); }, 1700);
  }

  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function fmtTime(ts) {
    var d = new Date(ts);
    return (d.getMonth() + 1) + '月' + d.getDate() + '日 ' + pad(d.getHours()) + ':' + pad(d.getMinutes());
  }

  function ctx() {
    var parts = [];
    var t = document.getElementById('title');
    if (t && t.textContent.trim()) parts.push(t.textContent.trim());
    var uv = document.getElementById('uv');
    if (uv && !uv.classList.contains('hidden')) {
      var m = (uv.textContent || '').match(/(\d+)\s*\/\s*16/);
      parts.push('太虚幻境' + (m ? ' 第' + m[1] + '页' : ''));
    }
    var kb = document.getElementById('kb');
    if (kb && !kb.classList.contains('hidden')) parts.push('知识库');
    var modal = document.getElementById('modal');
    if (modal && !modal.classList.contains('hidden')) parts.push('弹窗');
    return parts.join(' · ') || '大观园';
  }

  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* ---------- 渲染 ---------- */
  function render() {
    var list = document.getElementById('fbList');
    document.getElementById('fbCount').textContent = items.length + ' 条';
    fab.querySelector('.dot').style.opacity = items.length ? '1' : '0';
    if (!items.length) {
      list.innerHTML = '<div class="fb-empty">还没有记录。<br>看到问题，点左上角「反馈」写一句。</div>';
      return;
    }
    var html = '';
    for (var i = items.length - 1; i >= 0; i--) {
      var it = items[i];
      html += '<div class="fb-item">' +
        '<button class="d" data-del="' + i + '">✕</button>' +
        '<div class="m"><span>' + fmtTime(it.t) + '</span><span>·</span><span>' + escapeHtml(it.ctx || '') + '</span></div>' +
        '<div class="w">' + escapeHtml(it.text) + '</div>' +
        '</div>';
    }
    list.innerHTML = html;
    Array.prototype.forEach.call(list.querySelectorAll('[data-del]'), function (b) {
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        items.splice(parseInt(b.getAttribute('data-del'), 10), 1);
        save(); render();
      });
    });
  }

  /* ---------- 打开 / 关闭输入框 ---------- */
  function openComp() {
    document.getElementById('fbCtx').textContent = '当前位置：' + ctx();
    document.getElementById('fbText').value = '';
    comp.classList.add('on');
    setTimeout(function () { document.getElementById('fbText').focus(); }, 40);
  }
  function closeComp() { comp.classList.remove('on'); }

  function commit() {
    var v = document.getElementById('fbText').value.trim();
    if (!v) { closeComp(); return; }
    items.push({ t: Date.now(), text: v, ctx: ctx() });
    save(); render(); closeComp(); toast('已记下');
  }

  var suppressClick = false;
  fab.addEventListener('pointerdown', function () {
    pressTimer = setTimeout(function () {
      suppressClick = true;
      var on = panel.classList.toggle('on');
      if (on) render();
      toast('反馈记录');
    }, 900);
  });
  ['pointerup', 'pointerleave', 'pointercancel'].forEach(function (ev) {
    fab.addEventListener(ev, function () { clearTimeout(pressTimer); });
  });

  fab.addEventListener('click', function () {
    if (suppressClick) { suppressClick = false; return; }
    if (comp.classList.contains('on')) closeComp(); else openComp();
  });
  document.getElementById('fbCancel').addEventListener('click', closeComp);
  document.getElementById('fbSave').addEventListener('click', commit);

  document.getElementById('fbText').addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); commit(); }
    if (e.key === 'Escape') { e.preventDefault(); closeComp(); }
  });

  /* ---------- 面板交互 ---------- */
  document.getElementById('fbClose').addEventListener('click', function () {
    panel.classList.remove('on');
  });

  document.getElementById('fbExport').addEventListener('click', function () {
    if (!items.length) { toast('还没有记录'); return; }
    var lines = ['《大观园 · 水墨卧游》问题反馈　共 ' + items.length + ' 条', ''];
    items.forEach(function (it, i) {
      lines.push((i + 1) + '. ' + fmtTime(it.t) + '　【' + (it.ctx || '') + '】');
      lines.push('   ' + it.text);
      lines.push('');
    });
    var blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = '大观园_反馈记录.txt';
    document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 800);
    toast('已导出');
  });

  document.getElementById('fbClear').addEventListener('click', function () {
    if (!items.length) return;
    if (!confirm('清空全部 ' + items.length + ' 条记录？不可恢复。')) return;
    items = []; save(); render(); toast('已清空');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && panel.classList.contains('on')) panel.classList.remove('on');
  });

  /* ---------- 隐形入口：连点「園」印 5 下 ---------- */
  (function () {
    var taps = 0, timer = null;
    function hit() {
      taps++;
      clearTimeout(timer);
      timer = setTimeout(function () { taps = 0; }, 2600);
      if (taps === 3) toast('再点两下');
      if (taps === 4) toast('再点一下');
      if (taps >= 5) {
        taps = 0; clearTimeout(timer);
        var on = panel.classList.toggle('on');
        if (on) render();
      }
    }
    // 捕获阶段拦，避免被别的元素挡住或吞掉
    document.addEventListener('click', function (e) {
      var t = e.target;
      if (!t) return;
      if (t.closest && (t.closest('.hud .seal') || (t.classList && t.classList.contains('seal') && !t.closest('#kb') && !t.closest('#uv')))) {
        hit();
      }
    }, true);
    // 键盘备用：连按 F 5 下也行
    var fcount = 0, ftimer = null;
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'f' && e.key !== 'F') return;
      var tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;
      fcount++;
      clearTimeout(ftimer);
      ftimer = setTimeout(function () { fcount = 0; }, 2600);
      if (fcount >= 5) { fcount = 0; panel.classList.toggle('on'); render(); }
    });
  })();

  render();

})();
