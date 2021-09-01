import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

extend({ OrbitControls })

export function Loading() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[2, 4, 8]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial attach="material" color="white" transparent opacity={0.6} roughness={1} metalness={0} />
    </mesh>
  )
}

function House(props) {
  const group = useRef()

  const { nodes, materials } = useGLTF('house.gltf')
  // const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={3} rotation={[0,330.6,0]}>
        <mesh geometry={nodes.Cube002_1.geometry} material={nodes.Cube002_1.material} />
        <mesh geometry={nodes.Cube002_2.geometry} material={nodes.Cube002_2.material} />
        <mesh geometry={nodes.Cube002_3.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube002_4.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube002_5.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Cube002_6.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Cube002_7.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Cube002_8.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Cube002_9.geometry} material={materials['Material.008']} />
      </group>
      <mesh
        geometry={nodes.Text.geometry}
        material={materials['Material.001']}
        position={[5, 3, 120]}
        rotation={[-5, 5, 5]}
        scale={1.33}
      />
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.009']} position={[2, 4.72, 4]} rotation={[5, 5, 5]} />
    </group>
  )
}
useGLTF.preload('house.gltf')

export const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement }
  } = useThree()

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef()
  useFrame((state) => controls.current.update())
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={false}
      autoRotateSpeed={10}
      enableZoom={false}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}
    />
  )
}

export default House;
 