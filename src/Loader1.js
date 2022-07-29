import { useLoader } from '@react-three/fiber'
import { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export function Scene1() {
    const gltf = useLoader(GLTFLoader, '/Ship1.gltf')
    return (
      <Suspense fallback={null}>
        <primitive object={gltf.scene} position={[-2,0,0]} scale={[0.1,0.1,0.1]} />
      </Suspense>
    )
  }