/* ===== 大观园 · 水墨卧游（10 场景 + 知识区 + 四时晨昏 + 占花名） ===== */
(function () {
  const SCENES = [
    { id: 'qinfang', name: '沁芳亭', sub: '大观园 · 出入之总路', label: '沁芳亭', map: { x: 51.9, y: 76.0 },
      img: { far: '', mid: 'assets/qf_mid.jpg', near: 'assets/qf_near.jpg', wang: 'assets/qf_wang.webp' },
      plaque: '沁芳', couplet: '绕堤柳借三篙翠，隔岸花分一脉香', panciTitle: '', panci: '',
      plot: '第23回宝黛在此附近共读《西厢记》；黛玉重建桃花诗社亦在此一带。沁芳亭是园中人来人往的必经之处。',
      know: '沁芳溪贯穿全园：活水自东北沁芳闸引入，萦洄映带，诸钗往来皆经沁芳桥。亭在桥上，故曰"沁芳"。' },

    { id: 'xiaoxiang', name: '潇湘馆', sub: '大观园 · 有凤来仪', label: '潇湘馆', map: { x: 67.8, y: 71.2 },
      img: { far: '', mid: 'assets/xxg_mid.jpg', near: 'assets/xxg_near.jpg', wang: 'assets/xxg_wang.webp' },
      plaque: '有凤来仪', couplet: '宝鼎茶闲烟尚绿，幽窗棋罢指犹凉',
      panciTitle: '林黛玉 · 判词', panci: '可叹停机德，堪怜咏絮才。\n玉带林中挂，金簪雪里埋。',
      plot: '黛玉进园后自选此居（"爱那几竿竹子，隐着一道曲栏，比别处更觉幽静"）。在此共读《西厢》、雨夜作《秋窗风雨夕》，终至焚稿断痴情。',
      know: '黛玉诗号"潇湘妃子"。院中"千百竿翠竹掩映"，斑竹一枝千滴泪，正合其以泪洗面的一生。', char: 'daiyu' },

    { id: 'yihong', name: '怡红院', sub: '大观园 · 怡红快绿', label: '怡红院', map: { x: 19.9, y: 66.2 },
      img: { far: '', mid: 'assets/yhy_mid.jpg', near: 'assets/yhy_near.jpg', wang: 'assets/yhy_wang.webp' },
      plaque: '怡红快绿', couplet: '',
      panciTitle: '贾宝玉 · 《西江月》', panci: '无故寻愁觅恨，有时似傻如狂。\n纵然生得好皮囊，腹内原来草莽。\n潦倒不通世务，愚顽怕读文章。\n行为偏僻性乖张，那管世人诽谤！',
      plot: '宝玉居所，园中最华丽的院落。宝黛初会、晴雯撕扇、平儿理妆、寿怡红群芳开夜宴、刘姥姥醉卧怡红院。',
      know: '"红"指门前西府海棠，"绿"指东侧芭蕉；元妃将宝玉所题"红香绿玉"改为"怡红快绿"。宝玉别号怡红公子。', char: 'baoyu' },

    { id: 'hengyuan', name: '蘅芜苑', sub: '大观园 · 蘅芷清芬', label: '蘅芜苑', map: { x: 74.7, y: 26.3 },
      img: { far: '', mid: 'assets/hy_mid.jpg', near: 'assets/hy_near.jpg', wang: 'assets/hy_wang.webp' },
      plaque: '蘅芷清芬', couplet: '吟成豆蔻诗犹艳，睡足荼蘼梦亦香',
      panciTitle: '薛宝钗 · 判词（与黛玉合一）', panci: '可叹停机德，堪怜咏絮才。\n玉带林中挂，金簪雪里埋。',
      plot: '宝钗奉元妃之命住此。宝钗扑蝶、"金玉良缘"、出闺成大礼皆系于此。自第37回起，史湘云来园中便住此处，与宝钗同住。',
      know: '院中"不见花木，惟种奇藤异草"，尽显"冷美人"气质；诗号"蘅芜君"。湘云客居于此，她的诗号"枕霞旧友"正是宝钗为她取的。', char: 'baochai' },

    { id: 'qiushuang', name: '秋爽斋', sub: '大观园 · 桐剪秋风', label: '秋爽斋', map: { x: 60.2, y: 58.7 },
      img: { far: '', mid: 'assets/qs_mid.jpg', near: 'assets/qs_near.jpg', wang: 'assets/qs_wang.webp' },
      plaque: '桐剪秋风', couplet: '烟霞闲骨格，泉石野生涯',
      panciTitle: '贾探春 · 判词', panci: '才自精明志自高，生于末世运偏消。\n清明涕送江边望，千里东风一梦遥。',
      plot: '探春在此结海棠诗社、敏探春兴利除宿弊（理家）、抄检大观园怒斥王善保家的，终远嫁他乡。',
      know: '探春浑名"玫瑰花"（又红又香又扎手），诗号"蕉下客"；居室三间不隔断，见其阔朗。', char: 'tanchun' },

    { id: 'daoxiang', name: '稻香村', sub: '大观园 · 杏帘在望', label: '稻香村', map: { x: 83.7, y: 62.3 },
      img: { far: '', mid: 'assets/dx_mid.jpg', near: 'assets/dx_near.jpg', wang: 'assets/dx_wang.webp' },
      plaque: '杏帘在望', couplet: '新涨绿添浣葛处，好云香护采芹人',
      panciTitle: '李纨 · 判词', panci: '桃李春风结子完，到头谁似一盆兰。\n如冰水好空相妒，枉与他人作笑谈。',
      plot: '李纨守寡教子、参与大观园"承包"兴利除弊，诗社中任社长，自号"稻香老农"。',
      know: '黄泥矮墙、杏花茅屋，一派田园，贾政曾生"归农之意"；李纨在这片素朴里安放半生。', char: 'liwan' },

    { id: 'longcui', name: '栊翠庵', sub: '大观园 · 苦海慈航', label: '栊翠庵', map: { x: 23.1, y: 39.9 },
      img: { far: '', mid: 'assets/lc_mid.jpg', near: 'assets/lc_near.jpg', wang: 'assets/lc_wang.webp' },
      plaque: '苦海慈航', couplet: '',
      panciTitle: '妙玉 · 判词', panci: '欲洁何曾洁，云空未必空。\n可怜金玉质，终陷淖泥中。',
      plot: '栊翠庵茶品梅花雪——妙玉以旧年蠲的雨水、梅花上的雪烹茶待客；后妙玉遭劫，不知所终。',
      know: '妙玉带发修行、孤高自许，自称"槛外人"；红梅映雪，是全书最清冷的所在。', char: 'miaoyu' },

    { id: 'ziling', name: '紫菱洲', sub: '大观园 · 缀锦楼', label: '紫菱洲', map: { x: 67.3, y: 38.2 },
      img: { far: '', mid: 'assets/zl_mid.jpg', near: 'assets/zl_near.jpg', wang: 'assets/zl_wang.webp' },
      plaque: '缀锦楼', couplet: '',
      panciTitle: '贾迎春 · 判词', panci: '子系中山狼，得志便猖狂。\n金闺花柳质，一载赴黄粱。',
      plot: '迎春住缀锦楼。误嫁孙绍祖（"子系"合为"孙"，即"中山狼"），受虐而亡；宝玉常来此徘徊。',
      know: '迎春浑名"二木头"，诗号"菱洲"；水边蓼花苇叶、翠荇香菱，正是"紫菱洲"之名所本。', char: 'yingchun' },

    { id: 'nuanxiang', name: '暖香坞', sub: '大观园 · 蓼风轩', label: '暖香坞', map: { x: 62.3, y: 47.7 },
      img: { far: '', mid: 'assets/nx_mid.jpg', near: 'assets/nx_near.jpg', wang: 'assets/nx_wang.webp' },
      plaque: '暖香坞', couplet: '',
      panciTitle: '贾惜春 · 判词', panci: '勘破三春景不长，缁衣顿改昔年妆。\n可怜绣户侯门女，独卧青灯古佛旁。',
      plot: '惜春住暖香坞（蓼风轩）。作《大观园图》、抄检大观园后撵走毫无过错的入画，最终出家为尼。',
      know: '惜春"心冷嘴冷"；园中最暖之处偏名"暖香坞"，反成最孤寂之人的居所。', char: 'xichun' },

    { id: 'ouxiang', name: '藕香榭', sub: '大观园 · 藕榭临波', label: '藕香榭', map: { x: 58.5, y: 45.7 },
      img: { far: '', mid: 'assets/ox_mid.jpg', near: 'assets/ox_near.jpg', wang: 'assets/ox_wang.webp' },
      plaque: '藕香榭', couplet: '',
      panciTitle: '史湘云 · 判词', panci: '富贵又何为，襁褓之间父母违。\n展眼吊斜晖，湘江水逝楚云飞。',
      plot: '第38回湘云在此做东摆螃蟹宴，众人咏菊，黛玉夺魁；第40回贾母在水亭听曲，"借着水音更好听"；第76回中秋，湘云与黛玉在这一带联诗，得"寒塘渡鹤影，冷月葬花魂"。',
      know: '藕香榭盖在池中，四面有窗，左右曲廊跨水接岸，后有一道曲折竹桥。惜春的诗号"藕榭"即由此而来——她的暖香坞就在附近。', char: 'xiangyun' },

    { id: 'daguang', name: '省亲别墅', sub: '大观园 · 正殿', label: '省亲别墅', map: { x: 47.5, y: 33.0 },
      img: { far: '', mid: 'assets/dg_mid.jpg', near: 'assets/dg_near.jpg', wang: 'assets/dg_wang.webp' },
      plaque: '顾恩思义', couplet: '天地启宏慈，赤子苍头同感戴；古今垂旷典，九州万国被恩荣',
      panciTitle: '', panci: '',
      plot: '第18回元妃省亲。正月十五上元之夜，石牌坊上原题"天仙宝境"，元妃改为"省亲别墅"；入行宫，至正殿受礼、大开筵宴，并亲笔为园中诸处赐名。正楼曰大观楼，东为缀锦阁，西为含芳阁。',
      know: '园中这些名字全是元春那一夜改的："有凤来仪"赐名潇湘馆，"红香绿玉"改作怡红快绿，"蘅芷清芬"赐名蘅芜苑，"杏帘在望"赐名浣葛山庄。临去一句"倘明岁天恩仍许归省，万不可如此奢华靡费了"——脂批说，一个"倘"字，便是"不再之谶"。' },

  ];

  const CHARS = {
    baoyu: { name: '贾宝玉', alias: '怡红公子', line: '这个妹妹我曾见过的。', bio: '荣国府衔玉而诞的公子，前世为神瑛侍者。厌恶仕途经济，视女儿为水做的骨肉，终在宝钗大婚后出家。' },
    daiyu: { name: '林黛玉', alias: '潇湘妃子', line: '质本洁来还洁去，强于污淖陷渠沟。', bio: '林如海与贾敏之女，贾母外孙女。绛珠仙草转世，以泪还债；才情绝世，与宝玉相知相爱，终泪尽而逝。' },
    baochai: { name: '薛宝钗', alias: '蘅芜君', line: '好风凭借力，送我上青云。', bio: '皇商薛家之女，端庄丰美、世事洞明。金锁配通灵玉，成"金玉良缘"，婚后宝玉出家，独守空闺。' },
    tanchun: { name: '贾探春', alias: '蕉下客', line: '我但凡是个男人，可以出得去，我早走了。', bio: '贾政与赵姨娘之女，精明果决，浑名"玫瑰花"。理家兴利除弊，抄检大观园时怒斥恶奴，终远嫁。' },
    liwan: { name: '李纨', alias: '稻香老农', line: '我只自吃斋念佛，一概不管。', bio: '贾珠遗孀，守寡抚孤。清心寡欲、与世无争，诗社中任社长；晚年因子得贵，却已迟暮。' },
    miaoyu: { name: '妙玉', alias: '槛外人', line: '欲洁何曾洁，云空未必空。', bio: '苏州仕宦之女，自幼多病，带发修行。住栊翠庵，孤高自许、目无下尘，终陷于泥淖。' },
    yingchun: { name: '贾迎春', alias: '菱洲', line: '宁可没有了，又何必生气。', bio: '贾赦之女，老实懦弱，浑名"二木头"。误嫁孙绍祖，受虐而亡，是十二钗中最无声的悲剧。' },
    xichun: { name: '贾惜春', alias: '藕榭', line: '我清清白白的一个人，为什么教你们带累坏了我。', bio: '贾敬之女，贾珍之妹。自幼无父母怜爱，心冷嘴冷，看破三春，最终出家为尼。' },
    xiangyun: { name: '史湘云', alias: '枕霞旧友', line: '是真名士自风流。', bio: '贾母侄孙女，自幼父母双亡。先住潇湘馆，后客居蘅芜苑、与宝钗同住。生性豪爽、心直口快，诗才敏捷；婚后不久守寡，晚景凄凉。' }
  };

  const mapView = document.getElementById('mapView');
  const mapSpots = document.getElementById('mapSpots');
  const stagesEl = document.getElementById('stages');
  const titleEl = document.getElementById('title');
  const prompt = document.getElementById('prompt');
  const pname = document.getElementById('pname');
  const modal = document.getElementById('modal');
  const mbody = document.getElementById('mbody');

  const mapWrap = document.getElementById('mapWrap');
  const savedCoords = {};

  SCENES.forEach(function (s, i) {
    const d = document.createElement('div');
    d.className = 'mapspot' + (s.id === 'ouxiang' ? ' above' : '');
    const c = savedCoords[s.id] || s.map;
    d.style.left = c.x + '%';
    d.style.top = c.y + '%';
    d.innerHTML = '<i></i><span>' + s.label + '</span>';

    d.addEventListener('click', function () { enterScene(i); });
    mapSpots.appendChild(d);
  });

  const objs = SCENES.map(function (s, i) {
    const sec = document.createElement('section');
    sec.className = 'scene ' + (i === 0 ? 'on' : 'right');
    const layerMap = {};
    ['far', 'mid', 'near'].forEach(function (k) {
      const d = document.createElement('div');
      d.className = 'layer' + (k === 'far' ? ' far' : '');
      if (k !== 'far') d.style.backgroundImage = 'url(' + s.img[k] + ')';
      if (k === 'far') d.style.opacity = '.85';
      sec.appendChild(d);
      layerMap[k] = d;
    });
    const mist = document.createElement('div');
    mist.className = 'mist';
    sec.appendChild(mist);

    const spot = document.createElement('div');
    spot.className = 'spot';
    spot.innerHTML = '<span class="ping"></span><i class="dot"></i><span class="tag">' + s.label + '</span>';
    spot.addEventListener('click', function (e) { e.stopPropagation(); openModal(); });
    sec.appendChild(spot);
    stagesEl.appendChild(sec);
    return { el: sec, layers: layerMap, spot: spot };
  });

  /* ---------- 盛 · 亡 ---------- */
  const WANG_MAP = '__WANGMAP__';
  let era = 'mid', MAP_SRC = '';
  /* 以全书终局为准：这些人到第 120 回已经不在了 */
  const DIED = { '林黛玉': 1, '贾元春': 1, '贾迎春': 1, '王熙凤': 1, '秦可卿': 1 };

  function eraToast(txt) {
    let t = document.getElementById('eraToast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'eraToast';
      document.body.appendChild(t);
    }
    t.textContent = txt;
    t.classList.add('on');
    clearTimeout(t._h);
    t._h = setTimeout(function () { t.classList.remove('on'); }, 2400);
  }

  const ERA_CN = { pre: '建园前', mid: '园中岁月', last: '人去楼空' };
  const ERA_TXT = {
    pre: '园子还没有动工。',
    mid: '园子里住着人。',
    last: '园门锁上了，草长满了整座园子。'
  };
  const PRE_PLACES = {
    nr: { name: '宁荣街', hui: '第 3 回',
      t: '又行了半日，忽见街北蹲着两个大石狮子，三间兽头大门，门前列坐着十来个华冠丽服之人……正门之上有一匾，匾上大书“敕造宁国府”五个大字。',
      n: '黛玉初到京城，从轿中纱窗向外瞧，先看见的就是这条街。此时大观园还不存在——它要等到第十六回才丈量动工，那一年她已经在府里住了好几年。' },
    hf: { name: '会芳园', hui: '第 11 回',
      t: '黄花满地，白柳横坡。小桥通若耶之溪，曲径接天台之路。石中清流激湍，篱落飘香；树头红叶翩翻，疏林如画。',
      n: '凤姐从宁府里头绕进园子的便门，看见的就是这一片。会芳园是宁国府的旧花园；后来大观园“从东边一带，借着东府里的花园起，转至北边”，正是从它身上长出来的。' },
    tx: { name: '天香楼', hui: '第 13 回',
      t: '另设一坛于天香楼上，是九十九位全真道士，打四十九日解冤洗业醮。',
      n: '这一节原本写的，是“秦可卿淫丧天香楼”。脂批在“另设一坛于天香楼上”旁边只批了两个字：“删！”——却是未删之笔。回末又批：“此回只十页，因删去天香楼一节，少去四五页也。”所以这座楼上发生过什么，书里永远没有写。' }
  };

  function setEra(e) {
    if (e !== 'pre' && e !== 'mid' && e !== 'last') e = 'mid';
    era = e;
    const w = (e === 'last'), pre = (e === 'pre');
    document.body.classList.toggle('era-wang', w);
    document.body.classList.toggle('era-pre', pre);
    const mv = document.getElementById('mapView');
    if (mv) mv.classList.toggle('hidden', pre);
    const pp = document.getElementById('preHome');
    if (pp) pp.classList.toggle('hidden', !pre);
    const stg = document.getElementById('stages');
    if (stg) stg.style.display = pre ? 'none' : '';

    /* 只有「人去楼空」换图，「园中岁月」用原图 */
    SCENES.forEach(function (s, i) {
      const o = objs[i];
      if (!o) return;
      o.layers.mid.style.backgroundImage = 'url(' + (w ? (s.img.wang || s.img.mid) : s.img.mid) + ')';
      o.layers.near.style.backgroundImage = w ? 'none' : 'url(' + s.img.near + ')';
      o.layers.far.style.opacity = w ? '.48' : '.85';
    });

    const mi = document.getElementById('mapImg');
    if (mi) {
      if (!MAP_SRC) MAP_SRC = mi.getAttribute('src');
      mi.src = w ? WANG_MAP : MAP_SRC;
    }

    ['kb', 'rel'].forEach(function (id) {
      const el = document.getElementById(id);
      if (el) el.classList.toggle('era-wang', w);
    });

    Array.prototype.forEach.call(document.querySelectorAll('.ea-pt'), function (bt) {
      bt.classList.toggle('on', bt.getAttribute('data-e') === e);
    });

    /* 建园前、人去楼空：园中的三样东西不可用 */
    const LOCK = ['szBtn', 'tourBtn', 'riddleBtn'];
    const lockOn = (e === 'pre' || e === 'last');
    LOCK.forEach(function (id) {
      const b = document.getElementById(id);
      if (b) b.classList.toggle('locked', lockOn);
    });

    if (w && roomOpen) leaveRoom();
    updateRoomPrompt();
    try { if (kbTab === 'chars') renderList(); } catch (err) {}
    try { if (szEl && !szEl.classList.contains('hidden')) szRender(); } catch (err) {}
    eraToast(ERA_TXT[e]);
  }

  (function () {
    Array.prototype.forEach.call(document.querySelectorAll('.ea-pt'), function (bt) {
      bt.addEventListener('click', function () { setEra(bt.getAttribute('data-e')); });
    });
  })();

  /* 锁住的入口：点上不打开，只给一句 */
  document.addEventListener('click', function (e) {
    const b = e.target.closest && e.target.closest('.toolb.locked');
    if (!b) return;
    e.stopPropagation();
    e.preventDefault();
    eraToast(era === 'pre' ? '这时候，园子还没有。' : '园子里已经没有人了。');
  }, true);

  /* 建园前：三处旧宅 */
  (function () {
    const pv = document.getElementById('preView');
    if (!pv) return;
    function openPre(k) {
      const d = PRE_PLACES[k];
      if (!d) return;
      document.getElementById('pvImg').src = 'assets/' + k + '_pre.webp';
      document.getElementById('pvH').textContent = d.name + '　·　' + d.hui;
      document.getElementById('pvT').textContent = d.t;
      document.getElementById('pvN').textContent = d.n;
      pv.classList.remove('hidden');
    }
    document.getElementById('pvClose').addEventListener('click', function () { pv.classList.add('hidden'); });
    pv.addEventListener('click', function (e) { if (e.target === pv) pv.classList.add('hidden'); });
    Array.prototype.forEach.call(document.querySelectorAll('.pH-tile'), function (b) {
      b.addEventListener('click', function () { openPre(b.getAttribute('data-k')); });
    });
  })();

  const P = { far: 0.32, mid: 0.60, near: 1.0 };
  let cam = { x: 0, y: 0, z: 0 };
  let tgt = { x: 0, y: 0, z: 0 };
  let active = 0, lastInput = 0;

  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }

  function setScene(i) {
    objs.forEach(function (o, k) {
      o.el.style.transition = 'none';
      o.el.className = 'scene ' + (k === i ? 'on' : 'right');
    });
    void objs[i].el.offsetWidth;
    objs.forEach(function (o) { o.el.style.transition = ''; });
    active = i;
  }
  function enterScene(i) {
    mapView.classList.add('hidden');
    document.body.classList.add('in-scene');
    if (i !== active) setScene(i);
    cam = { x: 0, y: 0, z: 0 };
    tgt = { x: 0, y: 0, z: 0 };
    titleEl.textContent = '大观园 · ' + SCENES[i].name;
    prompt.classList.add('hidden');
    const yb = document.getElementById('ywBtn');
    if (yb) yb.classList.remove('hidden');
    momentCheck(i);
  }
  document.getElementById('back').addEventListener('click', function () {
    mapView.classList.remove('hidden');
    document.body.classList.remove('in-scene');
    prompt.classList.add('hidden');
    modal.classList.add('hidden');
    const mb = document.getElementById('mBadge');
    if (mb) mb.classList.add('hidden');
    const yb = document.getElementById('ywBtn');
    if (yb) yb.classList.add('hidden');
  });

  const ptrs = new Map();
  let lastX = 0, lastY = 0, pinchD = 0, pinchOn = false;

  stagesEl.addEventListener('pointerdown', function (e) {
    ptrs.set(e.pointerId, e);
    if (ptrs.size === 2) {
      const a = Array.from(ptrs.values());
      pinchD = Math.hypot(a[0].clientX - a[1].clientX, a[0].clientY - a[1].clientY);
      pinchOn = true;
    }
    lastX = e.clientX; lastY = e.clientY; lastInput = performance.now();
  });
  window.addEventListener('pointermove', function (e) {
    if (!ptrs.has(e.pointerId)) return;
    ptrs.set(e.pointerId, e);
    lastInput = performance.now();
    if (ptrs.size >= 2 && pinchOn) {
      const a = Array.from(ptrs.values());
      const d = Math.hypot(a[0].clientX - a[1].clientX, a[0].clientY - a[1].clientY);
      tgt.z = clamp(tgt.z + (d - pinchD) * 0.004, 0, 1);
      pinchD = d; return;
    }
    tgt.x = clamp(tgt.x - (e.clientX - lastX) * 0.0026, -1, 1);
    tgt.y = clamp(tgt.y - (e.clientY - lastY) * 0.0020, -0.7, 0.7);
    lastX = e.clientX; lastY = e.clientY;
  });
  window.addEventListener('pointerup', function (e) { ptrs.delete(e.pointerId); if (ptrs.size < 2) pinchOn = false; });
  window.addEventListener('pointercancel', function (e) { ptrs.delete(e.pointerId); pinchOn = false; });
  stagesEl.addEventListener('wheel', function (e) {
    e.preventDefault();
    tgt.z = clamp(tgt.z - e.deltaY * 0.0012, 0, 1);
    lastInput = performance.now();
  }, { passive: false });

  const keys = {};
  window.addEventListener('keydown', function (e) {
    keys[e.key.toLowerCase()] = true;
    if (e.key === 'Enter' && !prompt.classList.contains('hidden')) openModal();
    if (e.key === 'Escape') {
      modal.classList.add('hidden');
      document.getElementById('hq').classList.add('hidden');
      const rc = document.getElementById('rcard');
      if (rc) { rc.classList.add('hidden'); roomSel = null; }
    }
  });
  window.addEventListener('keyup', function (e) { keys[e.key.toLowerCase()] = false; });

  function loop(t) {
    if (mapView.classList.contains('hidden')) {
      if (keys['w'] || keys['arrowup']) { tgt.z = clamp(tgt.z + 0.012, 0, 1); lastInput = t; }
      if (keys['s'] || keys['arrowdown']) { tgt.z = clamp(tgt.z - 0.012, 0, 1); lastInput = t; }
      if (keys['a'] || keys['arrowleft']) { tgt.x = clamp(tgt.x - 0.012, -1, 1); lastInput = t; }
      if (keys['d'] || keys['arrowright']) { tgt.x = clamp(tgt.x + 0.012, -1, 1); lastInput = t; }

      if (t - lastInput > 2600 && ptrs.size === 0) {
        tgt.x = 0.05 * Math.sin(t * 0.00039);
        tgt.y = 0.03 * Math.sin(t * 0.00025 + 1.2);
      }

      cam.x += (tgt.x - cam.x) * 0.06;
      cam.y += (tgt.y - cam.y) * 0.06;
      cam.z += (tgt.z - cam.z) * 0.06;

      const o = objs[active];
      let mtx = 0, mty = 0;
      ['far', 'mid', 'near'].forEach(function (key) {
        const tx = -cam.x * P[key] * 72;
        const ty = -cam.y * P[key] * 48 + cam.z * P[key] * 110;
        o.layers[key].style.transform =
          'translate3d(' + Math.round(tx) + 'px,' + Math.round(ty) + 'px,0)';
        if (key === 'mid') { mtx = tx; mty = ty; }
      });
      o.spot.style.transform =
        'translate(-50%,-50%) translate3d(' + Math.round(mtx) + 'px,' + Math.round(mty) + 'px,0)';

      const isNear = cam.z > 0.42;
      if (isNear && !document.body.classList.contains('in-room') && prompt.classList.contains('hidden')) {
        pname.textContent = '进入 · ' + SCENES[active].name;
        updateRoomPrompt();
        prompt.classList.remove('hidden');
        const _ex = document.getElementById('exits');
        if (_ex) _ex.style.opacity = '0';
      }
      if (!isNear && !prompt.classList.contains('hidden')) {
        prompt.classList.add('hidden');
        const _ex2 = document.getElementById('exits');
        if (_ex2) _ex2.style.opacity = '';
      }
    }
    drawFx();
    requestAnimationFrame(loop);
  }

  /* ---------- 四时 · 晨昏 ---------- */
  const SEASON_CN = { spring: '春', summer: '夏', autumn: '秋', winter: '冬' };
  const TIME_CN = { morning: '晨', noon: '午', dusk: '暮', night: '夜' };
  const SEASON_ORDER = ['spring', 'summer', 'autumn', 'winter'];
  const TIME_ORDER = ['morning', 'noon', 'dusk', 'night'];
  let season = 'spring', ttime = 'morning';
  const TINT_S = {
    spring: 'rgba(255,190,205,.10)',
    summer: 'rgba(255,232,150,.10)',
    autumn: 'rgba(226,146,66,.16)',
    winter: 'rgba(198,222,255,.20)'
  };
  const TINT_T = {
    morning: 'rgba(255,240,210,.05)',
    noon: 'rgba(255,252,228,.02)',
    dusk: 'rgba(255,138,58,.22)',
    night: 'rgba(18,32,78,.45)'
  };

  function palette() {
    if (season === 'spring') return { c: ['#f3c6cf', '#e9aab8', '#ffffff', '#f7dcc4'], r: [3, 7], vy: [0.5, 1.4], shape: 'petal', a: [0.3, 0.7] };
    if (season === 'summer') return { c: ['#e8f08a', '#cbe36a', '#fff6b0'], r: [1.4, 2.8], vy: [-0.35, 0.1], shape: 'glow', a: [0.35, 0.9] };
    if (season === 'autumn') return { c: ['#d98b3a', '#c46a2a', '#e0b25a', '#a8532a'], r: [4, 8], vy: [1.0, 2.2], shape: 'leaf', a: [0.4, 0.8] };
    return { c: ['#ffffff', '#eef4ff', '#dfe9ff'], r: [1.5, 3.4], vy: [0.45, 1.0], shape: 'snow', a: [0.5, 0.9] };
  }

  const cv = document.getElementById('fx');
  const cx = cv.getContext('2d');
  function rs() {
    cv.width = innerWidth * devicePixelRatio;
    cv.height = innerHeight * devicePixelRatio;
    cx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  }
  rs();
  window.addEventListener('resize', rs);

  const petals = [];
  for (let i = 0; i < 48; i++) petals.push(spawn(true));

  function spawn(init) {
    const p = palette();
    return {
      x: Math.random() * innerWidth,
      y: init ? Math.random() * innerHeight : (p.vy[0] < 0 ? innerHeight + 20 : -20),
      vx: (Math.random() - 0.5) * 0.7,
      vy: p.vy[0] + Math.random() * (p.vy[1] - p.vy[0]),
      r: p.r[0] + Math.random() * (p.r[1] - p.r[0]),
      a: p.a[0] + Math.random() * (p.a[1] - p.a[0]),
      rot: Math.random() * 6.28,
      vr: (Math.random() - 0.5) * 0.08,
      c: p.c[Math.floor(Math.random() * p.c.length)],
      sway: Math.random() * 6.28,
      shape: p.shape
    };
  }

  function rebuildPetals() {
    for (let i = 0; i < petals.length; i++) petals[i] = spawn(true);
  }

  function applyWeather() {
    document.getElementById('tintSeason').style.background = TINT_S[season];
    document.getElementById('tintTime').style.background = TINT_T[ttime];
    document.getElementById('seasonBtn').textContent = SEASON_CN[season];
    document.getElementById('timeBtn').textContent = TIME_CN[ttime];
    rebuildPetals();
  }

  document.getElementById('seasonBtn').addEventListener('click', function () {
    season = SEASON_ORDER[(SEASON_ORDER.indexOf(season) + 1) % 4];
    applyWeather();
  });
  document.getElementById('timeBtn').addEventListener('click', function () {
    ttime = TIME_ORDER[(TIME_ORDER.indexOf(ttime) + 1) % 4];
    applyWeather();
  });

  function drawFx() {
    cx.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < petals.length; i++) {
      const p = petals[i];
      p.sway += 0.02;
      p.x += p.vx + Math.sin(p.sway) * (p.shape === 'snow' ? 0.9 : 0.5);
      p.y += p.vy;
      p.rot += p.vr;
      if (p.y > innerHeight + 30 || p.y < -50 || p.x < -40 || p.x > innerWidth + 40) {
        const n = spawn(false);
        p.x = n.x; p.y = n.y; p.vx = n.vx; p.vy = n.vy; p.r = n.r;
        p.a = n.a; p.rot = n.rot; p.vr = n.vr; p.c = n.c; p.sway = n.sway; p.shape = n.shape;
      }
      if (p.shape === 'glow') {
        const tw = 0.55 + 0.45 * Math.sin(p.sway * 2.6);
        cx.save(); cx.globalAlpha = p.a * tw; cx.fillStyle = p.c;
        cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 6.29); cx.fill(); cx.restore();
      } else if (p.shape === 'snow') {
        cx.save(); cx.globalAlpha = p.a; cx.fillStyle = p.c;
        cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 6.29); cx.fill(); cx.restore();
      } else {
        cx.save(); cx.globalAlpha = p.a; cx.translate(p.x, p.y); cx.rotate(p.rot);
        cx.fillStyle = p.c; cx.beginPath();
        cx.ellipse(0, 0, p.r, p.r * (p.shape === 'leaf' ? 0.45 : 0.6), 0, 0, 6.29);
        cx.fill(); cx.restore();
      }
    }
  }

  /* ---------- 占花名 ---------- */
  const HUAQIAN = [
    { flower: '牡丹', sign: '艳冠群芳', line: '任是无情也动人', who: '薛宝钗', note: '牡丹为花中之王，正合宝钗的端庄富贵；"任是无情也动人"，也是她"冷美人"的注脚。' },
    { flower: '杏花', sign: '瑶池仙品', line: '日边红杏倚云栽', who: '贾探春', note: '杏花得日而艳，暗合探春之才；"倚云栽"又隐隐指向她远嫁的命运。' },
    { flower: '老梅', sign: '霜晓寒姿', line: '竹篱茅舍自甘心', who: '李纨', note: '老梅耐寒，正应李纨守寡自守、清心寡欲的一生。' },
    { flower: '海棠', sign: '香梦沉酣', line: '只恐夜深花睡去', who: '史湘云', note: '海棠春睡，正应湘云醉眠芍药裀的憨态，也是她爽朗天真的写照。' },
    { flower: '荼蘼', sign: '韶华胜极', line: '开到荼蘼花事了', who: '麝月', note: '荼蘼是春末最后的花，"花事了"三字，暗喻群芳将散、盛极而衰。' },
    { flower: '并蒂花', sign: '联春绕瑞', line: '连理枝头花正开', who: '香菱', note: '并蒂本主团圆，却反衬香菱自幼被拐、一生飘零的苦命。' },
    { flower: '芙蓉', sign: '风露清愁', line: '莫怨东风当自嗟', who: '林黛玉', note: '芙蓉出淤泥而不染，正合黛玉"质本洁来还洁去"；"风露清愁"四字，是她一生的写照。' },
    { flower: '桃花', sign: '武陵别景', line: '桃红又是一年春', who: '袭人', note: '武陵桃花源是"别境"，暗指袭人最终别嫁蒋玉菡，另有一段人生。' }
  ];
  let hqTimer = null;

  document.getElementById('signBtn').addEventListener('click', function () {
    document.getElementById('hq').classList.remove('hidden');
    document.getElementById('hqresult').innerHTML = '<div class="hqnote">心中默想一事，再摇签筒。</div>';
  });
  document.getElementById('hqclose').addEventListener('click', function () {
    document.getElementById('hq').classList.add('hidden');
  });
  document.getElementById('hq').addEventListener('click', function (e) {
    if (e.target === document.getElementById('hq')) document.getElementById('hq').classList.add('hidden');
  });
  document.getElementById('hqdraw').addEventListener('click', function () {
    const tube = document.getElementById('tube');
    tube.classList.remove('shake');
    void tube.offsetWidth;
    tube.classList.add('shake');
    document.getElementById('hqresult').innerHTML = '<div class="hqnote">签筒摇动中……</div>';
    clearTimeout(hqTimer);
    hqTimer = setTimeout(function () {
      const s = HUAQIAN[Math.floor(Math.random() * HUAQIAN.length)];
      document.getElementById('hqresult').innerHTML =
        '<div class="hqflower">' + s.flower + '</div>' +
        '<div class="hqsign">「' + s.sign + '」</div>' +
        '<div class="hqline">' + s.line + '</div>' +
        '<div class="hqwho">— ' + s.who + '</div>' +
        '<div class="hqnote">' + s.note + '</div>';
    }, 620);
  });

  /* ---------- 弹窗 ---------- */
  function openModal() {
    const s = SCENES[active];
    let h = '<div class="m-title">' + s.name + '</div><div class="m-sub">' + s.sub + '</div>';
    if (era === 'last') h += '<div class="m-wang">园门已锁 · 此处无人</div>';
    h += '<div class="m-rule"></div>';

    if (s.char) {
      const c = CHARS[s.char];
      let cimg = '';
      if (window.KB && KB.chars) {
        for (let i = 0; i < KB.chars.length; i++) {
          if (KB.chars[i].t === c.name) { cimg = KB.chars[i].img; break; }
        }
      }
      h += '<div class="charhead">' +
             '<img class="cimg' + ((era === 'last' && DIED[c.name]) ? ' gone' : '') + '" src="' + cimg + '" alt="' + c.name + '">' +
             '<div><div class="cname">' + c.name + '</div>' +
             '<div class="calias">' + c.alias + '</div>' +
             '<div class="cquote">「' + c.line + '」</div></div>' +
           '</div>' +
           '<div class="m-row"><span class="k">小传</span><span class="v" style="font-size:14px">' + c.bio + '</span></div>' +
           '<div class="m-rule"></div>';
    }
    if (s.plaque) h += '<div class="m-row"><span class="k">匾额</span><span class="v">' + s.plaque + '</span></div>';
    if (s.couplet) h += '<div class="m-row"><span class="k">楹联</span><span class="v couplet">' + s.couplet + '</span></div>';
    if (s.panci) {
      h += '<div class="m-row"><span class="k">判词</span><span class="v" style="font-size:13.5px;color:#7a6a52">' + s.panciTitle + '</span></div>';
      h += '<div class="panci">' + s.panci.replace(/\n/g, '<br>') + '</div>';
    }
    h += '<div class="m-rule"></div>';
    h += '<div class="m-row"><span class="k">情节</span><span class="v">' + s.plot + '</span></div>';
    h += '<div class="m-row"><span class="k">小识</span><span class="v">' + s.know + '</span></div>';

    mbody.innerHTML = h;
    modal.classList.remove('hidden');
  }

  /* ---------- 知识区 ---------- */
  const KB = window.KB || { panci: [], qu: [], know: [], plot: [], chars: [] };
  let kbTab = 'chars';
  const kbEl = document.getElementById('kb');
  const kblist = document.getElementById('kblist');
  const kbtabs = document.getElementById('kbtabs');
  const kbsearch = document.getElementById('kbsearch');
  const TABS = [['chars', '人物图鉴'], ['panci', '十二钗判词'], ['qu', '红楼梦曲'], ['know', '基础知识'], ['plot', '120 回情节']];

  function renderTabs() {
    kbtabs.innerHTML = TABS.map(function (t) {
      return '<button data-t="' + t[0] + '" class="' + (t[0] === kbTab ? 'on' : '') + '">' + t[1] + '</button>';
    }).join('');
    Array.prototype.forEach.call(kbtabs.querySelectorAll('button'), function (b) {
      b.addEventListener('click', function () {
        kbTab = b.getAttribute('data-t');
        renderTabs(); renderList();
      });
    });
  }

  function renderList() {
    const q = (kbsearch.value || '').trim().toLowerCase();
    let arr = KB[kbTab] || [];
    if (q) {
      arr = arr.filter(function (it) {
        const hay = ((it.t || '') + (it.x || '') + String(it.n || '') + (it.c || '') + (it.alias || '')).toLowerCase();
        return hay.indexOf(q) >= 0;
      });
    }
    if (!arr.length) {
      kblist.innerHTML = '<div class="kbitem"><div class="n">没有找到相关内容。</div></div>';
      return;
    }
    if (kbTab === 'chars') {
      const banner = (uvUnlocked.size >= UNIVERSE.length && !q)
        ? '<div class="kbbanner">✦ 十二页皆已翻过 · 十二钗皆已入册</div>' : '';
      kblist.innerHTML = banner + arr.map(function (it) {
        const ui = uvIndexOfChar(it.t);
        if (ui >= 0 && !uvUnlocked.has(ui)) {
          return '<div class="chcard" data-uv="' + ui + '" style="cursor:pointer">' +
            '<img src="' + it.img + '" alt="" style="filter:brightness(0) opacity(.22)">' +
            '<div class="chbody">' +
              '<div class="ct">？ ？ ？<span class="ca">尚未入册</span></div>' +
              '<div class="cx">此人的画、判词与结局，都在《太虚幻境》判词册的' +
                UNIVERSE[ui].no.replace(/ /g, '') + '。</div>' +
              '<div class="cn">翻过那一页，方能见其面目。（点此直接翻过去）</div>' +
            '</div></div>';
        }
        const mark = ui >= 0 ? '<div class="cn" style="color:#8f6a2a">✦ 已入判词册</div>' : '';
        const gone = (era === 'last' && DIED[it.t]) ? 1 : 0;
        const face = it.img
          ? '<img src="' + it.img + '" alt="">'
          : '<div class="chph">' + it.t.charAt(0) + '</div>';
        return '<div class="chcard' + (gone ? ' gone' : '') + '">' +
          face +
          '<div class="chbody">' +
            '<div class="ct">' + it.t + '<span class="ca">' + (it.alias || '') + '</span></div>' +
            '<div class="cx">' + String(it.x || '').replace(/\n/g, '<br>') + '</div>' +
            '<div class="cn">' + (it.n || '') + '</div>' + mark +
            (gone ? '<div class="gone-tag">殁</div>' : '') +
          '</div></div>';
      }).join('');
      Array.prototype.forEach.call(kblist.querySelectorAll('[data-uv]'), function (el) {
        el.addEventListener('click', function (ev) {
          ev.stopPropagation();
          document.getElementById('kb').classList.add('hidden');
          requestUV(parseInt(el.getAttribute('data-uv'), 10));
        });
      });
      return;
    }
    kblist.innerHTML = arr.map(function (it) {
      let h = '';
      if (kbTab === 'plot') h = '<div class="h"><span class="tag">第' + it.n + '回</span>' + it.t + '</div>';
      else if (kbTab === 'know') h = '<div class="h"><span class="tag">' + (it.c || '') + '</span>' + it.t + '</div>';
      else h = '<div class="h">' + it.t + '</div>';
      let s = '<div class="kbitem">' + h + '<div class="x">' + String(it.x || '').replace(/\n/g, '<br>') + '</div>';
      if (it.n && kbTab !== 'plot') s += '<div class="n">' + it.n + '</div>';
      return s + '</div>';
    }).join('');
  }

  document.getElementById('kbBtn').addEventListener('click', function () {
    kbEl.classList.remove('hidden');
    renderTabs(); renderList();
  });
  document.getElementById('kbclose').addEventListener('click', function () { kbEl.classList.add('hidden'); });
  kbEl.addEventListener('click', function (e) { if (e.target === kbEl) kbEl.classList.add('hidden'); });
  kbsearch.addEventListener('input', renderList);
  renderTabs();

  document.getElementById('pbtn').addEventListener('click', openModal);
  document.getElementById('mclose').addEventListener('click', function () { modal.classList.add('hidden'); });
  modal.addEventListener('click', function (e) { if (e.target === modal) modal.classList.add('hidden'); });

  /* ---------- 太虚幻境 · 判词册（对开册页 · 翻页解锁） ---------- */
  const UNIVERSE = [
    { no: '目 录', isIndex: true, who: '金陵十二钗', chars: [], img: '', glyph: '册',
      hua: '薄命司里几只大橱，橱上贴着封条。',
      ci: '', shi: '' },
    { no: '第 一 页', who: '林黛玉 · 薛宝钗', chars: ['林黛玉', '薛宝钗'], img: 'assets/uv_01.webp',
      hua: '两株枯木，木上悬着一围玉带；又有一堆雪，雪下一股金簪。',
      ci: '可叹停机德，堪怜咏絮才。\n玉带林中挂，金簪雪里埋。',
      shi: '钗黛合用一首，一咏德、一咏才。"玉带林"倒读即"林黛玉"，"金簪雪"谐"薛宝钗"。' },
    { no: '第 二 页', who: '贾元春', chars: ['贾元春'], img: 'assets/uv_02.webp',
      hua: '一张弓，弓上挂着一个香橼。',
      ci: '二十年来辨是非，榴花开处照宫闱。\n三春争及初春景，虎兕相逢大梦归。',
      shi: '"弓"谐"宫"，"橼"谐"元"；写元春入宫封妃之盛，与暴亡之悲。' },
    { no: '第 三 页', who: '贾探春', chars: ['贾探春'], img: 'assets/uv_03.webp',
      hua: '两人放风筝，一片大海，一只大船，船中一女子掩面泣涕。',
      ci: '才自精明志自高，生于末世运偏消。\n清明涕送江边望，千里东风一梦遥。',
      shi: '风筝断线、江边远送，皆指探春远嫁海疆。' },
    { no: '第 四 页', who: '史湘云', chars: ['史湘云'], img: 'assets/uv_04.webp',
      hua: '几缕飞云，一湾逝水。',
      ci: '富贵又何为，襁褓之间父母违。\n展眼吊斜晖，湘江水逝楚云飞。',
      shi: '"湘江""楚云"暗嵌湘云之名，写其自幼孤苦与聚散无常。' },
    { no: '第 五 页', who: '妙玉', chars: ['妙玉'], img: 'assets/uv_05.webp',
      hua: '一块美玉，落在泥垢之中。',
      ci: '欲洁何曾洁，云空未必空。\n可怜金玉质，终陷淖泥中。',
      shi: '美玉陷泥，正是妙玉"太高人愈妒，过洁世同嫌"的结局。' },
    { no: '第 六 页', who: '贾迎春', chars: ['贾迎春'], img: 'assets/uv_06.webp',
      hua: '一个恶狼，追扑一美女，有欲啖之意。',
      ci: '子系中山狼，得志便猖狂。\n金闺花柳质，一载赴黄粱。',
      shi: '"子系"合为"孙"，指孙绍祖；迎春嫁后一载而亡。' },
    { no: '第 七 页', who: '贾惜春', chars: ['贾惜春'], img: 'assets/uv_07.webp',
      hua: '一所古庙，里面有一美人在内看经独坐。',
      ci: '勘破三春景不长，缁衣顿改昔年妆。\n可怜绣户侯门女，独卧青灯古佛旁。',
      shi: '古庙看经，正是惜春出家之相。' },
    { no: '第 八 页', who: '王熙凤', chars: ['王熙凤'], img: 'assets/uv_08.webp',
      hua: '一片冰山，山上有一只雌凤。',
      ci: '凡鸟偏从末世来，都知爱慕此生才。\n一从二令三人木，哭向金陵事更哀。',
      shi: '冰山易倒，喻其权势难久；"凡鸟"合"凤"，"人木"合"休"。' },
    { no: '第 九 页', who: '贾巧姐', chars: ['贾巧姐'], img: 'assets/uv_09.webp',
      hua: '一座荒村野店，有一美人在那里纺绩。',
      ci: '势败休云贵，家亡莫论亲。\n偶因济刘氏，巧得遇恩人。',
      shi: '荒村纺绩，是巧姐家败后的归宿；幸得刘姥姥相救。' },
    { no: '第 十 页', who: '李纨', chars: ['李纨'], img: 'assets/uv_10.webp',
      hua: '一盆茂兰，旁有一位凤冠霞帔的美人。',
      ci: '桃李春风结子完，到头谁似一盆兰。\n如冰水好空相妒，枉与他人作笑谈。',
      shi: '兰桂齐芳，是李纨晚年因子得贵，却已迟暮。' },
    { no: '第十一页', who: '秦可卿', chars: ['秦可卿'], img: 'assets/uv_11.webp',
      hua: '高楼大厦，有一美人悬梁自缢。',
      ci: '情天情海幻情身，情既相逢必主淫。\n漫言不肖皆荣出，造衅开端实在宁。',
      shi: '悬梁之画，是"秦可卿淫丧天香楼"的隐笔。' },
    { no: '另 册', who: '贾宝玉', chars: ['贾宝玉'], img: 'assets/uv_12.webp',
      hua: '宝玉不在十二钗册中。作者另以《西江月》二词批他，明贬实褒。',
      ci: '无故寻愁觅恨，有时似傻如狂。\n纵然生得好皮囊，腹内原来草莽。\n潦倒不通世务，愚顽怕读文章。\n行为偏僻性乖张，那管世人诽谤！',
      shi: '看似批他"草莽""乖张"，实则写他不肯随俗的痴与真。' },
    { no: '副 册 · 一', who: '甄英莲（香菱）', chars: ['香菱', '甄英莲'], img: 'assets/uv_13.webp',
      hua: '画着一株桂花，下面有一池沼，其中水涸泥干，莲枯藕败。',
      ci: '根并荷花一茎香，平生遭际实堪伤。\n自从两地生孤木，致使香魂返故乡。',
      shi: '“两地生孤木”合成一个“桂”字，说的是夏金桂；“莲枯藕败”说的是英莲。副册也是十二钗，可这一册只写了这一首——其余十一页，曹雪芹没有留下。' },
    { no: '又 副 册 · 一', who: '晴雯', chars: ['晴雯'], img: 'assets/uv_14.webp',
      hua: '非人物，也无山水，只是水墨滃染的满纸乌云浊雾。',
      ci: '霁月难逢，彩云易散。\n心比天高，身为下贱。\n风流灵巧招人怨。\n寿夭多因毁谤生，多情公子空牵念。',
      shi: '又副册头一页。宝玉先开的是这一橱，翻开第一页，看见的就是这一片浊雾。这一册也是十二钗，只留下两首，其余十页没有写。' },
    { no: '又 副 册 · 二', who: '袭人', chars: ['袭人'], img: 'assets/uv_15.webp',
      hua: '画着一簇鲜花，一床破席。',
      ci: '枉自温柔和顺，空云似桂如兰。\n堪羡优伶有福，谁知公子无缘。',
      shi: '又副册第二页。“席”谐“袭”，“鲜花”是她，“破席”也是她——脂批说“骂死宝玉，却是自悔”。' },
  ];

  let uvIndex = 0;
  let uvFlipping = false;
  let uvToastTimer = null;
  let uvBuilt = false;
  const uvUnlocked = new Set();
  try {
    const saved = JSON.parse(localStorage.getItem('hlm_uv') || '[]');
    if (Object.prototype.toString.call(saved) === '[object Array]') {
      saved.forEach(function (i) { if (typeof i === 'number' && i >= 0 && i < UNIVERSE.length) uvUnlocked.add(i); });
    }
  } catch (e) { }

  function uvIndexOfChar(name) {
    for (let i = 0; i < UNIVERSE.length; i++) {
      if (UNIVERSE[i].chars.indexOf(name) >= 0) return i;
    }
    return -1;
  }

  function uvPageLeft(d) {
    const art = d.img
      ? '<img class="paint" src="' + d.img + '" alt="">'
      : '<div class="paint" style="flex:1;width:100%;display:flex;align-items:center;justify-content:center;' +
        'font-size:76px;color:#a8322a;opacity:.55;letter-spacing:0;">' + (d.glyph || '石') + '</div>';
    return '<div class="pgnum">' + d.no + '</div>' + art +
      '<div class="pghua">' + String(d.hua).replace(/\n/g, '<br>') + '</div>';
  }

  function uvPageRight(d) {
    if (d.isIndex) {
      const f = function (t) {
        for (let i = 0; i < UNIVERSE.length; i++) if (UNIVERSE[i].no.indexOf(t) >= 0) return i;
        return 0;
      };
      const iZ = f('第 一 页'), iF = f('副 册'), iY = f('又 副 册'), iB = f('另 册');
      const zheng = UNIVERSE.slice(1, iB).map(function (x) {
        return x.who.replace(/\s*·\s*/g, '　');
      });
      return '<div class="pgtag">金 陵 十 二 钗</div>' +
        '<div class="toc">' +
          '<div class="toc-r" data-go="' + iZ + '"><b>正 册</b><em>一十二人</em>' +
            '<span>' + zheng.join('　') + '</span></div>' +
          '<div class="toc-r" data-go="' + iF + '"><b>副 册</b><em>只存一首</em>' +
            '<span>香菱</span></div>' +
          '<div class="toc-r" data-go="' + iY + '"><b>又副册</b><em>只存二首</em>' +
            '<span>晴雯　袭人</span></div>' +
        '</div>' +
        '<div class="toc-note">宝玉不在三册之数，另置一页。</div>' +
        '<div class="pgshi">三册各十二人。正册齐全，副册存一，又副册存二——' +
        '剩下的二十一页，书里没有写。</div>';
    }
    const life = (d.chars || []).map(function (c) {
      return '<span data-c="' + c + '">' + c + '</span>';
    }).join('　');
    return '<div class="pgtag">金 陵 十 二 钗 正 册</div>' +
      '<div class="pgci">' + d.ci.replace(/\n/g, '<br>') + '</div>' +
      '<div class="pgseal">' + d.who + '</div>' +
      '<div class="pgshi">' + d.shi + '</div>' +
      (life ? '<div class="pglife">看此人一生 · ' + life + '</div>' : '');
  }

  function uvRightAt(i) {
    return uvPageRight(UNIVERSE[i]);
  }

  function uvChrome() {
    const p = document.getElementById('uvprog');
    if (p) p.textContent = uvUnlocked.size + ' / ' + UNIVERSE.length;
    const dots = document.getElementById('uvdots');
    if (!dots) return;
    dots.innerHTML = UNIVERSE.map(function (x, i) {
      return '<i class="' + (i === uvIndex ? 'on ' : '') + (uvUnlocked.has(i) ? 'ul' : '') +
        '" data-i="' + i + '"></i>';
    }).join('');
    Array.prototype.forEach.call(dots.querySelectorAll('i'), function (el) {
      el.addEventListener('click', function () { uvGo(parseInt(el.getAttribute('data-i'), 10)); });
    });
  }

  function uvUnlockAt(i) {
    if (uvUnlocked.has(i)) return;
    uvUnlocked.add(i);
    try { localStorage.setItem('hlm_uv', JSON.stringify(Array.from(uvUnlocked))); } catch (e) { }
    uvChrome();
    const t = document.getElementById('uvtoast');
    if (t) {
      t.textContent = '页已翻过 · 解锁「' + UNIVERSE[i].who + '」';
      t.classList.add('on');
      clearTimeout(uvToastTimer);
      uvToastTimer = setTimeout(function () { t.classList.remove('on'); }, 2400);
    }
    try {
      if (!document.getElementById('kb').classList.contains('hidden') && kbTab === 'chars') renderList();
    } catch (e) { }
  }

  function uvSpread() {
    uvIndex = ((uvIndex % UNIVERSE.length) + UNIVERSE.length) % UNIVERSE.length;
    uvUnlockAt(uvIndex);
    document.getElementById('pgL').innerHTML = uvPageLeft(UNIVERSE[uvIndex]);
    document.getElementById('pgR').innerHTML = uvRightAt(uvIndex);
    uvChrome();
  }

  function uvTurn(dir) {
    if (uvFlipping) return;
    const n = UNIVERSE.length;
    if (dir > 0 && uvIndex === n - 1 && uvUnlocked.size >= n) { uvShowEnd(); return; }
    const ni = (uvIndex + dir + n) % n;
    if (ni === uvIndex) return;
    uvDoTurn(dir);
  }

  function uvDoTurn(dir) {
    if (uvFlipping) return;
    const n = UNIVERSE.length;
    if (dir > 0 && uvIndex === n - 1 && uvUnlocked.size >= n) { uvShowEnd(); return; }
    const ni = (uvIndex + dir + n) % n;
    if (ni === uvIndex) return;
    uvFlipping = true;
    const leaf = document.getElementById('leaf');

    if (dir < 0) {
      const book = document.querySelector('.book');
      book.style.transition = 'opacity .16s';
      book.style.opacity = '0';
      setTimeout(function () {
        uvIndex = ni;
        document.getElementById('pgL').innerHTML = uvPageLeft(UNIVERSE[ni]);
        document.getElementById('pgR').innerHTML = uvRightAt(ni);
        uvChrome();
        uvUnlockAt(ni);
        book.style.opacity = '1';
        setTimeout(function () { book.style.transition = ''; uvFlipping = false; }, 180);
      }, 170);
      return;
    }

    document.getElementById('lfF').innerHTML = '<div class="pgc">' + uvRightAt(uvIndex) + '</div>';
    document.getElementById('lfB').innerHTML = '<div class="pgc">' + uvPageLeft(UNIVERSE[ni]) + '</div>';
    leaf.classList.add('on');
    void leaf.offsetWidth;
    leaf.classList.add('go');

    setTimeout(function () {
      uvIndex = ni;
      uvUnlockAt(ni);
      document.getElementById('pgL').innerHTML = uvPageLeft(UNIVERSE[ni]);
      document.getElementById('pgR').innerHTML = uvRightAt(ni);
      uvChrome();
    }, 560);

    setTimeout(function () {
      leaf.style.transition = 'none';
      leaf.classList.remove('go');
      leaf.classList.remove('on');
      void leaf.offsetWidth;
      leaf.style.transition = '';
      uvFlipping = false;
    }, 700);
  }

  function uvJump(i) {
    uvFlipping = true;
    const book = document.querySelector('.book');
    book.style.transition = 'opacity .16s';
    book.style.opacity = '0';
    setTimeout(function () {
      uvIndex = i;
      uvUnlockAt(i);
      document.getElementById('pgL').innerHTML = uvPageLeft(UNIVERSE[i]);
      document.getElementById('pgR').innerHTML = uvRightAt(i);
      uvChrome();
      book.style.opacity = '1';
      setTimeout(function () { book.style.transition = ''; uvFlipping = false; }, 180);
    }, 170);
  }

  function uvGo(i) {
    if (uvFlipping || i === uvIndex) return;
    if (i === uvIndex + 1) { uvTurn(1); return; }
    uvJump(i);
  }

  function uvBuild() {
    if (uvBuilt) return;
    uvBuilt = true;
    const uv = document.getElementById('uv');
    uv.innerHTML =
      '<div class="uvtop"><span class="uvt">太虚幻境 · 薄命司</span><span class="uvprog" id="uvprog"></span></div>' +
      '<button id="uvclose">✕</button>' +
      '<div class="bookwrap"><div class="book">' +
        '<div class="half left"><div class="pgc" id="pgL"></div></div>' +
        '<div class="half right"><div class="pgc" id="pgR"></div></div>' +
        '<div class="spine"></div>' +
        '<div class="leaf" id="leaf"><div class="lf front" id="lfF"></div><div class="lf back" id="lfB"></div></div>' +
      '</div></div>' +
      '<div class="uvnav"><button id="uvprev">‹ 前一页</button><div class="uvdots" id="uvdots"></div>' +
        '<button id="uvnext">后一页 ›</button></div>' +
      '<div class="uvtoast" id="uvtoast"></div>';

    document.getElementById('uvclose').addEventListener('click', function () {
      uv.classList.add('hidden');
    });
    uv.addEventListener('click', function (e) {
      const t = e.target && e.target.closest ? e.target.closest('.pglife span') : null;
      if (t && typeof openFate === 'function') {
        e.stopPropagation();
        openFate(t.getAttribute('data-c'));
      }
    });
    document.getElementById('uvprev').addEventListener('click', function () { uvTurn(-1); });
    document.getElementById('uvnext').addEventListener('click', function () { uvTurn(1); });
    uv.addEventListener('click', function (e) { if (e.target === uv) uv.classList.add('hidden'); });
    uv.addEventListener('swipe', function () { });

    let sx = 0, sy = 0;
    uv.addEventListener('touchstart', function (e) {
      sx = e.touches[0].clientX; sy = e.touches[0].clientY;
    }, { passive: true });
    uv.addEventListener('touchend', function (e) {
      const dx = e.changedTouches[0].clientX - sx;
      const dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 46 && Math.abs(dx) > Math.abs(dy)) uvTurn(dx < 0 ? 1 : -1);
    }, { passive: true });
  }

  function openUV(i) {
    uvBuild();
    document.getElementById('uv').classList.remove('hidden');
    uvIndex = (typeof i === 'number') ? i : 0;
    document.getElementById('pgL').innerHTML = uvPageLeft(UNIVERSE[uvIndex]);
    document.getElementById('pgR').innerHTML = uvRightAt(uvIndex);
    uvChrome();
    uvUnlockAt(uvIndex);
    Array.prototype.forEach.call(document.querySelectorAll('#pgR .toc-r'), function (el) {
      el.addEventListener('click', function () { uvGo(parseInt(el.getAttribute('data-go'), 10)); });
    });
  }

  document.getElementById('uvBtn').addEventListener('click', function () { requestUV(0); });

  /* ---------- 签筒：重建为写实竹筒 ---------- */
  (function () {
    const tube = document.getElementById('tube');
    if (!tube) return;
    const pos = [8, 21, 34, 47, 60, 73, 86];
    const hs = [62, 82, 70, 86, 64, 78, 68];
    const rs = [-7, 4, -3, 6, -8, 2, 8];
    let s = '<div class="tb"></div><div class="sticks">';
    for (let i = 0; i < 7; i++) {
      s += '<b style="left:' + pos[i] + 'px;height:' + hs[i] + 'px;--r:' + rs[i] +
        'deg;transform:rotate(' + rs[i] + 'deg)"></b>';
    }
    s += '</div><div class="mouth"></div><div class="tbshadow"></div>';
    tube.innerHTML = s;

    const draw = document.getElementById('hqdraw');
    if (draw) {
      draw.addEventListener('click', function () {
        const f = document.createElement('div');
        f.className = 'flysign';
        tube.appendChild(f);
        requestAnimationFrame(function () { f.classList.add('fly'); });
        setTimeout(function () { if (f.parentNode) f.parentNode.removeChild(f); }, 1800);
      });
    }
  })();

  applyWeather();
  requestAnimationFrame(loop);

  /* ---------- 一诗三证 · 命运三联 ---------- */
  const FATE_MAID = {
    '晴雯': { no: '又副册', sub: '一诗二证',
      panci: '霁月难逢，彩云易散。\n心比天高，身为下贱。\n风流灵巧招人怨。\n寿夭多因毁谤生，多情公子空牵念。',
      yu: '又副册头一页，只有满纸乌云浊雾，没有山水。',
      qu: [{ n: '红楼梦十二支 · 无', t: '十二支曲子只唱正册。晴雯在又副册，没有曲子——可全书唯一一篇诔文《芙蓉女儿诔》，是为她写的。' }],
      end: [
        { h: '第77回', t: '俏丫鬟抱屈夭风流', x: '病中被王夫人撵出，住在表哥家里，宝玉去看她，她把两根葱管一般的指甲齐根咬下，又把手上的镯子褪下来给他。当夜咽气，才十六岁。' },
        { h: '第78回', t: '痴公子杜撰芙蓉诔', x: '宝玉作《芙蓉女儿诔》祭她，篇中一句“茜纱窗下，我本无缘；黄土垄中，卿何薄命”。' }
      ],
      hook: '判词说“寿夭多因毁谤生”。她不是因为做错什么才死的——她是因为生得太好、说得太直。全书唯一一个“心比天高”却“身为下贱”的人。' },
    '袭人': { no: '又副册', sub: '一诗二证',
      panci: '枉自温柔和顺，空云似桂如兰。\n堪羡优伶有福，谁知公子无缘。',
      yu: '又副册第二页，画着一簇鲜花，一床破席。',
      qu: [{ n: '红楼梦十二支 · 无', t: '她亦不在十二支曲子里。' }],
      end: [
        { h: '第6回', t: '贾宝玉初试云雨情', x: '全书第一个与宝玉有肌肤之亲的人。' },
        { h: '第34回', t: '情中情因情感妹妹', x: '劝王夫人“怎么变个法儿，以后竟还叫二爷搬出园外来住”，这一席话说得王夫人“如雷轰电掣一般”。' },
        { h: '第120回', t: '嫁与蒋玉菡', x: '宝玉出家后她回了娘家，嫁了戏子蒋玉菡。判词里“堪羡优伶有福”正是此意。' }
      ],
      hook: '她一辈子“心中眼中只有一个宝玉”，最后嫁的却是别人。脂批说“骂死宝玉，却是自悔”——这四句不是骂她，是替她可惜。' },
    '香菱': { no: '副册', sub: '一诗二证',
      panci: '根并荷花一茎香，平生遭际实堪伤。\n自从两地生孤木，致使香魂返故乡。',
      yu: '副册头一页，画着一株桂花，下面有一池沼，水涸泥干，莲枯藕败。',
      qu: [{ n: '红楼梦十二支 · 无', t: '副册只有这一首。' }],
      end: [
        { h: '第48回', t: '香菱学诗', x: '苦志苦吟，“心里羡慕，所以求宝钗教他”，终作成三首，第二首“精华欲掩料应难”为众人称道。' },
        { h: '第80回', t: '受夏金桂折磨', x: '夏金桂进门，先改她的名字（香菱改秋菱），再百般折磨。' },
        { h: '第120回', t: '（程本）被扶正', x: '程本让她苦尽甘来，薛蟠遇赦回来，把她扶了正。' }
      ],
      hook: '判词说“致使香魂返故乡”，程本却让她活了下来。这八句诗留给她的结局，和续书给她的结局，不是同一个——这也是后四十回最常被诟病的地方之一。' },
    '平儿': { no: '', sub: '一诗二证',
      yu: '第21回：俏平儿软语救贾琏。',
      qu: [{ n: '红楼梦十二支 · 无', t: '她不入十二钗册，也没有曲子。' }],
      end: [
        { h: '第21回', t: '软语救贾琏', x: '在凤姐与贾琏之间周旋，藏起那一绺青丝。' },
        { h: '第44回', t: '喜出望外平儿理妆', x: '凤姐生日撞破贾琏与鲍二家的，气撒在平儿身上，平儿被打。事后宝玉为她理妆——这一回叫“喜出望外”，其实惨得很。' },
        { h: '第61回', t: '判冤决狱平儿行权', x: '一桩偷窃案，她按下了，既没冤枉人，也没伤着谁。' }
      ],
      hook: '全书没有一个人说她不好。凤姐是刀，她是刀鞘——“周全了多少人”五个字，说的是她这一辈子。' },
    '鸳鸯': { no: '', sub: '一诗二证',
      yu: '第46回：鸳鸯女誓绝鸳鸯偶。',
      qu: [{ n: '红楼梦十二支 · 无', t: '她不入十二钗册。' }],
      end: [
        { h: '第46回', t: '誓绝鸳鸯偶', x: '贾赦要讨她做妾，她当着贾母、当着众人，一面哭一面剪了头发：“我是横了心的，当着众人在这里，我这一辈子莫说是宝玉，便是宝金、宝银、宝天王、宝皇帝，横竖不嫁人就完了！”' },
        { h: '第111回', t: '鸳鸯女殉主登太虚', x: '贾母死后，她上吊自尽。' }
      ],
      hook: '她抗的不是贾赦，是“被人摆布”这件事。最后死，也不是为了贾母，是为了不落到别人手里。' },
    '紫鹃': { no: '', sub: '一诗二证',
      yu: '第57回：慧紫鹃情辞试忙玉。',
      qu: [{ n: '红楼梦十二支 · 无', t: '她不入十二钗册。' }],
      end: [
        { h: '第57回', t: '情辞试忙玉', x: '一句“林妹妹要回苏州去了”，把宝玉试得人事不知、口吐白沫。' },
        { h: '第98回', t: '守灵', x: '黛玉死时，是她和探春李纨在跟前；她“欲说话时，惟有喉中哽咽的分儿，却一字说不出”。' }
      ],
      hook: '全书最懂黛玉的人不是宝玉，是她。宝玉会哭，她会熬药。' },
    '金钏儿': { no: '', sub: '一句一证',
      yu: '第30回她自己说的：“金簪子掉在井里头，有你的只是有你的。”',
      qu: [{ n: '红楼梦十二支 · 无', t: '她不入册，也没有曲子。' }],
      end: [
        { h: '第30回', t: '被撵', x: '王夫人午睡，她替宝玉捶腿，说笑几句，被王夫人翻身起来打了一个嘴巴，立刻撵出去。' },
        { h: '第32回', t: '含耻辱情烈死金钏', x: '投井而死。' },
        { h: '第43回', t: '不了情暂撮土为香', x: '她生日那天，宝玉出城到水仙庵，撮土为香祭她。' }
      ],
      hook: '她那句玩笑话成了自己的谶语。金簪子掉在井里头——她就是那根金簪子。' },
    '司棋': { no: '', sub: '二证',
      yu: '她没有判词。她的结局写在第七十四回抄检的那只箱子里。',
      qu: [{ n: '红楼梦十二支 · 无', t: '她不入册。' }],
      end: [
        { h: '第61回', t: '私情', x: '与表弟潘又安私相授受，被鸳鸯撞见。' },
        { h: '第74回', t: '抄检大观园', x: '箱子里的同心如意、字帖被搜出，被撵出园子。' },
        { h: '第92回', t: '殉情', x: '母亲不肯成全，她“便一头撞在墙上”，血溅当场。' }
      ],
      hook: '全书唯一一个“自己要”的丫鬟，也是死得最直接的一个。' }
  };

  const FATE = {
    '林黛玉': {
      yu: '第5回《枉凝眉》：“想眼中能有多少泪珠儿，怎经得秋流到冬尽，春流到夏。”',
      qu: [{ n: '枉凝眉 · 第三支', t: '一个是阆苑仙葩，一个是美玉无瑕。若说没奇缘，今生偏又遇着他，若说有奇缘，如何心事终虚化？一个枉自嗟呀，一个空劳牵挂。一个是水中月，一个是镜中花。想眼中能有多少泪珠儿，怎经得秋流到冬尽，春流到夏！' }],
      end: [
        { h: '第97回', t: '林黛玉焚稿断痴情', x: '黛玉撕烧宝玉所赠旧帕与自己的诗稿，痴情自断。' },
        { h: '第98回', t: '苦绛珠魂归离恨天', x: '黛玉气绝，恰在宝玉娶宝钗的时辰；"香魂一缕随风散，愁绪三更入梦遥"。' }
      ],
      hook: '判词画的是"枯木悬玉带"，曲里唱的是"泪珠儿流到夏"——她是绛珠仙草下凡还泪，泪尽之日便是命尽之时。三处说的是同一件事：她的死，第一回就写好了。'
    },
    '薛宝钗': {
      yu: '第5回《终身误》：“空对着，山中高士晶莹雪；终不忘，世外仙姝寂寞林。”',
      qu: [{ n: '终身误 · 第二支', t: '都道是金玉良姻，俺只念木石前盟。空对着，山中高士晶莹雪；终不忘，世外仙姝寂寞林。叹人间，美中不足今方信。纵然是齐眉举案，到底意难平。' }],
      end: [
        { h: '第97回', t: '薛宝钗出闺成大礼', x: '薛姨妈作主将她嫁与宝玉，婚礼行"掉包计"，瞒着宝玉。' },
        { h: '第120回', t: '宝玉却尘缘', x: '宝玉随一僧一道而去，宝钗已有孕，"哭得人事不知"，独守空闺。' }
      ],
      hook: '判词把她和黛玉写在同一首诗里，曲也把两人写在同一支里——"齐眉举案"是婚姻的圆满，"到底意难平"是情感的落空。她赢得了名分，输掉的是那个人的心。'
    },
    '贾元春': {
      yu: '第22回灯谜（爆竹）：“一声震得人方恐，回首相看已化灰。”脂批：“才得侥幸，奈寿不长。”',
      qu: [{ n: '恨无常 · 第四支', t: '喜荣华正好，恨无常又到。眼睁睁，把万事全抛；荡悠悠，把芳魂消耗。望家乡，路远山高。故向爹娘梦里相寻告：儿命已入黄泉，天伦呵，须要退步抽身早！' }],
      end: [
        { h: '第95回', t: '因讹成实元妃薨逝', x: '元春因痰厥暴病而亡，谥"贤淑贵妃"，"元妃并无所出"。' }
      ],
      hook: '"榴花开处照宫闱"是极盛，"虎兕相逢大梦归"是骤死。曲名《恨无常》三个字就是全部：荣华来得正好，无常来得更快。她死前托梦叫爹娘"退步抽身早"，而这个家族没人听得进去。'
    },
    '贾探春': {
      yu: '第22回灯谜（风筝）：“游丝一断浑无力，莫向东风怨别离。”脂批：“此探春远适之谶也。”',
      qu: [{ n: '分骨肉 · 第五支', t: '一帆风雨路三千，把骨肉家园齐来抛闪。恐哭损残年，告爹娘，休把儿悬念。自古穷通皆有定，离合岂无缘？从今分两地，各自保平安。奴去也，莫牵连。' }],
      end: [
        { h: '第102回', t: '探春远嫁', x: '随翁婿赴海疆镇海统制任所，"水舟车陆而去"。' },
        { h: '第119回', t: '随夫回京', x: '归来时"出跳得比先前更好了，服采鲜明"。' }
      ],
      hook: '判词里的"清明涕送江边望"和画里的"船中女子掩面泣涕"，在曲里变成了"一帆风雨路三千"。三个人称全落在她一个人身上：才自精明、生于末世、一去不返。'
    },
    '史湘云': {
      yu: '第5回《乐中悲》：“厮配得才貌仙郎，博得个地久天长……终久是云散高唐，水涸湘江。”',
      qu: [{ n: '乐中悲 · 第六支', t: '襁褓中，父母叹双亡。纵居那绮罗丛，谁知娇养？幸生来，英豪阔大宽宏量，从未将儿女私情略萦心上。好一似，霁月光风耀玉堂。厮配得才貌仙郎，博得个地久天长，准折得幼年时坎坷形状。终久是云散高唐，水涸湘江。这是尘寰中消长数应当，何必枉悲伤！' }],
      end: [
        { h: '第110回', t: '夫婿成痨', x: '湘云已嫁，"女婿的病已成痨症"，她自叹"刚配了一个才貌双全的男人，偏偏的得了冤孽症候"。' },
        { h: '第118回', t: '立志守寡', x: '王夫人说："如今姑爷痨病死了，你史妹妹立志守寡，也就苦了。"' }
      ],
      hook: '曲名就叫《乐中悲》——"厮配得才貌仙郎"是乐，"云散高唐，水涸湘江"是悲。注意：她的名字"湘云"两个字，早就嵌在"湘江水逝楚云飞"里了。全书对她的结局着墨极少，这是最明确的一处。'
    },
    '妙玉': {
      yu: '第5回正册画"一块美玉，落在泥垢之中"，判词"可怜金玉质，终陷淖泥中"。',
      qu: [{ n: '世难容 · 第七支', t: '气质美如兰，才华阜比仙。天生成孤僻人皆罕。你道是啖肉食腥膻，视绮罗俗厌。却不知太高人愈妒，过洁世同嫌。可叹这，青灯古殿人将老，辜负了，红粉朱楼春色阑。到头来，依旧是风尘肮脏违心愿。好一似，无瑕白玉遭泥陷，又何须，王孙公子叹无缘。' }],
      end: [
        { h: '第112回', t: '活冤孽妙尼遭大劫', x: '强盗夜入栊翠庵，以闷香熏住妙玉，"由着他掇弄了去了"，下落不明。' },
        { h: '第117回', t: '被杀传闻', x: '只传一被劫女子"不依，被这贼寇杀了"，众人疑是妙玉，并无定论。' }
      ],
      hook: '"太高人愈妒，过洁世同嫌"——这八个字是判词"欲洁何曾洁"的白话版。她的悲剧不在遭遇，而在她要的"洁"这个世界根本给不了。'
    },
    '贾迎春': {
      yu: '第22回算盘谜，脂批：“此迎春一生遭际，惜不得其夫何。”',
      qu: [{ n: '喜冤家 · 第八支', t: '中山狼，无情兽，全不念当日根由。一味的骄奢淫荡贪还构。觑着那，侯门艳质同蒲柳；作践的，公府千金似下流。叹芳魂艳魄，一载荡悠悠。' }],
      end: [
        { h: '第109回', t: '还孽债迎女返真元', x: '"可怜一位如花似月之女，结褵年余，不料被孙家揉搓以致身亡"，孙家"草草完结"。' }
      ],
      hook: '判词写"一载赴黄粱"，曲里写"一载荡悠悠"——同一个"一载"，嫁过去整整一年。她是最没有反抗能力的一个，所以作者给了她最直白的一句：子系中山狼。'
    },
    '贾惜春': {
      yu: '第22回灯谜（海灯），脂批：“此惜春为尼之谶也。公府千金至缁衣乞食，宁不悲夫！”',
      qu: [{ n: '虚花悟 · 第九支', t: '将那三春看破，桃红柳绿待如何？把这韶华打灭，觅那清淡天和。说什么，天上夭桃盛，云中杏蕊多。到头来，谁把秋捱过？则看那，白杨村里人呜咽，青枫林下鬼吟哦。更兼着，连天衰草遮坟墓。这的是，昨贫今富人劳碌，春荣秋谢花折磨。似这般，生关死劫谁能躲？闻说道，西方宝树唤婆娑，上结着长生果。' }],
      end: [
        { h: '第112回', t: '死定出家之念', x: '因看家失盗、受包勇之辱，自己"把青丝绞去"。' },
        { h: '第117回', t: '绞发求为尼', x: '"把头发都绞掉了"，到邢王二夫人前磕头，"若不容他他就死在眼前"。' },
        { h: '第118回', t: '获准在家修行', x: '王夫人准许，以住房作静室，紫鹃自愿随侍；并明说"那头发可以不剃的"。' }
      ],
      hook: '判词画"古庙美人看经"，曲唱"把这韶华打灭"——她要的不是佛，是"不看"：看破了三个姐姐的下场，索性把自己从这局里摘出去。全书并没写她正式剃度，只说在家修行，这一点很多人记错。'
    },
    '王熙凤': {
      yu: '第5回正册画"一片冰山，山上有一只雌凤"，判词"一从二令三人木，哭向金陵事更哀"。',
      qu: [{ n: '聪明累 · 第十支', t: '机关算尽太聪明，反算了卿卿性命。生前心已碎，死后性空灵。家富人宁，终有个家亡人散各奔腾。枉费了，意悬悬半世心；好一似，荡悠悠三更梦。忽喇喇似大厦倾，昏惨惨似灯将尽。呀！一场欢喜忽悲辛。叹人世，终难定！' }],
      end: [
        { h: '第110回', t: '力诎失人心', x: '办贾母丧事受邢夫人等挤兑，"只觉得眼前一黑，嗓子里一甜，便喷出鲜红的血来"。' },
        { h: '第114回', t: '王熙凤历幻返金陵', x: '弥留时说"要船要轿的，说到金陵归入册子去"，随即咽气；丧事拮据，靠平儿典当私物。' }
      ],
      hook: '判词的"一从二令三人木"历来解读纷纭（有人说"人木"合"休"），但曲名把话说尽了：聪明累。"机关算尽"是她的本事，"反算了卿卿性命"是她的账单。冰山上的凤凰，冰化了，凤也就没了。'
    },
    '贾巧姐': {
      yu: '第5回正册画"荒村野店，一美人纺绩"，判词"偶因济刘氏，巧得遇恩人"。',
      qu: [{ n: '留余庆 · 第十一支', t: '留余庆，留余庆，忽遇恩人；幸娘亲，幸娘亲，积得阴功。劝人生，济困扶穷，休似俺那爱银钱忘骨肉的狠舅奸兄！正是乘除加减，上有苍穹。' }],
      end: [
        { h: '第118回', t: '舅兄欺弱女', x: '王仁（亲舅）、贾环、贾芸串通，瞒着将巧姐许给外藩作偏房。' },
        { h: '第119回', t: '刘姥姥相救', x: '平儿与刘姥姥定计，把巧姐扮作青儿从后门送出城，藏于刘姥姥庄上；外藩知是勋戚，退亲。' },
        { h: '第120回', t: '嫁周家', x: '刘姥姥作媒，嫁与庄上富户周家之子（十四岁，新进秀才）。' }
      ],
      hook: '十二钗里唯一"善终"的一个，而善终的原因写在曲名里：留余庆。她母亲当年随手接济的二十两银子，最后买回了她自己的命。"狠舅奸兄"四个字，指的就是要卖她的那几个人。'
    },
    '李纨': {
      yu: '第5回正册画"一盆茂兰，旁一位凤冠霞帔的美人"，曲《晚韶华》"威赫赫爵禄高登，昏惨惨黄泉路近"。',
      qu: [{ n: '晚韶华 · 第十二支', t: '镜里恩情，更那堪梦里功名！那美韶华去之何迅！再休提绣帐鸳衾。只这带珠冠，披凤袄，也抵不了无常性命。虽说是，人生莫受老来贫，也须要阴骘积儿孙。气昂昂头戴簪缨，光灿灿腰悬金印；威赫赫爵禄高登，昏惨惨黄泉路近。问古来将相可还存？也只是虚名儿与后人钦敬。' }],
      end: [
        { h: '第119回', t: '贾兰中举', x: '贾兰中第一百三十名举人，"李纨心下喜欢，因王夫人不见了宝玉，不敢喜形于色"。' },
        { h: '第120回', t: '兰桂齐芳', x: '薛姨妈劝她："如今兰哥儿中了举人，明年成了进士，可不是就做了官了么。"甄士隐判语"兰桂齐芳，家道复初"。' }
      ],
      hook: '这里有个常被忽略的细节："凤冠霞帔"全书只出现在第5回那幅画里，后四十回**从未写到她受诰封**。曲里"带珠冠，披凤袄，也抵不了无常性命"更像预言而非实录——她等到儿子出头，自己却已"黄泉路近"。判词给的是画，不是事实。'
    },
    '秦可卿': {
      yu: '第13回脂批（甲戌本）："' + '秦可卿淫丧天香楼' + '"，作者用史笔也……姑赦之，因命芹溪删去。"',
      qu: [{ n: '好事终 · 第十三支', t: '画梁春尽落香尘。擅风情，秉月貌，便是败家的根本。箕裘颓堕皆从敬，家事消亡首罪宁。宿孽总因情。' }],
      end: [
        { h: '第13回', t: '秦可卿死', x: '托梦凤姐留下"三春去后诸芳尽，各自须寻各自门"，随即"东府蓉大奶奶没了"；正文未明写死因。' },
        { h: '第14回', t: '大出丧', x: '贾珍为贾蓉捐龙禁尉、用樯木棺材，极尽奢华。' }
      ],
      hook: '判词画"高楼美人悬梁"，曲唱"画梁春尽落香尘"——两处都指向自缢，可正文里偏偏一个字没写。因为作者把"淫丧天香楼"整整四五页删掉了，只留下脂批里那句"命芹溪删去"。这本书最惊心的一处，是**被删掉的那一段**。'
    },
    '贾宝玉': {
      yu: '第5回《飞鸟各投林》收尾：“好一似食尽鸟投林，落了片白茫茫大地真干净！”',
      qu: [{ n: '西江月 · 批宝玉', t: '无故寻愁觅恨，有时似傻如狂。纵然生得好皮囊，腹内原来草莽。潦倒不通世务，愚顽怕读文章。行为偏僻性乖张，那管世人诽谤！' },
           { n: '飞鸟各投林 · 收尾', t: '为官的，家业凋零；富贵的，金银散尽。有恩的，死里逃生；无情的，分明报应。欠命的，命已还；欠泪的，泪已尽。冤冤相报实非轻，分离聚合皆前定。欲知命短问前生，老来富贵也真侥幸。看破的，遁入空门；痴迷的，枉送了性命。好一似食尽鸟投林，落了片白茫茫大地真干净！' }],
      end: [
        { h: '第119回', t: '中乡魁宝玉却尘缘', x: '宝玉中举后随一僧一道飘然而去，只留"宝玉"二字于雪地。' },
        { h: '第120回', t: '归结红楼梦', x: '贾政在毗陵驿见宝玉光头赤脚、身披大红猩猩毡斗篷，四拜后随僧道而去。' }
      ],
      hook: '他不在十二钗册里，因为他是"看册子的人"。可他自己也早被写进了曲里——"看破的，遁入空门"。青埂峰下那块石头，下凡走了一遭，最后回到原处，石上刻满了这一生的字。'
    }
  };
  Object.keys(FATE_MAID).forEach(function (k) { FATE[k] = FATE_MAID[k]; });

  let fateEl = null;

  function openFate(name) {
    const d = FATE[name];
    if (!d) return;
    let img = '', alias = '';
    if (window.KB && KB.chars) {
      for (let i = 0; i < KB.chars.length; i++) {
        if (KB.chars[i].t === name) { img = KB.chars[i].img || ''; alias = KB.chars[i].alias || ''; break; }
      }
    }
    let panciTxt = d.panci || '', panciNo = d.no || '';
    if (!panciTxt) {
      for (let i = 0; i < UNIVERSE.length; i++) {
        if (UNIVERSE[i].chars.indexOf(name) >= 0) { panciTxt = UNIVERSE[i].ci; panciNo = UNIVERSE[i].no; break; }
      }
    }

    if (!fateEl) {
      fateEl = document.createElement('div');
      fateEl.id = 'fate';
      fateEl.className = 'hidden';
      document.body.appendChild(fateEl);
      fateEl.addEventListener('click', function (e) {
        if (e.target === fateEl) fateEl.classList.add('hidden');
      });
    }

    const quHTML = d.qu.map(function (q) {
      return '<div class="fqun">［' + q.n + '］</div><div class="fqu">' + q.t + '</div>';
    }).join('');

    const endHTML = d.end.map(function (e) {
      return '<div class="fend"><span class="h">' + e.h + '</span>' + e.t +
        '<div class="y">' + e.x + '</div></div>';
    }).join('');

    fateEl.innerHTML =
      '<div class="fatebox">' +
        '<button id="fateclose">✕</button>' +
        '<div class="fatehead">' +
          (img ? '<img src="' + img + '" alt="">' : '') +
          '<div><div class="fatename">' + name + '</div>' +
          '<div class="fatealias">' + (alias || '') + ' · ' + (d.sub || '一诗三证') + '</div></div>' +
        '</div>' +
        '<div class="fate3">' +
          '<div class="fcol"><div class="fct">判 词 <em>' + (panciNo ? panciNo.replace(/ /g, '') : '另册') + '</em></div>' +
            '<div class="fci">' + (panciTxt ? panciTxt.replace(/\n/g, '<br>') : '此人不入十二钗册，无判词。') + '</div></div>' +
          '<div class="fcol"><div class="fct">曲 子 <em>红楼梦十二支</em></div>' + quHTML + '</div>' +
          '<div class="fcol"><div class="fct">应 验 <em>后四十回</em></div>' + endHTML +
            '<div class="fct" style="margin-top:6px">伏 笔 <em>前八十回</em></div>' +
            '<div class="fend"><div class="y">' + d.yu + '</div></div></div>' +
        '</div>' +
        '<div class="fhook">' + d.hook + '</div>' +
        (typeof TALKS !== 'undefined' && TALKS[name] ? '<button class="ftalk" id="ftalk">与 ' + name + ' 说说话 →</button>' : '') +
      '</div>';
    document.getElementById('fateclose').addEventListener('click', function () {
      fateEl.classList.add('hidden');
    });
    const ft = document.getElementById('ftalk');
    if (ft) ft.addEventListener('click', function () { openTalk(name); });
    fateEl.classList.remove('hidden');
    fateEl.scrollTop = 0;
  }

  (function () {
    const list = document.getElementById('kblist');
    if (!list) return;
    list.addEventListener('click', function (e) {
      if (typeof kbTab === 'undefined' || kbTab !== 'chars') return;
      const card = e.target.closest ? e.target.closest('.chcard') : null;
      if (!card) return;
      if (card.getAttribute('data-uv') !== null) return;
      const ct = card.querySelector('.ct');
      if (!ct || !ct.firstChild) return;
      const nm = (ct.firstChild.nodeValue || '').trim();
      if (FATE[nm]) openFate(nm);
    });
  })();

  function uvShowEnd() {
    const uv = document.getElementById('uv');
    let e = document.getElementById('uvend');
    if (!e) {
      e = document.createElement('div');
      e.id = 'uvend';
      e.className = 'uvend';
      let sn = '';
      for (let i = 0; i < 28; i++) {
        sn += '<i style="left:' + (Math.random() * 100).toFixed(1) + '%;animation-duration:' +
          (6 + Math.random() * 7).toFixed(1) + 's;animation-delay:-' + (Math.random() * 9).toFixed(1) +
          's;opacity:' + (0.25 + Math.random() * 0.5).toFixed(2) + '"></i>';
      }
      e.innerHTML = '<div class="snow">' + sn + '</div>' +
        '<div class="txt">落了片白茫茫大地真干净</div>' +
        '<div class="sub">十二页皆已翻过 · 太虚幻境终 · 点此合上</div>';
      uv.appendChild(e);
      e.addEventListener('click', function () { e.classList.remove('on'); });
    }
    requestAnimationFrame(function () { e.classList.add('on'); });
  }


  function requestUV(i) {
    openUV(i);
  }

  /* ---------- 灯谜会 · 第22回 ---------- */
  const RIDDLES = [
    { q: '能使妖魔胆尽摧，身如束帛气如雷。<br>一声震得人方恐，回首相看已化灰。',
      o: ['爆竹', '风筝', '算盘', '海灯'], who: '贾元春',
      note: '脂批：「此元春之谜。才得侥幸，奈寿不长。」爆竹一声震天动地，转眼只剩灰烬——正应她封妃之盛与骤亡。贾政看到这里，心里已经发凉。' },
    { q: '天运人功理不穷，有功无运也难逢。<br>因何镇日纷纷乱，只为阴阳数不同。',
      o: ['算盘', '罗盘', '纺车', '秤杆'], who: '贾迎春',
      note: '脂批：「此迎春一生遭际，惜不得其夫何！」算盘拨来拨去，终究"有功无运"——她嫁了孙绍祖，任人拨弄，一年而亡。' },
    { q: '阶下儿童仰面时，清明妆点最堪宜。<br>游丝一断浑无力，莫向东风怨别离。',
      o: ['风筝', '秋千', '纸伞', '灯笼'], who: '贾探春',
      note: '脂批：「此探春远适之谶也。使此人不远去，将来事败，诸子孙不致流散也。」线一断，风筝就飞走了——她远嫁海疆，"千里东风一梦遥"。' },
    { q: '前身色相总无成，不听菱歌听佛经。<br>莫道此生沉黑海，性中自有大光明。',
      o: ['海灯', '木鱼', '香炉', '经卷'], who: '贾惜春',
      note: '脂批：「此惜春为尼之谶也。公府千金至缁衣乞食，宁不悲夫！」海灯是佛前长明之灯——判词里"独卧青灯古佛旁"，说的就是这个。' },
    { q: '朝罢谁携两袖烟，琴边衾里总无缘。<br>晓筹不用鸡人报，五夜无烦侍女添。<br>焦首朝朝还暮暮，煎心日日复年年。<br>光阴荏苒须当惜，风雨阴晴任变迁。',
      o: ['更香', '蜡烛', '熏炉', '油灯'], who: '薛宝钗',
      note: '谜底是计时的"更香"。香从这头烧到那头，"焦首""煎心"——她婚后守着一个心不在此的人，一年一年地熬。贾政的评语是："小小之人作此词句，更觉不祥。"' },
    { q: '猴子身轻站树梢。',
      o: ['荔枝', '核桃', '柿子', '石榴'], who: '贾母',
      note: '谜底荔枝，"立枝"之谐。脂批一针见血：「所谓树倒猢狲散是也。」全回最轻巧的一盏谜，藏着全书最重的一句谶语。' },
    { q: '身自端方，体自坚硬。<br>虽不能言，有言必应。',
      o: ['砚台', '镇纸', '笔筒', '印章'], who: '贾政',
      note: '脂批：「包藏贾府祖宗自身，\'必\'字隐\'笔\'字。」砚台方正坚硬、代人立言——正是贾政自许的"端方"，也是一个世家最后的体面。' },
    { q: '大哥有角只八个，二哥有角只两根。<br>大哥只在床上坐，二哥爱在房上蹲。',
      o: ['枕头与兽头', '箱笼与门环', '枕头与灯笼', '被褥与瓦当'], who: '贾环',
      note: '全场唯一被元春判"不通"的一首。枕头八角、屋脊兽头两角——才情高低，一句谜就分出来了。' }
  ];

  const RIDDLE_END =
    '<div style="font-size:13.5px;line-height:2;color:#e8dcc4;text-align:left">' +
    '八盏灯谜都猜过了。' +
    '<div style="margin-top:10px;color:#c9b48a">贾政心内沉思道：</div>' +
    '<div style="margin-top:6px;color:#f0e2c4">"娘娘所作爆竹，此乃一响而散之物；迎春所作算盘，是打动乱如麻；' +
    '探春所作风筝，乃飘飘浮荡之物；惜春所作海灯，一发清净孤独。' +
    '<b>今乃上元佳节，如何皆作此不祥之物为戏耶？</b>"</div>' +
    '<div style="margin-top:12px;color:#a8926a;font-size:12.5px">——第22回，一场家宴上的灯谜，把十二钗的结局都预言了一遍。' +
    '这一回的回目就叫"制灯谜贾政悲谶语"。</div></div>';

  let ridEl = null, ridIdx = 0;

  function ridBuild() {
    if (ridEl) return;
    ridEl = document.createElement('div');
    ridEl.id = 'riddle';
    ridEl.className = 'hidden';
    ridEl.innerHTML =
      '<div class="rbox">' +
        '<div class="rhead">灯 谜 会</div>' +
        '<div class="rsub">第22回 · 制灯谜贾政悲谶语</div>' +
        '<div class="lantern"><div class="rtext" id="rtext"></div></div>' +
        '<div class="ropt" id="ropt"></div>' +
        '<div class="rres hidden" id="rres"></div>' +
        '<button id="rnext" class="rnext hidden">下 一 盏</button>' +
        '<button id="rclose" class="rclose">✕</button>' +
      '</div>';
    document.body.appendChild(ridEl);
    document.getElementById('rclose').addEventListener('click', function () {
      ridEl.classList.add('hidden');
    });
    document.getElementById('rnext').addEventListener('click', function () {
      if (ridIdx >= RIDDLES.length) { ridEl.classList.add('hidden'); return; }
      ridRender();
    });
  }

  function ridRender() {
    const box = document.getElementById('ropt');
    const res = document.getElementById('rres');
    const nx = document.getElementById('rnext');
    if (ridIdx >= RIDDLES.length) {
      document.getElementById('rtext').innerHTML = '灯 尽 谜 残';
      document.querySelector('.lantern').style.display = 'none';
      box.innerHTML = '';
      res.className = 'rres';
      res.innerHTML = RIDDLE_END;
      nx.textContent = '合 上';
      nx.classList.remove('hidden');
      return;
    }
    document.querySelector('.lantern').style.display = '';
    const d = RIDDLES[ridIdx];
    document.getElementById('rtext').innerHTML = d.q;
    const opts = d.o.slice();
    for (let i = opts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = opts[i]; opts[i] = opts[j]; opts[j] = t;
    }
    box.innerHTML = opts.map(function (t) {
      return '<button data-t="' + t + '">' + t + '</button>';
    }).join('');
    res.classList.add('hidden');
    res.innerHTML = '';
    nx.classList.add('hidden');
    Array.prototype.forEach.call(box.querySelectorAll('button'), function (b) {
      b.addEventListener('click', function () {
        const pick = b.getAttribute('data-t');
        Array.prototype.forEach.call(box.querySelectorAll('button'), function (x) {
          x.disabled = true;
          if (x.getAttribute('data-t') === d.o[0]) x.classList.add('right');
        });
        if (pick !== d.o[0]) {
          b.classList.add('wrong');
          wrongAdd('灯谜', d.q.replace(/<br>/g, ' '), opts, opts.indexOf(d.o[0]), opts.indexOf(pick));
        }
        res.innerHTML = '<div class="w">谜底 · ' + d.o[0] + '　｜　作者 · ' + d.who + '</div>' +
          '<div style="margin-top:6px">' + d.note + '</div>';
        res.classList.remove('hidden');
        nx.textContent = (ridIdx === RIDDLES.length - 1) ? '看 结 语' : '下 一 盏';
        nx.classList.remove('hidden');
        ridIdx++;
      });
    });
  }

  function openRiddle() {
    ridBuild();
    ridIdx = 0;
    ridEl.classList.remove('hidden');
    ridRender();
  }

  document.getElementById('riddleBtn').addEventListener('click', openRiddle);

  /* ---------- 游园路线复原 · 第17回 ---------- */
  const TOUR = [
    { id: 'qinfang', plague: '沁芳', note: '桥上有亭，众人先拟"翼然""泻玉"，宝玉改题"沁芳"，贾政"拈髯点头不语"。' },
    { id: 'xiaoxiang', plague: '有凤来仪', note: '第一处行幸之所。宝玉驳了"淇水遗风""睢园雅迹"，题"有凤来仪"——元妃后赐名潇湘馆。' },
    { id: 'daoxiang', plague: '杏帘在望', note: '黄泥墙、茅屋、菜畦、酒幌，贾政说"勾起我归农之意"；宝玉再赐名"稻香村"。' },
    { id: 'hengyuan', plague: '蘅芷清芬', note: '院中无一株花，尽是香草藤萝，故曰"清芬"。' },
    { id: 'yihong', plague: '红香绿玉', note: '蕉棠两植。宝玉说"蕉棠两全"，题"红香绿玉"——元妃后改为"怡红快绿"。' }
  ];

  let tourEl = null, tourStep = 0, tourPts = [];

  function tourBuild() {
    if (tourEl) return;
    tourEl = document.createElement('div');
    tourEl.id = 'tour';
    tourEl.className = 'hidden';
    let spots = '';
    TOUR.forEach(function (t) {
      const sc = SCENES.filter(function (s) { return s.id === t.id; })[0];
      if (!sc) return;
      spots += '<div class="tspot" data-id="' + t.id + '" style="left:' + sc.map.x + '%;top:' + sc.map.y + '%">' +
        '<i></i><span class="n"></span><span class="nm">' + sc.name + '</span></div>';
    });
    tourEl.innerHTML =
      '<div class="tourbox">' +
        '<button class="rclose" id="tourclose">✕</button>' +
        '<div class="tourhead">游 园</div>' +
        '<div class="toursub">第17回 · 大观园试才题对额</div>' +
        '<div class="tourmap" id="tourmap">' +
          '<img id="tourimg" alt="">' +
          '<svg viewBox="0 0 100 100" preserveAspectRatio="none">' +
            '<polyline id="tourline" fill="none" stroke="#a8322a" stroke-width="2" ' +
            'stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke" points=""></polyline>' +
          '</svg>' +
          spots +
        '</div>' +
        '<div class="toursay" id="toursay"></div>' +
        '<button class="tourreset" id="tourreset">重 来</button>' +
      '</div>';
    document.body.appendChild(tourEl);
    document.getElementById('tourimg').src = document.getElementById('mapImg').src;
    document.getElementById('tourclose').addEventListener('click', function () {
      tourEl.classList.add('hidden');
    });
    document.getElementById('tourreset').addEventListener('click', function () { tourStart(); });
    Array.prototype.forEach.call(tourEl.querySelectorAll('.tspot'), function (el) {
      el.addEventListener('click', function () { tourPick(el.getAttribute('data-id'), el); });
    });
  }

  function tourStart() {
    tourStep = 0;
    tourPts = [];
    Array.prototype.forEach.call(tourEl.querySelectorAll('.tspot'), function (el) {
      el.classList.remove('done');
      el.querySelector('.n').textContent = '';
    });
    document.getElementById('tourline').setAttribute('points', '');
    const s = document.getElementById('toursay');
    s.className = 'toursay';
    s.textContent = '按贾政走过的顺序，依次点出这五处。';
  }

  function tourPick(id, el) {
    if (el.classList.contains('done')) return;
    const want = TOUR[tourStep];
    const say = document.getElementById('toursay');
    if (!want) return;
    if (id !== want.id) {
      say.className = 'toursay bad';
      say.textContent = '贾政没往这里走。想一下：进园先过假山，出洞口看见的第一座亭子是哪？';
      el.style.transform = 'translateX(3px)';
      setTimeout(function () { el.style.transform = ''; }, 120);
      return;
    }
    el.classList.add('done');
    el.querySelector('.n').textContent = String(tourStep + 1);
    const sc = SCENES.filter(function (s) { return s.id === id; })[0];
    tourPts.push(sc.map.x + ',' + sc.map.y);
    document.getElementById('tourline').setAttribute('points', tourPts.join(' '));
    tourStep++;
    if (tourStep === TOUR.length) {
      say.className = 'toursay';
      say.innerHTML = '这一趟走完了。五处题额依次是：' +
        TOUR.map(function (t, i) { return (i + 1) + '．' + t.plague; }).join('　') +
        '<div style="margin-top:8px;font-size:12.5px;color:#5d5140;line-height:1.8;text-align:left">' +
        '脂批在这里特意提醒：<b>"今贾政虽进的是正门，却行的是僻路……万勿以今日贾政所行之径，考其方向基址。"</b>' +
        '——所以这条线是<b>游览顺序</b>，不是地图上的方位。真要拿它去对园子的布局，就上当了。</div>';
    } else {
      say.className = 'toursay';
      say.textContent = '对了。第 ' + tourStep + ' 处是「' + want.plague + '」——' + want.note;
    }
  }

  function openTour() {
    tourBuild();
    tourEl.classList.remove('hidden');
    tourStart();
  }

  document.getElementById('tourBtn').addEventListener('click', openTour);

  /* ---------- 三场丧事 ---------- */
  const FUNERALS = [
    { no: '第 一 场', who: '秦可卿', hui: '第13—14回',
      rows: [
        ['棺 木', '樯木，帮底皆厚八寸，"纹若槟榔，味若檀麝，以手扣之，玎珰如金玉"'],
        ['来 历', '原系义忠亲王老千岁要的，因他"坏了事"，没人出价敢买；贾政劝用上等杉木即可，贾珍不听'],
        ['捐 官', '为贾蓉捐五品龙禁尉，戴权开价一千二百两，只为灵幡执事上好看'],
        ['仪 仗', '六十四名青衣请灵，四王八公路祭，北静王水溶亲至']
      ],
      quote: '一时只见宁府大殡浩浩荡荡、压地银山一般从北而至。',
      point: '一个<b>孙媳妇</b>，用了亲王的棺材，丈夫捐官只为灵幡上那几个字——这一场是<b>逾制</b>。' },
    { no: '第 二 场', who: '贾 敬', hui: '第63—64回',
      rows: [
        ['死 因', '在玄真观烧丹炼汞，吞金丹而死（"老爷宾天了"）'],
        ['儿 孙', '"贾珍下了马，和贾蓉放声大哭，从大门外便跪爬进来，至棺前稽颡泣血，直哭到天亮喉咙都哑了方住"'],
        ['实 情', '"贾珍贾蓉此时为礼法所拘，不免在灵旁藉草枕块，恨苦居丧。<b>人散后，仍乘空寻他小姨子们厮混。</b>"'],
        ['规 格', '天子额外恩旨，贾珍父子扶柩回籍']
      ],
      quote: '人散后，仍乘空寻他小姨子们厮混。',
      point: '哭得喉咙都哑了，转身就去鬼混。这一场是<b>虚礼</b>——排场还在，人已经空了。' },
    { no: '第 三 场', who: '贾 母', hui: '第110回',
      rows: [
        ['家 底', '抄家之后，银钱不继'],
        ['主 张', '贾政说"丧与其易，宁戚"，意思是不必糜费图好看'],
        ['人 情', '鸳鸯跪下求凤姐："必得求二奶奶体体面面的办一办才好"'],
        ['结 果', '凤姐"力诎失人心"，受邢夫人等挤兑，急怒吐血']
      ],
      quote: '"老太太的丧事，只要悲切才是真孝，不必糜费图好看的念头。"',
      point: '到了老太太，连"体面"都要一个丫头跪着去求。这一场是<b>办不起</b>。' }
  ];

  const SANG_FOOT =
    '<div class="sfoot-t">三场丧事，一条下坡路</div>' +
    '<div class="sfoot-b">第一场<b>逾制</b>——用得起亲王的棺材；<br>' +
    '第二场<b>虚礼</b>——排场还在，人空了；<br>' +
    '第三场<b>办不起</b>——连体面都要靠丫头去求。</div>' +
    '<div class="sfoot-n">曹雪芹把这一家人的死排成一把尺子。量的不是排场，是家运。' +
    '你要写"盛衰"这个主题，这三场就是最好的论据链。</div>';

  let sangEl = null;

  function sangBuild() {
    if (sangEl) return;
    sangEl = document.createElement('div');
    sangEl.id = 'sang';
    sangEl.className = 'hidden';
    let body = '';
    FUNERALS.forEach(function (f) {
      body += '<div class="sang">' +
        '<div class="sno">' + f.no + '</div>' +
        '<div class="swho">' + f.who + '<span>' + f.hui + '</span></div>' +
        '<div class="srows">' + f.rows.map(function (r) {
          return '<div class="srow"><b>' + r[0] + '</b>' + r[1] + '</div>';
        }).join('') + '</div>' +
        '<div class="squote">「' + f.quote + '」</div>' +
        '<div class="spoint">' + f.point + '</div>' +
        '</div>';
    });
    sangEl.innerHTML =
      '<div class="sangbox">' +
        '<button class="rclose" id="sangclose">✕</button>' +
        '<div class="sanghead">三 场 丧 事</div>' +
        '<div class="sangsub">同一家人，三代人的死 · 排场一级级掉下来</div>' +
        body +
        '<div class="sangfoot">' + SANG_FOOT + '</div>' +
      '</div>';
    document.body.appendChild(sangEl);
    document.getElementById('sangclose').addEventListener('click', function () {
      sangEl.classList.add('hidden');
    });
  }

  document.getElementById('sangBtn').addEventListener('click', function () {
    sangBuild();
    sangEl.classList.remove('hidden');
    sangEl.scrollTop = 0;
  });

  /* ---------- 玩法印章 ---------- */
  (function () {
    const dock = document.getElementById('dock');
    const dockBtn = document.getElementById('dockBtn');
    if (!dock || !dockBtn) return;
    let open = false;
    function setOpen(v) {
      open = v;
      if (v) dock.classList.add('open'); else dock.classList.remove('open');
      dockBtn.textContent = v ? '\u2715' : '梦';
    }
    dockBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(!open);
    });
    Array.prototype.forEach.call(dock.querySelectorAll('.docki'), function (b) {
      b.addEventListener('click', function () { setOpen(false); });
    });
    document.addEventListener('click', function (e) {
      if (open && !dock.contains(e.target)) setOpen(false);
    });
  })();


  /* ---------- 文课：炼字 · 回目 · 词语 ---------- */
  const LIANZI = [
    { s: '冷月', k: '葬', tail: '花魂', src: '第76回 · 林黛玉（与湘云联句）',
      bad: ['照', '埋', '伴'],
      why: '"葬"字最狠：月本无情，却给花魂办了一场葬礼。"照"只是物理作用，"埋"太重太实，"伴"又太温。一个"葬"字，把冷月写成了送葬的人。' },
    { s: '寒塘', k: '渡', tail: '鹤影', src: '第76回 · 史湘云',
      bad: ['过', '掠', '惊'],
      why: '"渡"兼有"渡过"与"渡化"两义，鹤影掠过水面，像被度去彼岸。"过"太直白，"掠"太急，"惊"更破坏了整句的静。' },
    { s: '绕堤柳', k: '借', tail: '三篙翠', src: '第17回 · 宝玉题沁芳亭联',
      bad: ['映', '带', '分'],
      why: '"借"把柳写活了——向水借来一段翠色。更妙的是下句"隔岸花**分**一脉香"用了"分"，上句若也"分"，一副对联里就撞了字。' },
    { s: '偷来梨蕊三分白，', k: '借', tail: '得梅花一缕魂', src: '第37回 · 林黛玉《咏白海棠》',
      bad: ['取', '学', '偷'],
      why: '上句已经用了"偷"（偷来梨蕊三分白），下句若再"偷"，重字。改"借"：一偷一借，白是偷来的形容，魂是借来的风神，两字各司其职。' },
    { s: '好风', k: '频', tail: '借力，送我上青云', src: '第70回 · 薛宝钗《临江仙·柳絮》',
      bad: ['凭', '多', '暗'],
      why: '"频"字见从容：不是偶然借一次风，是次次都借得着。"凭"太硬，"多"太俗，"暗"则带上了算计，宝钗不会用这种字。' },
    { s: '花谢花飞花', k: '满', tail: '天', src: '第27回 · 林黛玉《葬花吟》',
      bad: ['遍', '漫', '盈'],
      why: '"满"是铺天盖地、无处不在地落着；"遍"还带着范围感，"漫"太散，"盈"太重。三个"花"字叠下来，最后落在"满天"，声音也就散满了天。' },
    { s: '半卷湘帘半', k: '掩', tail: '门', src: '第37回 · 林黛玉《咏白海棠》',
      bad: ['关', '闭', '锁'],
      why: '两个"半"字已经把门写成半开半合，"掩"是虚掩、留一线——"关""锁"太实，"闭"太绝。虚掩的门，才进得去人，也才藏得住心事。' },
    { s: '一样花开为', k: '底', tail: '迟', src: '第38回 · 林黛玉《问菊》',
      bad: ['何', '甚', '几'],
      why: '"底"是"什么"，"为底"即"为什么"。三个近义词里只有"底"是真正的古语疑问词，"何"太熟、"甚"偏口语、"几"问数量。一个字见读书的底子。' },
    { s: '眼前道路无', k: '经纬', tail: '，皮里春秋空黑黄', src: '第38回 · 薛宝钗《螃蟹咏》',
      bad: ['高低', '方向', '规矩'],
      why: '"经纬"表面说螃蟹横行、没有纵横之路，实指世间是非不分。"皮里春秋"又是双关：壳里黑黄，人心里褒贬。全书最狠的一首讽刺诗。' },
    { s: '天尽头，何处有', k: '香丘', tail: '？', src: '第27回 · 林黛玉《葬花吟》',
      bad: ['花冢', '坟墓', '香坟'],
      why: '她给花找的归处不叫坟，叫丘；不叫埋，叫"香"。一个"香"字，把死也写成了干净的东西。' },
    { s: '满纸荒唐言，一把', k: '辛酸', tail: '泪', src: '第1回 · 作者自题',
      bad: ['悲伤', '凄凉', '苦痛'],
      why: '"辛酸"是味道，不是情绪。"满纸"对"一把"——纸是摊开的，泪是攥住的。一个量词，把写作和痛哭放在了一起。' },
    { s: '秋花', k: '惨淡', tail: '秋草黄', src: '第45回 · 林黛玉《秋窗风雨夕》',
      bad: ['凋零', '憔悴', '黯淡'],
      why: '"惨淡"写的是光，不是花——天色惨淡，花才显得惨淡。且与下句"黄"同属颜色一类。' },
    { s: '', k: '茜纱', tail: '窗下，我本无缘', src: '第79回 · 宝玉《芙蓉女儿诔》',
      bad: ['红纱', '碧纱', '纱窗'],
      why: '"茜纱"是茜草染的红纱，正是潇湘馆窗上的纱（第40回贾母还专门说过这纱）。一字点出这篇诔文表面祭晴雯、心里念的是黛玉。' },
    { s: '', k: '精华', tail: '欲掩料应难', src: '第48回 · 香菱《咏月》其三',
      bad: ['清光', '月华', '银辉'],
      why: '"精华"是月光，也是人的才。一个"掩"字——想遮也遮不住。说的既是月出云，也是香菱自己。' },
    { s: '绿蓑江上秋闻笛，', k: '红袖', tail: '楼头夜倚栏', src: '第48回 · 香菱《咏月》',
      bad: ['翠袖', '罗袖', '画袖'],
      why: '"绿蓑"对"红袖"，一渔一闺，一江一楼，颜色与身份全对上。香菱三首咏月，正是从"措词不雅"到"格调自高"的活教材。' }
  ];

  const HUIMU = [
    { a: '滴翠亭杨妃戏彩蝶', b: '埋香冢飞燕泣残红', hui: '第27回',
      bad: ['葬花冢飞燕泣残红', '埋香冢飞燕泣落红', '泣残红飞燕埋香冢'],
      why: '"埋香冢"对"滴翠亭"（动+名+名），"飞燕"对"杨妃"（人），"泣残红"对"戏彩蝶"（动+形+名）。而且杨妃、飞燕是借代：杨玉环丰腴，指宝钗；赵飞燕纤瘦，指黛玉——一"肥"一"瘦"，作者的态度藏在里面。' },
    { a: '撕扇子作千金一笑', b: '因麒麟伏白首双星', hui: '第31回',
      bad: ['撕扇子作千金一掷', '因麒麟伏白首夫妻', '为麒麟伏白首双星'],
      why: '"撕扇子"对"因麒麟"，"作"对"伏"，"千金一笑"对"白首双星"。注意是"因"不是"为"——麒麟是"因由"，不是目的。' },
    { a: '憨湘云醉眠芍药裀', b: '呆香菱情解石榴裙', hui: '第62回',
      bad: ['憨湘云醉卧芍药裀', '呆香菱情解石榴裙', '娇香菱情解石榴裙'],
      why: '"憨"对"呆"，"醉眠"对"情解"，"芍药裀"对"石榴裙"。两个字都是人物定评：湘云之憨、香菱之呆，一个动作就写尽了。' },
    { a: '林黛玉焚稿断痴情', b: '薛宝钗出闺成大礼', hui: '第97回',
      bad: ['林黛玉焚稿断痴心', '薛宝钗出阁成大礼', '林黛玉焚诗断痴情'],
      why: '一"焚稿"一"出闺"，一"断"一"成"，两个动作在同一回里同时发生。曹雪芹把最痛的事，写成了一副最工的对联。' },
    { a: '苦绛珠魂归离恨天', b: '病神瑛泪洒相思地', hui: '第98回',
      bad: ['苦绛珠魂归离恨天', '病神瑛泪洒相思地', '苦绛珠魂归太虚境'],
      why: '"绛珠"对"神瑛"（前世之名），"魂归"对"泪洒"，"离恨天"对"相思地"——天对地，一归一流，前世的债在这里结清。' },
    { a: '因讹成实元妃薨逝', b: '以假混真宝玉疯颠', hui: '第95回',
      bad: ['因讹成实元妃薨逝', '以假乱真宝玉疯颠', '因讹成真元妃薨逝'],
      why: '"因讹成实"对"以假混真"，"元妃"对"宝玉"，"薨逝"对"疯颠"。这一回里，一句谣言要了元春的命，一块假玉逼疯了宝玉——真假二字，是全书的骨头。' },
    { a: '史太君寿终归地府', b: '王凤姐力诎失人心', hui: '第110回',
      bad: ['史太君寿终归地府', '王凤姐力尽失人心', '史太君寿终归黄泉'],
      why: '"寿终"对"力诎"，"归地府"对"失人心"。一个是寿数到了，一个是威信用完了——贾母一死，凤姐的靠山也就没了。' },
    { a: '中乡魁宝玉却尘缘', b: '沐皇恩贾家延世泽', hui: '第119回',
      bad: ['中乡魁宝玉却红尘', '沐皇恩贾府延世泽', '中举人宝玉却尘缘'],
      why: '"中乡魁"对"沐皇恩"，"宝玉"对"贾家"，"却尘缘"对"延世泽"。一个人走了，一个家族续上了——这就是全书最后一副对联的收法。' },
    { a: '贾宝玉初试云雨情', b: '刘姥姥一进荣国府', hui: '第6回',
      bad: ['刘姥姥初进荣国府', '刘姥姥一进大观园', '贾宝玉初试风雨情'],
      why: '"初试"对"一进"；"云雨情"对"荣国府"，三字对三字。一雅一俗，一内一外，全书两条线从这一回同时开始。' },
    { a: '恋风流情友入家塾', b: '起嫌疑顽童闹学堂', hui: '第9回',
      bad: ['恋风情情友入家塾', '起疑心顽童闹学堂', '恋风流情友入家学'],
      why: '"恋风流"对"起嫌疑"，"情友"对"顽童"，"入家塾"对"闹学堂"——一入一闹，斯文扫地。' },
    { a: '王熙凤毒设相思局', b: '贾天祥正照风月鉴', hui: '第12回',
      bad: ['王熙凤巧设相思局', '贾天祥误照风月鉴', '王熙凤毒设相思计'],
      why: '"毒设"对"正照"——一个设局，一个照镜。贾瑞到死都以为镜子里是真的，这才是"正照"二字的狠处。' },
    { a: '秦可卿死封龙禁尉', b: '王熙凤协理宁国府', hui: '第13回',
      bad: ['秦可卿死封龙禁卫', '秦可卿病封龙禁尉', '王熙凤协理荣国府'],
      why: '"死封"是讽刺：人死了才封官。"协理宁国府"对"死封龙禁尉"，一死一权。' },
    { a: '贾元春才选凤藻宫', b: '秦鲸卿夭逝黄泉路', hui: '第16回',
      bad: ['贾元春才选凤仪宫', '秦鲸卿夭逝黄泉道', '贾元春德选凤藻宫'],
      why: '"才选"对"夭逝"，"凤藻宫"对"黄泉路"——一入宫，一入土，同在一回。' },
    { a: '大观园试才题对额', b: '荣国府归省庆元宵', hui: '第17回',
      bad: ['大观园试才题对联', '荣国府归省庆上元', '大观园试才题匾额'],
      why: '"试才"考的是宝玉，"归省"回的是元春。一回之内，父子与姐弟两种关系都写到了。' },
    { a: '情切切良宵花解语', b: '意绵绵静日玉生香', hui: '第19回',
      bad: ['意绵绵静日玉生烟', '情深深良宵花解语', '情切切良夜花解语'],
      why: '"情切切"对"意绵绵"，"花解语"对"玉生香"——花指袭人，玉指黛玉。全书最温柔的一回。' },
    { a: '醉金刚轻财尚义侠', b: '痴女儿遗帕惹相思', hui: '第24回',
      bad: ['醉金刚重财尚义侠', '痴女儿遗帕惹情思', '醉金刚轻财尚侠义'],
      why: '"轻财"对"遗帕"，"尚义侠"对"惹相思"——市井汉子与小丫鬟，一侠一痴。' },
    { a: '蜂腰桥设言传心事', b: '潇湘馆春困发幽情', hui: '第26回',
      bad: ['蜂腰桥设辞传心事', '潇湘馆春困发幽思', '蜂腰桥设言传心曲'],
      why: '"设言"对"春困"，"传心事"对"发幽情"。小红与黛玉，两种心事在同一回里各自生长。' },
    { a: '蒋玉菡情赠茜香罗', b: '薛宝钗羞笼红麝串', hui: '第28回',
      bad: ['薛宝钗羞带红麝串', '蒋玉菡情赠茜罗香', '蒋玉菡情赠茜香罗帕'],
      why: '"茜香罗"对"红麝串"，都是贴身之物，都藏着情。一赠一笼。' },
    { a: '宝钗借扇机带双敲', b: '龄官划蔷痴及局外', hui: '第30回',
      bad: ['宝钗借扇语带双敲', '龄官画蔷痴及局外', '宝钗借扇机带双关'],
      why: '"借扇"是借题发挥，"划蔷"是痴心写地。一个机锋，一个痴情。' },
    { a: '秋爽斋偶结海棠社', b: '蘅芜苑夜拟菊花题', hui: '第37回',
      bad: ['秋爽斋偶起海棠社', '蘅芜苑夜拟菊花诗', '秋爽斋偶结海棠诗'],
      why: '"偶结"对"夜拟"，"海棠社"对"菊花题"。白天起社，夜里拟题，郑重得像个正经事。' }
  ];

  const CIYU = [
    { w: '作耗', x: '这屋里你就作耗，如何使得！', s: '第20回 · 李嬷嬷骂袭人',
      d: '闹腾、捣乱、生事。不是"消耗"的耗，是"作乱"的意思。第74回探春骂王善保家的也用："天天作耗，专管生事。"' },
    { w: '排揎', x: '只拣软的排揎。', s: '第20回 · 宝玉',
      d: '数落、责骂、拿人出气。同回还有"排揎宝玉的人"。注意读音是 pái xuān，不是"排遣"。' },
    { w: '左不过', x: '左不过是那些金玉铜磁没处撂的古董。', s: '第27回 · 宝玉',
      d: '无非、反正、不过是。全书出现十几次，是当时的口语，相当于今天的"左右不过是"。' },
    { w: '行动', x: '二爷近来气大的很，行动就给脸子瞧。', s: '第31回 · 晴雯',
      d: '动不动、时常。这是古今差别最大的一个词：今天"行动"是动词（做事），书里是副词（动不动）。第47回宝玉说"行动就有人知道"，同义。' },
    { w: '不防', x: '偏生晴雯上来换衣服，不防又把扇子失了手跌在地下。', s: '第31回',
      d: '没提防、不小心。"不防"是"不曾防备"，不是"不妨"（不要紧）。两字之别，一个是不小心，一个是没关系。' },
    { w: '好歹', x: '他们做不得主，你好歹求求太太去。', s: '第77回 · 司棋',
      d: '无论如何、不管怎样。也可指"好与坏"（"不知好歹"）。这里是前者，带着哀求的语气。' },
    { w: '越性', x: '如今越性了不得了。', s: '第74回 · 探春',
      d: '索性、越发、干脆。"越性"= 越过本性、索性豁出去。同回李嬷嬷也有"越性今儿没了规矩，闹一场子"。' },
    { w: '体面', x: '必得求二奶奶体体面面的办一办才好。', s: '第110回 · 鸳鸯',
      d: '光彩、有排场、不失身份。今天说"体面"多指面貌整洁或面子，书里更强调"办得像个样子"，是钱与身份撑起来的东西。' },
    { w: '偏生', x: '偏生晴雯上来换衣服，不防又把扇子失了手跌在地下。', s: '第31回',
      d: '偏偏、恰巧（多含不凑巧之意）。今天说"偏偏"，书里多用"偏生"，语气里带一点无奈。' },
    { w: '逶迤', x: '命贾珍在前引导，自己扶了宝玉，逶迤进入山口。', s: '第17回',
      d: '曲折绵延地走。wēi yí，形容路径弯弯曲曲、一路行去的样子，不是"蜿蜒"那么简单，还带行走的动作。' },
    { w: '撺掇', x: '为什么不当着老爷，撺掇叫你也作诗谜儿。', s: '第22回 · 凤姐',
      d: '从旁怂恿、鼓动别人去做某事。cuān duo。凤姐这句话是打趣宝玉：怎么没人撺掇老爷也考考你。' },
    { w: '梯己', x: '我的梯己两件，收到如今，没给宝玉看见过。', s: '第40回 · 贾母',
      d: '同"体己"，指私房、私下积攒的、贴心的东西。"梯己话"就是私房话。贾母拿自己的私房给宝钗添置摆设。' },
    { w: '开脸', x: '既这么样，就开了脸，明放他在屋里岂不好？', s: '第36回 · 凤姐',
      d: '旧时把丫鬟收作妾的一个仪式：改换发型、绞去脸上汗毛，才算正式有了名分。所以下文说"明放他在屋里"。' },
    { w: '跟前人', x: '如今作了跟前人，那袭人该劝的也不敢十分劝了。', s: '第36回 · 王夫人',
      d: '指被收房的丫鬟，也就是妾。"屋里人""跟前人"都是这个意思，比"姨娘"低一层。' },
    { w: '经济', x: '该常常的会会这些为官做宰的人们，谈谈讲讲些仕途经济的学问。', s: '第32回 · 湘云劝宝玉',
      d: '不是今天的"economy"。书里指"经世济民"的学问，也就是读书做官、应酬世务那一套。宝玉最厌这两个字，谁提他跟谁急。' },
    { w: '一径', x: '宝玉顺着脚一径来至一个院门前，看那凤尾森森，龙吟细细。', s: '第26回',
      d: '一直、径直，不停顿地。写出宝玉是不假思索地走过去——所以他才会"顺着脚"走到潇湘馆，可见两处并不远。' }
  ];

  let wenEl = null, wenTab = 'lianzi';
  const wenState = { lianzi: 0, huimu: 0, ciyu: -1 };

  function wenBuild() {
    if (wenEl) return;
    wenEl = document.createElement('div');
    wenEl.id = 'wen';
    wenEl.className = 'hidden';
    wenEl.innerHTML =
      '<div class="wenbox">' +
        '<button class="rclose" id="wenclose">✕</button>' +
        '<div class="wenhead">文 课</div>' +
        '<div class="wensub">炼字 · 回目 · 词语</div>' +
        '<div class="wentabs">' +
          '<button data-t="lianzi" class="on">炼 字</button>' +
          '<button data-t="huimu">回 目</button>' +
          '<button data-t="ciyu">词 语</button>' +
        '</div>' +
        '<div id="wenbody"></div>' +
      '</div>';
    document.body.appendChild(wenEl);
    document.getElementById('wenclose').addEventListener('click', function () {
      wenEl.classList.add('hidden');
    });
    Array.prototype.forEach.call(wenEl.querySelectorAll('.wentabs button'), function (b) {
      b.addEventListener('click', function () {
        wenTab = b.getAttribute('data-t');
        Array.prototype.forEach.call(wenEl.querySelectorAll('.wentabs button'), function (x) {
          x.classList.toggle('on', x === b);
        });
        wenRender();
      });
    });
  }

  function wenRender() {
    const body = document.getElementById('wenbody');
    if (wenTab === 'lianzi') return wenLianzi(body);
    if (wenTab === 'huimu') return wenHuimu(body);
    return wenCiyu(body);
  }

  let wenLastOpts = [];
  function wenOptions(body, correct, bad, cls) {
    const opts = [correct].concat(bad);
    for (let i = opts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = opts[i]; opts[i] = opts[j]; opts[j] = t;
    }
    wenLastOpts = opts;
    return '<div class="' + cls + '">' + opts.map(function (t) {
      return '<button data-t="' + t + '">' + t + '</button>';
    }).join('') + '</div>';
  }

  function wenLianzi(body) {
    const i = wenState.lianzi;
    if (i >= LIANZI.length) {
      body.innerHTML = '<div class="wendone">六字都炼过了。<br><span>炼字考的不是背，是问一句：换掉这个字，句子少了什么？</span>' +
        '<button class="wreplay" id="wreplay1">从 头 再 炼</button></div>';
      document.getElementById('wreplay1').addEventListener('click', function () {
        wenState.lianzi = 0; wenRender();
      });
      return;
    }
    const d = LIANZI[i];
    body.innerHTML =
      '<div class="wstep">' + (i + 1) + ' / ' + LIANZI.length + '</div>' +
      '<div class="wq">' + d.s + '<span class="blank">□</span>' + d.tail + '</div>' +
      '<div class="wsrc">' + d.src + '</div>' +
      '<div class="wask">哪一个字最好？</div>' +
      wenOptions(body, d.k, d.bad, 'wopts') +
      '<div class="wres hidden" id="wres"></div>' +
      '<button class="wnext hidden" id="wnext">下 一 题</button>';
    const box = body.querySelector('.wopts');
    Array.prototype.forEach.call(box.querySelectorAll('button'), function (b) {
      b.addEventListener('click', function () {
        const pick = b.getAttribute('data-t');
        Array.prototype.forEach.call(box.querySelectorAll('button'), function (x) {
          x.disabled = true;
          if (x.getAttribute('data-t') === d.k) x.classList.add('right');
        });
        if (pick !== d.k) {
          b.classList.add('wrong');
          wrongAdd('炼字', d.s + '□' + d.tail, wenLastOpts, wenLastOpts.indexOf(d.k), wenLastOpts.indexOf(pick));
        }
        const res = document.getElementById('wres');
        res.innerHTML = '<div class="wv">原字 · <b>' + d.k + '</b></div><div>' + d.why + '</div>';
        res.classList.remove('hidden');
        document.getElementById('wnext').classList.remove('hidden');
      });
    });
    document.getElementById('wnext').addEventListener('click', function () {
      wenState.lianzi++; wenRender();
    });
  }

  function wenHuimu(body) {
    const i = wenState.huimu;
    if (i >= HUIMU.length) {
      body.innerHTML = '<div class="wendone">八副对子都对完了。<br><span>回目是全书最精炼的地方——一副对联，就把一回的因果说完了。</span>' +
        '<button class="wreplay" id="wreplay2">再 来 一 遍</button></div>';
      document.getElementById('wreplay2').addEventListener('click', function () {
        wenState.huimu = 0; wenRender();
      });
      return;
    }
    const d = HUIMU[i];
    body.innerHTML =
      '<div class="wstep">' + (i + 1) + ' / ' + HUIMU.length + '　' + d.hui + '</div>' +
      '<div class="wq2">' + d.a + '</div>' +
      '<div class="wask">下一句是？</div>' +
      wenOptions(body, d.b, d.bad, 'wopts wlong') +
      '<div class="wres hidden" id="wres"></div>' +
      '<button class="wnext hidden" id="wnext">下 一 题</button>';
    const box = body.querySelector('.wopts');
    Array.prototype.forEach.call(box.querySelectorAll('button'), function (b) {
      b.addEventListener('click', function () {
        const pick = b.getAttribute('data-t');
        Array.prototype.forEach.call(box.querySelectorAll('button'), function (x) {
          x.disabled = true;
          if (x.getAttribute('data-t') === d.b) x.classList.add('right');
        });
        if (pick !== d.b) {
          b.classList.add('wrong');
          wrongAdd('回目 · ' + d.hui, d.a, wenLastOpts, wenLastOpts.indexOf(d.b), wenLastOpts.indexOf(pick));
        }
        const res = document.getElementById('wres');
        res.innerHTML = '<div class="wv">下联 · ' + d.b + '</div><div>' + d.why + '</div>';
        res.classList.remove('hidden');
        document.getElementById('wnext').classList.remove('hidden');
      });
    });
    document.getElementById('wnext').addEventListener('click', function () {
      wenState.huimu++; wenRender();
    });
  }

  function wenCiyu(body) {
    body.innerHTML = '<div class="wtip">点一个词，看它在书里是什么意思。</div>' +
      CIYU.map(function (c, i) {
        return '<div class="wcard" data-i="' + i + '">' +
          '<div class="ww">' + c.w + '</div>' +
          '<div class="wx">' + c.x + '<span>' + c.s + '</span></div>' +
          '<div class="wd">' + c.d + '</div>' +
        '</div>';
      }).join('');
    Array.prototype.forEach.call(body.querySelectorAll('.wcard'), function (el) {
      el.addEventListener('click', function () { el.classList.toggle('open'); });
    });
  }

  function openWen() {
    wenBuild();
    wenEl.classList.remove('hidden');
    Array.prototype.forEach.call(wenEl.querySelectorAll('.wentabs button'), function (x) {
      x.classList.toggle('on', x.getAttribute('data-t') === wenTab);
    });
    wenRender();
    wenEl.scrollTop = 0;
  }

  document.getElementById('wenBtn').addEventListener('click', openWen);

  /* ---------- 书中此刻 · 时令场景 ---------- */
  const MOMENTS = [
    { era: 'sheng', scene: 'ouxiang', season: 'autumn', times: ['noon', 'dusk'], sn: '秋', hui: '第38回', title: '螃蟹宴',
      time: '秋 · 桂花开时 · 午间', img: 'assets/mt_01.webp',
      people: '史湘云（做东）· 贾母 · 王夫人 · 凤姐 · 宝钗 · 黛玉 · 宝玉',
      lines: [
        ['凤姐', '藕香榭已经摆下了，那山坡下两颗桂花开的又好，河里的水又碧清，坐在河当中亭子上岂不敞亮。'],
        ['宝玉', '今日持螯赏桂，亦不可无诗。'],
        ['宝钗', '眼前道路无经纬，皮里春秋空黑黄。'],
        ['黛玉', '满纸自怜题素怨，片言谁解诉秋心。']
      ],
      note: '这是全书最热闹的一天。湘云一个客人，反做了东道；螃蟹、桂花、菊花诗，样样齐备。宝钗那两句咏蟹，骂尽了世上横行的人；黛玉那两句咏菊，写尽了自己。' },

    { era: 'sheng', scene: 'xiaoxiang', season: 'spring', times: ['morning'], sn: '春', hui: '第27回', title: '葬花',
      time: '春末 · 芒种 · 上午', img: 'assets/mt_02.webp',
      people: '林黛玉 · 贾宝玉',
      lines: [
        ['黛玉', '花谢花飞花满天，红消香断有谁怜？'],
        ['黛玉', '侬今葬花人笑痴，他年葬侬知是谁？'],
        ['宝玉', '（在山坡上听见，不觉恸倒，怀里兜的落花撒了一地）'],
        ['黛玉', '试看春残花渐落，便是红颜老死时。']
      ],
      note: '别人都在饯花神，只有她去埋花。这一日之后，她和宝玉的嫌隙解了，可《葬花吟》里那句"他年葬侬知是谁"，已经把她自己的结局写完了。' },

    { era: 'shuai', scene: 'yihong', season: 'summer', times: ['night'], sn: '夏', hui: '第63回', title: '群芳夜宴',
      time: '夏 · 宝玉生日当夜 · 夜深', img: 'assets/mt_03.webp',
      people: '宝玉 · 黛玉 · 宝钗 · 湘云 · 探春 · 李纨 · 香菱 · 芳官等',
      lines: [
        ['宝玉', '咱们也该行个令才好。'],
        ['麝月', '（掣签）开到荼蘼花事了。'],
        ['黛玉', '（掣签）风露清愁……莫怨东风当自嗟。'],
        ['众人', '（抽花名签，各人所得，竟都合着日后的命）']
      ],
      note: '这是大观园最后一次无忧的夜宴。从此回之后，抄检、逐人、离散，一件接一件。所以这一夜的每支签都像预言。' },

    { era: 'sheng', scene: 'longcui', season: 'winter', times: ['noon', 'dusk'], sn: '冬', hui: '第41回', title: '栊翠庵品茶',
      time: '冬 · 雪后 · 午后', img: 'assets/mt_04.webp',
      people: '妙玉 · 黛玉 · 宝钗 · 宝玉',
      lines: [
        ['妙玉', '这是五年前我在玄墓蟠香寺住着，收的梅花上的雪。'],
        ['黛玉', '这也是旧年的雨水？'],
        ['妙玉', '你这么个人，竟是大俗人，连水也尝不出来。'],
        ['妙玉', '（把刘姥姥用过的成窑杯弃置不要）']
      ],
      note: '一杯茶，把妙玉的"洁"和"孤"全写尽了。她嫌刘姥姥脏的那只杯子，日后正是她"终陷淖中"的伏笔——最洁的人，落最脏的结局。' },

    { era: 'sheng', scene: 'qiushuang', season: 'autumn', times: ['noon', 'dusk'], sn: '秋', hui: '第37回', title: '海棠社',
      time: '秋 · 白海棠初开 · 午后', img: 'assets/mt_05.webp',
      people: '探春 · 李纨 · 宝钗 · 黛玉 · 迎春 · 惜春 · 宝玉',
      lines: [
        ['探春', '我不算俗，偶然起个念头，写了几个帖儿试一试。'],
        ['李纨', '我是定了"稻香老农"，再无人占的。'],
        ['探春', '（替黛玉取号）以后都叫他作"潇湘妃子"就完了。'],
        ['迎春', '（限韵）就是门字韵，"十三元"了。']
      ],
      note: '诗社是这一群女孩子自己立的规矩：李纨社长，迎春限韵，惜春监场。这是大观园最"文"的一天，也是她们短暂自治的开始。' },

    { era: 'sheng', scene: 'qinfang', season: 'spring', times: ['morning', 'noon'], sn: '春', hui: '第23回', title: '共读西厢',
      time: '春 · 三月中浣 · 白日', img: 'assets/mt_06.webp',
      people: '贾宝玉 · 林黛玉',
      lines: [
        ['宝玉', '好妹妹，若论你，我是不怕的。你看了，好歹别告诉别人去。'],
        ['宝玉', '我就是个"多愁多病身"，你就是那"倾国倾城貌"。'],
        ['黛玉', '（红了脸）你这该死的胡说！'],
        ['宝玉', '（忙赔不是）若有心欺负你，明儿我掉在池子里，教个癞头鼋吞了去。']
      ],
      note: '沁芳闸桥边，桃花底下。这是全书最轻的一天，两个人还是少男少女，还没有眼泪。后面的所有事，都是从这儿开始的。' },

    { era: 'shuai', scene: 'qiushuang', season: 'autumn', times: ['night'], sn: '秋', hui: '第74回', title: '抄检',
      time: '秋 · 夜深 · 园中抄检', img: 'assets/mt_07.webp',
      people: '王熙凤 · 王善保家的 · 探春 · 惜春 · 迎春 · 李纨',
      lines: [
        ['探春', '我们的丫头自然都是些贼，我就是头一个窝主。既如此，先来搜我的箱柜。'],
        ['探春', '你们今日早起不曾议论甄家，自己家里好好的抄家，果然今日真抄了。咱们也渐渐的来了。'],
        ['探春', '可知这样大族人家，若从外头杀来，一时是杀不死的……必须先从家里自杀自灭起来，才能一败涂地！'],
        ['王善保家的', '（越众向前，拉起探春的衣襟一掀）连姑娘身上我都翻了，果然没有什么。'],
        ['探春', '（只听"拍"的一声，王家的脸上早着了探春一掌）你是什么东西，敢来拉扯我的衣裳！']
      ],
      note: '抄检不是外人来抄，是自己人抄自己人。探春那一掌打在王善保家的脸上，说的却是整个贾府——"必须先从家里自杀自灭起来，才能一败涂地"。这一夜之后，园子里的人一个接一个地走。' },

    { era: 'shuai', scene: 'ouxiang', season: 'autumn', times: ['night'], sn: '秋', hui: '第76回', title: '中秋联诗',
      time: '中秋 · 月夜 · 凹晶馆水边', img: 'assets/mt_08.webp',
      people: '林黛玉 · 史湘云',
      lines: [
        ['黛玉', '（见池中一个黑影）是个什么东西？敢是个鬼？'],
        ['湘云', '（弯腰拾了块石片打去，只听那黑影里嘎然一声，却飞起一个大白鹤来，直往藕香榭去了）'],
        ['湘云', '窗灯焰已昏。寒塘渡鹤影。'],
        ['黛玉', '（又叫好，又跺足）了不得，这鹤真是助他的了！'],
        ['黛玉', '（只看天，不理他，半日，猛然笑道）冷月葬花魂。'],
        ['湘云', '诗固新奇，只是太颓丧了些。你现病着，不该作此过于清奇诡谲之语。']
      ],
      note: '中秋这一夜，园子里已经散了大半：赏月的人病的病、走的走，最后只剩她们两个在水边联诗。"寒塘渡鹤影，冷月葬花魂"——一句写湘云漂泊，一句写黛玉自己。' },

    { era: 'sheng', scene: 'daguang', season: 'winter', times: ['night'], sn: '冬', hui: '第18回', title: '元妃省亲',
      time: '正月十五 · 上元 · 夜', img: 'assets/mt_09.webp',
      people: '贾元春 · 贾母 · 王夫人 · 贾政 · 宝玉 · 众姊妹',
      lines: [
        ['贾妃', '（在轿内看园中如此豪华，默默叹息奢华过费）'],
        ['贾妃', '当日既送我到那不得见人的去处，好容易今日回家娘儿们一会，不说说笑笑，反倒哭起来。'],
        ['贾妃', '（命传笔砚，择其几处最喜者赐名）有凤来仪，赐名曰潇湘馆。红香绿玉，改作怡红快绿。'],
        ['贾妃', '以后不可太奢，此皆过分之极。'],
        ['贾妃', '（临去，再四叮咛）倘明岁天恩仍许归省，万不可如此奢华靡费了。']
      ],
      note: '全书最盛的一夜，也是元春唯一一次回家。园子为她修了整整一年，灯火通明到"帐舞龙蟠，帘飞彩凤"；可她一进轿子就想的是"奢华过费"，见了亲人先说"当日既送我到那不得见人的去处"。末了一句"倘明岁"，脂批说，一个"倘"字，就是"不再之谶"——她再没有回来过。' },

    { era: 'mid', scene: '', place: '贾母上房', season: 'winter', times: ['night'], sn: '冬', hui: '第22回', title: '宝钗生日 · 点戏',
      time: '正月二十一 · 夜 · 贾母上房', img: 'assets/mt_14.webp',
      people: '贾母 · 薛宝钗 · 王熙凤 · 林黛玉 · 贾宝玉',
      lines: [
        ['宝钗', '（贾母先叫她点，推让一遍，无法，只得点了一折《西游记》）'],
        ['凤姐', '（点了一出《刘二当衣》——贾母喜热闹，更喜谑笑科诨）'],
        ['黛玉', '（让薛姨妈、让王夫人，让了一圈，方点了一出。书里不题何戏）'],
        ['宝钗', '（席上又点一出《鲁智深醉闹五台山》）慢搵英雄泪，相离处士家……赤条条来去无牵挂。'],
        ['黛玉', '（向宝玉）安静看戏罢，还没唱《山门》，你倒《妆疯》了。']
      ],
      note: '三个人点三出戏，性格全出来了：宝钗先看老太太要听什么，凤姐只要笑声，黛玉让了一圈，最后点了什么，作者故意不写——戚本批：“不题何戏，妙！盖黛玉不喜看戏也。”而宝钗那出《寄生草》里一句“赤条条来去无牵挂”，当夜就让宝玉悟了禅机。' },

    { era: 'mid', scene: 'yihong', season: 'summer', times: ['noon', 'dusk'], sn: '夏', hui: '第31回', title: '端午撕扇',
      time: '端阳 · 午间 · 怡红院', img: 'assets/mt_10.webp',
      people: '贾宝玉 · 晴雯 · 袭人',
      lines: [
        ['晴雯', '（失手跌折了扇股）要踢要打凭爷去。就是跌了扇子，也是平常的事。'],
        ['宝玉', '蠢才，蠢才！将来怎么样？明日你自己当家立事，难道也是这么顾前不顾后的？'],
        ['晴雯', '既这么说，你就拿扇子来我撕。我最喜欢撕的。'],
        ['宝玉', '（笑着递过扇子）撕得好，再撕响些。']
      ],
      note: '端阳这一日，满屋子人都不自在：金钏的事刚过，宝钗淡淡的，王夫人不理人。独有晴雯撕扇那几声脆响，把一屋子的闷气撕开了。宝玉说“千金难买一笑”。' },

    { era: 'mid', scene: 'qinfang', season: 'spring', times: ['noon', 'dusk'], sn: '春', hui: '第58回', title: '藕官烧纸',
      time: '清明 · 园中杏子阴 · 午后', img: 'assets/mt_11.webp',
      people: '藕官 · 芳官 · 贾宝玉',
      lines: [
        ['藕官', '（在杏子阴下烧纸钱，被婆子撞见，扭住不放）'],
        ['宝玉', '（忙遮掩）他并没烧纸钱，原是林姑娘叫他来烧那烂字纸的。'],
        ['芳官', '他祭的是死了的菂官。他两个常做夫妻，虽是假的，倒比真的还恩爱。'],
        ['藕官', '便只是不把死的丢过不提，便是情深意重了。']
      ],
      note: '全书正面写两个女孩子之间的情，只此一处。说这话的是个唱戏的女孩子，说完之后，宝玉“又是欢喜，又是悲叹，又称奇道绝”。' },

    { era: 'mid', scene: '', place: '宁国府 · 宗祠', season: 'winter', times: ['night'], sn: '冬', hui: '第53回', title: '除夕祭宗祠',
      time: '除夕 · 夜 · 宁国府', img: 'assets/mt_12.webp',
      people: '贾母 · 贾敬 · 贾赦 · 贾政 · 贾珍 · 合族',
      lines: [
        ['原文', '槛以外，槛以内，是男女分界处；仪门以外，仪门以内，是主仆分界处。'],
        ['原文', '献帛献爵择其人，应昭应穆从其讳，是一篇绝大典制文字。'],
        ['原文', '最高妙是“神主看不真切”一句。'],
        ['戚批', '除夕祭宗祠一题极博大，元宵开夜宴一题极富丽，拟此二题于一回中，早令人惊心动魄。']
      ],
      note: '这一回前半祭宗祠，后半开夜宴。一个家族的秩序与排场，全在这两场里写完。而看到这一切的，是初来乍到的宝琴。' },

    { era: 'mid', scene: 'daguang', season: 'autumn', times: ['noon', 'dusk'], sn: '秋', hui: '第71回', title: '八旬之庆',
      time: '八月初三 · 贾母寿辰', img: 'assets/mt_13.webp',
      people: '贾母 · 贾赦 · 贾政 · 贾珍 · 贾琏 · 合族亲友',
      lines: [
        ['原文', '因今岁八月初三日乃贾母八旬之庆……议定于七月二十八日起至八月初五日止，荣宁两处齐开筵宴。'],
        ['原文', '宁国府中单请官客，荣国府中单请堂客。'],
        ['原文', '大观园中收拾出缀锦阁并嘉荫堂等几处大地方来作退居。'],
        ['原文', '二十八日请皇亲驸马王公诸公主郡主王妃国君太君夫人等，二十九日便是阁下都府督镇及诰命等……']
      ],
      note: '八天宴席，一天一拨客，从皇亲排到亲友。这是贾府最后一次大排场——就在这同一回的下半段，尤氏受了气，凤姐当众受窘。' }
  ];

  let momentEl = null;

  function momentBadgeBuild() {
    let b = document.getElementById('mBadge');
    if (b) return b;
    b = document.createElement('button');
    b.id = 'mBadge';
    b.className = 'hidden';
    document.body.appendChild(b);
    return b;
  }

  function momentCheck(i) {
    try {
      const b = momentBadgeBuild();
      if (!mapView.classList.contains('hidden')) { b.classList.add('hidden'); return; }
      const sc = SCENES[i];
      const m = MOMENTS.filter(function (x) {
        return x.scene === sc.id && x.season === season && x.times.indexOf(ttime) >= 0;
      })[0];
      if (!m) { b.classList.add('hidden'); return; }
      b.innerHTML = '<em>书中此刻</em>' + m.title;
      b.classList.remove('hidden');
      b.onclick = function () { openMoment(m); };
    } catch (e) { }
  }

  function momentBuild() {
    if (momentEl) return;
    momentEl = document.createElement('div');
    momentEl.id = 'moment';
    momentEl.className = 'hidden';
    document.body.appendChild(momentEl);
  }

  function openMoment(m) {
    momentBuild();
    const sc = SCENES.filter(function (s) { return s.id === m.scene; })[0];
    momentEl.innerHTML =
      '<div class="mbox">' +
        '<div class="mimg"><img src="' + m.img + '" alt=""><button class="rclose" id="mclose">✕</button></div>' +
        '<div class="mbody">' +
          '<div class="mtag">书 中 此 刻</div>' +
          '<div class="mtitle">' + m.title + '</div>' +
          '<div class="msub">' + m.hui + '　·　' + (sc ? sc.name : (m.place || '')) + '　·　' + m.time + '</div>' +
          '<div class="mpeople">' + m.people + '</div>' +
          '<div class="mlines">' + m.lines.map(function (l) {
            return '<div class="mline"><b>' + l[0] + '</b><span>' + l[1] + '</span></div>';
          }).join('') + '</div>' +
          '<div class="mnote">' + m.note + '</div>' +
          '<div class="mtap" id="mtap">轻 点 屏 幕 · 听 下 一 句</div>' +
        '</div>' +
      '</div>';

    const lns = momentEl.querySelectorAll('.mline');
    const nt = momentEl.querySelector('.mnote');
    const tap = document.getElementById('mtap');
    let step = 0;

    function advance() {
      if (step < lns.length) {
        lns[step].classList.add('show');
        step++;
        if (step >= lns.length && tap) tap.textContent = '轻 点 屏 幕 · 看 解 读';
        return;
      }
      if (nt && !nt.classList.contains('show')) {
        nt.classList.add('show');
        if (tap) tap.classList.add('hidden');
      }
    }

    const closeBtn = document.getElementById('mclose');
    function doClose(ev) {
      if (ev) { ev.stopPropagation(); ev.preventDefault(); }
      momentEl.classList.add('hidden');
    }
    closeBtn.addEventListener('click', doClose);
    closeBtn.addEventListener('pointerdown', doClose);

    momentEl.onclick = function (ev) {
      const t = ev.target;
      if (t && t.closest && t.closest('#mclose')) { doClose(); return; }
      if (t === momentEl) { doClose(); return; }
      advance();
    };

    momentEl.classList.remove('hidden');
    momentEl.scrollTop = 0;
    advance();
  }

  document.getElementById('seasonBtn').addEventListener('click', function () {
    setTimeout(function () { momentCheck(active); }, 30);
  });
  document.getElementById('timeBtn').addEventListener('click', function () {
    setTimeout(function () { momentCheck(active); }, 30);
  });

  /* ---------- 原段描写 · 文言实词虚词 ---------- */
  const YWEN = {
    qinfang: {
      src: '第17回 · 贾政游园，宝玉题"沁芳"', title: '沁芳亭',
      text: '说着，进入石洞来。只见佳木茏葱，奇花闪灼，一带清流，从花木深处曲折泻于石隙之下。再进数步，渐向北边，平坦宽豁，两边飞楼插空，雕甍绣槛，皆隐于山坳树杪之间。俯而视之，则清溪泻雪，石磴穿云，白石为栏，环抱池沿，石桥三港，兽面衔吐。桥上有亭。',
      qs: [
        { q: '"佳木茏葱"中"茏葱"的意思是？', o: ['草木茂盛青翠', '香气浓郁', '高大挺拔', '杂乱丛生'], a: 0,
          e: '"茏葱"形容草木青翠茂盛。"茏"本指草名，引申为草木丛生之貌。' },
        { q: '"皆隐于山坳树杪之间"中"杪"指？', o: ['树梢', '树根', '山脚', '墙头'], a: 0,
          e: '"杪"读 miǎo，树枝的末端，即树梢。' },
        { q: '"清溪泻雪"的"泻"字，妙在何处？', o: ['写水从高处急流而下，白如雪', '写水很冷', '写水声很大', '写水色发白'], a: 0,
          e: '"泻"是水从高处急冲而下；"雪"形容水花洁白。四字写尽一股急流的形与色，也照应"石隙之下"的高度。' },
        { q: '"雕甍绣槛"中"甍"指什么？', o: ['屋脊', '屋檐', '窗格', '门楣'], a: 0, e: '"甍"读 méng，屋脊。雕花的屋脊、彩绘的栏杆，都隐在山坳树梢之间——越写华美，越显得藏得深。' }
      ]
    },
    xiaoxiang: {
      src: '第17回 · 贾政游园，宝玉题"有凤来仪"', title: '潇湘馆',
      text: '忽抬头看见前面一带粉垣，里面数楹修舍，有千百竿翠竹遮映。入门便是曲折游廊，阶下石子漫成甬路。上面小小两三间房舍，一明两暗，里面都是合着地步打就的床几椅案。从里间房内又得一小门，出去则是后院，有大株梨花兼着芭蕉。后院墙下忽开一隙，得泉一派，开沟仅尺许，灌入墙内，绕阶缘屋至前院，盘旋竹下而出。',
      qs: [
        { q: '"数楹修舍"中"楹"本指什么？', o: ['厅堂前的柱子，引申为房屋一间', '门框', '窗棂', '屋檐'], a: 0,
          e: '"楹"是柱子，古时以柱计屋，一楹即一间。"数楹"就是几间。' },
        { q: '"得泉一派"中"派"的意思是？', o: ['水的支流', '派人', '气派', '分配'], a: 0,
          e: '"派"在这里指水的分支、一股。"一派"即一股泉水。' },
        { q: '"绕阶缘屋至前院"中"缘"的意思是？', o: ['沿着、顺着', '因为', '缘分', '攀爬'], a: 0,
          e: '"缘"作动词，沿着。水绕着台阶、顺着屋子流到前院——一个"缘"字，水就有了路径。' },
        { q: '"上面小小两三间房舍，一明两暗"中"一明两暗"说的是？', o: ['房舍的格局：中间明亮、两侧幽暗', '一天里的光线变化', '人的心境', '颜色的深浅'], a: 0, e: '旧式房屋常作三间：中间是明间，采光好、待客用；两侧是暗间，作卧室。七个字，连房子的格局都交代清楚了。' }
      ]
    },
    daoxiang: {
      src: '第17回 · 宝玉题"杏帘在望"', title: '稻香村',
      text: '倏尔青山斜阻。转过山怀中，隐隐露出一带黄泥筑就墙，墙头上皆稻茎掩护。有几百株杏花，如喷火蒸霞一般。里面数楹茅屋。外面却是桑、榆、槿、柘，各色树稚新条，随其曲折，编就两溜青篱。篱外山坡之下，有一土井，旁有桔槔辘轳之属。下面分畦列亩，佳蔬菜花，漫然无际。',
      qs: [
        { q: '"倏尔青山斜阻"中"倏尔"的意思是？', o: ['忽然', '缓慢地', '长久地', '渐渐地'], a: 0,
          e: '"倏尔"读 shū ěr，忽然、转眼之间，写景物的骤然转换。' },
        { q: '"旁有桔槔辘轳之属"中"属"的意思是？', o: ['类、等', '属于', '归属', '连接'], a: 0,
          e: '"之属"即"之类"。"桔槔"是汲水的杠杆，"辘轳"是绞盘，都是井上打水的器具。' },
        { q: '"分畦列亩，佳蔬菜花，漫然无际"的"漫然"形容？', o: ['广阔无边', '随意散乱', '模糊不清', '缓慢生长'], a: 0,
          e: '"漫然"是弥漫、望不到边的样子。一畦一亩的菜地铺展开去，正是贾政"归农之意"的由来。' },
        { q: '"下面分畦列亩"中"畦"指？', o: ['田园中分成的小块', '水沟', '田埂', '篱笆'], a: 0, e: '"畦"读 qí，田地里划分的小块。一畦一亩，才有"漫然无际"的样子。' }
      ]
    },
    hengyuan: {
      src: '第17回 · 宝玉题"蘅芷清芬"', title: '蘅芜苑',
      text: '忽迎面突出插天的大玲珑山石来，四面群绕各式石块，竟把里面所有房屋悉皆遮住，而且一株花木也无。只见许多异草：或有牵藤的，或有引蔓的，或垂山巅，或穿石隙，甚至垂檐绕柱，萦砌盘阶，或如翠带飘摇，或如金绳盘屈，或实若丹砂，或花如金桂，味芬气馥，非花香之可比。',
      qs: [
        { q: '文中连用多个"或"字，如"或垂山巅，或穿石隙"，这里的"或"意为？', o: ['有的', '或者', '有时', '或许'], a: 0,
          e: '八个"或"字都是"有的"，构成排比，写异草生长的各种姿态。脂批说这种写法学自韩愈《南山诗》。' },
        { q: '"味芬气馥"中"馥"的意思是？', o: ['香气浓烈', '花朵芬芳', '甘甜', '微苦'], a: 0,
          e: '"馥"读 fù，香气浓郁。"芬"与"馥"同义连用，加重语气。' },
        { q: '"非花香之可比"中"之"的用法是？', o: ['用在主谓之间，取消句子独立性', '相当于"的"', '相当于"往"', '代词，指异草'], a: 0,
          e: '"花香"（主）与"可比"（谓）之间加"之"，取消句子独立性，使整个短语作"非"的宾语。这是文言虚词"之"最典型的用法之一。' },
        { q: '"萦砌盘阶"中"砌"指？', o: ['台阶', '墙壁', '石块', '花坛'], a: 0, e: '"砌"在这里是名词，台阶。异草缠着台阶、绕着石阶往上爬——四个字写尽了"垂檐绕柱"的野气。' }
      ]
    },
    yihong: {
      src: '第17回 · 宝玉题"红香绿玉"', title: '怡红院',
      text: '只见这几间房内收拾的与别处不同，竟分不出间隔来的。原来四面皆是雕空玲珑木板，或"流云百蝠"，或"岁寒三友"，或山水人物，或翎毛花卉，或集锦，或博古，或万福万寿，各种花样，皆是名手雕镂，五彩销金嵌宝的。一隔一隔，或有贮书处，或有设鼎处，或安置笔砚处，或供花设瓶、安放盆景处。其隔各式各样，或天圆地方，或葵花蕉叶，或连环半壁。真是花团锦簇，剔透玲珑。倏尔五色纱糊就，竟系小窗；倏尔彩绫轻覆，竟系幽户。',
      qs: [
        { q: '"竟分不出间隔来的"中"间隔"的意思是？', o: ['隔断、隔扇', '时间上的间隔', '空间距离', '缝隙'], a: 0,
          e: '这里的"间隔"是名词，指房内起分隔作用的木板隔断（隔扇），不是今天"间隔多久"的意思。' },
        { q: '"倏尔五色纱糊就"中"就"的意思是？', o: ['完成、成', '靠近', '就是', '于是'], a: 0,
          e: '"糊就"即"糊成"。"就"作补语，表示动作完成。下一句"彩绫轻覆"的"覆"与之对举。' },
        { q: '"倏尔……倏尔……"连用，在文中的作用是？', o: ['写目力所及应接不暇，突出精巧多变', '表示时间很长', '表示犹豫', '表示对比'], a: 0,
          e: '两个"倏尔"紧接，写人眼在屋内来回看，一时是窗、一时是门——应接不暇，才显出这屋子的"玲珑"与"分不出间隔"来。' },
        { q: '"五彩销金嵌宝"中"销金"的意思是？', o: ['用金粉涂饰', '熔掉金子', '消耗金钱', '镶嵌金片'], a: 0, e: '"销金"是工艺，指以金粉或金线装饰。与"嵌宝"连用，写这屋子奢华到无处不金。' }
      ]
    },
    ouxiang: {
      src: '第38回 · 湘云做东螃蟹宴', title: '藕香榭',
      text: '原来这藕香榭盖在池中，四面有窗，左右有曲廊可通，亦是跨水接岸，后面又有曲折竹桥暗接。众人上了竹桥，凤姐忙上来搀着贾母，口里说："老祖宗只管迈大步走，不相干的，这竹子桥规矩是咯吱咯喳的。"',
      qs: [
        { q: '"亦是跨水接岸"中"亦"的意思是？', o: ['也', '又', '却', '就'], a: 0,
          e: '"亦"是"也"，表示与前文"左右有曲廊可通"并列的另一特点。' },
        { q: '"后面又有曲折竹桥暗接"中"暗"的意思是？', o: ['隐蔽地、不显眼地', '黑暗', '暗中谋划', '夜晚'], a: 0,
          e: '"暗接"是从不显眼处接过去，写竹桥藏于景物之中。与"柳暗花明"的"暗"同义，都是"不显露"。' },
        { q: '"亦是跨水接岸"中"跨"的意思是？', o: ['横跨、架在上面', '骑', '越过', '占据'], a: 0, e: '"跨水"是横架在水面上。一个"跨"字，水榭的姿态就出来了。' },
        { q: '"这竹子桥规矩是咯吱咯喳的"中"规矩"的意思是？', o: ['照例、向来如此', '规则', '规矩老实', '方圆'], a: 0, e: '这里的"规矩"是副词，"照例、向来"。凤姐不是在讲道理，是在宽慰贾母：这桥一向这么响，不妨事。' }
      ]
    },
    qiushuang: {
      src: '第40回 · 贾母两宴大观园', title: '秋爽斋',
      text: '探春素喜阔朗，这三间屋子并不曾隔断。当地放着一张花梨大理石大案，案上磊着各种名人法帖，并数十方宝砚，各色笔筒，笔海内插的笔如树林一般。那一边设着斗大的一个汝窑花囊，插着满满的一囊水晶球儿的白菊。西墙上当中挂着一大幅米襄阳《烟雨图》，左右挂着一副对联，乃是颜鲁公墨迹。',
      qs: [
        { q: '"探春素喜阔朗"中"素"的意思是？', o: ['一向、平素', '朴素', '白色', '素质'], a: 0,
          e: '"素"作副词，一向、平素。这一句是给整个屋子定调：阔朗，是她性格的外化。' },
        { q: '"案上磊着各种名人法帖"中"磊"的意思是？', o: ['堆叠', '磊落', '石块', '陈列'], a: 0,
          e: '"磊"本指石头累积，这里作动词，一层层堆着。与下文"笔如树林一般"连读，才见其多而不乱。' },
        { q: '"笔海内插的笔如树林一般"中"笔海"指？', o: ['大笔筒', '砚台', '书箱', '放笔的架子'], a: 0,
          e: '"笔海"是收笔的大器皿，形如筒而大，故称"海"。一屋子法帖、宝砚、笔海，正合探春的"阔朗"。' },
        { q: '"案上磊着各种名人法帖"中"法帖"指？', o: ['名家书法的拓本或印本', '法令文书', '请帖', '公文'], a: 0, e: '"法帖"是供临摹的名家书迹拓本。一屋子法帖、宝砚、笔海，正是探春"阔朗"的实证。' }
      ]
    },
    longcui: {
      src: '第41回 · 贾母携刘姥姥至栊翠庵', title: '栊翠庵',
      text: '至院中见花木繁盛。妙玉亲自捧了一个海棠花式雕漆填金云龙献寿的小茶盘，里面放一个成窑五彩小盖钟，捧与贾母。贾母道："我不吃六安茶。"妙玉笑说："知道。这是老君眉。"贾母接了，又问是什么水。妙玉笑回："是旧年蠲的雨水。"',
      qs: [
        { q: '"是旧年蠲的雨水"中"蠲"的意思是？', o: ['澄清、洁净', '煮沸', '储存', '舀取'], a: 0,
          e: '"蠲"读 juān，本义除去、清洁，这里指把水澄清后收存。一个字，见妙玉对"水"的讲究。' },
        { q: '"成窑五彩小盖钟"中"钟"指？', o: ['带盖的茶杯', '时钟', '铜钟', '酒壶'], a: 0,
          e: '古时"钟"可指杯、碗一类器皿，这里是有盖的小茶盏。不是计时的钟。' },
        { q: '"至院中见花木繁盛"中"繁盛"的意思是？', o: ['茂盛', '繁华热闹', '种类多', '颜色艳'], a: 0,
          e: '"繁盛"指草木茂密。贾母随即说"到底是他们修行的人，没事常常修理"——一句话就把庵里的清冷写反了。' },
        { q: '"我不吃六安茶"中"吃"的意思是？', o: ['喝', '咀嚼', '承受', '消耗'], a: 0, e: '古汉语中"吃"可兼指饮，"吃茶"即喝茶。今天方言里还留着这个用法。' }
      ]
    },
    ziling: {
      src: '第79回 · 宝玉徘徊紫菱洲', title: '紫菱洲',
      text: '天天到紫菱洲一带地方徘徊瞻顾，见其轩窗寂寞，屏帐翛然，不过有几个该班上夜的老妪。再看那岸上的蓼花苇叶，池内的翠荇香菱，也都觉摇摇落落，似有追忆故人之态，迥非素常逞妍斗色之可比。',
      qs: [
        { q: '"徘徊瞻顾"中"瞻顾"的意思是？', o: ['前后张望', '仰望', '回头看', '照料'], a: 0,
          e: '"瞻"是往前看，"顾"是回头看，合起来是四下张望、舍不得走的样子。' },
        { q: '"屏帐翛然"中"翛然"的意思是？', o: ['空寂、萧条', '整齐', '飘逸', '忽然'], a: 0,
          e: '"翛"读 xiāo，"翛然"形容空荡冷落。人一走，连屏帐都空了。' },
        { q: '"迥非素常逞妍斗色之可比"中"迥"的意思是？', o: ['远、大不相同', '回头', '高远', '回转'], a: 0,
          e: '"迥非"即"远不是"。当年是"逞妍斗色"，如今是"摇摇落落"——同一片池子，人散了，景也就变了。' },
        { q: '"池内的翠荇香菱"中"荇"是？', o: ['一种水生植物', '菱角', '荷叶', '芦苇'], a: 0, e: '"荇"读 xìng，即荇菜，浮在水面的圆叶水生植物。"翠荇"与"香菱"对举，一绿一香。' }
      ]
    },
    nuanxiang: {
      src: '第50回 · 贾母至暖香坞看画', title: '暖香坞',
      text: '过了藕香榭，穿入一条夹道，东西两边皆有过街门，门楼上里外皆嵌着石头匾。来至当中，进了向南的正门，从里边游廊过去，便是惜春卧房，门斗上有"暖香坞"三个字。早有几个人打起猩红毡帘，已觉温香拂脸。',
      qs: [
        { q: '"门斗上有……三个字"中"门斗"指？', o: ['门框上方的横木处，可悬匾', '门把手', '门前的石阶', '门内的屏风'], a: 0,
          e: '"门斗"是门框上方的横枋，正可挂匾。所以匾上三个字就在进门抬头处。' },
        { q: '"已觉温香拂脸"中"拂"的意思是？', o: ['轻轻擦过', '拂拭', '违背', '吹动'], a: 0,
          e: '"拂"是轻轻掠过。还没进门，暖香先扑到脸上——一个"拂"字，把"暖香坞"三字坐实了。' },
        { q: '"打起猩红毡帘"中"打起"的意思是？', o: ['掀起', '打起精神', '敲打', '编织'], a: 0,
          e: '"打起"是掀起、挑起。猩红毡帘一掀，才有下文"温香拂脸"，动作与嗅觉是连着的。' },
        { q: '"穿入一条夹道"中"夹道"指？', o: ['两边有墙的狭长通道', '交叉的路口', '山间小路', '长廊'], a: 0, e: '"夹道"是两边夹着的窄路。要穿夹道、过街门、进正门、走游廊，才到惜春卧房——一路写来，暖香坞藏得多深。' }
      ]
    }
  };

  let ywEl = null, ywCur = null, ywMode = 'text', ywQi = 0;

  function ywBuild() {
    if (ywEl) return;
    ywEl = document.createElement('div');
    ywEl.id = 'yw';
    ywEl.className = 'hidden';
    document.body.appendChild(ywEl);
    ywEl.addEventListener('click', function (e) {
      if (e.target === ywEl) ywEl.classList.add('hidden');
    });
  }

  function ywRender() {
    const d = YWEN[ywCur];
    if (!d) {
      const sc = SCENES.filter(function (s) { return s.id === ywCur; })[0];
      ywEl.innerHTML = '<div class="ywbox">' +
        '<button class="rclose" id="ywclose">✕</button>' +
        '<div class="ywtag">原 段 描 写</div>' +
        '<div class="ywtitle">' + (sc ? sc.name : '此处') + '</div>' +
        '<div class="ywend">这一处的原文还没有录入。<br><span>已收录：沁芳亭、潇湘馆、稻香村、蘅芜苑、怡红院、藕香斋、秋爽斋、栊翠庵、紫菱洲、暖香坞。</span></div>' +
        '</div>';
      document.getElementById('ywclose').addEventListener('click', function (ev) {
        ev.stopPropagation();
        ywEl.classList.add('hidden');
      });
      return;
    }
    let inner = '<button class="rclose" id="ywclose">✕</button>' +
      '<div class="ywtag">原 段 描 写</div>' +
      '<div class="ywtitle">' + d.title + '</div>' +
      '<div class="ywsrc">' + d.src + '</div>';

    if (ywMode === 'text') {
      inner += '<div class="ywtxt">' + d.text + '</div>' +
        '<button class="ywbtn" id="ywgo">考 考 你 · ' + d.qs.length + ' 题</button>';
    } else if (ywMode === 'quiz') {
      const q = d.qs[ywQi];
      inner += '<div class="ywstep">' + (ywQi + 1) + ' / ' + d.qs.length + '</div>' +
        '<div class="ywq">' + q.q + '</div>' +
        '<div class="ywo" id="ywo">' + q.o.map(function (t, i) {
          return '<button data-i="' + i + '">' + t + '</button>';
        }).join('') + '</div>' +
        '<div class="ywe hidden" id="ywe"></div>' +
        '<button class="ywbtn hidden" id="ywnext">' +
          (ywQi === d.qs.length - 1 ? '回 到 原 文' : '下 一 题') + '</button>';
    } else {
      inner += '<div class="ywend">这段原文的题都答完了。<br><span>读景物的句子，不妨先找动词——动词准了，景就活了。</span></div>' +
        '<button class="ywbtn" id="ywback">再 读 一 遍 原 文</button>';
    }

    ywEl.innerHTML = '<div class="ywbox">' + inner + '</div>';
    document.getElementById('ywclose').addEventListener('click', function (ev) {
      ev.stopPropagation();
      ywEl.classList.add('hidden');
    });

    if (ywMode === 'text') {
      document.getElementById('ywgo').addEventListener('click', function () {
        ywMode = 'quiz'; ywQi = 0; ywRender();
      });
    } else if (ywMode === 'quiz') {
      const q = d.qs[ywQi];
      const box = document.getElementById('ywo');
      Array.prototype.forEach.call(box.querySelectorAll('button'), function (b) {
        b.addEventListener('click', function () {
          const k = parseInt(b.getAttribute('data-i'), 10);
          Array.prototype.forEach.call(box.querySelectorAll('button'), function (x, i) {
            x.disabled = true;
            if (i === q.a) x.classList.add('right');
          });
          if (k !== q.a) {
            b.classList.add('wrong');
            wrongAdd('原段 · ' + d.title, q.q, q.o, q.a, k);
          }
          const e = document.getElementById('ywe');
          e.textContent = (k === q.a ? '答对了。' : '答错了。') + q.e;
          e.classList.remove('hidden');
          document.getElementById('ywnext').classList.remove('hidden');
        });
      });
      document.getElementById('ywnext').addEventListener('click', function () {
        ywQi++;
        if (ywQi >= d.qs.length) ywMode = 'end';
        ywRender();
      });
    } else {
      document.getElementById('ywback').addEventListener('click', function () {
        ywMode = 'text'; ywRender();
      });
    }
  }

  function openYuanwen(id) {
    ywBuild();
    ywCur = id; ywMode = 'text'; ywQi = 0;
    ywEl.classList.remove('hidden');
    ywRender();
    ywEl.scrollTop = 0;
  }

  document.getElementById('ywBtn').addEventListener('click', function () {
    openYuanwen(SCENES[active].id);
  });

  /* ---------- 错题本 ---------- */
  let WRONG = [];
  try {
    const w = JSON.parse(localStorage.getItem('hlm_wrong') || '[]');
    if (Object.prototype.toString.call(w) === '[object Array]') WRONG = w;
  } catch (e) { WRONG = []; }

  function wrongSave() {
    try { localStorage.setItem('hlm_wrong', JSON.stringify(WRONG)); } catch (e) { }
  }

  function wrongAdd(src, q, opts, ai, pi) {
    if (pi === ai) return;
    const id = src + '|' + q;
    for (let i = 0; i < WRONG.length; i++) {
      if (WRONG[i].id === id) {
        WRONG[i].n = 2;
        WRONG[i].pick = pi;
        WRONG[i].ts = Date.now();
        wrongSave();
        return;
      }
    }
    WRONG.push({ id: id, src: src, q: q, o: opts.slice(), a: ai, pick: pi, n: 2, ts: Date.now() });
    wrongSave();
  }

  function wrongRight(id) {
    for (let i = 0; i < WRONG.length; i++) {
      if (WRONG[i].id === id) {
        WRONG[i].n--;
        if (WRONG[i].n <= 0) WRONG.splice(i, 1);
        wrongSave();
        return;
      }
    }
  }

  let woEl = null, woMode = 'list', woIdx = 0, woList = [], woShown = false;

  function woBuild() {
    if (woEl) return;
    woEl = document.createElement('div');
    woEl.id = 'wrong';
    woEl.className = 'hidden';
    document.body.appendChild(woEl);
    woEl.addEventListener('click', function (e) {
      if (e.target === woEl) woEl.classList.add('hidden');
    });
  }

  function woRender() {
    woBuild();
    if (woMode === 'list') return woListRender();
    return woQuizRender();
  }

  function woListRender() {
    let inner = '<button class="rclose" id="woclose">✕</button>' +
      '<div class="wotag">错 题 本</div>' +
      '<div class="wosub">这里收着你答错过的题 · 答对两次才会移出去</div>';

    if (!WRONG.length) {
      inner += '<div class="woempty">本子上是空的。<br><span>去文课、灯谜、原段描写里答几道题，错的会自己进来。</span></div>';
    } else {
      inner += '<div class="wolist">' + WRONG.map(function (w, i) {
        return '<div class="woitem">' +
          '<div class="wosrc">' + w.src + '<em>还需答对 ' + w.n + ' 次</em></div>' +
          '<div class="woq">' + w.q.replace(/<br>/g, ' ') + '</div>' +
          '<div class="woans">正确 · ' + w.o[w.a] + '</div>' +
          (w.pick >= 0 ? '<div class="wopick">你选过 · ' + w.o[w.pick] + '</div>' : '') +
        '</div>';
      }).join('') + '</div>' +
      '<button class="wobtn" id="wostart">开 始 复 习（' + WRONG.length + ' 题）</button>';
    }

    woEl.innerHTML = '<div class="wobox">' + inner + '</div>';
    document.getElementById('woclose').addEventListener('click', function (ev) {
      ev.stopPropagation();
      woEl.classList.add('hidden');
    });
    const st = document.getElementById('wostart');
    if (st) st.addEventListener('click', function () {
      woList = WRONG.slice();
      for (let i = woList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const t = woList[i]; woList[i] = woList[j]; woList[j] = t;
      }
      woIdx = 0; woMode = 'quiz'; woRender();
    });
  }

  function woQuizRender() {
    if (woIdx >= woList.length) {
      woEl.innerHTML = '<div class="wobox">' +
        '<button class="rclose" id="woclose">✕</button>' +
        '<div class="wotag">错 题 本</div>' +
        '<div class="woempty">这一轮过完了。<br><span>' +
        (WRONG.length ? '还有 ' + WRONG.length + ' 题要再答对一次。' : '本子清空了。') + '</span></div>' +
        '<button class="wobtn" id="woback">回 到 错 题 本</button>' +
        '</div>';
      document.getElementById('woclose').addEventListener('click', function (ev) {
        ev.stopPropagation(); woEl.classList.add('hidden');
      });
      document.getElementById('woback').addEventListener('click', function () {
        woMode = 'list'; woRender();
      });
      return;
    }

    const w = woList[woIdx];
    const order = w.o.map(function (t, i) { return i; });
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = order[i]; order[i] = order[j]; order[j] = t;
    }

    woEl.innerHTML = '<div class="wobox">' +
      '<button class="rclose" id="woclose">✕</button>' +
      '<div class="wotag">复 习</div>' +
      '<div class="wostep">' + (woIdx + 1) + ' / ' + woList.length + '　·　' + w.src + '</div>' +
      '<div class="woq2">' + w.q + '</div>' +
      '<div class="woo" id="woo">' + order.map(function (oi) {
        return '<button data-oi="' + oi + '">' + w.o[oi] + '</button>';
      }).join('') + '</div>' +
      '<div class="wores hidden" id="wores"></div>' +
      '<button class="wobtn hidden" id="wonext">下 一 题</button>' +
      '</div>';

    document.getElementById('woclose').addEventListener('click', function (ev) {
      ev.stopPropagation(); woEl.classList.add('hidden');
    });

    const box = document.getElementById('woo');
    Array.prototype.forEach.call(box.querySelectorAll('button'), function (b) {
      b.addEventListener('click', function () {
        const oi = parseInt(b.getAttribute('data-oi'), 10);
        Array.prototype.forEach.call(box.querySelectorAll('button'), function (x) {
          x.disabled = true;
          if (parseInt(x.getAttribute('data-oi'), 10) === w.a) x.classList.add('right');
        });
        const ok = oi === w.a;
        if (!ok) b.classList.add('wrong');
        if (ok) {
          wrongRight(w.id);
          document.getElementById('wores').innerHTML = '答对了。再答对一次就移出本子。';
        } else {
          for (let i = 0; i < WRONG.length; i++) {
            if (WRONG[i].id === w.id) { WRONG[i].n = 2; wrongSave(); break; }
          }
          document.getElementById('wores').innerHTML = '又错了。正确答案是「' + w.o[w.a] + '」。';
        }
        document.getElementById('wores').classList.remove('hidden');
        document.getElementById('wonext').classList.remove('hidden');
      });
    });
    document.getElementById('wonext').addEventListener('click', function () {
      woIdx++; woRender();
    });
  }

  function openWrong() {
    woBuild();
    woMode = 'list';
    woEl.classList.remove('hidden');
    woRender();
    woEl.scrollTop = 0;
  }

  document.getElementById('wrongBtn').addEventListener('click', openWrong);

  /* ---------- 时令册 ---------- */
  let szEl = null;

  function szBuild() {
    if (szEl) return;
    szEl = document.createElement('div');
    szEl.id = 'seasonbook';
    szEl.className = 'hidden';
    document.body.appendChild(szEl);
    szEl.addEventListener('click', function (e) {
      if (e.target === szEl) szEl.classList.add('hidden');
    });
  }

  function szRender() {
    szBuild();
    const CUR_S = SEASON_CN[season], CUR_T = TIME_CN[ttime];
    let body = '<button class="rclose" id="szclose">✕</button>' +
      '<div class="sztag">时 令 册</div>' +
      '<div class="szsub">《红楼梦》里的几个日子 · 现在：' + CUR_S + ' · ' + CUR_T + '</div>';

    const mine = MOMENTS.map(function (m, i) { return { m: m, i: i }; })
      .sort(function (a, b) {
        return parseInt(a.m.hui.replace(/[^0-9]/g, ''), 10) - parseInt(b.m.hui.replace(/[^0-9]/g, ''), 10);
      });

    if (mine.length) {
      body += mine.map(function (x) {
        const m = x.m, i = x.i;
        const sc = SCENES.filter(function (s) { return s.id === m.scene; })[0];
        const ok = m.season === season && m.times.indexOf(ttime) >= 0;
        const times = m.times.map(function (t) { return TIME_CN[t]; }).join('、');
        return '<div class="szcard' + (ok ? ' now' : '') + '" data-i="' + i + '">' +
          '<div class="szh"><b>' + m.title + '</b>' +
            '<em>' + (sc ? sc.name : (m.place || '')) + '　' + SEASON_CN[m.season] + ' · ' + times + '</em></div>' +
          '<div class="szx">' + m.hui + '　·　' + m.time + '</div>' +
          '<div class="szgo">' + (ok ? '此刻正可一见 →' : '点此前往 →') + '</div>' +
        '</div>';
      }).join('');
    } else {
      body += '<div class="szcard" style="cursor:default"><div class="szh"><b>—</b>' +
        '<em>' + ERA_CN[era] + '</em></div>' +
        '<div class="szx">这一段，园子里已经没有日子可过了。</div></div>';
    }

    body += '<div class="sznote">只有季节与时辰都对上，园子里才会浮出那枚"书中此刻"的牌子。也可以直接从这里过去。</div>';

    szEl.innerHTML = '<div class="szbox">' + body + '</div>';
    document.getElementById('szclose').addEventListener('click', function (ev) {
      ev.stopPropagation();
      szEl.classList.add('hidden');
    });
    Array.prototype.forEach.call(szEl.querySelectorAll('.szcard'), function (el) {
      el.addEventListener('click', function () {
        szGo(MOMENTS[parseInt(el.getAttribute('data-i'), 10)]);
      });
    });
  }

  function szGo(m) {
    season = m.season;
    ttime = m.times[0];
    applyWeather();
    szEl.classList.add('hidden');
    if (!m.scene) { openMoment(m); return; }   /* 园外的事，只读不导航 */
    const idx = SCENES.map(function (s) { return s.id; }).indexOf(m.scene);
    if (idx >= 0) {
      enterScene(idx);
      setTimeout(function () { openMoment(m); }, 260);
    } else {
      openMoment(m);
    }
  }

  document.getElementById('szBtn').addEventListener('click', function () {
    szBuild();
    szEl.classList.remove('hidden');
    szRender();
    szEl.scrollTop = 0;
  });


  /* ---------- 与人物说话（原文台词） ---------- */
  const TALKS = {
    '林黛玉': {
      alias: '潇湘妃子',
      topics: [
        { q: '你为什么总说些刺人的话？',
          a: [['我为的是我的心。', '第20回']] },
        { q: '你和宝玉，到底是怎么回事？',
          a: [['你死了倒不值什么，只是丢下了什么金，又是什么麒麟，可怎么样呢？', '第32回']] },
        { q: '你为什么要葬花？',
          a: [['侬今葬花人笑痴，他年葬侬知是谁？', '第27回《葬花吟》']] }
      ]
    },
    '薛宝钗': {
      alias: '蘅芜君',
      topics: [
        { q: '你怎么看读书这件事？',
          a: [['男人们读书明理，辅国治民，这便好了。', '第42回']] },
        { q: '你的志向是什么？',
          a: [['好风频借力，送我上青云。', '第70回《临江仙·柳絮》']] },
        { q: '你为什么总这么冷静？',
          a: [['淡极始知花更艳。', '第37回《咏白海棠》']] }
      ]
    },
    '贾宝玉': {
      alias: '怡红公子',
      topics: [
        { q: '你为什么说女儿是水做的？',
          a: [['女儿是水做的骨肉，男人是泥做的骨肉。我见了女儿，我便清爽；见了男子，便觉浊臭逼人。', '第2回']] },
        { q: '你为什么不爱读那些书？',
          a: [['好好的一个清净洁白女儿，也学得钓名沽誉，入了国贼禄鬼之流。', '第36回']] },
        { q: '要是林妹妹死了呢？',
          a: [['你死了，我做和尚去。', '第30回']] }
      ]
    },
    '王熙凤': {
      alias: '凤辣子',
      topics: [
        { q: '你初见黛玉时说了什么？',
          a: [['天下真有这样标致的人物，我今儿才算见了！', '第3回']] },
        { q: '当家累不累？',
          a: [['大有大的难处。', '第6回']] },
        { q: '你怕报应吗？',
          a: [['我从来不信什么阴司地狱报应的，凭是什么事，我说要行就行。', '第15回']] }
      ]
    },
    '史湘云': {
      alias: '枕霞旧友',
      topics: [
        { q: '你为什么总是这么痛快？',
          a: [['是真名士自风流。', '第49回']] },
        { q: '你为什么爱喝酒？',
          a: [['我吃这个方爱吃酒，吃了酒才有诗。', '第49回']] }
      ]
    },
    '贾探春': {
      alias: '蕉下客',
      topics: [
        { q: '你最大的遗憾是什么？',
          a: [['我但凡是个男人，可以出得去，我早走了，立一番事业，那时自有我一番道理。', '第55回']] },
        { q: '这一家子怎么样？',
          a: [['一个个像乌眼鸡似的，恨不得你吃了我，我吃了你。', '第75回']] },
        { q: '抄检大观园那天，你为什么发那么大火？',
          a: [['你是什么东西，敢来拉扯我的衣裳！', '第74回']] }
      ]
    },
    '贾元春': {
      alias: '贤德妃',
      topics: [
        { q: '宫里好吗？',
          a: [['当日既送我到那不得见人的去处，好容易今日回家娘儿们一会，不说说笑笑，反倒哭起来。', '第18回']] }
      ]
    },
    '妙玉': {
      alias: '槛外人',
      topics: [
        { q: '茶该怎么喝？',
          a: [['一杯为品，二杯即是解渴的蠢物，三杯便是饮牛饮骡了。', '第41回']] },
        { q: '你为什么嫌刘姥姥用过的那只杯子？',
          a: [['幸而那杯子是我没吃过的，若我使过，我就砸碎了也不能给他。', '第41回']] }
      ]
    },
    '贾迎春': {
      alias: '菱洲',
      topics: [
        { q: '丢了东西，你为什么不追究？',
          a: [['宁可没有了，又何必生气。', '第73回']] }
      ]
    },
    '贾惜春': {
      alias: '藕榭',
      topics: [
        { q: '你为什么要出家？',
          a: [['我清清白白的一个人，为什么教你们带累坏了我。', '第74回']] }
      ]
    },
    '秦可卿': {
      alias: '兼美',
      topics: [
        { q: '这个家，以后会怎么样？',
          a: [['月满则亏，水满则溢。', '第13回 · 托梦凤姐'],
              ['三春去后诸芳尽，各自须寻各自门。', '第13回']] }
      ]
    }
  };

  let tkEl = null, tkName = '';

  function tkBuild() {
    if (tkEl) return;
    tkEl = document.createElement('div');
    tkEl.id = 'talk';
    tkEl.className = 'hidden';
    document.body.appendChild(tkEl);
    tkEl.addEventListener('click', function (e) {
      if (e.target === tkEl) tkEl.classList.add('hidden');
    });
  }

  function openTalk(name) {
    const d = TALKS[name];
    if (!d) return;
    tkBuild();
    tkName = name;
    let img = '';
    if (window.KB && KB.chars) {
      for (let i = 0; i < KB.chars.length; i++) {
        if (KB.chars[i].t === name) { img = KB.chars[i].img || ''; break; }
      }
    }
    tkEl.innerHTML =
      '<div class="tkbox">' +
        '<button class="rclose" id="tkclose">✕</button>' +
        '<div class="tkhead">' +
          (img ? '<img src="' + img + '" alt="">' : '') +
          '<div><div class="tkn">' + name + '</div>' +
          '<div class="tka">' + (d.alias || '') + ' · 原话对谈</div></div>' +
        '</div>' +
        '<div class="tkflow" id="tkflow">' +
          '<div class="tkhint">她说的每一句，都是书里说过的。挑一个话题问下去。</div>' +
        '</div>' +
        '<div class="tktopics" id="tktopics">' + d.topics.map(function (t, i) {
          return '<button data-i="' + i + '">' + t.q + '</button>';
        }).join('') + '</div>' +
      '</div>';
    document.getElementById('tkclose').addEventListener('click', function (ev) {
      ev.stopPropagation();
      tkEl.classList.add('hidden');
    });
    Array.prototype.forEach.call(tkEl.querySelectorAll('.tktopics button'), function (b) {
      b.addEventListener('click', function () {
        const i = parseInt(b.getAttribute('data-i'), 10);
        b.disabled = true;
        b.classList.add('used');
        tkAsk(d.topics[i]);
      });
    });
    tkEl.classList.remove('hidden');
  }

  function tkAsk(t) {
    const flow = document.getElementById('tkflow');
    const hint = flow.querySelector('.tkhint');
    if (hint) hint.style.display = 'none';
    const me = document.createElement('div');
    me.className = 'tkme';
    me.textContent = t.q;
    flow.appendChild(me);
    flow.scrollTop = flow.scrollHeight;
    t.a.forEach(function (line, k) {
      setTimeout(function () {
        const her = document.createElement('div');
        her.className = 'tkher';
        her.innerHTML = '<span>' + line[0] + '</span><em>' + line[1] + '</em>';
        flow.appendChild(her);
        flow.scrollTop = flow.scrollHeight;
      }, 420 + k * 700);
    });
  }


  /* ---------- 内景（居室）· 画 + 热点 ---------- */
  /* 以甲图为底，五处可点；每处原文皆自脂评本摘出 */
  const ROOMS = {
    /* 1 · 潇湘馆 */
    xiaoxiang: {
      name: '潇湘馆', img: '__XXG1__', img2: '__XXG2__', swap: '换 纱',
      intro: { src: '第17回 · 第26回',
        q: '忽抬头看见前面一带粉垣，里面数楹修舍，有千百竿翠竹遮映。……上面小小两三间房舍，一明两暗，里面都是合着地步打就的床几椅案。',
        note: '第26回宝玉信步走来，只见“凤尾森森，龙吟细细”“湘帘垂地，悄无人声”。屋小，家具随屋形定做，不是成套的大件。' },
      items: [
        { k: 'sha', n: '窗纱', x: 30, y: 16, w: 35, h: 33, src: '第40回',
          q: '这个纱新糊上好看，过了后来就不翠了。这个院子里头又没有个桃杏树，这竹子已是绿的，再拿这绿纱糊上反不配。',
          note: '贾母语。原糊绿纱，衬着满院翠竹反而“不配”，遂命换成银红“霞影纱”——软烟罗四色之一。点上方「换 纱」看换过之后。' },
        { k: 'an', n: '案 · 笔砚', x: 28, y: 57, w: 39, h: 14, src: '第40回',
          q: '刘姥姥因见窗下案上设着笔砚，又见书架上磊着满满的书，刘姥姥道：“这必定是那位哥儿的书房了。”',
          note: '一个村妪把这间屋子认成了公子书房。贾母笑指黛玉：“这是我这外孙女儿的屋子。”' },
        { k: 'shu', n: '书架', x: 2, y: 25, w: 12.5, h: 42, src: '第40回',
          q: '刘姥姥留神打量了黛玉一番，方笑道：“这那象个小姐的绣房，竟比那上等的书房还好。”',
          note: '“磊着满满的书”，是这间屋子最不像绣房的地方。' },
        { k: 'lian', n: '湘帘', x: 78, y: 8, w: 14, h: 58, src: '第26回',
          q: '宝玉信步走入，只见湘帘垂地，悄无人声。',
          note: '第40回贾母来时，是“紫鹃早打起湘帘”。帘垂着是静，卷起来是客至。' },
        { k: 'ta', n: '榻 · 几', x: 70, y: 68, w: 17, h: 17, src: '第17回',
          q: '上面小小两三间房舍，一明两暗，里面都是合着地步打就的床几椅案。',
          note: '“合着地步打就”是照着屋子尺寸现做的意思，所以家具都小、都贴墙，屋里显得窄——贾母临走时说“这屋里窄”。' }
      ]
    },
    /* 2 · 怡红院 */
    yihong: {
      name: '怡红院', img: '__YHY1__',
      intro: { src: '第17回',
        q: '只见这几间房内收拾的与别处不同，竟分不出间隔来的。原来四面皆是雕空玲珑木板，或“流云百蝠”，或“岁寒三友”，或山水人物，或翎毛花卉，或集锦，或博古。',
        note: '这是全书写得最细的一间屋子：隔扇、暗门、壁槽层层叠叠，把屋子做成了一个“迷宫”。第41回刘姥姥进来就转不出去。' },
      items: [
        { k: 'ge', n: '雕空隔断', x: 2, y: 4, w: 28, h: 40, src: '第17回',
          q: '一隔一隔，或有贮书处，或有设鼎处，或安置笔砚处，或供花设瓶、安放盆景处，其隔各式各样，或天圆地方，或葵花蕉叶，或连环半壁。',
          note: '隔扇不只是隔断墙，每一格都有用处：藏书、设鼎、放笔砚、供花。屋子因此“分不出间隔”。' },
        { k: 'sha', n: '五色纱小窗', x: 38, y: 6, w: 40, h: 40, src: '第17回',
          q: '倏尔五色纱糊就，竟系小窗；倏尔彩绫轻覆，竟系幽户。',
          note: '看着是窗，其实是纱糊的隔扇；看着是门，其实是彩绫盖着的暗门。' },
        { k: 'cao', n: '壁槽 · 琴剑瓶', x: 2, y: 44, w: 26, h: 38, src: '第17回',
          q: '且满墙满壁，皆系随依古董玩器之形抠成的槽子。诸如琴、剑、悬瓶、桌屏之类，虽悬于壁，却都是与壁相平的。',
          note: '墙上的凹槽是照着器物形状挖的，放进去与墙齐平——不是挂上去，是“嵌”进去。' },
        { k: 'chuang', n: '床帐', x: 36, y: 50, w: 30, h: 42, src: '第41回',
          q: '忽见有一副最精致的床帐。',
          note: '刘姥姥醉后误闯进来，一头倒下就睡在这床上——全书最热闹的一场祸事从这里起。' },
        { k: 'ji', n: '薰笼 · 小几', x: 20, y: 80, w: 60, h: 17, src: '第63回',
          q: '宝玉只穿着大红绵纱小袄儿，下面绿绫弹墨夹裤，散着裤脚，倚着一个各色玫瑰芍药花瓣装的玉色夹纱新枕头，和芳官两个先划拳。',
          note: '群芳夜宴就在这屋里。地方不大，人挤着坐，各有各的坐处。' }
      ]
    },
    /* 3 · 蘅芜苑 */
    hengyuan: {
      name: '蘅芜苑', img: '__HY1__', img2: '__HY2__', swap: '添 设',
      intro: { src: '第40回',
        q: '及进了房屋，雪洞一般，一色玩器全无，案上只有一个土定瓶中供着数枝菊花，并两部书，茶奁茶杯而已。床上只吊着青纱帐幔，衾褥也十分朴素。',
        note: '贾母看了直叹“这孩子太老实了”，说年轻姑娘屋里这样素净“也忌讳”，当场命人添三样摆设、换了帐子。点「添 设」看添过之后。' },
      items: [
        { k: 'ping', n: '土定瓶 · 菊', x: 33, y: 42, w: 10, h: 27, src: '第40回',
          q: '案上只有一个土定瓶中供着数枝菊花，并两部书，茶奁茶杯而已。',
          note: '“土定瓶”是粗陶的定窑器。整间屋子值钱的东西，只有这一瓶花。' },
        { k: 'an', n: '案 · 两部书', x: 27, y: 61, w: 28, h: 23, src: '第40回',
          q: '一色玩器全无，案上只有一个土定瓶中供着数枝菊花，并两部书，茶奁茶杯而已。',
          note: '两部书、一只茶奁、两只茶杯——这就是薛宝钗全部的家当。' },
        { k: 'zhang', n: '青纱帐', x: 57, y: 22, w: 29, h: 54, src: '第40回',
          q: '床上只吊着青纱帐幔，衾褥也十分朴素。',
          note: '贾母后来命把这帐子换成“水墨字画白绫帐子”，连同三样陈设一起——你以为的素净，是贾母眼里“不象”。' },
        { k: 'tian', n: '贾母添的三样', x: 27, y: 61, w: 28, h: 23, src: '第40回',
          q: '你把那石头盆景儿和那架纱桌屏，还有个墨烟冻石鼎，这三样摆在这案上就够了。再把那水墨字画白绫帐子拿来，把这帐子也换了。',
          note: '贾母的审美：素净可以，但不能“不像”。三样东西都是压得住场面又不俗的。点上方「添 设」看摆上之后。' },
        { k: 'chuang', n: '窗 · 奇草', x: 40, y: 18, w: 16, h: 27, src: '第40回',
          q: '那些奇草仙藤愈冷愈苍翠，都结了实，似珊瑚豆子一般，累垂可爱。',
          note: '蘅芜苑院里不种花，全是香草。进了屋是雪洞，出了门是异香——反差是这个人物的写法。' }
      ]
    },
    /* 4 · 秋爽斋 */
    qiushuang: {
      name: '秋爽斋', img: '__QS1__',
      intro: { src: '第40回',
        q: '探春素喜阔朗，这三间屋子并不曾隔断。当地放着一张花梨大理石大案，案上磊着各种名人法帖，并数十方宝砚，各色笔筒，笔海内插的笔如树林一般。',
        note: '整部书里唯一不肯把屋子隔开的人。屋子“阔朗”，陈设也全是大的：大案、大鼎、大盘、大佛手。' },
      items: [
        { k: 'an', n: '花梨大案', x: 31, y: 59, w: 39, h: 27, src: '第40回',
          q: '案上磊着各种名人法帖，并数十方宝砚，各色笔筒，笔海内插的笔如树林一般。',
          note: '“笔如树林”——这不是摆样子，是真写。探春起海棠社、写帖邀人，都在这张案上。' },
        { k: 'hua', n: '汝窑花囊 · 白菊', x: 56, y: 43, w: 12, h: 23, src: '第40回',
          q: '那一边设着斗大的一个汝窑花囊，插着满满的一囊水晶球儿的白菊。',
          note: '“斗大”“满满一囊”，连花也是盛大的。白菊配秋，正合“秋爽”二字。' },
        { k: 'tu', n: '烟雨图 · 对联', x: 40, y: 14, w: 21, h: 27, src: '第40回',
          q: '西墙上当中挂着一大幅米襄阳《烟雨图》，左右挂着一副对联，乃是颜鲁公墨迹，其词云：烟霞闲骨格，泉石野生涯。',
          note: '米芾的画、颜真卿的字。“烟霞闲骨格，泉石野生涯”——这十个字就是探春的自画像。' },
        { k: 'bed', n: '拔步床 · 纱帐', x: 72, y: 26, w: 20, h: 40, src: '第40回',
          q: '东边便设着卧榻，拔步床上悬着葱绿双绣花卉草虫的纱帐。',
          note: '板儿跑过去指着帐子上的绣样说“这是蝈蝈，这是蚂蚱”——小姐床上的绣帐，被孩子认成了田间虫。' },
        { k: 'pan', n: '紫檀架 · 大盘佛手', x: 2, y: 53, w: 10, h: 20, src: '第40回',
          q: '左边紫檀架上放着一个大观窑的大盘，盘内盛着数十个娇黄玲珑大佛手。',
          note: '佛手是清供，取其“福寿”意。数十个堆在一只大盘里，是阔朗的人才有的排场。' }
      ]
    },
    /* 5 · 稻香村 */
    daoxiang: {
      name: '稻香村', img: '__DX1__',
      intro: { src: '第17回',
        q: '转过山怀中，隐隐露出一带黄泥筑就墙，墙头上皆稻茎掩护。有几百株杏花，如喷火蒸霞一般。里面数楹茅屋。',
        note: '李纨守寡后住在这里，号“稻香老农”。宝玉当年就说这地方是“人力穿凿扭捏而成”——一个真农村，是造出来的。' },
      items: [
        { k: 'win', n: '窗 · 杏花菜畦', x: 10, y: 26, w: 41, h: 44, src: '第17回',
          q: '有几百株杏花，如喷火蒸霞一般。……下面分畦列亩，佳蔬菜花，漫然无际。',
          note: '窗外的热闹是假的：杏花、菜畦、土井、桔槔，全是为一个寡妇的“清净”造出来的景。' },
        { k: 'zhuo', n: '素木桌 · 书', x: 30, y: 78, w: 28, h: 20, src: '第4回',
          q: '这李纨虽青春丧偶，居家处膏粱锦绣之中，竟如槁木死灰一般，一概无见无闻，唯知侍亲养子，外则陪侍小姑等针黹诵读而已。',
          note: '“槁木死灰”——这四个字是她的处境，也是这间屋子的陈设逻辑：什么都可以省。' },
        { k: 'wall', n: '土墙 · 干菜草帽', x: 66, y: 33, w: 10, h: 40, src: '第17回',
          q: '隐隐露出一带黄泥筑就墙，墙头上皆稻茎掩护。',
          note: '屋外是黄泥墙、稻茎、青篱；屋里也就只有土墙、粗陶、竹器。这一处，是把“田舍”做全了。' }
      ]
    },
    /* 6 · 栊翠庵 */
    longcui: {
      name: '栊翠庵', img: '__LC1__',
      intro: { src: '第41回',
        q: '至院中见花木繁盛，贾母笑道：“到底是他们修行的人，没事常常修理，比别处越发好看。”一面说，一面便往东禅堂来。',
        note: '妙玉修行的地方。全书最讲究的一杯茶在这里，最刻薄的一句话也在这里。' },
      items: [
        { k: 'fo', n: '佛 · 香案', x: 33, y: 38, w: 32, h: 20, src: '第41回',
          q: '我们才都吃了酒肉，你这里头有菩萨，冲了罪过。我们这里坐坐，把你的好茶拿来，我们吃一杯就去了。',
          note: '贾母进门前先说了这句——她懂规矩，也知道这屋子跟别处不一样。' },
        { k: 'lu', n: '风炉 · 砂铫', x: 62, y: 54, w: 11, h: 17, src: '第41回',
          q: '妙玉自向风炉上扇滚了水，另泡一壶茶。',
          note: '“自向风炉上扇滚了水”——给贾母的茶是道婆烧的，给黛玉宝钗的茶是她自己扇的。人分几等，火也分几等。' },
        { k: 'pan', n: '茶盘 · 成窑盖钟', x: 49, y: 79, w: 39, h: 16, src: '第41回',
          q: '只见妙玉亲自捧了一个海棠花式雕漆填金云龙献寿的小茶盘，里面放一个成窑五彩小盖钟，捧与贾母。',
          note: '这只成窑盖钟后来因为刘姥姥喝过，被她嫌脏，命人“搁在外头去罢”。宝玉讨了来，说送给刘姥姥——一件器物，两个人的分寸。' },
        { k: 'pu', n: '蒲团', x: 42, y: 69, w: 12, h: 9, src: '第41回',
          q: '只见妙玉让他二人在耳房内，宝钗坐在榻上，黛玉便坐在妙玉的蒲团上。',
          note: '黛玉坐的，是妙玉自己的蒲团。她待这两个人，跟待贾母是两回事。' },
        { k: 'win', n: '窗 · 花木', x: 1, y: 19, w: 17, h: 40, src: '第41回',
          q: '至院中见花木繁盛……比别处越发好看。',
          note: '庵中花木比别处好，是因为有人“没事常常修理”。妙玉的洁癖，也是这么养出来的。' }
      ]
    },
    /* 7 · 紫菱洲 */
    ziling: {
      name: '紫菱洲', img: '__ZL1__',
      intro: { src: '第79回',
        q: '因此天天到紫菱洲一带地方徘徊瞻顾，见其轩窗寂寞，屏帐翛然，不过有几个该班上夜的老妪。',
        note: '这是迎春搬出大观园之后的样子。书里从没细写过她屋里的陈设——等到写的时候，人已经走了，屋子空了。' },
      items: [
        { k: 'win', n: '窗 · 水面芦苇', x: 27, y: 7, w: 63, h: 41, src: '第79回',
          q: '再看那岸上的蓼花苇叶，池内的翠荇香菱，也都觉摇摇落落，似有追忆故人之态。',
          note: '“蓼花苇叶”“翠荇香菱”——紫菱洲的菱，就是她名字里的那个菱。人走了，景还在。' },
        { k: 'ji', n: '素几 · 瓶荷', x: 33, y: 51, w: 34, h: 25, src: '第79回',
          q: '见其轩窗寂寞，屏帐翛然。',
          note: '“翛然”是空、是散。桌上还剩一点东西，人已经不住了。' },
        { k: 'bed', n: '床架 · 素被', x: 2, y: 21, w: 24, h: 62, src: '第79回',
          q: '屏帐翛然，不过有几个该班上夜的老妪。',
          note: '帐子已经卸了，只剩床架。第40回她还在时，这屋里是有说有笑的。' },
        { k: 'xiang', n: '箱笼', x: 5, y: 68, w: 26, h: 24, src: '第79回',
          q: '又听得说陪四个丫头过去，更又跌足自叹道：“从今后这世上又少了五个清洁人了。”',
          note: '箱笼半开，是搬走时留下的痕迹。宝玉数的是“五个清洁人”——迎春加四个丫头。' },
        { k: 'lu', n: '香炉', x: 55, y: 73, w: 20, h: 18, src: '第79回',
          q: '既领略得如此寥落凄惨之景，是以情不自禁，乃信口吟成一歌曰……',
          note: '香已冷。这一回宝玉作的歌，就是《紫菱洲歌》。' }
      ]
    },
    /* 8 · 暖香坞 */
    nuanxiang: {
      name: '暖香坞', img: '__NX1__',
      intro: { src: '第50回',
        q: '从里边游廊过去，便是惜春卧房，门斗上有“暖香坞”三个字。早有几个人打起猩红毡帘，已觉温香拂脸。',
        note: '惜春的住处，也是她的画室。大观园图就是在这里画的——刘姥姥一句“比画儿还强十倍”，惹出这一场大工程。' },
      items: [
        { k: 'lian', n: '猩红毡帘', x: 41, y: 2, w: 15, h: 60, src: '第50回',
          q: '早有几个人打起猩红毡帘，已觉温香拂脸。',
          note: '整间屋子唯一的重色。外面天寒，帘子一打起，暖气先扑到脸上。' },
        { k: 'an', n: '画案 · 长卷', x: 8, y: 46, w: 60, h: 33, src: '第50回',
          q: '大家进入房中，贾母并不归坐，只问画在那里。惜春因笑回：“天气寒冷了，胶性皆凝涩不润，画了恐不好看，故此收起来。”',
          note: '贾母年下就要，惜春拿“天冷胶凝”推托。这张画后来到底画完没有，书里没交代。' },
        { k: 'lu', n: '铜炉', x: 29, y: 42, w: 13, h: 21, src: '第50回',
          q: '已觉温香拂脸。',
          note: '“暖香”二字的由来。屋名不虚。' },
        { k: 'gang', n: '画缸 · 画轴', x: 60, y: 35, w: 20, h: 29, src: '第42回',
          q: '惜春道：“我何曾有这些画器？不过随手写字的笔画画罢了。就是颜色，只有赭石、广花、藤黄、胭脂这四样。”',
          note: '宝钗替她开了一张长长的画具单子——这也是全书唯一一份“美术用品清单”。' },
        { k: 'win', n: '窗 · 冬日枯枝', x: 74, y: 12, w: 22, h: 22, src: '第50回',
          q: '天气寒冷了，胶性皆凝涩不润。',
          note: '窗外是冬天。画不成的理由在窗外，也在这一句里。' }
      ]
    }
  };

  let roomOpen = false, roomKey = null, roomVar = 0, roomSel = null;
  let rcam = { x: 0, y: 0, z: 0 }, rtgt = { x: 0, y: 0, z: 0 };

  const roomEl = document.createElement('div');
  roomEl.id = 'room';
  roomEl.className = 'hidden';
  roomEl.innerHTML =
    '<div class="room-wrap" id="rwrap"><img id="rimg" alt=""><div class="room-spots" id="rspots"></div></div>' +
    '<div class="room-night"></div>' +
    '<div class="room-top"><button id="rexit">‹ 出门</button><button id="rintro">室 记</button><button id="rswap" class="hidden"></button></div>' +
    '<div class="room-card hidden" id="rcard"><button class="x" id="rcx">✕</button>' +
      '<div class="rc-body" id="rcbody"><div class="rc-h" id="rch"></div><div class="rc-q" id="rcq"></div>' +
      '<div class="rc-n" id="rcn"></div></div></div>' +
    '<div class="room-chips" id="rchips"></div>';
  document.body.appendChild(roomEl);

  const rwrapEl = document.getElementById('rwrap');
  const rimgEl = document.getElementById('rimg');
  const rspotsEl = document.getElementById('rspots');

  function roomRender() {
    const R = ROOMS[roomKey];
    rimgEl.src = (roomVar && R.img2) ? R.img2 : R.img;
    rspotsEl.innerHTML = R.items.map(function (it) {
      return '<button class="rspot" data-o="' + it.k + '" style="left:' + it.x + '%;top:' + it.y +
        '%;width:' + it.w + '%;height:' + it.h + '%"><i></i><b>' + it.n + '</b></button>';
    }).join('');
    const sw = document.getElementById('rswap');
    if (R.swap) { sw.classList.remove('hidden'); sw.textContent = roomVar ? '还 原' : R.swap; }
    else sw.classList.add('hidden');
    document.getElementById('rchips').innerHTML =
      '<button data-o="__intro" class="' + (roomSel ? '' : 'on') + '">室记</button>' +
      R.items.map(function (it) {
        return '<button data-o="' + it.k + '" class="' + (it.k === roomSel ? 'on' : '') + '">' + it.n + '</button>';
      }).join('');
  }

  function roomMark() {
    Array.prototype.forEach.call(rspotsEl.querySelectorAll('.rspot'), function (g) {
      g.classList.toggle('sel', g.getAttribute('data-o') === roomSel);
    });
    Array.prototype.forEach.call(document.getElementById('rchips').querySelectorAll('button'), function (b) {
      var o = b.getAttribute('data-o');
      b.classList.toggle('on', o === '__intro' ? !roomSel : o === roomSel);
    });
  }

  function roomCard(h, src, q, n) {
    document.getElementById('rch').innerHTML = h + (src ? '<span class="rc-src">' + src + '</span>' : '');
    document.getElementById('rcq').innerHTML = q ? '「' + q + '」' : '';
    document.getElementById('rcn').innerHTML = n || '';
    document.getElementById('rcard').classList.remove('hidden');
    const bd = document.getElementById('rcbody'); if (bd) bd.scrollTop = 0;
  }

  function roomShowItem(k) {
    const it = (ROOMS[roomKey].items.filter(function (x) { return x.k === k; })[0]);
    if (!it) return;
    roomSel = k; roomMark();
    roomCard(it.n, it.src, it.q, it.note);
  }

  function roomShowIntro() {
    const R = ROOMS[roomKey];
    roomSel = null; roomMark();
    roomCard(R.name + ' · 室记', R.intro.src, R.intro.q, R.intro.note);
  }

  function roomNight() {
    const n = roomEl.querySelector('.room-night');
    n.style.background = ttime === 'night'
      ? 'radial-gradient(72% 62% at 50% 58%, rgba(255,196,110,.10), rgba(14,18,42,.60) 78%)'
      : ttime === 'dusk' ? 'linear-gradient(180deg, rgba(255,148,68,.16), rgba(112,58,20,.16))'
      : ttime === 'noon' ? 'rgba(255,250,236,.06)' : 'rgba(255,248,230,0)';
  }

  function enterRoom() {
    if (era === 'last') { eraToast('门锁上了。里面很久没有人了。'); return; }
    const key = SCENES[active].id;
    if (!ROOMS[key]) { openModal(); return; }
    roomKey = key; roomVar = 0; roomSel = null;
    rcam = { x: 0, y: 0, z: 0 }; rtgt = { x: 0, y: 0, z: 0 };
    roomRender(); roomNight();
    roomOpen = true;
    document.body.classList.add('in-room');
    prompt.classList.add('hidden');
    modal.classList.add('hidden');
    roomEl.classList.remove('hidden');
    void roomEl.offsetWidth;
    roomEl.classList.add('on');
    titleEl.textContent = '大观园 · ' + ROOMS[key].name + ' · 内';
    setHint(false);
    roomShowIntro();
    roomTick();
  }

  function leaveRoom() {
    if (!roomOpen) return;
    roomOpen = false;
    document.body.classList.remove('in-room');
    roomEl.classList.remove('on');
    roomEl.classList.add('hidden');
    document.getElementById('rcard').classList.add('hidden');
    titleEl.textContent = '大观园 · ' + SCENES[active].name;
    setHint(true);
    cam.z = tgt.z = 0.3;
  }

  function roomTick() {
    if (!roomOpen) return;
    rcam.x += (rtgt.x - rcam.x) * .1;
    rcam.y += (rtgt.y - rcam.y) * .1;
    rcam.z += (rtgt.z - rcam.z) * .1;
    const s = 1 + rcam.z * .85;
    const mx = (innerWidth * (s - 1)) / 2 + 24, my = (innerHeight * (s - 1)) / 2 + 24;
    rwrapEl.style.transform = 'translate3d(' + (-rcam.x * mx).toFixed(1) + 'px,' +
      (-rcam.y * my).toFixed(1) + 'px,0) scale(' + s.toFixed(4) + ')';
    requestAnimationFrame(roomTick);
  }

  (function () {
    const rp = new Map();
    let lx = 0, ly = 0, moved = 0, pd = 0;
    roomEl.addEventListener('pointerdown', function (e) {
      if (e.target.closest('button') || e.target.closest('.room-card')) return;
      rp.set(e.pointerId, e); lx = e.clientX; ly = e.clientY; moved = 0;
      if (rp.size === 2) {
        const a = Array.from(rp.values());
        pd = Math.hypot(a[0].clientX - a[1].clientX, a[0].clientY - a[1].clientY);
      }
    });
    window.addEventListener('pointermove', function (e) {
      if (!roomOpen || !rp.has(e.pointerId)) return;
      rp.set(e.pointerId, e);
      if (rp.size >= 2) {
        const a = Array.from(rp.values());
        const d = Math.hypot(a[0].clientX - a[1].clientX, a[0].clientY - a[1].clientY);
        rtgt.z = Math.min(1, Math.max(0, rtgt.z + (d - pd) * .004)); pd = d; moved = 99; return;
      }
      const dx = e.clientX - lx, dy = e.clientY - ly;
      moved += Math.abs(dx) + Math.abs(dy);
      const s = 1 + rcam.z * .85;
      const mx = Math.max(60, (innerWidth * (s - 1)) / 2 + 24), my = Math.max(60, (innerHeight * (s - 1)) / 2 + 24);
      rtgt.x = Math.min(1, Math.max(-1, rtgt.x - dx / mx));
      rtgt.y = Math.min(1, Math.max(-1, rtgt.y - dy / my));
      lx = e.clientX; ly = e.clientY;
    });
    function up(e) { rp.delete(e.pointerId); }
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
    roomEl.addEventListener('wheel', function (e) {
      e.preventDefault();
      rtgt.z = Math.min(1, Math.max(0, rtgt.z - e.deltaY * .0012));
    }, { passive: false });
    roomEl.addEventListener('click', function (e) {
      if (moved > 8) { moved = 0; return; }
      const o = e.target.closest('[data-o]');
      if (o) {
        const k = o.getAttribute('data-o');
        if (k === '__intro') roomShowIntro(); else roomShowItem(k);
        return;
      }
      if (!e.target.closest('.room-card') && !e.target.closest('button')) {
        document.getElementById('rcard').classList.add('hidden');
      }
    });
  })();

  document.getElementById('rexit').addEventListener('click', leaveRoom);
  document.getElementById('rintro').addEventListener('click', roomShowIntro);
  document.getElementById('rcx').addEventListener('click', function () {
    document.getElementById('rcard').classList.add('hidden'); roomSel = null; roomMark();
  });
  document.getElementById('rswap').addEventListener('click', function () {
    roomVar = roomVar ? 0 : 1;
    roomRender();
    const to = roomKey === 'xiaoxiang' ? 'sha' : roomKey === 'hengyuan' ? 'zhang' : null;
    if (to) roomShowItem(to); else roomShowIntro();
  });

  /* ---------- 内景接入：走近住处时多一个「入内」 ---------- */
  function updateRoomPrompt() {
    const rb = document.getElementById('rin');
    if (!rb) return;
    let has = false;
    try { has = !!ROOMS[SCENES[active].id]; } catch (err) { has = false; }
    if (era === 'last') has = false;   /* 人去楼空：门锁上了 */
    rb.classList.toggle('hidden', !has);
  }
  (function () {
    const rb = document.getElementById('rin');
    if (rb) rb.addEventListener('click', function (e) { e.stopPropagation(); enterRoom(); });
  })();


  /* ---------- 高考名著题 ---------- */
  const EX = [
    { q: '“一双丹凤三角眼，两弯柳叶吊梢眉”写的是谁？', o: ['林黛玉', '王熙凤', '薛宝钗', '贾探春'], a: 1,
      why: '第3回黛玉初进荣国府，凤姐出场前先写眉眼：“粉面含春威不露，丹唇未启笑先闻。”三角眼、吊梢眉，写的是精明与威势。', src: '第3回' },
    { q: '判词“可叹停机德，堪怜咏絮才”中，“停机德”指谁？', o: ['薛宝钗', '林黛玉', '李纨', '史湘云'], a: 0,
      why: '“停机德”用乐羊子妻断织劝夫的典故，喻合乎妇德；对应宝钗。“咏絮才”用谢道韫典，对应黛玉。一句判词，判两个人。', src: '第5回' },
    { q: '“一年三百六十日，风刀霜剑严相逼”出自？', o: ['《秋窗风雨夕》', '《葬花吟》', '《桃花行》', '《柳絮词》'], a: 1,
      why: '《葬花吟》（第27回）。这句不是写花，是写人——写她在贾府的处境。', src: '第27回' },
    { q: '“好风频借力，送我上青云”是谁的词？', o: ['林黛玉', '史湘云', '薛宝钗', '贾探春'], a: 2,
      why: '宝钗《临江仙·柳絮》（第70回）。众人写柳絮多作衰飒语，只有她翻出这一句，翻得高，也翻得冷。', src: '第70回' },
    { q: '抄检大观园时，当面顶撞、护住自己丫头的是？', o: ['林黛玉', '贾迎春', '贾探春', '薛宝钗'], a: 2,
      why: '第74回探春说：“你们别忙，自然连你们抄的日子有呢！”又说“自杀自灭起来，才能一败涂地”。整回书里只有她看懂了这场抄检的性质。', src: '第74回' },
    { q: '“雪洞一般，一色玩器全无”写的是谁的住处？', o: ['潇湘馆', '蘅芜苑', '秋爽斋', '稻香村'], a: 1,
      why: '第40回贾母进蘅芜苑所见。案上只有一个土定瓶供着菊花、两部书、茶奁茶杯。贾母说她“太老实了”，当场命人添三样摆设。', src: '第40回' },
    { q: '元春省亲时说“当日既送我到那不得见人的去处”，表达的是？', o: ['对家人的埋怨', '对宫廷生活的哀怨', '对弟妹的训诫', '对省亲排场的赞叹'], a: 1,
      why: '第18回。贵妃的荣耀是给外人看的，“不得见人的去处”才是她自己说的话。一句话把“喜”翻成了“悲”。', src: '第18回' },
    { q: '小说以“甄士隐”“贾雨村”开卷，主要用意是？', o: ['交代作者身世', '真事隐去、假语村言', '引出神鬼之说', '铺垫宝黛爱情'], a: 1,
      why: '甄士隐谐“真事隐”，贾雨村谐“假语存（村言）”。全书第一层就是这句声明：我写的不是真事，但你该当真的看。', src: '第1回' },
    { q: '“冷子兴演说荣国府”这一段的主要作用是？', o: ['介绍贾府谱系与衰败迹象', '表现贾雨村的才学', '引出薛家进京', '渲染京城繁华'], a: 0,
      why: '第2回。借一个外人的口，把贾府的人物关系、家世来历一次交代清楚，同时点出“外面的架子虽未甚倒，内囊却也尽上来了”。', src: '第2回' },
    { q: '晴雯死后，宝玉为她作的是？', o: ['《芙蓉女儿诔》', '《葬花吟》', '《姽婳词》', '《望江南》'], a: 0,
      why: '第78回《芙蓉女儿诔》。全书写祭文只此一篇，祭的是一个丫头。', src: '第78回' },
    { q: '“忽喇喇似大厦倾，昏惨惨似灯将尽”出自哪支曲子？', o: ['《终身误》', '《枉凝眉》', '《聪明累》', '《飞鸟各投林》'], a: 2,
      why: '《聪明累》是王熙凤的判曲。“机关算尽太聪明，反算了卿卿性命”——她的结局，早在这支曲子里写死了。', src: '第5回' },
    { q: '刘姥姥二进荣国府，在结构上的主要作用是？', o: ['纯粹为了搞笑', '以村妪视角展示贾府盛况，并伏下巧姐之缘', '交代农村灾情', '引出王熙凤的病情'], a: 1,
      why: '她一边当笑料，一边当尺子：贾府有多奢华，要她来量；贾府败落之后巧姐的归宿，也由她来收。', src: '第39—42回' },
    { q: '黛玉初进贾府时“步步留心，时时在意”，体现的是？', o: ['做作虚伪', '寄人篱下的敏感与自尊', '对贾府的好奇', '身体虚弱'], a: 1,
      why: '第3回。她不是来走亲戚，是来投奔。这一句是全书对这个人物最经济的一次定位。', src: '第3回' },
    { q: '大观园题匾时宝玉主张“红香绿玉”，后来元春改成了？', o: ['怡红快绿', '红香绿玉', '蘅芷清芬', '杏帘在望'], a: 0,
      why: '第18回元春省亲，把“红香绿玉”改为“怡红快绿”，并把“红香绿玉”四字给了宝玉的住处——怡红院。', src: '第17—18回' },
    { q: '十二钗中“虽青春丧偶，竟如槁木死灰一般”的是？', o: ['李纨', '王熙凤', '秦可卿', '贾元春'], a: 0,
      why: '第4回。李纨守寡后只知侍亲养子，“一概无见无闻”。她不是没有感情，是被规矩压成了“死灰”。', src: '第4回' },
    { q: '王熙凤说“我从来不信什么阴司地狱报应的”，这句话反映她？', o: ['不信鬼神，行事泼辣果决', '怕报应而故作镇定', '笃信佛教', '对贾母的不满'], a: 0,
      why: '第15回弄权铁槛寺时说的。这句话既写她的胆，也为她后来的结局埋了钉子。', src: '第15回' },
    { q: '宝钗劝黛玉“你我只该做些针黹纺织的事才是”，体现的是？', o: ['对黛玉的嫉妒', '正统的妇德观念', '对诗才的轻视', '对贾府的抱怨'], a: 1,
      why: '第42回“蘅芜君兰言解疑癖”。她劝黛玉别看杂书、别作诗，是真心的——她信这一套，也照这一套活。', src: '第42回' },
    { q: '“好一似食尽鸟投林，落了片白茫茫大地真干净”出自？', o: ['《红楼梦引子》', '《飞鸟各投林》', '《好事终》', '《晚韶华》'], a: 1,
      why: '第5回《飞鸟各投林》，是十二支曲的收尾。全书的结局，就落在这十四个字上。', src: '第5回' },
    { q: '“这个妹妹我曾见过的”——宝玉初见黛玉这话，暗示的是？', o: ['宝玉记错了人', '木石前盟的宿缘', '宝玉的轻浮', '黛玉的容貌出众'], a: 1,
      why: '第3回。前身是灵河岸上三生石畔的绛珠仙草与神瑛侍者——还泪之说，从这一句开始兑现。', src: '第3回' },
    { q: '探春说“我但凡是个男人，可以出得去，我早走了”，表现她？', o: ['对家人的怨恨', '志向远大而受困于女儿身', '想离家出走', '对贾府的不满'], a: 1,
      why: '第55回。她是全书写得最有政治才能的人，偏偏生为庶出的女儿。这句话是全书最有名的一次“不甘心”。', src: '第55回' }
  ];

  let exList = [], exIdx = 0, exScore = 0, exTimer = null, exLeft = 0, exLocked = false, exWrong = [];

  const exEl = document.createElement('div');
  exEl.id = 'exam';
  exEl.className = 'hidden';
  exEl.innerHTML =
    '<div class="ex-box"><button class="ex-x" id="exClose">✕</button>' +
      '<div class="ex-top"><span id="exNum"></span><span id="exScore"></span></div>' +
      '<div class="ex-tbar"><i id="exTime"></i></div>' +
      '<div class="ex-q" id="exQ"></div>' +
      '<div class="ex-opts" id="exOpts"></div>' +
      '<div class="ex-why hidden" id="exWhy"></div>' +
      '<button class="ex-next hidden" id="exNext">下一题 ›</button>' +
    '</div>';
  document.body.appendChild(exEl);

  function exStart() {
    exList = EX.slice();
    for (let i = exList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = exList[i]; exList[i] = exList[j]; exList[j] = t;
    }
    exList = exList.slice(0, 12);
    exIdx = 0; exScore = 0; exWrong = [];
    exEl.classList.remove('hidden');
    exRender();
  }

  function exRender() {
    if (exIdx >= exList.length) { exDone(); return; }
    document.getElementById('exQ').className = 'ex-q';
    exLocked = false;
    const it = exList[exIdx];
    document.getElementById('exNum').textContent = (exIdx + 1) + ' / ' + exList.length;
    document.getElementById('exScore').textContent = '得分 ' + exScore;
    document.getElementById('exQ').textContent = it.q;
    document.getElementById('exWhy').classList.add('hidden');
    document.getElementById('exNext').classList.add('hidden');
    const box = document.getElementById('exOpts');
    box.innerHTML = it.o.map(function (o, i) {
      return '<button data-i="' + i + '"><b>' + 'ABCD'[i] + '</b>' + o + '</button>';
    }).join('');
    Array.prototype.forEach.call(box.querySelectorAll('button'), function (b) {
      b.addEventListener('click', function () { exPick(parseInt(b.getAttribute('data-i'), 10)); });
    });
    exLeft = 45;
    document.getElementById('exTime').style.width = '100%';
    clearInterval(exTimer);
    exTimer = setInterval(function () {
      exLeft -= 0.5;
      const p = Math.max(0, exLeft / 45);
      document.getElementById('exTime').style.width = (p * 100) + '%';
      if (exLeft <= 0) { clearInterval(exTimer); exPick(-1); }
    }, 500);
  }

  function exPick(i) {
    if (exLocked) return;
    exLocked = true;
    clearInterval(exTimer);
    const it = exList[exIdx];
    const ok = (i === it.a);
    if (ok) exScore++;
    const box = document.getElementById('exOpts');
    Array.prototype.forEach.call(box.querySelectorAll('button'), function (b) {
      const k = parseInt(b.getAttribute('data-i'), 10);
      b.disabled = true;
      if (k === it.a) b.classList.add('right');
      if (k === i && k !== it.a) b.classList.add('wrong');
    });
    const why = document.getElementById('exWhy');
    why.innerHTML = '<span class="ex-flag ' + (ok ? 'ok' : 'no') + '">' +
      (ok ? '对' : (i < 0 ? '超时' : '错')) + '</span>' +
      '<span class="ex-src">' + it.src + '</span>' + it.why;
    why.classList.remove('hidden');
    document.getElementById('exScore').textContent = '得分 ' + exScore;
    if (!ok) {
      exWrong.push({ q: it.q, why: it.why, src: it.src });
      try { wrongAdd('高考题', it.q, it.o, it.a, i < 0 ? -2 : i); } catch (e) { }
    }
    document.getElementById('exNext').classList.remove('hidden');
    document.getElementById('exNext').textContent = (exIdx >= exList.length - 1) ? '看结果 ›' : '下一题 ›';
  }

  function exDone() {
    clearInterval(exTimer);
    const n = exList.length, sc = exScore;
    let lv = '还得多看两遍', cls = 'lv1';
    if (sc >= n - 1) { lv = '这段书你读进去了'; cls = 'lv4'; }
    else if (sc >= n * 0.75) { lv = '扎实'; cls = 'lv3'; }
    else if (sc >= n * 0.5) { lv = '大致有数'; cls = 'lv2'; }
    document.getElementById('exNum').textContent = '交卷';
    document.getElementById('exScore').textContent = '';
    document.getElementById('exQ').textContent = sc + ' / ' + n;
    document.getElementById('exQ').className = 'ex-q ex-big';
    document.getElementById('exOpts').innerHTML = '<div class="ex-lv ' + cls + '">' + lv + '</div>' +
      (exWrong.length ? '<div class="ex-wlist"><em>错这几道，已记进错题本：</em>' +
        exWrong.map(function (w) { return '<div class="ex-wi"><b>' + w.src + '</b>' + w.q + '<i>' + w.why + '</i></div>'; }).join('') +
        '</div>' : '<div class="ex-wlist"><em>一道没漏。</em></div>');
    document.getElementById('exWhy').classList.add('hidden');
    const nx = document.getElementById('exNext');
    nx.classList.remove('hidden');
    nx.textContent = '再来一组 ›';
    nx.onclick = function () { nx.onclick = null; document.getElementById('exQ').className = 'ex-q'; exStart(); };
  }

  document.getElementById('exClose').addEventListener('click', function () {
    clearInterval(exTimer);
    exEl.classList.add('hidden');
  });
  document.getElementById('exNext').addEventListener('click', function () {
    if (document.getElementById('exNext').textContent === '再来一组 ›') return;
    exIdx++;
    exRender();
  });
  (function () {
    const b = document.getElementById('examBtn');
    if (b) b.addEventListener('click', exStart);
  })();

  /* ---------- 趣 / 学 下拉 ---------- */
  (function () {
    const groups = Array.prototype.slice.call(document.querySelectorAll('.tgroup'));
    function closeAll() { groups.forEach(function (g) { g.classList.remove('open'); }); }
    groups.forEach(function (g) {
      const btn = g.querySelector('.tball');
      if (!btn) return;
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const was = g.classList.contains('open');
        closeAll();
        if (!was) g.classList.add('open');
      });
      Array.prototype.forEach.call(g.querySelectorAll('.tmenu .toolb'), function (b) {
        b.addEventListener('click', function () { closeAll(); });
      });
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.tgroup')) closeAll();
    });
  })();


  /* ---------- 全书检索 ---------- */
  const HLM_B64 = '__HLMTEXT__';
  const HUILIST = [{"h":1,"n":"甄士隐梦幻识通灵 贾雨村风尘怀闺秀"},{"h":2,"n":"贾夫人仙逝扬州城 冷子兴演说荣国府"},{"h":3,"n":"贾雨村夤缘复旧职 林黛玉抛父进京都"},{"h":4,"n":"薄命女偏逢薄命郎 葫芦僧乱判葫芦案"},{"h":5,"n":"则暂不能写矣。"},{"h":6,"n":"贾宝玉初试云雨情 刘姥姥一进荣国府"},{"h":7,"n":"送宫花贾琏戏熙凤 宴宁府宝玉会秦钟"},{"h":8,"n":"比通灵金莺微露意 探宝钗黛玉半含酸"},{"h":9,"n":"恋风流情友入家塾 起嫌疑顽童闹学堂"},{"h":10,"n":"金寡妇贪利权受辱 张太医论病细穷源"},{"h":11,"n":"庆寿辰宁府排家宴 见熙凤贾瑞起淫心"},{"h":12,"n":"王熙凤毒设相思局 贾天祥正照风月鉴"},{"h":13,"n":"秦可卿死封龙禁尉 王熙凤协理宁国府"},{"h":14,"n":"林如海捐馆扬州城 贾宝玉路谒北静王"},{"h":15,"n":"王凤姐弄权铁槛寺 秦鲸卿得趣馒头庵"},{"h":16,"n":"贾元春才选凤藻宫 秦鲸卿夭逝黄泉路"},{"h":17,"n":"大观园试才题对额 荣国府归省庆元宵"},{"h":18,"n":"隔珠帘父女勉忠勤 搦湘管姊弟裁题咏"},{"h":19,"n":"情切切良宵花解语 意绵绵静日玉生香"},{"h":20,"n":"王熙凤正言弹妒意 林黛玉俏语谑娇音"},{"h":21,"n":"贤袭人娇嗔箴宝玉 俏平儿软语救贾琏"},{"h":22,"n":"听曲文宝玉悟禅机 制灯迷贾政悲谶语"},{"h":23,"n":"西厢记妙词通戏语 牡丹亭艳曲警芳心"},{"h":24,"n":"醉金刚轻财尚义侠 痴女儿遗帕惹相思"},{"h":25,"n":"魇魔法姊弟逢五鬼 红楼梦通灵遇双真"},{"h":26,"n":"蜂腰桥设言传心事 潇湘馆春困发幽情"},{"h":27,"n":"滴翠亭杨妃戏彩蝶 埋香冢飞燕泣残红"},{"h":28,"n":"蒋玉菡情赠茜香罗 薛宝钗羞笼红麝串"},{"h":29,"n":"享福人福深还祷福 痴情女情重愈斟情"},{"h":30,"n":"宝钗借扇机带双敲 龄官划蔷痴及局外"},{"h":31,"n":"撕扇子作千金一笑 因麒麟伏白首双星"},{"h":32,"n":"诉肺腑心迷活宝玉 含耻辱情烈死金钏"},{"h":33,"n":"手足耽耽小动唇舌 不肖种种大承笞挞"},{"h":34,"n":"情中情因情感妹妹 错里错以错劝哥哥"},{"h":35,"n":"白玉钏亲尝莲叶羹 黄金莺巧结梅花络"},{"h":36,"n":"绣鸳鸯梦兆绛芸轩 识分定情悟梨香院"},{"h":37,"n":"秋爽斋偶结海棠社 蘅芜苑夜拟菊花题"},{"h":38,"n":"林潇湘魁夺菊花诗 薛蘅芜讽和螃蟹咏"},{"h":39,"n":"村姥姥是信口开河 情哥哥偏寻根究底"},{"h":40,"n":"史太君两宴大观园 金鸳鸯三宣牙牌令"},{"h":41,"n":"栊翠庵茶品梅花雪 怡红院劫遇母蝗虫"},{"h":42,"n":"蘅芜君兰言解疑癖 潇湘子雅谑补余香"},{"h":43,"n":"闲取乐偶攒金庆寿 不了情暂撮土为香"},{"h":44,"n":"变生不测凤姐泼醋 喜出望外平儿理妆"},{"h":45,"n":"金兰契互剖金兰语 风雨夕闷制风雨词"},{"h":46,"n":"尴尬人难免尴尬事 鸳鸯女誓绝鸳鸯偶"},{"h":47,"n":"呆霸王调情遭苦打 冷郎君惧祸走他乡"},{"h":48,"n":"滥情人情误思游艺 慕雅女雅集苦吟诗"},{"h":49,"n":"琉璃世界白雪红梅 脂粉香娃割腥啖膻"},{"h":50,"n":"芦雪庵争联即景诗 暖香坞雅制春灯谜"},{"h":51,"n":"薛小妹新编怀古诗 胡庸医乱用虎狼药"},{"h":52,"n":"俏平儿情掩虾须镯 勇晴雯病补雀金裘"},{"h":53,"n":"宁国府除夕祭宗祠 荣国府元宵开夜宴"},{"h":54,"n":"史太君破陈腐旧套 王熙凤效戏彩斑衣"},{"h":55,"n":"辱亲女愚妾争闲气 欺幼主刁奴蓄险心"},{"h":56,"n":"敏探春兴利除宿弊 贤宝钗小惠全大体"},{"h":57,"n":"慧紫鹃情辞试宝玉 慈姨妈爱语慰痴颦"},{"h":58,"n":"杏子阴假凤泣虚凰 茜纱窗真情揆痴理"},{"h":59,"n":"柳叶渚边嗔莺咤燕 绛云轩里召将飞符"},{"h":60,"n":"茉莉粉替去蔷薇硝 玫瑰露引出茯苓霜"},{"h":61,"n":"投鼠忌器宝玉瞒赃 判冤决狱平儿行权"},{"h":62,"n":"憨湘云醉眠芍药裀 呆香菱情解石榴裙"},{"h":63,"n":"寿怡红群芳开夜宴 死金丹独艳理亲丧"},{"h":64,"n":"幽淑女悲题五美吟 浪荡子情遗九龙珮"},{"h":65,"n":"贾二舍偷娶尤二姨 尤三姐思嫁柳二郎"},{"h":66,"n":"情小妹耻情归地府 冷二郎一冷入空门"},{"h":67,"n":"见土仪颦卿思故里 闻秘事凤姐讯家童"},{"h":68,"n":"苦尤娘赚入大观园 酸凤姐大闹宁国府"},{"h":69,"n":"弄小巧用借剑杀人 觉大限吞生金自逝"},{"h":70,"n":"林黛玉重建桃花社 史湘云偶填柳絮词"},{"h":71,"n":"嫌隙人有心生嫌隙 鸳鸯女无意遇鸳鸯"},{"h":72,"n":"王熙凤恃强羞说病 来旺妇倚势霸成亲"},{"h":73,"n":"痴丫头误拾绣春囊 懦小姐不问累金凤"},{"h":74,"n":"惑奸谗抄检大观园 矢孤介杜绝宁国府"},{"h":75,"n":"开夜宴异兆发悲音 赏中秋新词得佳谶"},{"h":76,"n":"凸碧堂品笛感凄清 凹晶馆联诗悲寂寞"},{"h":77,"n":"俏丫鬟抱屈夭风流 美优伶斩情归水月"},{"h":78,"n":"老学士闲征姽婳词 痴公子杜撰芙蓉诔"},{"h":79,"n":"薛文龙悔娶河东狮 贾迎春误嫁中山狼"},{"h":80,"n":"美香菱屈受贪夫棒 王道士胡诌妒妇方"},{"h":81,"n":"占旺相四美钓游鱼 奉严词两番入家塾"},{"h":82,"n":"老学究讲义警顽心 病潇湘痴魂惊恶梦"},{"h":83,"n":"省宫闱贾元妃染恙 闹闺阃薛宝钗吞声"},{"h":84,"n":"试文字宝玉始提亲 探惊风贾环重结怨"},{"h":85,"n":"贾存周报升郎中任 薛文起复惹放流刑"},{"h":86,"n":"受私贿老官翻案牍 寄闲情淑女解琴书"},{"h":87,"n":"感深秋抚琴悲往事 坐禅寂走火入邪魔"},{"h":88,"n":"博庭欢宝玉赞孤儿 正家法贾珍鞭悍仆"},{"h":89,"n":"人亡物在公子填词 蛇影杯弓颦卿绝粒"},{"h":90,"n":"失绵衣贫女耐嗷嘈 送果品小郎惊叵测"},{"h":91,"n":"纵淫心宝蟾工设计 布疑阵宝玉妄谈禅"},{"h":92,"n":"评女传巧姐慕贤良 玩母珠贾政参聚散"},{"h":93,"n":"甄家仆投靠贾家门 水月庵掀翻风月案"},{"h":94,"n":"宴海棠贾母赏花妖 失宝玉通灵知奇祸"},{"h":95,"n":"因讹成实元妃薨逝 以假混真宝玉疯颠"},{"h":96,"n":"瞒消息凤姐设奇谋 泄机关颦儿迷本性"},{"h":97,"n":"林黛玉焚稿断痴情 薛宝钗出闺成大礼"},{"h":98,"n":"苦绛珠魂归离恨天 病神瑛泪洒相思地"},{"h":99,"n":"守官箴恶奴同破例 阅邸报老舅自担惊"},{"h":100,"n":"破好事香菱结深恨 悲远嫁宝玉感离情"},{"h":101,"n":"大观园月夜感幽魂 散花寺神签惊异兆"},{"h":102,"n":"宁国府骨肉病灾祲 大观园符水驱妖孽"},{"h":103,"n":"施毒计金桂自焚身 昧真禅雨村空遇旧"},{"h":104,"n":"醉金刚小鳅生大浪 痴公子余痛触前情"},{"h":105,"n":"锦衣军查抄宁国府 骢马使弹劾平安州"},{"h":106,"n":"王熙凤致祸抱羞惭 贾太君祷天消祸患"},{"h":107,"n":"散余资贾母明大义 复世职政老沐天恩"},{"h":108,"n":"强欢笑蘅芜庆生辰 死缠绵潇湘闻鬼哭"},{"h":109,"n":"候芳魂五儿承错爱 还孽债迎女返真元"},{"h":110,"n":"史太君寿终归地府 王凤姐力诎失人心"},{"h":111,"n":"鸳鸯女殉主登太虚 狗彘奴欺天招伙盗"},{"h":112,"n":"活冤孽妙尼遭大劫 死雠仇赵妾赴冥曹"},{"h":113,"n":"忏宿冤凤姐托村妪 释旧憾情婢感痴郎"},{"h":114,"n":"王熙凤历幻返金陵 甄应嘉蒙恩还玉阙"},{"h":115,"n":"惑偏私惜春矢素志 证同类宝玉失相知"},{"h":116,"n":"得通灵幻境悟仙缘 送慈柩故乡全孝道"},{"h":117,"n":"阻超凡佳人双护玉 欣聚党恶子独承家"},{"h":118,"n":"记微嫌舅兄欺弱女 惊谜语妻妾谏痴人"},{"h":119,"n":"中乡魁宝玉却尘缘 沐皇恩贾家延世泽"},{"h":120,"n":"甄士隐详说太虚情 贾雨村归结红楼梦"}];
  let HLM = null, hlmP = null, seaQ = '';

  function hlmLoad() {
    if (HLM) return Promise.resolve(HLM);
    if (hlmP) return hlmP;
    hlmP = (async function () {
      const bin = atob(HLM_B64);
      const u8 = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
      if (typeof DecompressionStream === 'undefined') throw new Error('no-decomp');
      const ds = new DecompressionStream('gzip');
      const stream = new Blob([u8]).stream().pipeThrough(ds);
      const text = await new Response(stream).text();
      HLM = JSON.parse(text);
      return HLM;
    })();
    return hlmP;
  }

  const seaEl = document.createElement('div');
  seaEl.id = 'sea';
  seaEl.className = 'hidden';
  seaEl.innerHTML =
    '<div class="sea-box">' +
      '<div class="sea-head"><span class="seal">检</span>' +
        '<input id="seaInput" placeholder="搜原文或回目：茄鲞 / 你放心 / 焚稿" autocomplete="off">' +
        '<button id="seaClose">✕</button></div>' +
      '<div class="sea-tabs"><button id="seaTabFind" class="on">检索原文</button><button id="seaTabHui">一百二十回回目</button></div>' +
      '<div class="sea-tip" id="seaTip">输入两字以上检索 · 前八十回脂评本，后四十回程本</div>' +
      '<div class="sea-list" id="seaList"></div>' +
    '</div>' +
    '<div class="sea-read hidden" id="seaRead">' +
      '<div class="sea-rhead"><button id="seaBack">‹ 返回</button><span id="seaRTitle"></span></div>' +
      '<div class="sea-rbody" id="seaRBody"></div>' +
    '</div>';
  document.body.appendChild(seaEl);

  function esc(s) {
    return String(s).replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; });
  }

  function seaOpen() {
    seaEl.classList.remove('hidden');
    document.getElementById('seaRead').classList.add('hidden');
    const _bf = document.getElementById('seaTabFind'), _bh = document.getElementById('seaTabHui');
    if (_bf && _bh) { _bf.classList.add('on'); _bh.classList.remove('on'); }
    setTimeout(function () { document.getElementById('seaInput').focus(); }, 60);
    if (!HLM) {
      document.getElementById('seaTip').textContent = '正在载入一百二十回原文…';
      hlmLoad().then(function () {
        document.getElementById('seaTip').textContent = '输入两字以上检索 · 前八十回脂评本，后四十回程本';
        if (seaQ) seaRun(seaQ);
      }).catch(function () {
        document.getElementById('seaTip').textContent = '这个浏览器不支持解压，检索用不了（换 Chrome 或 Safari 新版本试试）';
      });
    }
  }

  function seaClose() { seaEl.classList.add('hidden'); }

  function seaTabTo(which) {
    const bf = document.getElementById('seaTabFind'), bh = document.getElementById('seaTabHui');
    if (!bf || !bh) return;
    bf.classList.toggle('on', which === 'find');
    bh.classList.toggle('on', which === 'hui');
    document.getElementById('seaRead').classList.add('hidden');
    if (which === 'hui') seaShowHui(); else { seaQ = ''; seaRun(document.getElementById('seaInput').value || ''); }
  }

  function seaShowHui() {
    const list = document.getElementById('seaList');
    document.getElementById('seaTip').textContent = '共 120 回 · 回目依通行本 · 第 81 回起正文为程本';
    list.innerHTML = HUILIST.map(function (x) {
      return '<div class="sea-hit" data-h="' + x.h + '">' +
        '<span class="sea-hui">第' + x.h + '回</span>' +
        (x.h > 80 ? '<span class="sea-ver">程</span>' : '') +
        '<span class="sea-snip">' + esc(x.n) + '</span></div>';
    }).join('');
    Array.prototype.forEach.call(list.querySelectorAll('.sea-hit'), function (el) {
      el.addEventListener('click', function () {
        seaQ = '';
        seaReadChapter(parseInt(el.getAttribute('data-h'), 10), 0);
      });
    });
  }

  let seaTimer = null;
  /* 异体字、古今字：脂本用「元霄」，通行本作「元宵」；顽/玩通用 */
  const YITI = { '宵': '霄', '霄': '宵', '顽': '玩', '玩': '顽',
                 '捱': '挨', '挨': '捱', '顽': '玩', '妆': '粧', '粧': '妆' };
  function seaVars(q) {
    const out = [q];
    for (let i = 0; i < q.length; i++) {
      const m = YITI[q.charAt(i)];
      if (m) out.push(q.slice(0, i) + m + q.slice(i + 1));
    }
    const seen = {}, fin = [];
    out.forEach(function (w) { if (!seen[w]) { seen[w] = 1; fin.push(w); } });
    return fin;
  }

  function seaRun(q) {
    seaQ = q;
    const list = document.getElementById('seaList');
    q = q.trim();
    if (q.length < 2) { list.innerHTML = ''; return; }
    if (!HLM) return;
    const vs = seaVars(q);
    const hits = [];

    /* 一、回目名命中：焚稿、锦衣军、魂归离恨天这类词只出现在回目里 */
    HUILIST.forEach(function (x) {
      if (hits.length >= 12) return;
      for (let k = 0; k < vs.length; k++) {
        const w = vs[k], p = x.n.indexOf(w);
        if (p >= 0) { hits.push({ h: x.h, v: x.h > 80 ? '程' : '脂', hui: 1, n: x.n, w: w, p: p }); return; }
      }
    });
    const nHm = hits.length;

    /* 二、正文命中，每回最多两条，先按回次顺序铺开 */
    for (let ci = 0; ci < HLM.length && hits.length < 60; ci++) {
      const t = HLM[ci].t;
      let used = 0;
      for (let k = 0; k < vs.length && used < 2 && hits.length < 60; k++) {
        const w = vs[k];
        let i = 0;
        while (used < 2 && hits.length < 60) {
          i = t.indexOf(w, i);
          if (i < 0) break;
          hits.push({ h: HLM[ci].h, v: HLM[ci].v, ci: ci, i: i, w: w });
          i += w.length; used++;
        }
      }
    }

    const nh = {};
    hits.forEach(function (x) { nh[x.h] = 1; });
    document.getElementById('seaTip').textContent = hits.length
      ? '找到 ' + hits.length + ' 处 · 涉及 ' + Object.keys(nh).length + ' 回' +
        (nHm ? '（含 ' + nHm + ' 条回目）' : '') + (hits.length >= 60 ? ' · 只列前 60' : '') +
        (vs.length > 1 ? ' · 已含异体字' : '')
      : '没有找到「' + q + '」';
    if (!hits.length) { list.innerHTML = ''; return; }

    function snip(t, i, w, pad) {
      const a2 = Math.max(0, i - pad), b2 = Math.min(t.length, i + w.length + pad);
      return (a2 > 0 ? '…' : '') + esc(t.slice(a2, i)) + '<em>' + esc(t.slice(i, i + w.length)) + '</em>' +
             esc(t.slice(i + w.length, b2)) + (b2 < t.length ? '…' : '');
    }

    list.innerHTML = hits.map(function (x) {
      const body = x.hui
        ? (esc(x.n.slice(0, x.p)) + '<em>' + esc(x.w) + '</em>' + esc(x.n.slice(x.p + x.w.length)))
        : snip(HLM[x.ci].t, x.i, x.w, 46);
      return '<div class="sea-hit" data-h="' + x.h + '" data-i="' + (x.hui ? 0 : x.i) + '">' +
        '<span class="sea-hui">第' + x.h + '回</span>' +
        (x.v === '程' ? '<span class="sea-ver">程</span>' : '') +
        (x.hui ? '<span class="sea-ver">回目</span>' : '') +
        '<span class="sea-snip">' + body + '</span></div>';
    }).join('');
    Array.prototype.forEach.call(list.querySelectorAll('.sea-hit'), function (el) {
      el.addEventListener('click', function () {
        seaReadChapter(parseInt(el.getAttribute('data-h'), 10), parseInt(el.getAttribute('data-i'), 10));
      });
    });
  }

  function seaReadChapter(h, at) {
    const c = HLM.filter(function (x) { return x.h === h; })[0];
    if (!c) return;
    const _hm = HUILIST.filter(function (x) { return x.h === h; })[0];
    document.getElementById('seaRTitle').textContent = '第' + h + '回' + (_hm ? '　' + _hm.n : '') +
      (c.v === '程' ? '　·　程本' : '　·　脂评本');
    const q = seaQ.trim();
    let body = esc(c.t);
    if (q) {
      seaVars(q).forEach(function (w) {
        const re = new RegExp(w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        body = body.replace(re, '<mark>' + w + '</mark>');
      });
    }
    body = body.replace(/\n+/g, '</p><p>');
    const nav = '<div class="sea-nav">' +
      (h > 1 ? '<button data-go="' + (h - 1) + '">‹ 第' + (h - 1) + '回</button>' : '<span></span>') +
      (h < 120 ? '<button data-go="' + (h + 1) + '">第' + (h + 1) + '回 ›</button>' : '<span></span>') +
      '</div>';
    document.getElementById('seaRBody').innerHTML = '<p>' + body + '</p>' + nav;
    Array.prototype.forEach.call(document.querySelectorAll('#seaRBody .sea-nav button'), function (bt) {
      bt.addEventListener('click', function () {
        seaQ = '';
        seaReadChapter(parseInt(bt.getAttribute('data-go'), 10), 0);
      });
    });
    document.getElementById('seaRead').classList.remove('hidden');
    const mk = document.querySelector('#seaRBody mark');
    if (mk) setTimeout(function () { mk.scrollIntoView({ block: 'center', behavior: 'smooth' }); }, 80);
  }

  document.getElementById('seaTabFind').addEventListener('click', function () { seaTabTo('find'); });
  document.getElementById('seaTabHui').addEventListener('click', function () { seaTabTo('hui'); });
  document.getElementById('seaClose').addEventListener('click', seaClose);
  document.getElementById('seaBack').addEventListener('click', function () {
    document.getElementById('seaRead').classList.add('hidden');
  });
  document.getElementById('seaInput').addEventListener('input', function (e) {
    clearTimeout(seaTimer);
    const v = e.target.value;
    seaTimer = setTimeout(function () { seaRun(v); }, 160);
  });
  seaEl.addEventListener('click', function (e) { if (e.target === seaEl) seaClose(); });
  window.addEventListener('keydown', function (e) {
    if (e.key === '/' && !/input|textarea/i.test((e.target.tagName || ''))) {
      e.preventDefault(); seaOpen();
    } else if (e.key === 'Escape' && !seaEl.classList.contains('hidden')) {
      seaClose();
    }
  });
  (function () {
    const b = document.getElementById('seaBtn');
    if (b) b.addEventListener('click', seaOpen);
  })();

  /* ---------- 人物关系图 ---------- */
  const REL = {"yan":{"n":"贾演","a":"宁国公","s":"始祖·已故","h":"宁府","g":"男","d":"随太祖起兵，宁国府第一代","r":[["子","daihua"]]},"daihua":{"n":"贾代化","a":"","s":"二代·已故","h":"宁府","g":"男","d":"贾演之子","r":[["父","yan"],["子","fu"],["子","jing"]]},"fu":{"n":"贾敷","a":"","s":"三代·早逝","h":"宁府","g":"男","d":"代化长子，八九岁上便死了","r":[["父","daihua"]]},"jing":{"n":"贾敬","a":"","s":"三代·进士·出家","h":"宁府","g":"男","d":"代化次子，一味好道，烧丹炼汞，后服丹而亡","r":[["父","daihua"],["子","zhen"],["女","xichun"]]},"zhen":{"n":"贾珍","a":"","s":"族长·三品威烈将军","h":"宁府","g":"男","d":"贾敬之子，宁国府当家人","r":[["父","jing"],["妻","youshi"],["子","rong"],["妹","xichun"]]},"youshi":{"n":"尤氏","a":"","s":"珍妻·继室","h":"宁府","g":"女","d":"贾珍继室，家世寒微","r":[["夫","zhen"],["妹","youer"],["妹","yousan"],["母","youniang"]]},"rong":{"n":"贾蓉","a":"","s":"五代·监生","h":"宁府","g":"男","d":"贾珍之子，妻秦可卿，后又娶胡氏","r":[["父","zhen"],["母","youshi"],["妻","keqing"]]},"keqing":{"n":"秦可卿","a":"兼美","s":"蓉妻","h":"宁府","g":"女","d":"秦业养女，乳名可儿，早逝；临终托梦凤姐","r":[["夫","rong"],["养父","qinye"],["弟","qinzhong"]]},"xichun":{"n":"贾惜春","a":"藕榭","s":"四小姐","h":"宁府","g":"女","d":"贾敬之女，自幼在荣府长大，后会画，终出家","r":[["父","jing"],["兄","zhen"]]},"youer":{"n":"尤二姐","a":"","s":"贾琏外室","h":"宁府","g":"女","d":"尤氏继母之女，后为贾琏妾，被凤姐逼死","r":[["姐","youshi"],["妹","yousan"],["母","youniang"]]},"yousan":{"n":"尤三姐","a":"","s":"","h":"宁府","g":"女","d":"尤二姐之妹，情系柳湘莲，被退婚后自刎","r":[["姐","youshi"],["姐","youer"],["母","youniang"]]},"youniang":{"n":"尤老娘","a":"","s":"尤氏继母","h":"宁府","g":"女","d":"带着两个女儿依附宁府","r":[["女","youshi"],["女","youer"],["女","yousan"]]},"jiaoda":{"n":"焦大","a":"","s":"老仆","h":"宁府","g":"男","d":"跟着太爷出过三四回兵，救过太爷的命，醉后大骂","r":[["主","zhen"]]},"ruizhu":{"n":"瑞珠","a":"","s":"秦可卿丫鬟","h":"宁府","g":"女","d":"秦氏死后触柱而亡","r":[["主","keqing"]]},"baozhu":{"n":"宝珠","a":"","s":"秦可卿丫鬟","h":"宁府","g":"女","d":"秦氏死后甘为义女，守灵不归","r":[["主","keqing"]]},"yuan":{"n":"贾源","a":"荣国公","s":"始祖·已故","h":"荣府","g":"男","d":"荣国府第一代","r":[["子","daishan"]]},"daishan":{"n":"贾代善","a":"","s":"二代·已故","h":"荣府","g":"男","d":"贾源之子，贾母之夫","r":[["父","yuan"],["妻","jiamu"],["子","she"],["子","zheng"],["女","min"]]},"jiamu":{"n":"贾母","a":"史太君","s":"老祖宗","h":"荣府","g":"女","d":"代善之妻，出自金陵史家，全书最高长辈","r":[["夫","daishan"],["子","she"],["子","zheng"],["女","min"]]},"she":{"n":"贾赦","a":"","s":"一等将军","h":"荣府","g":"男","d":"贾母长子，好色贪财，居荣府东院","r":[["母","jiamu"],["妻","xing"],["子","lian"],["女","yingchun"]]},"xing":{"n":"邢夫人","a":"","s":"赦妻","h":"荣府","g":"女","d":"贾赦继室，邢岫烟之姑","r":[["夫","she"],["侄","xiuyan"]]},"lian":{"n":"贾琏","a":"琏二爷","s":"同知","h":"荣府","g":"男","d":"贾赦之子，凤姐之夫，管家事","r":[["父","she"],["母","xing"],["妻","xifeng"],["妾","pinger"],["妾","youer"],["女","qiaojie"]]},"xifeng":{"n":"王熙凤","a":"凤辣子·凤姐","s":"琏妻·管家","h":"荣府","g":"女","d":"王夫人内侄女，荣府实际当家人","r":[["夫","lian"],["仆","pinger"],["女","qiaojie"],["姑","wangfuren"],["叔","wangziteng"]]},"qiaojie":{"n":"巧姐","a":"大姐儿","s":"琏女","h":"荣府","g":"女","d":"贾琏与凤姐之女，名由刘姥姥所取","r":[["父","lian"],["母","xifeng"]]},"pinger":{"n":"平儿","a":"","s":"琏妾·凤姐陪房","h":"荣府","g":"女","d":"凤姐从王家带来的丫头，后为贾琏妾","r":[["主","xifeng"],["夫","lian"]]},"yingchun":{"n":"贾迎春","a":"菱洲","s":"二小姐","h":"荣府","g":"女","d":"贾赦之女，庶出，性懦，后嫁孙绍祖","r":[["父","she"],["兄","lian"]]},"zheng":{"n":"贾政","a":"存周","s":"工部员外郎","h":"荣府","g":"男","d":"贾母次子，宝玉之父，正统端方","r":[["母","jiamu"],["妻","wangfuren"],["妾","zhao"],["妾","zhou"],["子","zhuzhu"],["子","baoyu"],["女","yuanchun"],["女","tanchun"],["子","huan"]]},"wangfuren":{"n":"王夫人","a":"","s":"政妻","h":"荣府","g":"女","d":"王子腾之妹，宝玉之母","r":[["夫","zheng"],["兄","wangziteng"],["妹","xueyima"],["子","baoyu"],["子","zhuzhu"],["女","yuanchun"]]},"yuanchun":{"n":"贾元春","a":"贤德妃","s":"大小姐·贵妃","h":"荣府","g":"女","d":"贾政长女，入宫封贤德妃，省亲后暴病而亡","r":[["父","zheng"],["母","wangfuren"],["弟","baoyu"]]},"zhuzhu":{"n":"贾珠","a":"","s":"政长子·早逝","h":"荣府","g":"男","d":"十四岁进学，不到二十岁娶妻生子，一病死了","r":[["父","zheng"],["母","wangfuren"],["妻","liwan"],["子","jialan"]]},"liwan":{"n":"李纨","a":"稻香老农","s":"珠妻","h":"荣府","g":"女","d":"国子监祭酒李守中之女，青春丧偶，如槁木死灰","r":[["夫","zhuzhu"],["子","jialan"],["父","lishouzhong"]]},"jialan":{"n":"贾兰","a":"","s":"珠之子","h":"荣府","g":"男","d":"李纨之子，后中举","r":[["父","zhuzhu"],["母","liwan"]]},"baoyu":{"n":"贾宝玉","a":"怡红公子·绛洞花主","s":"政次子","h":"荣府","g":"男","d":"衔玉而生，前世神瑛侍者，厌恶仕途经济","r":[["父","zheng"],["母","wangfuren"],["姐","yuanchun"],["兄","zhuzhu"],["嫂","liwan"],["表妹","daiyu"],["表姐","baochai"]]},"tanchun":{"n":"贾探春","a":"蕉下客","s":"三小姐","h":"荣府","g":"女","d":"赵姨娘所出，才志高远，后远嫁","r":[["父","zheng"],["母","zhao"],["兄","baoyu"],["弟","huan"]]},"huan":{"n":"贾环","a":"","s":"三爷","h":"荣府","g":"男","d":"赵姨娘所出，庶子，心性猥琐","r":[["父","zheng"],["母","zhao"],["兄","baoyu"]]},"zhao":{"n":"赵姨娘","a":"","s":"政妾","h":"荣府","g":"女","d":"原是丫鬟，生了探春与贾环，行事不堪","r":[["夫","zheng"],["女","tanchun"],["子","huan"]]},"zhou":{"n":"周姨娘","a":"","s":"政妾","h":"荣府","g":"女","d":"贾政之妾，安分无子","r":[["夫","zheng"]]},"min":{"n":"贾敏","a":"","s":"政之妹","h":"荣府","g":"女","d":"贾母之女，嫁林如海，早逝——黛玉之母","r":[["母","jiamu"],["兄","she"],["兄","zheng"],["夫","linruhai"],["女","daiyu"]]},"linruhai":{"n":"林如海","a":"","s":"巡盐御史","h":"林家","g":"男","d":"前科探花，黛玉之父，病逝扬州","r":[["妻","min"],["女","daiyu"]]},"daiyu":{"n":"林黛玉","a":"潇湘妃子·颦儿","s":"","h":"林家","g":"女","d":"绛珠仙草转世，以泪还债；母亡父丧，寄居荣府","r":[["父","linruhai"],["母","min"],["外祖母","jiamu"],["表兄","baoyu"]]},"xiangyun":{"n":"史湘云","a":"枕霞旧友","s":"","h":"史家","g":"女","d":"贾母侄孙女，父母双亡，由叔父抚养，豪爽如男儿","r":[["叔","shinai"],["叔","shiding"]]},"shinai":{"n":"史鼐","a":"","s":"忠靖侯","h":"史家","g":"男","d":"湘云叔父","r":[["侄","xiangyun"]]},"shiding":{"n":"史鼎","a":"","s":"保龄侯","h":"史家","g":"男","d":"湘云叔父","r":[["侄","xiangyun"]]},"wangziteng":{"n":"王子腾","a":"","s":"京营节度使·九省都检点","h":"王家","g":"男","d":"王夫人之兄，凤姐之叔，权势显赫，暴病而亡","r":[["妹","wangfuren"],["妹","xueyima"],["侄","xifeng"]]},"xueyima":{"n":"薛姨妈","a":"","s":"薛家主母","h":"薛家","g":"女","d":"王夫人之妹，薛蟠、宝钗之母","r":[["姐","wangfuren"],["兄","wangziteng"],["子","xuepan"],["女","baochai"]]},"xuepan":{"n":"薛蟠","a":"呆霸王","s":"皇商","h":"薛家","g":"男","d":"薛姨妈之子，打死冯渊，娶夏金桂","r":[["母","xueyima"],["妹","baochai"],["妻","xiajingui"],["妾","xiangling"]]},"baochai":{"n":"薛宝钗","a":"蘅芜君","s":"","h":"薛家","g":"女","d":"薛姨妈之女，戴金锁，端庄周全，后嫁宝玉","r":[["母","xueyima"],["兄","xuepan"],["表姐","yuanchun"],["表弟","baoyu"]]},"xueke":{"n":"薛蝌","a":"","s":"薛家旁支","h":"薛家","g":"男","d":"薛宝琴之兄，老实本分","r":[["妹","baoqin"]]},"baoqin":{"n":"薛宝琴","a":"","s":"","h":"薛家","g":"女","d":"薛蝌之妹，随父行商，见多识广","r":[["兄","xueke"]]},"xiajingui":{"n":"夏金桂","a":"","s":"薛蟠妻","h":"薛家","g":"女","d":"桂花夏家之女，泼悍善妒，折磨香菱","r":[["夫","xuepan"]]},"xiangling":{"n":"香菱","a":"英莲·秋菱","s":"薛蟠妾","h":"薛家","g":"女","d":"甄士隐之女，幼被拐，卖与薛蟠","r":[["父","zhenshiyin"],["母","fengshi"],["夫","xuepan"]]},"zhenshiyin":{"n":"甄士隐","a":"","s":"乡宦","h":"外围","g":"男","d":"英莲之父，梦识通灵，后随疯道人出家","r":[["女","xiangling"],["妻","fengshi"]]},"fengshi":{"n":"封氏","a":"","s":"士隐妻","h":"外围","g":"女","d":"甄士隐之妻，英莲之母","r":[["夫","zhenshiyin"],["女","xiangling"]]},"lishouzhong":{"n":"李守中","a":"","s":"国子监祭酒","h":"李家","g":"男","d":"李纨之父","r":[["女","liwan"]]},"xiuyan":{"n":"邢岫烟","a":"","s":"邢夫人侄女","h":"邢家","g":"女","d":"家贫，寄居贾府，后许配薛蝌","r":[["姑","xing"]]},"yuanyang":{"n":"鸳鸯","a":"","s":"贾母贴身大丫鬟","h":"荣府·贾母","g":"女","d":"家生子，掌贾母一房财物，誓死不嫁贾赦","r":[["主","jiamu"]]},"yingwu":{"n":"鹦鹉","a":"","s":"贾母丫鬟","h":"荣府·贾母","g":"女","d":"与鸳鸯琥珀珍珠同列","r":[["主","jiamu"]]},"hupo":{"n":"琥珀","a":"","s":"贾母丫鬟","h":"荣府·贾母","g":"女","d":"","r":[["主","jiamu"]]},"zhenzhu":{"n":"珍珠","a":"","s":"贾母丫鬟","h":"荣府·贾母","g":"女","d":"后给了宝玉，改名袭人","r":[["主","jiamu"]]},"jinchuan":{"n":"金钏儿","a":"","s":"王夫人丫鬟","h":"荣府·王夫人","g":"女","d":"因与宝玉戏语被撵，投井而死","r":[["主","wangfuren"],["妹","yuchuan"]]},"yuchuan":{"n":"玉钏儿","a":"","s":"王夫人丫鬟","h":"荣府·王夫人","g":"女","d":"金钏之妹，后仍留王夫人身边","r":[["主","wangfuren"],["姐","jinchuan"]]},"caiyun":{"n":"彩云","a":"","s":"王夫人丫鬟","h":"荣府·王夫人","g":"女","d":"与贾环相好，偷玫瑰露","r":[["主","wangfuren"]]},"caixia":{"n":"彩霞","a":"","s":"王夫人丫鬟","h":"荣府·王夫人","g":"女","d":"与贾环有情，后被放出","r":[["主","wangfuren"]]},"xiaohong":{"n":"小红","a":"林红玉","s":"凤姐丫鬟","h":"荣府·凤姐","g":"女","d":"林之孝之女，原在怡红院，后跟凤姐","r":[["主","xifeng"],["父","linzhixiao"]]},"fenger":{"n":"丰儿","a":"","s":"凤姐丫鬟","h":"荣府·凤姐","g":"女","d":"","r":[["主","xifeng"]]},"caiming":{"n":"彩明","a":"","s":"凤姐小厮","h":"荣府·凤姐","g":"男","d":"念账的","r":[["主","xifeng"]]},"wanger":{"n":"旺儿","a":"","s":"凤姐陪房","h":"荣府·凤姐","g":"男","d":"替凤姐放债收利","r":[["主","xifeng"]]},"xinger":{"n":"兴儿","a":"","s":"凤姐小厮","h":"荣府·凤姐","g":"男","d":"向尤二姐数说凤姐为人","r":[["主","xifeng"]]},"xiren":{"n":"袭人","a":"珍珠·花大姐姐","s":"宝玉大丫鬟","h":"荣府·怡红院","g":"女","d":"原是贾母之婢，本名珍珠，给了宝玉后改名袭人","r":[["主","baoyu"],["旧主","jiamu"]]},"qingwen":{"n":"晴雯","a":"","s":"宝玉丫鬟","h":"荣府·怡红院","g":"女","d":"赖大家买来孝敬贾母，针线极好，被撵后病死","r":[["主","baoyu"]]},"sheyue":{"n":"麝月","a":"","s":"宝玉丫鬟","h":"荣府·怡红院","g":"女","d":"","r":[["主","baoyu"]]},"qiuwen":{"n":"秋纹","a":"","s":"宝玉丫鬟","h":"荣府·怡红院","g":"女","d":"","r":[["主","baoyu"]]},"bihen":{"n":"碧痕","a":"","s":"宝玉丫鬟","h":"荣府·怡红院","g":"女","d":"","r":[["主","baoyu"]]},"chunyan":{"n":"春燕","a":"","s":"宝玉丫鬟","h":"荣府·怡红院","g":"女","d":"何婆之女","r":[["主","baoyu"]]},"fangguan":{"n":"芳官","a":"","s":"宝玉丫鬟·十二官之一","h":"荣府·怡红院","g":"女","d":"原为戏子，后分到怡红院","r":[["主","baoyu"]]},"sier":{"n":"四儿","a":"蕙香","s":"宝玉丫鬟","h":"荣府·怡红院","g":"女","d":"与宝玉同日生日，后被撵","r":[["主","baoyu"]]},"qianxue":{"n":"茜雪","a":"","s":"宝玉丫鬟","h":"荣府·怡红院","g":"女","d":"因枫露茶被撵","r":[["主","baoyu"]]},"mingyan":{"n":"茗烟","a":"焙茗","s":"宝玉小厮","h":"荣府·怡红院","g":"男","d":"宝玉最得力的小厮","r":[["主","baoyu"]]},"ligui":{"n":"李贵","a":"","s":"宝玉奶兄","h":"荣府·怡红院","g":"男","d":"宝玉的跟班头儿","r":[["主","baoyu"]]},"zijuan":{"n":"紫鹃","a":"鹦哥","s":"黛玉大丫鬟","h":"荣府·潇湘馆","g":"女","d":"原是贾母房中的鹦哥，给了黛玉改名紫鹃","r":[["主","daiyu"],["旧主","jiamu"]]},"xueyan":{"n":"雪雁","a":"","s":"黛玉丫鬟","h":"荣府·潇湘馆","g":"女","d":"自林家带来的小丫头","r":[["主","daiyu"]]},"chunxian":{"n":"春纤","a":"","s":"黛玉丫鬟","h":"荣府·潇湘馆","g":"女","d":"","r":[["主","daiyu"]]},"yinger":{"n":"莺儿","a":"黄金莺","s":"宝钗丫鬟","h":"荣府·蘅芜苑","g":"女","d":"打络子好手，曾与贾环赌钱","r":[["主","baochai"]]},"wenxing":{"n":"文杏","a":"","s":"宝钗丫鬟","h":"荣府·蘅芜苑","g":"女","d":"","r":[["主","baochai"]]},"daishu":{"n":"待书","a":"","s":"探春丫鬟","h":"荣府·秋爽斋","g":"女","d":"","r":[["主","tanchun"]]},"cuimo":{"n":"翠墨","a":"","s":"探春丫鬟","h":"荣府·秋爽斋","g":"女","d":"送花笺给宝玉的正是她","r":[["主","tanchun"]]},"siqi":{"n":"司棋","a":"","s":"迎春丫鬟","h":"荣府·紫菱洲","g":"女","d":"王善保家的外孙女，与表弟潘又安私情，被撵","r":[["主","yingchun"],["外婆","wangshanbao"]]},"xiuju":{"n":"绣橘","a":"","s":"迎春丫鬟","h":"荣府·紫菱洲","g":"女","d":"为累丝金凤与王住儿媳妇争执","r":[["主","yingchun"]]},"ruhua":{"n":"入画","a":"","s":"惜春丫鬟","h":"荣府·藕香榭","g":"女","d":"因替哥哥收藏财物被撵","r":[["主","xichun"]]},"caiping":{"n":"彩屏","a":"","s":"惜春丫鬟","h":"荣府·藕香榭","g":"女","d":"","r":[["主","xichun"]]},"suyun":{"n":"素云","a":"","s":"李纨丫鬟","h":"荣府·稻香村","g":"女","d":"","r":[["主","liwan"]]},"biyue":{"n":"碧月","a":"","s":"李纨丫鬟","h":"荣府·稻香村","g":"女","d":"","r":[["主","liwan"]]},"tongxi":{"n":"同喜","a":"","s":"薛姨妈丫鬟","h":"薛家","g":"女","d":"","r":[["主","xueyima"]]},"tonggui":{"n":"同贵","a":"","s":"薛姨妈丫鬟","h":"薛家","g":"女","d":"","r":[["主","xueyima"]]},"zhener":{"n":"臻儿","a":"","s":"香菱丫鬟","h":"薛家","g":"女","d":"","r":[["主","xiangling"]]},"laida":{"n":"赖大","a":"","s":"荣府管家","h":"荣府","g":"男","d":"赖嬷嬷之子，赖尚荣之父","r":[["母","laimama"],["子","laishangrong"]]},"laimama":{"n":"赖嬷嬷","a":"","s":"老仆","h":"荣府","g":"女","d":"服侍过贾府老一辈，孙子捐了官","r":[["子","laida"]]},"laishangrong":{"n":"赖尚荣","a":"","s":"赖大之子","h":"荣府","g":"男","d":"捐了州县官，上任去了","r":[["父","laida"]]},"linzhixiao":{"n":"林之孝","a":"","s":"荣府管家","h":"荣府","g":"男","d":"小红之父","r":[["女","xiaohong"]]},"zhourui":{"n":"周瑞","a":"","s":"荣府管家","h":"荣府","g":"男","d":"管收地租，其妻是王夫人陪房","r":[["妻","zhouruidj"]]},"zhouruidj":{"n":"周瑞家的","a":"","s":"王夫人陪房","h":"荣府","g":"女","d":"带刘姥姥进府的正是她","r":[["夫","zhourui"],["主","wangfuren"]]},"wangshanbao":{"n":"王善保家的","a":"","s":"邢夫人陪房","h":"荣府","g":"女","d":"抄检大观园时挑事，外孙女是司棋","r":[["主","xing"],["外孙女","siqi"]]},"wuxindeng":{"n":"吴新登","a":"","s":"荣府银库房总领","h":"荣府","g":"男","d":"","r":[]},"dailiang":{"n":"戴良","a":"","s":"荣府仓房头","h":"荣府","g":"男","d":"","r":[]},"miaoyu":{"n":"妙玉","a":"槛外人","s":"带发修行","h":"栊翠庵","g":"女","d":"苏州人，读书识字，孤高自许，栊翠庵住持","r":[]},"jingxu":{"n":"净虚","a":"","s":"馒头庵老尼","h":"外围","g":"女","d":"替张家说项，凤姐弄权的引子","r":[]},"zhineng":{"n":"智能儿","a":"","s":"馒头庵小尼","h":"外围","g":"女","d":"与秦钟有情","r":[]},"madaopo":{"n":"马道婆","a":"","s":"尼姑","h":"外围","g":"女","d":"施魇魔法害凤姐宝玉","r":[]},"zhangdaoshi":{"n":"张道士","a":"","s":"清虚观道士","h":"外围","g":"男","d":"当日荣国公的替身","r":[]},"daopo":{"n":"道婆","a":"","s":"栊翠庵仆役","h":"栊翠庵","g":"女","d":"","r":[["主","miaoyu"]]},"liulaolao":{"n":"刘姥姥","a":"","s":"村妇","h":"外围","g":"女","d":"寡居，靠两亩薄田度日；三进荣国府，救巧姐","r":[]},"baner":{"n":"板儿","a":"","s":"刘姥姥外孙","h":"外围","g":"男","d":"随姥姥进府，与巧姐换佛手","r":[["外婆","liulaolao"]]},"wanggouer":{"n":"王狗儿","a":"","s":"刘姥姥女婿","h":"外围","g":"男","d":"其祖上曾与王夫人之父连过宗","r":[["母","liulaolao"]]},"jiayun":{"n":"贾芸","a":"","s":"贾府旁支","h":"外围","g":"男","d":"后认宝玉作父，与小红有情","r":[]},"nier":{"n":"倪二","a":"醉金刚","s":"市井","h":"外围","g":"男","d":"放高利贷的泼皮，仗义借钱给贾芸","r":[]},"jiangyuhan":{"n":"蒋玉菡","a":"琪官","s":"名伶","h":"外围","g":"男","d":"忠顺王府戏子，与宝玉交换汗巾","r":[]},"liuxianglian":{"n":"柳湘莲","a":"冷二郎","s":"世家子弟","h":"外围","g":"男","d":"会串戏，痛打薛蟠，后随道人出家","r":[]},"fengziying":{"n":"冯紫英","a":"","s":"神武将军之子","h":"外围","g":"男","d":"与宝玉等交好","r":[]},"qinzhong":{"n":"秦钟","a":"鲸卿","s":"秦业之子","h":"外围","g":"男","d":"秦可卿的弟弟，与宝玉同上学，早逝","r":[["父","qinye"],["姐","keqing"]]},"qinye":{"n":"秦业","a":"","s":"营缮郎","h":"外围","g":"男","d":"秦可卿养父，秦钟之父","r":[["子","qinzhong"],["养女","keqing"]]},"jiaqiang":{"n":"贾蔷","a":"","s":"宁府旁支","h":"外围","g":"男","d":"贾珍养大，为龄官买雀","r":[]},"lingguan":{"n":"龄官","a":"","s":"十二官之一","h":"外围","g":"女","d":"唱小旦，与贾蔷有情，画蔷痴及局外","r":[]},"jiarui":{"n":"贾瑞","a":"","s":"贾府旁支","h":"外围","g":"男","d":"调戏凤姐，死于相思局","r":[]},"jinrong":{"n":"金荣","a":"","s":"贾府亲戚","h":"外围","g":"男","d":"学堂里与秦钟争闹","r":[]},"shanpinren":{"n":"单聘仁","a":"","s":"清客","h":"外围","g":"男","d":"贾政门下的清客相公","r":[]},"zhanguang":{"n":"詹光","a":"","s":"清客","h":"外围","g":"男","d":"贾政门下的清客相公","r":[]},"lengzixing":{"n":"冷子兴","a":"","s":"古董商","h":"外围","g":"男","d":"演说荣国府的正是他","r":[]},"huluseng":{"n":"葫芦僧","a":"门子","s":"应天府门子","h":"外围","g":"男","d":"当年葫芦庙的小沙弥，献护官符","r":[]},"shuirong":{"n":"北静王","a":"水溶","s":"四王之一","h":"外围","g":"男","d":"路祭秦氏时见宝玉，赠鹡鸰香串","r":[]},"zhenbaoyu":{"n":"甄宝玉","a":"","s":"金陵甄府公子","h":"外围","g":"男","d":"与贾宝玉同貌同性，后走仕途","r":[]}};
  const RREV = { '父':'子','母':'女','子':'父','女':'母','夫':'妻','妻':'夫','兄':'弟','弟':'兄',
    '姐':'妹','妹':'姐','主':'仆','仆':'主','叔':'侄','侄':'叔','姑':'侄','侄女':'姑',
    '外祖母':'外孙','外孙':'外祖母','养父':'养女','养女':'养父','旧主':'旧仆',
    '外婆':'外孙','外孙女':'外婆','妾':'夫','陪房':'主','兄妻':'弟' };

  function revTag(tag, k) {
    const g = REL[k] ? REL[k].g : '男';
    if (tag === '子' || tag === '女') return g === '女' ? '母' : '父';
    if (tag === '父' || tag === '母') return g === '女' ? '女' : '子';
    if (tag === '兄') return g === '女' ? '姊' : '弟';
    if (tag === '弟') return g === '女' ? '姊' : '兄';
    if (tag === '姊') return g === '女' ? '妹' : '弟';
    if (tag === '妹') return g === '女' ? '姊' : '兄';
    return RREV[tag] || '亲';
  }

  function relOf(id) {
    const map = new Map();
    function add(tag, t, self) {
      if (!REL[t]) return;
      if (!map.has(t)) map.set(t, { tags: [], self: false });
      const o = map.get(t);
      if (self) o.self = true;
      if (o.tags.indexOf(tag) < 0) o.tags.push(tag);
    }
    (REL[id].r || []).forEach(function (x) { add(x[0], x[1], true); });
    Object.keys(REL).forEach(function (k) {
      if (k === id) return;
      (REL[k].r || []).forEach(function (x) {
        if (x[1] === id) add(revTag(x[0], k), k, false);
      });
    });
    const out = [];
    map.forEach(function (o, t) {
      let tags = o.tags.slice();
      /* 一妻一妾之别：以本人声明为准 */
      if (tags.indexOf('妾') >= 0) tags = tags.filter(function (x) { return x !== '妻'; });
      if (tags.indexOf('养父') >= 0) tags = tags.filter(function (x) { return x !== '父'; });
      if (tags.indexOf('旧主') >= 0) tags = tags.filter(function (x) { return x !== '主'; });
      out.push({ t: t, tag: tags.join('·') });
    });
    return out;
  }

  const relEl = document.createElement('div');
  relEl.id = 'rel';
  relEl.className = 'hidden';
  relEl.innerHTML =
    '<div class="rel-box">' +
      '<div class="rel-top"><span class="seal">谱</span>' +
        '<input id="relSearch" placeholder="找人：鸳鸯 / 平儿 / 焦大" autocomplete="off">' +
        '<button id="relClose">✕</button></div>' +
      '<div class="rel-stage"><svg id="relSvg" viewBox="0 0 820 820"></svg>' +
        '<div class="rel-hint" id="relHint">点圈上的人，走到他那里去</div></div>' +
      '<div class="rel-info" id="relInfo"></div>' +
      '<div class="rel-list hidden" id="relList"></div>' +
    '</div>';
  document.body.appendChild(relEl);

  const HOUSE_ORDER = ['荣府', '荣府·贾母', '荣府·王夫人', '荣府·凤姐', '荣府·怡红院',
    '荣府·潇湘馆', '荣府·蘅芜苑', '荣府·秋爽斋', '荣府·紫菱洲', '荣府·藕香榭', '荣府·稻香村',
    '宁府', '史家', '王家', '薛家', '林家', '李家', '邢家', '栊翠庵', '外围'];

  function relGrouped() {
    const g = {};
    Object.keys(REL).forEach(function (k) {
      const h = REL[k].h || '外围';
      (g[h] = g[h] || []).push(k);
    });
    const order = HOUSE_ORDER.filter(function (h) { return g[h]; });
    Object.keys(g).forEach(function (h) { if (order.indexOf(h) < 0) order.push(h); });
    return order.map(function (h) { return { h: h, ids: g[h] }; });
  }

  function relShowList(filter) {
    document.getElementById('relSvg').style.display = 'none';
    document.querySelector('.rel-hint').style.display = 'none';
    document.getElementById('relInfo').classList.add('hidden');
    const list = document.getElementById('relList');
    list.classList.remove('hidden');
    const q = (filter || '').trim();
    let html = '';
    relGrouped().forEach(function (grp) {
      const ids = grp.ids.filter(function (id) {
        if (!q) return true;
        const p = REL[id];
        return (p.n + p.a + p.s + p.d).indexOf(q) >= 0;
      });
      if (!ids.length) return;
      html += '<div class="rel-gh">' + esc(grp.h) + '</div><div class="rel-gr">' +
        ids.map(function (id) {
          return '<button class="rel-chip" data-id="' + id + '">' + esc(REL[id].n) + '</button>';
        }).join('') + '</div>';
    });
    list.innerHTML = html || '<div class="rel-empty">没有这个人</div>';
    Array.prototype.forEach.call(list.querySelectorAll('.rel-chip'), function (b) {
      b.addEventListener('click', function () { relShow(b.getAttribute('data-id')); });
    });
  }

  function relShow(id) {
    const p = REL[id];
    if (!p) return;
    document.getElementById('relList').classList.add('hidden');
    document.getElementById('relSvg').style.display = 'block';
    document.querySelector('.rel-hint').style.display = '';
    document.getElementById('relInfo').classList.remove('hidden');

    const rels = relOf(id);
    const svg = document.getElementById('relSvg');
    const CX = 410, CY = 410, R = 300;
    let s = '';

    /* 外圈：按角度均分，相近关系类型聚在一起 */
    const N = Math.max(rels.length, 1);
    rels.forEach(function (r, i) {
      const ang = -Math.PI / 2 + (i / N) * Math.PI * 2;
      r.x = CX + Math.cos(ang) * R;
      r.y = CY + Math.sin(ang) * R;
    });

    /* 连线 */
    rels.forEach(function (r) {
      s += '<line x1="' + CX + '" y1="' + CY + '" x2="' + r.x.toFixed(1) + '" y2="' + r.y.toFixed(1) +
        '" stroke="#b9a684" stroke-width="1.2" stroke-opacity=".7"/>';
    });
    /* 中心 */
    s += '<circle cx="' + CX + '" cy="' + CY + '" r="62" fill="#a8322a"/>' +
      '<circle cx="' + CX + '" cy="' + CY + '" r="62" fill="none" stroke="#f6ecd6" stroke-width="2"/>' +
      '<text x="' + CX + '" y="' + (CY - 2) + '" text-anchor="middle" font-size="26" fill="#fff6ea">' +
      esc(p.n) + '</text>' +
      '<text x="' + CX + '" y="' + (CY + 22) + '" text-anchor="middle" font-size="12" fill="#f3d9c8">' +
      esc(p.s.length > 12 ? p.s.slice(0, 12) : p.s) + '</text>';

    /* 外圈节点 */
    rels.forEach(function (r) {
      const q = REL[r.t];
      const isMain = /主子|公子|小姐|老爷|太太|老祖宗|夫人|妃|妻|妾/.test(q.s || '');
      const fill = isMain ? '#fbf3e2' : '#f2ecdc';
      const stroke = isMain ? '#a8322a' : '#9b8a6a';
      s += '<g class="rel-node" data-id="' + r.t + '" style="cursor:pointer">' +
        '<circle cx="' + r.x.toFixed(1) + '" cy="' + r.y.toFixed(1) + '" r="34" fill="' + fill +
        '" stroke="' + stroke + '" stroke-width="1.6"/>' +
        '<text x="' + r.x.toFixed(1) + '" y="' + (r.y - 1).toFixed(1) + '" text-anchor="middle" font-size="15" fill="#2b241a">' +
        esc(q.n.length > 4 ? q.n.slice(0, 4) : q.n) + '</text>' +
        '<text x="' + r.x.toFixed(1) + '" y="' + (r.y + 16).toFixed(1) + '" text-anchor="middle" font-size="10.5" fill="#8a6a2a">' +
        esc(r.tag) + '</text></g>';
    });
    svg.innerHTML = s;
    Array.prototype.forEach.call(svg.querySelectorAll('.rel-node'), function (g) {
      g.addEventListener('click', function () { relShow(g.getAttribute('data-id')); });
    });

    document.getElementById('relInfo').innerHTML =
      '<div class="rel-n">' + esc(p.n) + (p.a ? '<em>' + esc(p.a) + '</em>' : '') + '</div>' +
      '<div class="rel-s">' + esc(p.h) + ' · ' + esc(p.s) + '</div>' +
      '<div class="rel-d">' + esc(p.d || '') + '</div>' +
      '<div class="rel-c">关系 ' + rels.length + ' 条</div>';
  }

  document.getElementById('relClose').addEventListener('click', function () { relEl.classList.add('hidden'); });
  document.getElementById('relSearch').addEventListener('input', function (e) { relShowList(e.target.value); });
  relEl.addEventListener('click', function (e) { if (e.target === relEl) relEl.classList.add('hidden'); });
  (function () {
    const b = document.getElementById('relBtn');
    if (b) b.addEventListener('click', function () {
      relEl.classList.remove('hidden');
      relShowList('');
      document.getElementById('relSearch').value = '';
    });
  })();

  /* ---------- 园中路径 ---------- */
  const ROAD = {
    'qinfang|xiaoxiang':  { img: '__RD_zhujing__',   sec: 3.6, name: '竹径',     dir: '北',   words: '沿竹径往北 · 翠竹夹路，脚下苍苔',
      frames: ['__SZJ01__','__SZJ02__','__SZJ03__','__SZJ04__','__SZJ05__','__SZJ06__',
               '__SZJ07__','__SZJ08__','__SZJ09__','__SZJ10__','__SZJ11__','__SZJ12__'], fps: 4 },
    'qinfang|yihong':     { img: '__RD_jiaotang__',  sec: 4, name: '蕉棠小径', dir: '东',   words: '往东 · 一边芭蕉，一边海棠' },
    'qinfang|qiushuang':  { img: '__RD_changlang__', sec: 6, name: '甬道长廊', dir: '东北', words: '沿长廊往东北 · 约百步' },
    'qinfang|daoxiang':   { img: '__RD_shanpo__',    sec: 7, name: '青山斜阻', dir: '西北', words: '出沁芳亭往西北 · 转过山坳' },
    'qinfang|ouxiang':    { img: '__RD_zhuqiao__',   sec: 5, name: '竹桥',     dir: '南',   words: '过竹桥往南 · 水音渐近' },
    'daoxiang|hengyuan':  { img: '__RD_shiti__',     sec: 6, name: '云步石梯', dir: '北',   words: '顺云步石梯上去 · 石隙生苔' },
    'ouxiang|ziling':     { img: '__RD_liaohua__',   sec: 4, name: '蓼花苇岸', dir: '东',   words: '沿蓼花苇岸往东 · 水面开阔' },
    'ouxiang|nuanxiang':  { img: '__RD_chuanyun__',  sec: 5, name: '夹道',     dir: '北',   words: '穿夹道 · 过街门「穿云」「度月」' },
    'ouxiang|longcui':    { img: '__RD_shanjing__',  sec: 6, name: '山径',     dir: '东北', words: '山径往东北 · 花木渐密' },
    'qinfang|daguang':    { img: '__RD_zhengdian__', sec: 5, name: '正殿甬道', dir: '北',   words: '沿甬道往北 · 石栏夹道，直抵正殿' }
  };
  const ADJ = {};
  Object.keys(ROAD).forEach(function (k) {
    const p = k.split('|');
    (ADJ[p[0]] = ADJ[p[0]] || []).push(p[1]);
    (ADJ[p[1]] = ADJ[p[1]] || []).push(p[0]);
  });

  function roadEdge(a, b) { return ROAD[a + '|' + b] || ROAD[b + '|' + a] || null; }

  function roadPath(from, to) {
    if (from === to) return [from];
    const prev = {}, seen = {};
    seen[from] = 1;
    const q = [from];
    while (q.length) {
      const cur = q.shift();
      const nb = ADJ[cur] || [];
      for (let i = 0; i < nb.length; i++) {
        const n = nb[i];
        if (seen[n]) continue;
        seen[n] = 1; prev[n] = cur; q.push(n);
        if (n === to) {
          const path = [to];
          let c = to;
          while (prev[c] !== undefined) { c = prev[c]; path.unshift(c); }
          return path;
        }
      }
    }
    return null;
  }

  let roadBusy = false, roadTimer = null, roadResolve = null;

  function roadFinish() {
    if (!roadResolve) return;
    clearTimeout(roadTimer);
    roadStopSeq();
    const done = roadResolve; roadResolve = null;
    const el = document.getElementById('road');
    el.classList.remove('on');
    setTimeout(function () { el.classList.add('hidden'); done(); }, 460);
  }

  let seqTimer = null;

  function roadStopSeq() {
    if (seqTimer) { clearInterval(seqTimer); seqTimer = null; }
  }

  function roadPlayEdge(a2, b2) {
    return new Promise(function (resolve) {
      const e = roadEdge(a2, b2);
      if (!e) { resolve(); return; }
      const el = document.getElementById('road');
      const box = document.getElementById('roadImgs');
      const still = document.getElementById('roadStill');
      document.getElementById('roadName').textContent = '往 · ' + e.name;
      document.getElementById('roadWords').textContent = e.words;
      roadStopSeq();

      const useSeq = e.frames && e.frames.length > 1;

      if (useSeq) {
        still.style.display = 'none';
        still.classList.remove('show');
        box.style.display = 'block';
        box.innerHTML = e.frames.map(function (src) {
          return '<img src="' + src + '" alt="">';
        }).join('');
        const imgs = box.querySelectorAll('img');
        let i = 0;
        if (imgs.length) imgs[0].classList.add('on');
        const fps = e.fps || 4;
        seqTimer = setInterval(function () {
          if (i + 1 >= imgs.length) { roadStopSeq(); return; }
          imgs[i].classList.remove('on');
          i++;
          imgs[i].classList.add('on');
        }, 1000 / fps);
      } else {
        box.style.display = 'none';
        box.innerHTML = '';
        still.style.display = 'block';
        still.src = e.img;
        still.classList.remove('show');
        void still.offsetWidth;
        still.classList.add('show');
      }

      el.classList.remove('hidden');
      void el.offsetWidth;
      el.classList.add('on');
      roadResolve = resolve;
      roadTimer = setTimeout(roadFinish, e.sec * 1000);
    });
  }

  async function roadTravel(toId) {
    if (roadBusy) return;
    const from = SCENES[active].id;
    if (from === toId) return;
    const path = roadPath(from, toId);
    if (!path) return;
    roadBusy = true;
    setHint(false);
    document.getElementById('exits').classList.add('hidden');
    roadHideDest();
    for (let i = 0; i < path.length - 1; i++) {
      await roadPlayEdge(path[i], path[i + 1]);
      const idx = SCENES.map(function (s) { return s.id; }).indexOf(path[i + 1]);
      if (idx >= 0) enterScene(idx);
      await new Promise(function (r) { setTimeout(r, 240); });
    }
    roadBusy = false;
    roadUpdateExits();
  }

  const roadEl = document.createElement('div');
  roadEl.id = 'road';
  roadEl.className = 'hidden';
  roadEl.innerHTML =
    '<div id="roadImgs"></div>' + '<img id="roadStill" alt="">' +
    '<div class="road-tint"></div>' +
    '<div class="road-cap"><div class="road-n" id="roadName"></div>' +
      '<div class="road-w" id="roadWords"></div></div>' +
    '<div class="road-skip">轻触跳过</div>';
  document.body.appendChild(roadEl);
  roadEl.addEventListener('click', roadFinish);

  const exitsEl = document.createElement('div');
  exitsEl.id = 'exits';
  exitsEl.className = 'hidden';
  document.body.appendChild(exitsEl);

  const destEl = document.createElement('div');
  destEl.id = 'dest';
  destEl.className = 'hidden';
  document.body.appendChild(destEl);
  destEl.addEventListener('click', function (e) { if (e.target === destEl) roadHideDest(); });

  function roadHideDest() {
    const d = document.getElementById('dest');
    if (d) d.classList.add('hidden');
  }

  function roadDestList() {
    const from = SCENES[active].id;
    const out = [];
    SCENES.forEach(function (sc) {
      if (sc.id === from) return;
      const p = roadPath(from, sc.id);
      if (!p || p.length < 2) return;
      let sec = 0;
      const via = [];
      for (let i = 0; i < p.length - 1; i++) {
        const e = roadEdge(p[i], p[i + 1]);
        if (!e) return;
        sec += e.sec;
        if (i > 0) {
          const mid = SCENES.filter(function (x) { return x.id === p[i]; })[0];
          if (mid) via.push(mid.name);
        }
      }
      out.push({ id: sc.id, name: sc.name, sec: sec, via: via });
    });
    out.sort(function (a2, b2) { return a2.sec - b2.sec; });
    return out;
  }

  function roadShowDest() {
    const list = roadDestList();
    destEl.innerHTML = '<div class="dest-h">园中各处 · 点击即走</div>' + list.map(function (d) {
      const via = d.via.length ? '经 ' + d.via.join('、') : '直去';
      return '<button data-to="' + d.id + '"><b>' + d.name + '</b><em>' + via + '</em></button>';
    }).join('');
    destEl.classList.remove('hidden');
    Array.prototype.forEach.call(destEl.querySelectorAll('button'), function (b2) {
      b2.addEventListener('click', function (e) {
        e.stopPropagation();
        roadHideDest();
        roadTravel(b2.getAttribute('data-to'));
      });
    });
  }

  function roadUpdateExits() {
    if (mapView && !mapView.classList.contains('hidden')) {
      exitsEl.classList.add('hidden'); roadHideDest(); return;
    }
    const list = roadDestList();
    if (!list.length) { exitsEl.classList.add('hidden'); return; }
    exitsEl.innerHTML = '<button id="destOpen">往哪儿走 <i>▾</i></button>';
    document.getElementById('destOpen').addEventListener('click', function (e) {
      e.stopPropagation();
      const d = document.getElementById('dest');
      if (d && !d.classList.contains('hidden')) roadHideDest();
      else roadShowDest();
    });
    exitsEl.classList.remove('hidden');
    setHint(true);
    clearTimeout(window.__hintT);
    window.__hintT = setTimeout(function () { setHint(false); }, 3500);
  }

  document.getElementById('back').addEventListener('click', function () {
    exitsEl.classList.add('hidden');
    roadHideDest();
  });

  /* 统一处理底部提示条的显隐（此变量原先引用未定义） */
  function setHint(show) {
    const h = document.querySelector('.hint');
    if (!h) return;
    if (show) h.classList.remove('hidden'); else h.classList.add('hidden');
  }


  /* 进场景后刷新「往哪儿走」；这一句上次被我误删，导致按钮不出现 */
  const _enterSceneOld = enterScene;
  enterScene = function (i) {
    _enterSceneOld(i);
    setTimeout(roadUpdateExits, 80);
  };


  /* 点面板以外的地方，把「往哪儿走」收起来 */
  document.addEventListener('click', function (e) {
    const d = document.getElementById('dest');
    if (!d || d.classList.contains('hidden')) return;
    if (e.target.closest('#dest') || e.target.closest('#exits')) return;
    d.classList.add('hidden');
  });

})();

/* ================= 还泪 · 四幕 ================= */
(function () {
  const POOL = [
    { h: '第3回',  t: '黛玉听了，方洒泪拜别。' },
    { h: '第3回',  t: '林姑娘正在这里伤心，自己淌眼抹泪。' },
    { h: '第18回', t: '又汪汪的滚下泪来。' },
    { h: '第20回', t: '这里黛玉越发气闷，只向窗前流泪。' },
    { h: '第26回', t: '宿鸟栖鸦一闻此声，俱忒楞楞飞起远避，不忍再听。' },
    { h: '第27回', t: '独倚花锄泪暗洒，洒上空枝见血痕。' },
    { h: '第28回', t: '心内不觉灰了大半，也不觉滴下泪来，低头不语。' },
    { h: '第29回', t: '一行哭着，一行听了这话说到自己心坎儿上来，越发伤心大哭起来。' },
    { h: '第30回', t: '那林黛玉本不曾哭，听见宝玉来，由不得伤了心，止不住滚下泪来。' },
    { h: '第31回', t: '你死了，别人不知怎么样，我先就哭死了。' },
    { h: '第32回', t: '林黛玉只咳了一声，两眼不觉滚下泪来，回身便要走。' },
    { h: '第34回', t: '眼空蓄泪泪空垂，暗洒闲抛却为谁。' },
    { h: '第34回', t: '彩线难收面上珠，湘江旧迹已模糊。' },
    { h: '第35回', t: '黛玉看了不觉点头，想起有父母的人的好处来，早又泪珠满面。' },
    { h: '第45回', t: '抱得秋情不忍眠，自向秋屏移泪烛。' },
    { h: '第49回', t: '近来我只觉心酸，眼泪却像比旧年少了些的。' },
    { h: '第57回', t: '他偏在这里这样，分明是气我没娘的人，故意来刺我的眼。' },
    { h: '第58回', t: '黛玉见他也比先大瘦了，想起往日之事，不免流下泪来。' },
    { h: '第64回', t: '本来素昔爱哭，此时亦不免无言对泣。' },
    { h: '第81回', t: '黛玉的两个眼圈儿已经哭的通红了。' },
    { h: '第82回', t: '好哥哥，你叫我跟了谁去。' },
    { h: '第87回', t: '一发珠泪连绵起来。' },
    { h: '第89回', t: '那眼中泪渍终是不干。' },
    { h: '第97回', t: '那眼泪一似断线珍珠一般。' },
    { h: '第98回', t: '宝玉，宝玉，你好……' }
  ];
  const CN = ['一', '二', '三'];

  const ROUNDS = [
    { key: 'catch', n: 12, name: '接', sub: '泪落下来，接住它', tip: '轻触接住', fix: true },
    { key: 'hold',  n: 8,  name: '握', sub: '接住了，也会滑走', tip: '按住，别松手', fix: false },
    { key: 'empty', n: 3,  name: '空', sub: '这一局，不必接', tip: '', fix: false }
  ];
  const GAP = [1500, 1500, 1600, 1600, 1700, 1700, 1800, 1900, 2600, 3200, 4000, 5000];

  let el = null, cv = null, ctx = null, raf = null;
  let drops = [], stains = [], held = [], got = [];
  let gi = 0, miss = 0, state = 'idle', mode = 'catch';
  let lastSpawn = 0, endAt = 0, dpr = 1, W = 0, H = 0, lines = [], pairWait = 0;
  let done = 0, pressEl = null;

  function loadDone() {
    try { return Math.min(3, parseInt(localStorage.getItem('hlm_tear') || '0', 10) || 0); }
    catch (e) { return 0; }
  }
  function saveDone(v) { try { localStorage.setItem('hlm_tear', String(v)); } catch (e) {} }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  const hui = function (o) { return parseInt(String(o.h).replace(/[^0-9]/g, ''), 10) || 0; };

  function drawLines(cfg) {
    if (cfg.key === 'empty') return POOL.slice(POOL.length - 3);
    const body = POOL.slice(0, POOL.length - 1);
    const idx = shuffle(body.map(function (_, i) { return i; }));
    const take = cfg.fix ? cfg.n - 1 : cfg.n;
    const arr = idx.slice(0, take).map(function (i) { return body[i]; });
    arr.sort(function (a, b) { return hui(a) - hui(b); });
    if (cfg.fix) arr.push(POOL[POOL.length - 1]);
    return arr;
  }

  /* ---------- DOM ---------- */
  function build() {
    if (el) return;
    el = document.createElement('div');
    el.id = 'tear';
    el.className = 'hidden';
    el.innerHTML =
      '<canvas id="tearCv"></canvas>' +
      '<div class="tear-top"><div class="tear-t" id="tearTitle">还　泪</div>' +
        '<div class="tear-s" id="tearSub"></div></div>' +
      '<div class="tear-count" id="tearCount"></div>' +
      '<div class="tear-pop" id="tearPop"></div>' +
      '<div class="tear-palm" id="tearPalm"></div>' +
      '<div class="tear-tip" id="tearTip"></div>' +
      '<div class="tear-end hidden" id="tearEnd"></div>' +
      '<div class="tear-cover hidden" id="tearCover"></div>' +
      '<button class="tear-close" id="tearClose">✕</button>';
    document.body.appendChild(el);
    cv = document.getElementById('tearCv');
    ctx = cv.getContext('2d');
    document.getElementById('tearClose').addEventListener('click', close);
    el.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', releaseAll);
    window.addEventListener('pointercancel', releaseAll);
  }

  function releaseAll() {
    pressEl = null;
    for (let k = 0; k < held.length; k++) held[k].pressing = false;
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = el.clientWidth || window.innerWidth;
    H = el.clientHeight || window.innerHeight;
    cv.width = Math.floor(W * dpr); cv.height = Math.floor(H * dpr);
    cv.style.width = W + 'px'; cv.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function open() {
    build();
    el.classList.remove('hidden');
    resize();
    done = loadDone();
    document.getElementById('tearPop').innerHTML = '';
    document.getElementById('tearPalm').innerHTML = '';
    document.getElementById('tearCount').textContent = '';
    if (done >= 3) { showBook(); return; }
    showCover();
  }

  function close() {
    if (raf) cancelAnimationFrame(raf);
    raf = null; state = 'idle';
    if (el) el.classList.add('hidden');
  }

  function showCover() {
    state = 'cover';
    drops = []; stains = [];
    if (ctx && W) ctx.clearRect(0, 0, W, H);
    const cfg = ROUNDS[done];
    const box = document.getElementById('tearCover');
    box.innerHTML =
      '<div class="tc-no">第 ' + CN[done] + ' 幕</div>' +
      '<div class="tc-name">' + cfg.name + '</div>' +
      '<div class="tc-sub">' + cfg.sub + '</div>' +
      '<button class="tc-go" id="tcGo">落 泪</button>';
    box.classList.remove('hidden');
    document.getElementById('tearTitle').textContent = '还　泪';
    document.getElementById('tearSub').textContent = '';
    document.getElementById('tearTip').textContent = '';
    document.getElementById('tearTip').classList.remove('fade');
    document.getElementById('tearEnd').classList.add('hidden');
    document.getElementById('tcGo').addEventListener('click', function (e) {
      e.stopPropagation();
      box.classList.add('hidden');
      startRound();
    });
  }

  function startRound() {
    const cfg = ROUNDS[done];
    mode = cfg.key;
    lines = drawLines(cfg);
    drops = []; stains = []; held = []; got = [];
    gi = 0; miss = 0; endAt = 0; pairWait = 0;
    state = 'run';
    document.getElementById('tearPop').innerHTML = '';
    document.getElementById('tearPalm').innerHTML = '';
    document.getElementById('tearCount').textContent = '';
    document.getElementById('tearSub').textContent = cfg.sub;
    document.getElementById('tearTip').textContent = cfg.tip;
    document.getElementById('tearTip').classList.remove('fade');
    lastSpawn = performance.now() - (mode === 'empty' ? 0 : 1500);
    if (!raf) { tick._p = 0; tick(); }
  }

  function spawnOne(i, x) {
    const small = (mode === 'empty') || i >= 8;
    drops.push({
      x: (x != null ? x : W * (0.18 + Math.random() * 0.64)),
      y: -40,
      vy: mode === 'empty' ? 42 : (150 + Math.random() * 50 + i * 8),
      r: small ? 10 + Math.random() * 4 : 15 + Math.random() * 6,
      i: i, alive: true, sway: Math.random() * 6.28
    });
  }

  function tick() {
    if (state !== 'run') { raf = null; return; }
    const now = performance.now();
    const dt = Math.min((now - (tick._p || now)) / 1000, 0.05);
    tick._p = now;

    /* 生成 */
    if (gi < lines.length) {
      const gap = mode === 'choose' ? 1700 : (mode === 'empty' ? 3000 : GAP[Math.min(gi, GAP.length - 1)]);
      if (now - lastSpawn > gap) {
        if (mode === 'choose') {
          spawnOne(gi, W * 0.30);
          if (gi + 1 < lines.length) spawnOne(gi + 1, W * 0.70);
          gi += 2;
        } else {
          spawnOne(gi); gi++;
        }
        lastSpawn = now;
      }
    }

    ctx.clearRect(0, 0, W, H);

    /* 水痕 */
    for (let k = 0; k < stains.length; k++) {
      const st = stains[k];
      st.grow = Math.min(1, st.grow + dt * 0.9);
      const rr = st.r * (0.35 + st.grow * 0.65);
      const c1 = st.red ? 'rgba(140,52,44,' : 'rgba(140,172,170,';
      const c2 = st.red ? 'rgba(115,34,28,0.12)' : 'rgba(120,155,152,0.10)';
      ctx.beginPath();
      ctx.ellipse(st.x, st.y, rr, rr * 0.42, 0, 0, 6.2832);
      ctx.fillStyle = c1 + (0.11 + 0.14 * st.grow) + ')';
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(st.x, st.y, rr * 0.55, rr * 0.22, 0, 0, 6.2832);
      ctx.fillStyle = c2;
      ctx.fill();
    }

    /* 泪滴 */
    for (let k = drops.length - 1; k >= 0; k--) {
      const d = drops[k];
      if (!d.alive) continue;
      d.y += d.vy * dt;
      d.sway += dt * 2;
      drawDrop(d.x + Math.sin(d.sway) * 3, d.y, d.r);

      const floor = H + 30;
      if (d.y - d.r > floor) {
        d.alive = false;
        miss++;
        stains.push({ x: d.x, y: H - 6 - Math.random() * 10, r: 34 + Math.random() * 22, grow: 0 });
        drops.splice(k, 1);
      }
    }

    /* 第二幕：掌心在漏 */
    if (mode === 'hold') {
      for (let k = held.length - 1; k >= 0; k--) {
        const it = held[k];
        if (it.pressing) continue;
        it.left -= dt;
        const p = Math.max(0, it.left / 5);
        it.el.style.opacity = String(0.25 + p * 0.75);
        const bar = it.el.querySelector('.ph-bar');
        if (bar) bar.style.width = (p * 100) + '%';
        if (it.left <= 0) {
          it.el.classList.add('gone');
          setTimeout(function () { if (it.el.parentNode) it.el.parentNode.removeChild(it.el); }, 600);
          held.splice(k, 1);
        }
      }
    }

    if (gi >= lines.length && !drops.length) {
      if (!endAt) endAt = now;
      if (now - endAt > (mode === 'hold' ? 6600 : 2400)) { finish(); return; }
    } else { endAt = 0; }

    raf = requestAnimationFrame(tick);
  }

  function drawDrop(x, y, r) {
    ctx.save();
    ctx.translate(x, y);
    const g = ctx.createLinearGradient(0, -r * 8, 0, 0);
    g.addColorStop(0, 'rgba(150,178,174,0)');
    g.addColorStop(1, 'rgba(150,178,174,.30)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.ellipse(0, -r * 3.4, r * 0.30, r * 3.4, 0, 0, 6.2832); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(0, -r * 1.95);
    ctx.bezierCurveTo(r * 0.95, -r * 0.7, r, r * 0.55, 0, r);
    ctx.bezierCurveTo(-r, r * 0.55, -r * 0.95, -r * 0.7, 0, -r * 1.95);
    ctx.closePath();
    ctx.fillStyle = 'rgba(140,172,170,.52)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(88,118,116,.45)';
    ctx.lineWidth = 1; ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(-r * 0.30, r * 0.10, r * 0.20, r * 0.30, -0.5, 0, 6.2832);
    ctx.fillStyle = 'rgba(255,255,255,.62)';
    ctx.fill();
    ctx.restore();
  }

  function onDown(e) {
    if (state !== 'run') return;
    const r = el.getBoundingClientRect();
    const px = e.clientX - r.left, py = e.clientY - r.top;

    /* 第二幕：按住掌心那一句 */
    if (mode === 'hold') {
      let hitEl = null;
      for (let k = 0; k < held.length; k++) {
        const b = held[k].el.getBoundingClientRect();
        if (px >= b.left - 8 && px <= b.right + 8 && py >= b.top - 8 && py <= b.bottom + 8) { hitEl = held[k]; break; }
      }
      if (hitEl) {
        hitEl.pressing = true;
        pressEl = hitEl;
        return;
      }
    }

    if (mode === 'empty') return;      /* 第四幕：手穿过去 */

    let best = -1, bd = 1e9;
    for (let k = 0; k < drops.length; k++) {
      if (!drops[k].alive) continue;
      const dx = drops[k].x - px, dy = drops[k].y - py;
      const dd = dx * dx + dy * dy;
      if (dd < bd) { bd = dd; best = k; }
    }
    if (best < 0) return;
    const d = drops[best];
    const lim = d.r + 34;
    if (bd > lim * lim) return;

    d.alive = false;
    const line = lines[d.i];
    drops.splice(best, 1);

    if (mode === 'hold') { addPalm(line); }
    else { got.push(line); pop(line); }
  }

  function pop(line) {
    const p = document.getElementById('tearPop');
    const n = document.createElement('div');
    n.className = 'tear-line';
    n.innerHTML = '<span class="tl-t">' + line.t + '</span><span class="tl-h">' + line.h + '</span>';
    p.appendChild(n);
    setTimeout(function () { n.classList.add('out'); }, 1900);
    setTimeout(function () { if (n.parentNode) n.parentNode.removeChild(n); }, 2900);
    document.getElementById('tearCount').textContent = '接住 ' + got.length;
  }

  function addPalm(line) {
    const box = document.getElementById('tearPalm');
    const n = document.createElement('div');
    n.className = 'palm-item';
    n.innerHTML = '<div class="ph-t">' + line.t + '</div>' +
      '<div class="ph-h">' + line.h + ' · 按住</div>' +
      '<div class="ph-track"><i class="ph-bar" style="width:100%"></i></div>';
    box.appendChild(n);
    held.push({ el: n, left: 5, pressing: false });
  }

  function finish() {
    state = 'end';
    if (raf) cancelAnimationFrame(raf);
    raf = null;
    document.getElementById('tearTip').classList.add('fade');
    const box = document.getElementById('tearEnd');
    let head = '', list = '', tail = '';

    if (mode === 'catch') {
      head = got.length === lines.length ? '一句不落' : '你接住了 ' + got.length + ' 句';
      list = got.map(function (g) {
        return '<div class="te-res"><span>' + g.t + '</span><em>' + g.h + '</em></div>';
      }).join('');
      if (!list) list = '<div class="te-none">一句也没有接住。</div>';
      tail = '没接住的那些，都落在地上了。<br>不管接住几句，最后都是这句：<b>宝玉，宝玉，你好……</b>';
    } else if (mode === 'hold') {
      const keep = held.length;
      head = keep ? '留下 ' + keep + ' 句' : '一句也没留住';
      list = held.map(function (it) {
        const t = it.el.querySelector('.ph-t').textContent;
        const h2 = it.el.querySelector('.ph-h').textContent.replace(' · 按住', '');
        return '<div class="te-res"><span>' + t + '</span><em>' + h2 + '</em></div>';
      }).join('');
      if (!list) list = '<div class="te-none">接住了，也没留住。</div>';
      tail = '按住才不走的，一松手就没了。<br>这就是握不住的东西。';
    } else {
      head = '这一次，谁也接不住';
      tail = '手穿过去了。三滴都落在纸上。<br><br><b>宝玉，宝玉，你好……</b>';
    }

    box.innerHTML = '<div class="te-head">' + head + '</div>' +
      (list ? '<div class="te-list">' + list + '</div>' : '') +
      '<div class="te-last">' + tail + '</div>' +
      '<button class="te-again" id="teNext">' + (done >= 2 ? '看 完' : '下 一 幕') + '</button>';
    box.classList.remove('hidden');
    document.getElementById('teNext').addEventListener('click', function (e) {
      e.stopPropagation();
      done = Math.min(3, done + 1);
      saveDone(done);
      box.classList.add('hidden');
      document.getElementById('tearPalm').innerHTML = '';
      if (done >= 3) showBook(); else showCover();
    });
  }

  function showBook() {
    state = 'cover';
    const box = document.getElementById('tearCover');
    box.innerHTML =
      '<div class="tc-book">泪，都落过地了。</div>' +
      '<button class="tc-again" id="tcReset">从 头 再 看</button>';
    box.classList.remove('hidden');
    document.getElementById('tearTitle').textContent = '还　泪';
    document.getElementById('tearSub').textContent = '';
    document.getElementById('tearEnd').classList.add('hidden');
    document.getElementById('tcReset').addEventListener('click', function (e) {
      e.stopPropagation();
      done = 0; saveDone(0); showCover();
    });
  }

  window.openTears = open;

  document.addEventListener('click', function (e) {
    const b = e.target.closest && e.target.closest('#tearBtn');
    if (!b) return;
    e.stopPropagation();
    Array.prototype.forEach.call(document.querySelectorAll('.tgroup.open'), function (g) { g.classList.remove('open'); });
    open();
  });
})();

/* ================= 木石 · 八幕 ================= */
(function () {
  /* 类型：src=原文  why=解（我替他想的）  xv=续（依原著情理补写，原著无） */
  const ACTS = [
    { no: '一', hui: '第 3 回', title: '初 会',
      open: [
        { t: '黛玉进府的第二天，见了宝玉。' },
        { t: '宝玉看罢，笑道：“这个妹妹我曾见过的。”' },
        { t: '他问她：“妹妹可有玉没有？”她说：“没有。”' },
        { t: '宝玉登时发作起痴狂病来，摘下那玉，就狠命摔去——' }
      ],
      nodes: [
        { q: '玉摔在地上，满屋子人扑过去抢。你（黛玉）站在一边——',
          opts: [
            { t: '不出声，心里想：我才来了这一日，就惹出你家哥儿的狂病来。',
              kind: 'fake', tw: '初会：你把话咽了回去',
              src: '是晚，宝玉已睡，袭人见黛玉独自垂泪，因问其故。黛玉道：“今日才来了，就惹出你家哥儿的狂病来。倘或摔坏了那玉，岂不是因我之过。”（按：此段依戚序本回末文字）',
              hui: '第 3 回',
              why: '她进府第一夜，就把“因我之过”四个字安在了自己头上。此后十几年，一切都是因她之过。' },
            { t: '走过去，低声说：“你别摔了，都是我的不是。”',
              kind: 'real', src: '（她开了口。这一屋子人，只有她把错往自己身上揽）',
              xv: 1,
              why: '话说了，他住了手。可这句“我的不是”，一开口就收不回去了——她这辈子，遇事第一句永远是这句。' }
          ] },
        { q: '夜里，他过来赔不是，说：“除了别人说什么金什么玉，我心里要有这个想头，天诛地灭，万世不得人身。”',
          opts: [
            { t: '冷笑：“我也不知道什么金什么玉的。”',
              kind: 'fake', tw: '初会：他赌咒时，你提了“金玉”',
              src: '（一句话，把“金玉”两个字亲手放进了两个人中间）',
              xv: 1,
              why: '他赌的咒，本来是给她吃定心丸的。她一句反问，倒把这颗丸吐了出来。' },
            { t: '看着他的眼睛，说：“我信你。”',
              kind: 'real', src: '（她说了“我信”。他愣住，一时不知怎么接）',
              xv: 1,
              why: '他没料到她会这么说。这句“我信”，后来再没有第二次。' }
          ] }
      ],
      close: [{ t: '这一夜，两个人都没睡好。一个想着“因我之过”，一个想着“她信我”。' }] },

    { no: '二', hui: '第 8 回', title: '比 通 灵',
      open: [
        { t: '宝钗病了。宝玉去看她。' },
        { t: '他讨过她项圈上的金锁来看，念那上面的八个字：“不离不弃，芳龄永继。”' },
        { t: '又念自己玉上的：“莫失莫忘，仙寿恒昌。”' },
        { t: '他笑道：“姐姐这八个字倒真与我的是一对。”' },
        { t: '正说着，外面人说：林姑娘来了。' }
      ],
      nodes: [
        { q: '你一脚进来，看见他们俩挨着坐，玉和锁都在桌上。',
          opts: [
            { t: '笑道：“嗳哟，我来的不巧了！”',
              kind: 'fake', tw: '比通灵：你说“我来的不巧了”',
              src: '黛玉一见便笑道：“嗳哟，我来的不巧了！”宝玉等忙起身笑让坐。宝钗因笑道：“这话怎么说？”黛玉笑道：“早知他来，我就不来了。”',
              hui: '第 8 回',
              why: '“不巧”两个字，说的是晚了一步。她一辈子都在说这两个字，可从来没走开过。' },
            { t: '笑道：“我正要看宝姐姐那金锁呢，也给我瞧瞧。”',
              kind: 'real', src: '（她就这么走过去，伸手要看那锁）',
              xv: 1,
              why: '大方，是她最不会做的事。这一回她做了，反倒谁也说不出话。' }
          ] },
        { q: '第二天他还来问：“你夜里咳嗽了几次？”',
          opts: [
            { t: '“也亏你倒听他的话。我平日和你说的，全当耳旁风。”',
              kind: 'fake', tw: '比通灵：他问咳嗽，你答“听他的话”',
              src: '黛玉笑道：“也亏你倒听他的话。我平日和你说的，全当耳旁风；怎么他说了你就依，比圣旨还快些！”宝玉听这话，知是黛玉借此奚落他，也无回复之词，只嘻嘻的笑两阵罢了。',
              hui: '第 8 回',
              why: '他要问的是她昨夜咳了几次。她说的是“你听他的话”。两个人问的答的，都不是一件事。' },
            { t: '“咳到三更。你问这个做什么。”',
              kind: 'real', src: '（她说得很直。他反倒不知该怎么接了）',
              xv: 1,
              why: '直话最难接。他习惯了她绕，一绕，他就能躲。' }
          ] }
      ],
      close: [{ t: '“金玉”这两个字，从这一天起，进了两个人的耳朵。' }] },

    { no: '三', hui: '第 23 回', title: '共 读',
      open: [
        { t: '三月中浣。桃花底下，沁芳闸桥边。' },
        { t: '宝玉坐在石头上看《会真记》，看得落红成阵，满身满书满地都是花。' },
        { t: '黛玉来了，也要看。' },
        { t: '看到一半，他笑着说了一句话。' }
      ],
      nodes: [
        { q: '他笑道：“我就是个‘多愁多病身’，你就是那‘倾国倾城貌’。”',
          opts: [
            { t: '登时竖起两道眉，红了眼：“你这该死的胡说！我告诉舅舅舅母去。”',
              kind: 'fake', tw: '共读：他动了情，你说要告状',
              src: '林黛玉听了，不觉带腮连耳通红……指宝玉道：“你这该死的胡说！好好的把这淫词艳曲弄了来，还学了这些混话来欺负我。我告诉舅舅舅母去。”说到“欺负”两个字上，早又把眼睛圈儿红了，转身就走。',
              hui: '第 23 回',
              why: '脸红是真的，恼怒是假的。她恼的不是他说了，是他把书里的话这么随便就说了出来。' },
            { t: '低下头，半天没说话。',
              kind: 'real', src: '（她低着头，把书页翻得哗哗响，一个字也没看进去）',
              xv: 1,
              why: '她听懂了。听懂了，才更怕——这话他敢说，可说完之后呢。' }
          ] },
        { q: '他慌了，赌咒：“若有心欺负你，明儿我掉在池子里，教个癞头鼋吞了去，变个大王八。”',
          opts: [
            { t: '嗤的一声笑了：“一般也唬的这个调儿，还只管胡说。”',
              kind: 'char', tw: '',
              src: '黛玉嗤的一声笑了，揉着眼睛，一面笑道：“一般也唬的这个调儿，还只管胡说。呸，原来是‘苗而不秀，是个银样镴枪头’。”',
              hui: '第 23 回',
              why: '两个人在这里和好了。这一场是全书最轻的一天——她还会笑，他还会说傻话。' },
            { t: '不理他，收拾花具走了。',
              kind: 'fake', tw: '共读：他赌咒，你转身走了',
              src: '（花具留在石头上，她走了）',
              xv: 1,
              why: '这一次他没追。他坐在原地，把书翻来翻去，一页也没看进去。' }
          ] }
      ],
      close: [{ t: '这一天，是整本书里最好的日子。' }] },

    { no: '四', hui: '第 26 回', title: '闭 门 羹', noChoice: true,
      open: [
        { t: '四月二十六，芒种。白天她在山坡上葬花。' },
        { t: '夜里，她到怡红院来敲门。' },
        { t: '', src: '忽听又有人叫门，晴雯越发动了气，也并不问是谁，便说道：“都睡下了，明儿再来罢！”', hui: '第 26 回' },
        { t: '', src: '林黛玉……因而又高声说道：“是我，还不开么？”晴雯偏生还没听出来。', hui: '第 26 回' },
        { t: '', src: '晴雯道：“凭你是谁，二爷吩咐的，一概不许放人进来呢！”', hui: '第 26 回' },
        { t: '她站在墙边，听见里头宝玉和宝钗说笑的声音。' },
        { t: '她想：虽说是舅母家如同自己家一样，到底是客边。' },
        { t: '她回去，哭了一夜。' }
      ],
      nodes: [],
      close: [{ t: '这一场没有选择。' },
              { t: '她走了。他不知道她来过。' },
              { t: '晴雯听不出她的声音，是晴雯的错吗。她气头上不开门，也是应当的。' },
              { t: '谁都没有错。' }] },

    { no: '五', hui: '第 29 回', title: '两 假 相 逢',
      open: [
        { t: '清虚观打醮。张道士当着众人，要给宝玉说亲。' },
        { t: '第二天，两个人都没去看戏。' },
        { t: '', src: '原来那宝玉……每用假情试探。因你也将真心真意瞒了起来，只用假意，我也将真心真意瞒了起来，只用假意，如此两假相逢，终有一真。', hui: '第 29 回' },
        { t: '', src: '看来两个人原本是一个心，但都多生了枝叶，反弄成两个心了。', hui: '第 29 回' }
      ],
      nodes: [
        { q: '她病了。他饭也懒得吃，不时来问。她说：“你只管看你的戏去，在家里作什么？”',
          opts: [
            { t: '沉下脸：“我白认得了你。罢了，罢了！”',
              kind: 'fake', tw: '砸玉：她心疼你，你说“我白认得了你”',
              src: '宝玉……由不得立刻沉下脸来，说道：“我白认得了你。罢了，罢了！”林黛玉听说，便冷笑了两声：“我也知道白认得了我，那里像人家有什么配的上呢。”',
              hui: '第 29 回',
              why: '他要说的是“你该知道我的心”。说出口的，成了“我白认得你”。' },
            { t: '忍住，说：“我知道你是怕我病着还跑来。”',
              kind: 'real', src: '（他把这句说了出来。她愣了一下，眼泪先下来了）',
              xv: 1,
              why: '他把话说明白了。可她要的不是被说中——被说中了，她反而更没处站。' }
          ] },
        { q: '她哭着说：“何苦来，你摔砸那哑吧物件。有砸他的，不如来砸我。”',
          opts: [
            { t: '真去砸玉',
              kind: 'fake', tw: '砸玉：你把玉摔在了地上',
              src: '宝玉……便赌气向颈上抓下通灵宝玉，咬牙恨命往地下一摔，道：“什么捞什骨子，我砸了你完事！”……宝玉冷笑道：“我砸我的东西，与你们什么相干！”',
              hui: '第 29 回',
              why: '他砸的是“我配不上你”这五个字。落在她眼里，是另外五个字。' },
            { t: '抓住她的手，不砸',
              kind: 'real', src: '（手抓住了。玉还在，可两个人都没往下说话）',
              xv: 1,
              why: '玉保住了。她看着他攥白的手，心里想的是：他连为我砸一次都不肯。' }
          ] },
        { q: '袭人忙劝：“你不看别的，你看看这玉上穿的穗子。”她听了，抢过玉，抓起剪子就剪。',
          opts: [
            { t: '“你只管剪，我横竖不带他，也没什么。”',
              kind: 'fake', tw: '砸玉：她剪穗子，你说“我横竖不带他”',
              src: '黛玉哭道：“我也是白效力。他也不希罕，自有别人替他再穿好的去。”宝玉向林黛玉道：“你只管剪，我横竖不带他，也没什么。”',
              hui: '第 29 回',
              why: '“白效力”三个字里，是她这几年所有的好。他一句“横竖不带他”，全推回去了。' },
            { t: '把玉抢回来，塞进她手里',
              kind: 'real', src: '（玉塞进她手里。她攥着，剪子掉在地上）',
              xv: 1,
              why: '穗子保住了。可她要的从来不是穗子。' }
          ] },
        { q: '外头贾母急得抱怨：“真是俗语说的，‘不是冤家不聚头’。”这话传了进来。',
          opts: [
            { t: '怔住。',
              kind: 'char', tw: '',
              src: '他二人竟是从未听见过“不是冤家不聚头”这句俗语，如今忽然得了这句话，好似参禅的一般……虽不曾会面，然一个在潇湘馆临风洒泪，一个在怡红院对月长吁，却不是人居两地，情发一心！',
              hui: '第 29 回',
              why: '八个字，比他们自己说的任何一句都准。' },
            { t: '还在气里，不理会。',
              kind: 'fake', tw: '砸玉：老太太那句话，你没听进去',
              src: '（夜更深了。两处院子，都没有点灯）',
              xv: 1,
              why: '这句话要在很多年后才起作用。那时候已经晚了。' }
          ] }
      ],
      close: [{ t: '这一夜，两个人都哭了，隔着两处院子。' }] },

    { no: '六', hui: '第 32 回', title: '你 放 心',
      open: [
        { t: '湘云来了。宝玉急急地赶过去，把袭人做的扇套子拿给她看。' },
        { t: '两人在花阴下说话，黛玉远远地站着听了一会儿，转身走了。' },
        { t: '宝玉追出来。她说了一句话，把他说急了。' },
        { t: '她后悔了，笑着替他拭汗：“你别着急，我原说错了。”' }
      ],
      nodes: [
        { q: '他瞅了她半天，说了三个字：“你放心。”',
          opts: [
            { t: '怔了半天，说：“我有什么不放心的？我不明白这话。”',
              kind: 'fake', tw: '你放心：他说“你放心”，你装不懂',
              src: '宝玉瞅了半天，方说道“你放心”三个字。林黛玉听了，怔了半天，方说道：“我有什么不放心的？我不明白这话。你倒说说怎么放心不放心？”',
              hui: '第 32 回',
              why: '她听懂了。听懂了，才要装不懂——这三个字太重，接住了就得认。' },
            { t: '什么也没说，点了点头。',
              kind: 'real', src: '（她点了点头。他松了一口气，像是卸下了什么）',
              xv: 1,
              why: '这是全书唯一一次，她点头了。可惜点头不是定亲。' }
          ] },
        { q: '他叹道：“你皆因总是不放心的原故，才弄了一身病。但凡宽慰些，这病也不得一日重似一日。”',
          opts: [
            { t: '如轰雷掣电，怔怔望着他，只咳了一声，滚下泪来，回身要走。',
              kind: 'char', tw: '',
              src: '林黛玉听了这话，如轰雷掣电，细细思之，竟比自己肺腑中掏出来的还觉恳切……两个人怔了半天，林黛玉只咳了一声，两眼不觉滚下泪来，回身便要走。',
              hui: '第 32 回',
              why: '“竟比自己肺腑中掏出来的还觉恳切。”——他要说的，正是她自己心里那句。' },
            { t: '站住，让他把话说完。',
              kind: 'real', src: '（她站住了。他反倒说不下去）',
              xv: 1,
              why: '两个人都站着。这一回，谁也没有先走。' }
          ] }
      ],
      close: [{ t: '这一回，他把话说到底了。' },
              { t: '全书只有这一回。' }] },

    { no: '七', hui: '第 34 回', title: '两 条 旧 帕',
      open: [
        { t: '宝玉挨了打。' },
        { t: '傍晚，他打发晴雯去看看她。' },
        { t: '晴雯说：“若不然，或是送件东西，或是取件东西，不然我去了怎么搭讪呢？”' },
        { t: '宝玉想了一想，伸手拿了两条手帕子撂与晴雯。' }
      ],
      nodes: [
        { q: '晴雯送来两条半新不旧的帕子。你看着这两块帕子——',
          opts: [
            { t: '左思右想：这番苦意，不知将来如何。',
              kind: 'char', tw: '',
              src: '这黛玉体贴出绢子的意思来，不觉神痴心醉，想到：宝玉能领会我这一番苦意，又令我可喜……如此左思右想，一时五内沸然炙起。',
              hui: '第 34 回',
              why: '送旧的，不是送新的——旧的是他贴身用过的。她懂了，所以“五内沸然”。' },
            { t: '想：他为什么送旧的，是不是随手拿的。',
              kind: 'fake', tw: '送帕：你疑他送帕是随手',
              src: '（她把帕子放在枕边，一夜没碰）',
              xv: 1,
              why: '他挑了两条旧的，是把自己的东西给她。她想成了“随手”。' }
          ] },
        { q: '掌了灯，研墨蘸笔，帕子在眼前。',
          opts: [
            { t: '题下去：“眼空蓄泪泪空垂，暗洒闲抛却为谁？”',
              kind: 'char', tw: '',
              src: '眼空蓄泪泪空垂，暗洒闲抛却为谁？尺幅鲛鮹劳解赠，叫人焉得不伤悲！',
              hui: '第 34 回',
              why: '“却为谁”三个字，问的是帕子，答的是她自己。' },
            { t: '写了两行，放下了。',
              kind: 'fake', tw: '送帕：你题了一半就搁笔',
              src: '（墨迹未干，她把帕子叠起来，压在枕下）',
              xv: 1,
              why: '这一夜她没写完。后来再没有第二夜。' }
          ] }
      ],
      close: [{ t: '她题了三首诗在那两条旧帕上。' },
              { t: '这一年，她十七岁。' }] },

    { no: '八', hui: '第 97 – 98 回', title: '焚 稿', noChoice: true,
      open: [
        { t: '第九十七回。凤姐设了调包计。' },
        { t: '那边张灯结彩，宝玉娶的是“林妹妹”——盖头底下是宝钗。' },
        { t: '这边潇湘馆，她知道了。' },
        { t: '', src: '黛玉听说，便叫笼上火盆……把那诗稿拿起来，瞧了瞧，又放下了……却一年多矣。', hui: '第 97 回' },
        { t: '她把那两块旧帕，扔进了火里。' },
        { t: '', src: '猛听黛玉直声叫道：“宝玉，宝玉，你好……”说到“好”字，便浑身冷汗，不作声了。', hui: '第 98 回' }
      ],
      nodes: [],
      close: [{ t: '这一次没有选择。' },
              { t: '不是因为你选错了。' }] }
  ];

  const META = {
    '一': { who: 'bao', whoTxt: '宝 玉', color: 'bao',
      pz: { k: '甲 侧', t: '与黛玉同心，却是两样笔墨。观此则知玉卿心中有则说出，一毫宿滞皆无。' },
      note: '这是“木石”的起点。他摔玉，是全书第一次为别人发疯；她夜里哭，是绛珠还泪的第一滴。' },
    '二': { who: 'dai', whoTxt: '黛 玉', color: 'dai',
      pz: { k: '甲 侧', t: '合前读之，岂非一对？' },
      note: '金锁第一次登场。“金玉”之说不是谁编出来的，是从莺儿一句闲话里长出来的——那句话她没听见，可她一辈子都在跟它较劲。' },
    '三': { who: 'bao', whoTxt: '宝 玉', color: 'bao',
      pz: { k: '庚 侧', t: '看官说宝玉忘情有之，若认作有心取笑，则看不得《石头记》。' },
      note: '《西厢》从此成了两个人的暗语。第四十回行酒令她脱口而出，第四十九回又提一次，每一次都被人拿住。' },
    '四': { who: 'dai', whoTxt: '黛 玉', color: 'dai',
      pz: { k: '甲 侧', t: '想黛玉高声亦不过你我平常说话一样耳，况晴雯素昔浮躁多气之人，如何辨得出？' },
      note: '这一次错过，第二天就有了《葬花吟》。她哭的不只是门没开。' },
    '五': { who: 'bao', whoTxt: '宝 玉', color: 'bao',
      pz: { k: '蒙 侧', t: '真疼真爱、真怜真惜中，每每生出此等心病来。' },
      note: '作者在这里直接下了判词：“原本是一个心，但都多生了枝叶。”全书再没有第二处，把话说到这么明。' },
    '六': { who: 'bao', whoTxt: '宝 玉', color: 'bao',
      pz: { k: '蒙 侧', t: '连我今日看之，也不懂是何等文章。' },
      note: '全书唯一一次说破。此后再没有大的口角——话已经说完了，剩下的都不是话能解决的。' },
    '七': { who: 'dai', whoTxt: '黛 玉', color: 'dai',
      pz: { k: '蒙 侧', t: '送的是手帕，晾的是手帕，妙文。' },
      note: '两条旧帕是私相传递，在当时是要担干系的。她题诗时“也想不起嫌疑避讳等事”——这一夜她是豁出去的。' },
    '八': { who: 'none', whoTxt: '', color: 'none',
      pz: { k: '无 批', t: '脂批只到第八十回。这两回没有批语可看。' },
      note: '前八十回是脂砚斋看过的本子。第八十一回往后，再没有一个人在旁边说话。' }
  };

  const LIST = [
    '她三岁上没了弟弟，六岁上没了母亲，十一岁上没了父亲。进府那一年，她是寄居。',
    '第 28 回，元妃赐下端午的节礼：宝玉和宝钗的一样，黛玉的次一等。',
    '贾母疼她。可全书一百二十回，贾母没有说过一句“把他说给宝玉”。',
    '宝玉的婚事要父母之命、媒妁之言。他自己说不上话。',
    '她连一个能替她开口的人都没有。'
  ];

  let el = null, ai = 0, ni = 0, twigs = [], step = 0, phase = 'cover';
  let readNext = null;

  function build() {
    if (el) return;
    el = document.createElement('div');
    el.id = 'ms';
    el.className = 'hidden';
    el.innerHTML =
      '<div class="ms-tw" id="msTw"></div>' +
      '<div class="ms-wrap"><div class="ms-body" id="msBody"></div><div class="ms-foot" id="msFoot"></div></div>' +
      '<button class="ms-close" id="msClose">✕</button>';
    document.body.appendChild(el);
    document.getElementById('msClose').addEventListener('click', function (e) {
      e.stopPropagation(); el.classList.add('hidden');
    });
    el.addEventListener('click', function (e) {
      const t = e.target;
      if (t.closest('.ms-opt') || t.closest('#msClose') || t.closest('.mc-go') ||
          t.closest('.ms-again') || t.closest('#msNext')) return;
      if (readNext) readNext();
    });
  }

  function twigShow() {
    document.getElementById('msTw').textContent = twigs.length ? '枝 ' + twigs.length : '';
  }

  function openMs() {
    build();
    el.classList.remove('hidden');
    ai = 0; twigs = []; phase = 'cover';
    twigShow();
    cover();
  }

  function cover() {
    document.getElementById('msBody').innerHTML =
      '<div class="ms-cover">' +
        '<div class="mc-h">木 石</div>' +
        '<div class="mc-s">八 幕 · 第 3 – 98 回</div>' +
        '<div class="mc-n">两个人原本是一个心，<br>但都多生了枝叶，<br>反弄成两个心了。<br><span>——第 29 回</span></div>' +
        '<button class="mc-go" id="msGo">开 始</button>' +
      '</div>';
    document.getElementById('msFoot').innerHTML = '';
    document.getElementById('msGo').addEventListener('click', function (e) {
      e.stopPropagation(); ai = 0; whosPage();
    });
  }

  function whosPage() {
    const a = ACTS[ai], m = META[a.no];
    if (!m || m.who === 'none') { actIntro(); return; }
    document.getElementById('msBody').innerHTML =
      '<div class="ms-who ' + m.color + '">这一回，你是' + m.whoTxt + '</div>' +
      '<div class="ms-whon">' + a.hui + '　' + a.title + '</div>' +
      '<div class="ms-more">轻 点 继 续</div>';
    readNext = function () { readNext = null; actIntro(); };
  }

  function actIntro() {
    phase = 'read';
    const a = ACTS[ai];
    const rows = a.open;
    let k = -1;
    function paint() {
      let h = '<div class="ms-cap">第 ' + a.no + ' 幕　' + a.title + '　·　' + a.hui + '</div>';
      for (let j = 0; j <= k; j++) {
        const r = rows[j];
        if (r.src) h += '<div class="ms-src"><em>' + r.hui + '</em>' + r.src + '</div>';
        else h += '<div class="ms-p">' + r.t + '</div>';
      }
      h += '<div class="ms-more">轻 点 继 续</div>';
      document.getElementById('msBody').innerHTML = h;
      const b = document.getElementById('msBody'); b.scrollTop = b.scrollHeight;
    }
    paint();
    readNext = function () {
      k++;
      if (k < rows.length) { paint(); return; }
      readNext = null;
      if (a.noChoice) { actClose(); return; }
      ni = 0; nodeRender();
    };
  }

  function nodeRender() {
    const a = ACTS[ai];
    const n = a.nodes[ni];
    phase = 'play';
    document.getElementById('msBody').innerHTML =
      '<div class="ms-step">' + a.no + ' 幕 · ' + (ni + 1) + ' / ' + a.nodes.length + '</div>' +
      '<div class="ms-q">' + n.q + '</div>';
    document.getElementById('msFoot').innerHTML = n.opts.map(function (o, k) {
      return '<button class="ms-opt" data-k="' + k + '">' + o.t + '</button>';
    }).join('');
    Array.prototype.forEach.call(document.querySelectorAll('.ms-opt'), function (b) {
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        nodeResult(parseInt(b.getAttribute('data-k'), 10));
      });
    });
  }

  function nodeResult(k) {
    const a = ACTS[ai], n = a.nodes[ni], o = n.opts[k];
    if (o.kind === 'fake' && o.tw) twigs.push(o.tw);
    twigShow();
    document.getElementById('msFoot').innerHTML = '';
    let h = '';
    if (o.src) h += '<div class="ms-src"><em>' + (o.hui || '原文') + '</em>' + o.src + '</div>';
    h += '<div class="ms-why"><i>解</i>' + o.why + '</div>';
    if (o.xv) h += '<div class="ms-xv"><i>续</i>这一段原著没有。是依着人物的性子补的。</div>';
    h += '<div class="ms-more">轻 点 继 续</div>';
    document.getElementById('msBody').innerHTML = h;
    const b = document.getElementById('msBody'); b.scrollTop = 0;
    readNext = function () {
      readNext = null;
      ni++;
      if (ni < a.nodes.length) nodeRender(); else actClose();
    };
  }

  function actClose() {
    phase = 'read';
    const a = ACTS[ai];
    let k = -1;
    function paint() {
      let h = '';
      for (let j = 0; j <= k; j++) h += '<div class="ms-p last">' + a.close[j].t + '</div>';
      h += '<div class="ms-more">轻 点 继 续</div>';
      document.getElementById('msBody').innerHTML = h;
    }
    paint();
    readNext = function () {
      k++;
      if (k < a.close.length) { paint(); return; }
      readNext = null;
      const m = META[a.no];
      let h2 = '';
      if (m && m.pz) h2 += '<div class="ms-pz"><em>' + m.pz.k + '</em>' + m.pz.t + '</div>';
      if (m && m.note) h2 += '<div class="ms-note2"><i>识</i>' + m.note + '</div>';
      h2 += '<div class="ms-more">轻 点 继 续</div>';
      document.getElementById('msBody').innerHTML = h2;
      readNext = function () {
        readNext = null;
        ai++;
        if (ai < ACTS.length) { whosPage(); return; }
        burn();
      };
    };
  }

  function burn() {
    const n = twigs.length;
    let h = '<div class="ms-turn">她烧的是那两块旧帕，和一卷诗稿。</div>';
    if (n) {
      h += '<div class="ms-burns">' + twigs.map(function (t) {
        return '<div class="ms-burn">· ' + t + '</div>';
      }).join('') + '</div>';
      h += '<div class="ms-turn">也是这些年，你们一句一句长出来的这些枝。</div>';
    } else {
      h += '<div class="ms-turn">这一路，你一枝也没有长。</div>';
    }
    h += '<div class="ms-more">轻 点 继 续</div>';
    document.getElementById('msBody').innerHTML = h;
    Array.prototype.forEach.call(document.querySelectorAll('.ms-burn'), function (el, i) {
      setTimeout(function () { el.classList.add('out'); }, 800 + i * 540);
    });
    readNext = function () { readNext = null; paper(); };
  }

  function paper() {
    let k = -1;
    function paint() {
      let h = '<div class="ms-turn">下面是这十几年里，谁也做不了主的事——</div>';
      for (let j = 0; j <= k; j++) h += '<div class="ms-li">' + LIST[j] + '</div>';
      h += (k < LIST.length - 1)
        ? '<div class="ms-more">轻 点 继 续</div>'
        : '<div class="ms-final">这一路，你长了 ' + twigs.length + ' 枝。<br>没有一枝长在这张纸上。</div>' +
          '<button class="ms-again" id="msAgain">再 走 一 遍</button>';
      document.getElementById('msBody').innerHTML = h;
      if (k >= LIST.length - 1) {
        const b = document.getElementById('msBody'); b.scrollTop = b.scrollHeight;
        document.getElementById('msAgain').addEventListener('click', function (e) {
          e.stopPropagation(); openMs();
        });
      }
    }
    paint();
    readNext = function () {
      k++;
      if (k < LIST.length) { paint(); return; }
      readNext = null;
    };
  }

  window.openMS = openMs;

  document.addEventListener('click', function (e) {
    const b = e.target.closest && e.target.closest('#msBtn');
    if (!b) return;
    e.stopPropagation();
    Array.prototype.forEach.call(document.querySelectorAll('.tgroup.open'), function (g) { g.classList.remove('open'); });
    openMs();
  });
})();

/* ================= 大观园租房指南 ================= */
(function () {
  const RENT = [
    { s: 'yihong', nm: '怡红院', who: '贾宝玉',
      why: '门口一株西府海棠，东边几棵芭蕉。元春把“红香绿玉”改成了“怡红快绿”。园中最华丽的一处，给了最受宠的孙儿。' },
    { s: 'xiaoxiang', nm: '潇湘馆', who: '林黛玉',
      why: '“千百竿翠竹掩映”，隐着一道曲栏。这院子是她自己挑的：“爱那几竿竹子隐着一道曲栏，比别处更觉幽静。”' },
    { s: 'hengyuan', nm: '蘅芜苑', who: '薛宝钗',
      why: '“不见花木，惟种奇藤异草”。宝玉走近她，只闻见“一阵阵凉森森甜丝丝的幽香”。冷美人，住冷院子。湘云来住，也在这里。' },
    { s: 'qiushuang', nm: '秋爽斋', who: '贾探春',
      why: '三间屋子不隔断，阔朗。她说：“我素喜阔朗。”' },
    { s: 'daoxiang', nm: '稻香村', who: '李纨',
      why: '黄泥矮墙，茅屋菜畦。贾政看了说“未免勾起我归农之意”。守寡的人，住一片素朴。' },
    { s: 'ziling', nm: '紫菱洲', who: '贾迎春',
      why: '临水而居。她嫁出去之后，宝玉再来，只见“轩窗寂寞，屏帐翛然”。' },
    { s: 'nuanxiang', nm: '暖香坞', who: '贾惜春',
      why: '园中最暖的一个名字，住着最冷的一个人。后来她出家了。' },
    { s: 'longcui', nm: '栊翠庵', who: '妙玉',
      why: '这是一座尼庵。她带发修行，住在庵里，不肯住在园子的人当中。' },
    { s: 'ouxiang', nm: '藕香榭', who: '',
      why: '四面有窗，盖在池中。这是赏荷、吃蟹、听曲的地方——**没有人住在这儿。**' }
  ];

  let el = null, sel = null, done = 0;

  function build() {
    if (el) return;
    el = document.createElement('div');
    el.id = 'rent';
    el.className = 'hidden';
    el.innerHTML =
      '<div class="rt-head"><div class="rt-t">大 观 园 租 房 指 南</div>' +
        '<div class="rt-s" id="rtS">点一个人，再点一处院子</div></div>' +
      '<div class="rt-grid" id="rtGrid"></div>' +
      '<div class="rt-chars" id="rtChars"></div>' +
      '<div class="rt-card hidden" id="rtCard"></div>' +
      '<button class="rt-close" id="rtClose">✕</button>';
    document.body.appendChild(el);
    document.getElementById('rtClose').addEventListener('click', function (e) {
      e.stopPropagation(); el.classList.add('hidden');
    });
    render();
  }

  function render() {
    const g = document.getElementById('rtGrid');
    g.innerHTML = RENT.map(function (r, i) {
      const filled = r.done;
      return '<button class="rt-cell' + (filled ? ' done' : '') + '" data-i="' + i + '">' +
        '<span class="rt-nm">' + r.nm + '</span>' +
        '<em>' + (filled ? (r.who || '无人') : '') + '</em></button>';
    }).join('');
    Array.prototype.forEach.call(g.querySelectorAll('.rt-cell'), function (b) {
      b.addEventListener('click', function () { tapCell(parseInt(b.getAttribute('data-i'), 10)); });
    });

    const pool = RENT.filter(function (r) { return r.who && !r.done; });
    document.getElementById('rtChars').innerHTML = pool.map(function (r) {
      return '<button class="rt-chip' + (sel === r.who ? ' sel' : '') + '" data-w="' + r.who + '">' + r.who + '</button>';
    }).join('');
    Array.prototype.forEach.call(document.querySelectorAll('.rt-chip'), function (b) {
      b.addEventListener('click', function () {
        sel = (sel === b.getAttribute('data-w')) ? null : b.getAttribute('data-w');
        render();
      });
    });
  }

  function tapCell(i) {
    const r = RENT[i];
    if (r.done) { show(r); return; }
    if (!r.who) { r.done = true; done++; show(r); render(); check(); return; }
    if (!sel) {
      document.getElementById('rtS').textContent = '先点一个人';
      return;
    }
    if (sel === r.who) {
      r.done = true; done++; sel = null;
      render(); show(r); check();
    } else {
      document.getElementById('rtS').textContent = sel + '不住在这儿';
      setTimeout(function () { document.getElementById('rtS').textContent = '点一个人，再点一处院子'; }, 1600);
    }
  }

  function show(r) {
    const c = document.getElementById('rtCard');
    c.innerHTML = '<div class="rt-ch">' + r.nm + (r.who ? '　·　' + r.who : '') + '</div>' +
      '<div class="rt-cb">' + r.why + '</div>' +
      '<button class="rt-ok" id="rtOk">知 道 了</button>';
    c.classList.remove('hidden');
    document.getElementById('rtOk').addEventListener('click', function (e) {
      e.stopPropagation(); c.classList.add('hidden');
    });
  }

  function check() {
    if (done < RENT.length) return;
    const c = document.getElementById('rtCard');
    c.innerHTML = '<div class="rt-ch">九处院子，看完了</div>' +
      '<div class="rt-cb">人住在哪儿，就是什么人。<br>' +
      '一个爱竹的人不会住进藤草里，一个守寡的人不会搬到池心的亭子上。<br><br>' +
      '这园子不是先有了院子，才住进人来。<br>是先有了这些人，院子才成了那个样子。</div>' +
      '<button class="rt-ok" id="rtOk">合 上</button>';
    c.classList.remove('hidden');
    document.getElementById('rtOk').addEventListener('click', function (e) {
      e.stopPropagation(); c.classList.add('hidden');
    });
  }

  function openRent() {
    build();
    el.classList.remove('hidden');
    RENT.forEach(function (r) { r.done = false; });
    sel = null; done = 0;
    document.getElementById('rtS').textContent = '点一个人，再点一处院子';
    document.getElementById('rtCard').classList.add('hidden');
    render();
  }

  window.openRent = openRent;

  document.addEventListener('click', function (e) {
    const b = e.target.closest && e.target.closest('#rentBtn');
    if (!b) return;
    e.stopPropagation();
    Array.prototype.forEach.call(document.querySelectorAll('.tgroup.open'), function (g) { g.classList.remove('open'); });
    openRent();
  });
})();
