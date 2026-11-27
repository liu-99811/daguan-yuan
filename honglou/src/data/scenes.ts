import type { Scene } from '@/types/domain'

export const SCENES: readonly Scene[] = [
  {
    "id": "qinfang",
    "name": "沁芳亭",
    "sub": "大观园 · 出入之总路",
    "label": "沁芳亭",
    "map": {
      "x": 51.9,
      "y": 76
    },
    "img": {
      "far": "",
      "mid": "assets/qf_mid.jpg",
      "near": "assets/qf_near.jpg",
      "wang": "assets/qf_wang.webp"
    },
    "plaque": "沁芳",
    "couplet": "绕堤柳借三篙翠，隔岸花分一脉香",
    "panciTitle": "",
    "panci": "",
    "plot": "第23回宝黛在此附近共读《西厢记》；黛玉重建桃花诗社亦在此一带。沁芳亭是园中人来人往的必经之处。",
    "know": "沁芳溪贯穿全园：活水自东北沁芳闸引入，萦洄映带，诸钗往来皆经沁芳桥。亭在桥上，故曰\"沁芳\"。"
  },
  {
    "id": "xiaoxiang",
    "name": "潇湘馆",
    "sub": "大观园 · 有凤来仪",
    "label": "潇湘馆",
    "map": {
      "x": 67.8,
      "y": 71.2
    },
    "img": {
      "far": "",
      "mid": "assets/xxg_mid.jpg",
      "near": "assets/xxg_near.jpg",
      "wang": "assets/xxg_wang.webp"
    },
    "plaque": "有凤来仪",
    "couplet": "宝鼎茶闲烟尚绿，幽窗棋罢指犹凉",
    "panciTitle": "林黛玉 · 判词",
    "panci": "可叹停机德，堪怜咏絮才。\n玉带林中挂，金簪雪里埋。",
    "plot": "黛玉进园后自选此居（\"爱那几竿竹子，隐着一道曲栏，比别处更觉幽静\"）。在此共读《西厢》、雨夜作《秋窗风雨夕》，终至焚稿断痴情。",
    "know": "黛玉诗号\"潇湘妃子\"。院中\"千百竿翠竹掩映\"，斑竹一枝千滴泪，正合其以泪洗面的一生。",
    "char": "daiyu"
  },
  {
    "id": "yihong",
    "name": "怡红院",
    "sub": "大观园 · 怡红快绿",
    "label": "怡红院",
    "map": {
      "x": 19.9,
      "y": 66.2
    },
    "img": {
      "far": "",
      "mid": "assets/yhy_mid.jpg",
      "near": "assets/yhy_near.jpg",
      "wang": "assets/yhy_wang.webp"
    },
    "plaque": "怡红快绿",
    "couplet": "",
    "panciTitle": "贾宝玉 · 《西江月》",
    "panci": "无故寻愁觅恨，有时似傻如狂。\n纵然生得好皮囊，腹内原来草莽。\n潦倒不通世务，愚顽怕读文章。\n行为偏僻性乖张，那管世人诽谤！",
    "plot": "宝玉居所，园中最华丽的院落。宝黛初会、晴雯撕扇、平儿理妆、寿怡红群芳开夜宴、刘姥姥醉卧怡红院。",
    "know": "\"红\"指门前西府海棠，\"绿\"指东侧芭蕉；元妃将宝玉所题\"红香绿玉\"改为\"怡红快绿\"。宝玉别号怡红公子。",
    "char": "baoyu"
  },
  {
    "id": "hengyuan",
    "name": "蘅芜苑",
    "sub": "大观园 · 蘅芷清芬",
    "label": "蘅芜苑",
    "map": {
      "x": 74.7,
      "y": 26.3
    },
    "img": {
      "far": "",
      "mid": "assets/hy_mid.jpg",
      "near": "assets/hy_near.jpg",
      "wang": "assets/hy_wang.webp"
    },
    "plaque": "蘅芷清芬",
    "couplet": "吟成豆蔻诗犹艳，睡足荼蘼梦亦香",
    "panciTitle": "薛宝钗 · 判词（与黛玉合一）",
    "panci": "可叹停机德，堪怜咏絮才。\n玉带林中挂，金簪雪里埋。",
    "plot": "宝钗奉元妃之命住此。宝钗扑蝶、\"金玉良缘\"、出闺成大礼皆系于此。自第37回起，史湘云来园中便住此处，与宝钗同住。",
    "know": "院中\"不见花木，惟种奇藤异草\"，尽显\"冷美人\"气质；诗号\"蘅芜君\"。湘云客居于此，她的诗号\"枕霞旧友\"正是宝钗为她取的。",
    "char": "baochai"
  },
  {
    "id": "qiushuang",
    "name": "秋爽斋",
    "sub": "大观园 · 桐剪秋风",
    "label": "秋爽斋",
    "map": {
      "x": 60.2,
      "y": 58.7
    },
    "img": {
      "far": "",
      "mid": "assets/qs_mid.jpg",
      "near": "assets/qs_near.jpg",
      "wang": "assets/qs_wang.webp"
    },
    "plaque": "桐剪秋风",
    "couplet": "烟霞闲骨格，泉石野生涯",
    "panciTitle": "贾探春 · 判词",
    "panci": "才自精明志自高，生于末世运偏消。\n清明涕送江边望，千里东风一梦遥。",
    "plot": "探春在此结海棠诗社、敏探春兴利除宿弊（理家）、抄检大观园怒斥王善保家的，终远嫁他乡。",
    "know": "探春浑名\"玫瑰花\"（又红又香又扎手），诗号\"蕉下客\"；居室三间不隔断，见其阔朗。",
    "char": "tanchun"
  },
  {
    "id": "daoxiang",
    "name": "稻香村",
    "sub": "大观园 · 杏帘在望",
    "label": "稻香村",
    "map": {
      "x": 83.7,
      "y": 62.3
    },
    "img": {
      "far": "",
      "mid": "assets/dx_mid.jpg",
      "near": "assets/dx_near.jpg",
      "wang": "assets/dx_wang.webp"
    },
    "plaque": "杏帘在望",
    "couplet": "新涨绿添浣葛处，好云香护采芹人",
    "panciTitle": "李纨 · 判词",
    "panci": "桃李春风结子完，到头谁似一盆兰。\n如冰水好空相妒，枉与他人作笑谈。",
    "plot": "李纨守寡教子、参与大观园\"承包\"兴利除弊，诗社中任社长，自号\"稻香老农\"。",
    "know": "黄泥矮墙、杏花茅屋，一派田园，贾政曾生\"归农之意\"；李纨在这片素朴里安放半生。",
    "char": "liwan"
  },
  {
    "id": "longcui",
    "name": "栊翠庵",
    "sub": "大观园 · 苦海慈航",
    "label": "栊翠庵",
    "map": {
      "x": 23.1,
      "y": 39.9
    },
    "img": {
      "far": "",
      "mid": "assets/lc_mid.jpg",
      "near": "assets/lc_near.jpg",
      "wang": "assets/lc_wang.webp"
    },
    "plaque": "苦海慈航",
    "couplet": "",
    "panciTitle": "妙玉 · 判词",
    "panci": "欲洁何曾洁，云空未必空。\n可怜金玉质，终陷淖泥中。",
    "plot": "栊翠庵茶品梅花雪——妙玉以旧年蠲的雨水、梅花上的雪烹茶待客；后妙玉遭劫，不知所终。",
    "know": "妙玉带发修行、孤高自许，自称\"槛外人\"；红梅映雪，是全书最清冷的所在。",
    "char": "miaoyu"
  },
  {
    "id": "ziling",
    "name": "紫菱洲",
    "sub": "大观园 · 缀锦楼",
    "label": "紫菱洲",
    "map": {
      "x": 67.3,
      "y": 38.2
    },
    "img": {
      "far": "",
      "mid": "assets/zl_mid.jpg",
      "near": "assets/zl_near.jpg",
      "wang": "assets/zl_wang.webp"
    },
    "plaque": "缀锦楼",
    "couplet": "",
    "panciTitle": "贾迎春 · 判词",
    "panci": "子系中山狼，得志便猖狂。\n金闺花柳质，一载赴黄粱。",
    "plot": "迎春住缀锦楼。误嫁孙绍祖（\"子系\"合为\"孙\"，即\"中山狼\"），受虐而亡；宝玉常来此徘徊。",
    "know": "迎春浑名\"二木头\"，诗号\"菱洲\"；水边蓼花苇叶、翠荇香菱，正是\"紫菱洲\"之名所本。",
    "char": "yingchun"
  },
  {
    "id": "nuanxiang",
    "name": "暖香坞",
    "sub": "大观园 · 蓼风轩",
    "label": "暖香坞",
    "map": {
      "x": 62.3,
      "y": 47.7
    },
    "img": {
      "far": "",
      "mid": "assets/nx_mid.jpg",
      "near": "assets/nx_near.jpg",
      "wang": "assets/nx_wang.webp"
    },
    "plaque": "暖香坞",
    "couplet": "",
    "panciTitle": "贾惜春 · 判词",
    "panci": "勘破三春景不长，缁衣顿改昔年妆。\n可怜绣户侯门女，独卧青灯古佛旁。",
    "plot": "惜春住暖香坞（蓼风轩）。作《大观园图》、抄检大观园后撵走毫无过错的入画，最终出家为尼。",
    "know": "惜春\"心冷嘴冷\"；园中最暖之处偏名\"暖香坞\"，反成最孤寂之人的居所。",
    "char": "xichun"
  },
  {
    "id": "ouxiang",
    "name": "藕香榭",
    "sub": "大观园 · 藕榭临波",
    "label": "藕香榭",
    "map": {
      "x": 58.5,
      "y": 45.7
    },
    "img": {
      "far": "",
      "mid": "assets/ox_mid.jpg",
      "near": "assets/ox_near.jpg",
      "wang": "assets/ox_wang.webp"
    },
    "plaque": "藕香榭",
    "couplet": "",
    "panciTitle": "史湘云 · 判词",
    "panci": "富贵又何为，襁褓之间父母违。\n展眼吊斜晖，湘江水逝楚云飞。",
    "plot": "第38回湘云在此做东摆螃蟹宴，众人咏菊，黛玉夺魁；第40回贾母在水亭听曲，\"借着水音更好听\"；第76回中秋，湘云与黛玉在这一带联诗，得\"寒塘渡鹤影，冷月葬花魂\"。",
    "know": "藕香榭盖在池中，四面有窗，左右曲廊跨水接岸，后有一道曲折竹桥。惜春的诗号\"藕榭\"即由此而来——她的暖香坞就在附近。",
    "char": "xiangyun"
  },
  {
    "id": "daguang",
    "name": "省亲别墅",
    "sub": "大观园 · 正殿",
    "label": "省亲别墅",
    "map": {
      "x": 47.5,
      "y": 33
    },
    "img": {
      "far": "",
      "mid": "assets/dg_mid.jpg",
      "near": "assets/dg_near.jpg",
      "wang": "assets/dg_wang.webp"
    },
    "plaque": "顾恩思义",
    "couplet": "天地启宏慈，赤子苍头同感戴；古今垂旷典，九州万国被恩荣",
    "panciTitle": "",
    "panci": "",
    "plot": "第18回元妃省亲。正月十五上元之夜，石牌坊上原题\"天仙宝境\"，元妃改为\"省亲别墅\"；入行宫，至正殿受礼、大开筵宴，并亲笔为园中诸处赐名。正楼曰大观楼，东为缀锦阁，西为含芳阁。",
    "know": "园中这些名字全是元春那一夜改的：\"有凤来仪\"赐名潇湘馆，\"红香绿玉\"改作怡红快绿，\"蘅芷清芬\"赐名蘅芜苑，\"杏帘在望\"赐名浣葛山庄。临去一句\"倘明岁天恩仍许归省，万不可如此奢华靡费了\"——脂批说，一个\"倘\"字，便是\"不再之谶\"。"
  }
] as const
