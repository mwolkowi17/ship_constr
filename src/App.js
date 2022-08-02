
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import {Scene1} from './Loader1.js'
import { AmbientLight } from 'three'
import { ModelD } from './Loader2.js'

export function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}
function App() {
  return (
    <div>

   
  <Canvas>
    <OrbitControls />
    
    <pointLight position={[10, 10, 10]} />
    <pointLight position={[-10, 10, 10]} />
    <pointLight position={[0, -10, -10]} />
    {/* <Box position={[-1.2, 0, 0]} /> */}
    {/* <Box position={[1.2, 0, 0]} /> */}
    {/* <Scene1 /> */}
    <ModelD />
  </Canvas>
  </div>
  );
}

export default App;

