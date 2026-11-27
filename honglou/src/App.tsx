import { useState } from 'react'
import type { Scene } from '@/types/domain'
import { MapView } from '@/views/MapView'
import { GardenView } from '@/views/GardenView'

/**
 * 顶层：目前只有两个视图——全园地图、单处院落。
 * 后续「太虚」「知识」等视图在这里挂载。
 */
export default function App() {
  const [scene, setScene] = useState<Scene | null>(null)

  return (
    <div className="relative h-full w-full overflow-hidden bg-paper">
      {scene ? (
        <GardenView scene={scene} onBack={() => setScene(null)} />
      ) : (
        <MapView onEnter={setScene} />
      )}
    </div>
  )
}
