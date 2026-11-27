// 领域类型：与原著内容一一对应的数据结构

/** 一处院落的四层景深图 */
export interface SceneImages {
  far: string
  mid: string
  near: string
  wang: string
}

/** 大观园中的十一处院落 */
export interface Scene {
  id: string
  name: string
  sub: string
  label: string
  /** 平面图上的百分比坐标 */
  map: { x: number; y: number }
  img: SceneImages
  plaque: string
  couplet: string
  panciTitle: string
  panci: string
  plot: string
  know: string
  /** 关联人物 id，见 characters */
  char?: string
}

/** 人物小传 */
export interface Character {
  name: string
  alias: string
  line: string
  bio: string
}

/** 太虚幻境的一页（一册一页） */
export interface PanciPage {
  no: string
  isIndex?: boolean
  who: string
  chars: string[]
  img: string
  glyph?: string
  hua: string
  ci: string
  shi: string
}

/** 判词 · 曲 · 结局三联 */
export interface FateEntry {
  /** 所属册：正册 / 副册 / 又副册 */
  no?: string
  /** 「一诗二证」之类的小标题 */
  sub?: string
  /** 丫鬟等人物的判词原文 */
  panci?: string
  /** 一句定调（多引第 5 回曲文） */
  yu: string
  /** 红楼梦曲 */
  qu: { n: string; t: string }[]
  /** 结局三证 */
  end: { h: string; t: string; x: string }[]
  hook: string
}

/** 内景里的可点物件 */
export interface RoomItem {
  /** 物件 key */
  k: string
  /** 物件名 */
  n: string
  /** 在底图上的百分比坐标与尺寸 */
  x: number
  y: number
  w?: number
  h?: number
  /** 出处回次 */
  src?: string
  /** 原文 */
  q?: string
  /** 解说 */
  note?: string
}

/** 内景（居室） */
export interface Room {
  name: string
  img: string
  img2?: string
  /** 换图按钮文案，如「换 纱」 */
  swap?: string
  intro: { src: string; q: string; note: string }
  items?: RoomItem[]
}

/** 占花名的一支签 */
export interface Huaqian {
  flower: string
  sign: string
  line: string
  who: string
  note: string
}

/** 灯谜一则 */
export interface Riddle {
  q: string
  o: string[]
  who: string
  note: string
}
