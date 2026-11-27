import { useState } from 'react'
import { SCENES } from '@/data/scenes'
import type { Scene } from '@/types/domain'

interface Props {
  onEnter: (scene: Scene) => void
}

/** 全园：一张平面图 + 十一处热点 */
export function MapView({ onEnter }: Props) {
  const [hover, setHover] = useState<string | null>(null)

  return (
    <div className="flex h-full flex-col items-center justify-center px-4 py-6">
      <header className="mb-3 flex items-center gap-3">
        <span className="seal-badge h-7 w-7 text-sm">園</span>
        <h1 className="text-lg tracking-[0.3em] text-ink">大观园 · 卧游</h1>
      </header>
      <p className="mb-4 text-[11px] tracking-[0.25em] text-ink-mute">点图上任一处 · 入园细看</p>

      <div className="relative w-full max-w-3xl">
        <img
          src="assets/map.jpg"
          alt="大观园平面图"
          className="w-full rounded-sm border border-ink/15 shadow-[0_18px_40px_rgba(60,40,15,.18)]"
          draggable={false}
        />
        {SCENES.map((s) => (
          <button
            key={s.id}
            onClick={() => onEnter(s)}
            onMouseEnter={() => setHover(s.id)}
            onMouseLeave={() => setHover(null)}
            style={{ left: `${s.map.x}%`, top: `${s.map.y}%` }}
            className="group absolute -translate-x-1/2 -translate-y-1/2"
          >
            <span className="block h-2.5 w-2.5 rounded-full bg-seal shadow-[0_0_0_3px_rgba(168,50,42,.18)] transition group-hover:scale-125" />
            <span
              className={`mt-1 block whitespace-nowrap rounded bg-paper-light/85 px-1.5 py-0.5 text-[11px]
                          tracking-[0.12em] text-ink-soft shadow-sm transition
                          ${hover === s.id ? 'opacity-100' : 'opacity-70'}`}
            >
              {s.label}
            </span>
          </button>
        ))}
      </div>

      <footer className="mt-5 text-[10.5px] tracking-[0.2em] text-ink-faint">
        建园前 1–15 回　·　园中岁月 16–104 回　·　人去楼空 105–120 回
      </footer>
    </div>
  )
}
