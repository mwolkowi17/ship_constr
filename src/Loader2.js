import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'

export function ModelD(props) {
  const group = useRef()
  const { nodes } = useGLTF('/Ship1.gltf')
  const myMesh = useRef();
  const [active, setActive] = useState(false)
  const { rotation1, position1 } = useSpring({ rotation: active ? nodes.BLOCK_1.rotation : [0, Math.PI / 2, 0], config: { duration: 3000 } })

  function show() {
    console.log('clicked');
  }
  return (
    <group ref={group} {...props} dispose={null}>
      <primitive castShadow receiveShadow object={nodes.BOW}
        scale={nodes.BOW.scale}
        translateOnAxis={nodes.BOW.translation}
        rotation={nodes.BOW.rotation}
      /* onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}*/
      />
      <primitive castShadow receiveShadow object={nodes.Stern}
        scale={nodes.Stern.scale}
        translateOnAxis={nodes.Stern.translation}
        rotation={nodes.Stern.rotation}
      /* onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}*/
      />

      <primitive castShadow receiveShadow object={nodes.Superstructure}
        scale={nodes.Superstructure.scale}
        translateOnAxis={nodes.Superstructure.translation}
        rotation={nodes.Superstructure.rotation}
      /* onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}*/
      />
      {/* <button onClick={(event) => show()}>show construction</button> */}

      {/* //to change */}
      <primitive castShadow receiveShadow object={nodes.BLOCK_1}
        scale={nodes.BLOCK_1.scale}
        translateOnAxis={nodes.BLOCK_1.translation}
        rotation={rotation1}
        //onClick={() => setActive(!active)}
        ref={myMesh}
         onClick={() => console.log('clicked')}
      //onPointerOver={() => setHovered(true)}
      // onPointerOut={() => setHovered(false)}
      />

      <primitive castShadow receiveShadow object={nodes.BLOCK_2}
        scale={nodes.BLOCK_2.scale}
        translateOnAxis={nodes.BLOCK_2.translation}
        rotation={nodes.BLOCK_2.rotation}
      /* onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}*/
      />

      <primitive castShadow receiveShadow object={nodes.BLOCK_3}
        scale={nodes.BLOCK_3.scale}
        translateOnAxis={nodes.BLOCK_3.translation}
        rotation={nodes.BLOCK_3.rotation}
      /* onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}*/
      />

      <primitive castShadow receiveShadow object={nodes.BLOCK_4}
        scale={nodes.BLOCK_4.scale}
        translateOnAxis={nodes.BLOCK_4.translation}
        rotation={nodes.BLOCK_4.rotation}
      /* onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}*/
      />
    </group>
  )
}