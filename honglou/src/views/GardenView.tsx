import { useRef, useState } from 'react'
import type { Scene } from '@/types/domain'

interface Props {
  scene: Scene
  onBack: () => void
}

/**
 * 一处院落：远景 / 中景 / 近景三层叠放。
 *
 * 关键：三张图都是白底水墨，必须用 mix-blend-mode: multiply（正片叠底），
 * 白色才会透掉、墨线才会叠起来。缺了它，最上层会把下面全盖住。
 *
 * 层比容器大一圈（132%），指针移动时各层以不同幅度反向偏移，形成纵深。
 */
export function GardenView({ scene, onBack }: Props) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const boxRef = useRef<HTMLDivElement>(null)

  function handleMove(e: React.PointerEvent<HTMLDivElement>) {
    const box = boxRef.current
    if (!box) return
    const r = box.getBoundingClientRect()
    setOffset({
      x: ((e.clientX - r.left) / r.width - 0.5) * 2,
      y: ((e.clientY - r.top) / r.height - 0.5) * 2,
    })
  }

  // 远山是全园共用的一张底图，各院只叠中景与近景
  const layers = [
    { key: 'far', src: 'assets/far_common.jpg', depth: 5 },
    { key: 'mid', src: scene.img.mid, depth: 14 },
    { key: 'near', src: scene.img.near, depth: 26 },
  ].filter((l) => l.src)

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        ref={boxRef}
        onPointerMove={handleMove}
        onPointerLeave={() => setOffset({ x: 0, y: 0 })}
        className="absolute inset-0 touch-none"
        style={{
          background:
            'radial-gradient(130% 110% at 50% 18%, #fdfaf0 0%, #f3ebd7 55%, #e6d8ba 100%)',
        }}
      >
        {layers.map((l) => (
          <img
            key={l.key}
            src={l.src}
            alt=""
            draggable={false}
            className="absolute left-[-16%] top-[-16%] h-[132%] w-[132%] object-cover
                       transition-transform duration-200 ease-out will-change-transform"
            style={{
              mixBlendMode: 'multiply',
              transform: `translate3d(${-offset.x * l.depth}px, ${-offset.y * l.depth * 0.5}px, 0)`,
            }}
          />
        ))}

        {/* 雾气：让远处虚一点，边界不硬 */}
        <div
          className="pointer-events-none absolute inset-0 z-[6] opacity-40"
          style={{
            background:
              'radial-gradient(50% 40% at 30% 60%, rgba(255,255,255,.5), rgba(255,255,255,0) 70%),' +
              'radial-gradient(45% 35% at 75% 45%, rgba(255,255,255,.4), rgba(255,255,255,0) 70%)',
          }}
        />
        <div className="pointer-events-none absolute inset-0 z-[7] bg-gradient-to-b from-paper/40 via-transparent to-paper/50" />
      </div>

      <header className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-start justify-between p-4">
        <button onClick={onBack} className="hud-btn pointer-events-auto">
          ‹ 全园
        </button>
        <div className="text-right">
          <div className="text-sm tracking-[0.2em] text-ink">{scene.name}</div>
          <div className="mt-0.5 text-[10.5px] tracking-[0.15em] text-ink-mute">{scene.sub}</div>
        </div>
      </header>

      <section className="absolute inset-x-0 bottom-0 z-30 bg-gradient-to-t from-paper/95 to-transparent px-5 pb-6 pt-10">
        {scene.plaque && (
          <div className="mb-2 text-center text-[13px] tracking-[0.35em] text-seal">{scene.plaque}</div>
        )}
        {scene.couplet && (
          <div className="mb-3 text-center text-[11.5px] tracking-[0.15em] text-ink-soft">
            {scene.couplet}
          </div>
        )}
        <p className="mx-auto max-w-xl text-[12.5px] leading-relaxed text-ink-soft">{scene.plot}</p>
      </section>
    </div>
  )
}
