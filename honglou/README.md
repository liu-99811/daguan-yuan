# honglou · 大观园 水墨卧游

《红楼梦》大观园的可视化网页，正在改造成标准的现代前端工程。

> **状态：迁移中。** 目前完成工程骨架 + 数据层 + 全园地图 / 单处院落两个视图。
> 仓库根目录的 `index.html` 是**旧版成品**（单文件、功能完整），本目录是再造中的新版本，两者互不影响。

---

## 技术栈

| 层 | 选择 | 说明 |
| --- | --- | --- |
| 构建 | Vite 5 | 纯静态，无 SSR 需求 |
| 框架 | React 18 | |
| 语言 | TypeScript 5（`strict`） | |
| 样式 | Tailwind 3 + 少量自定义 CSS | 水墨风格大量自定义，Tailwind 主要管布局 |
| 包管理 | pnpm 9 | |
| 质量 | ESLint 9（flat config）+ Prettier | CI 里跑 typecheck / lint / build |

**不引入 UI 组件库。** Ant Design / MUI 这类组件库的视觉语言与水墨风格直接冲突，组件自己写。

## 快速开始

```bash
pnpm install
pnpm dev          # 本地开发，默认 http://localhost:5173
```

```bash
pnpm build        # 产出 dist/，常规静态站
pnpm build:single # 产出 dist-single/index.html，单文件（双击即开、可微信发送）
pnpm typecheck    # tsc 类型检查
pnpm lint         # ESLint
pnpm format       # Prettier 格式化
```

`build:single` 依赖 `vite-plugin-singlefile`（已在 devDependencies 里）。装不上时会自动降级为普通构建并给出警告。

## 目录

```
honglou/
├── public/
│   ├── assets/            198 张插图（原图，运行时不内联）
│   └── data/              全文原文（hlm_text.b64）、卷首数据（huimu.json）
├── src/
│   ├── main.tsx           入口
│   ├── App.tsx            视图切换
│   ├── views/             页面级视图（MapView / GardenView）
│   ├── components/        通用组件
│   ├── data/              内容数据（类型化，从旧版 app.js 抽出）
│   ├── hooks/             自定义 hook
│   ├── types/             领域类型
│   └── styles/app.css     Tailwind 入口 + 宣纸纹理
├── scripts/               迁移与校验脚本
├── .github/workflows/     CI（typecheck + lint + build）
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## 数据从哪来

| 内容 | 位置 | 形式 |
| --- | --- | --- |
| 十一处院落 | `src/data/scenes.ts` | 类型化常量，含平面图坐标、四层图路径、匾额楹联 |
| 人物小传 | `src/data/characters.ts` | |
| 太虚幻境判词 | `src/data/panci.ts` | 16 页 + 一诗三证 |
| 内景与物件 | `src/data/rooms.ts` | 含热点坐标 |
| 占花名 / 灯谜 | `src/data/games.ts` | |
| 原文全文 | `public/data/hlm_text.b64` | gzip 后 base64，供检索 |
| 插图 | `public/assets/` | 198 张 webp / jpg |

**没有数据库，没有后端，没有 API。** 全部是静态资源，页面不联网。

## 迁移进度

- [x] 工程骨架（Vite / React / TS / Tailwind / pnpm / CI）
- [x] 数据层：院落、人物、判词、内景、小游戏数据从 `app.js` 抽出并类型化
- [x] 全园地图（十一处热点）
- [x] 单处院落（三层视差 + 匾额楹联）
- [ ] 视差漫游的完整交互（推近、入内、路径行走）
- [ ] 太虚幻境判词册（16 页翻页）
- [ ] 知识库 / 全文检索
- [ ] 趣 / 学 两栏十几个小模块
- [ ] 反馈面板
- [ ] 单文件构建与 GitHub Pages 切换

## 关于旧版

根目录的 `index.html`（12.8 MB）和 `src/`、`assets/`、`build.py` 是改造前的成品，保持原样、网站照常运行。新目录就绪后再决定是否切换。

## 说明

- 插图由 AI 生成，是水墨意象，**不是考据复原**
- 原文底本为脂评汇校本（前八十回）与程本（后四十回），与课本可能有个别字句差异
