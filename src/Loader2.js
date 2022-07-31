import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function ModelD(props) {
    const group = useRef()
    const { nodes } = useGLTF('/Ship1.gltf')

    return (
        <div>hello loader</div>
    )
}