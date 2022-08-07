
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import {Scene1} from './Loader1.js'
import { AmbientLight } from 'three'
import { ModelD } from './Loader2.js'



function App() {

   function show(){
    console.log('clicked');
   }
  return (
    <div>

   <button onClick={(event) => show()}>show construction</button>
  <Canvas>
    <OrbitControls />
    
    <pointLight position={[10, 10, 10]} />
    <pointLight position={[-10, 10, 10]} />
    <pointLight position={[0, -10, -10]} />
    {/* <Box position={[-1.2, 0, 0]} /> */}
    {/* <Box position={[1.2, 0, 0]} /> */}
    {/* <Scene1 /> */}
    <ModelD scale={[3,1,0.7]} />
  </Canvas>
  </div>
  );
}

export default App;

