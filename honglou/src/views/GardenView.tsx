import { useRef, useState } from 'react'
import type { Scene } from '@/types/domain'

interface Props {
  scene: Scene
  onBack: () => void
}

/**
 * 一处院落：远景 / 中景 / 近景三层叠放，指针移动时以不同幅度偏移，形成纵深感。
 * 这是原项目「视差漫游」的最小可用版本，后续再加推近、入内。
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

  const layers = [
    { src: scene.img.far, depth: 6, z: 'z-0' },
    { src: scene.img.mid, depth: 14, z: 'z-10' },
    { src: scene.img.near, depth: 26, z: 'z-20' },
  ].filter((l) => l.src)

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        ref={boxRef}
        onPointerMove={handleMove}
        onPointerLeave={() => setOffset({ x: 0, y: 0 })}
        className="absolute inset-0 touch-none"
      >
        {layers.map((l) => (
          <img
            key={l.z}
            src={l.src}
            alt=""
            draggable={false}
            className={`absolute inset-0 h-full w-full object-cover ${l.z} transition-transform duration-150`}
            style={{ transform: `translate3d(${-offset.x * l.depth}px, ${-offset.y * l.depth * 0.5}px, 0) scale(1.06)` }}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-paper/50 via-transparent to-paper/60" />
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
