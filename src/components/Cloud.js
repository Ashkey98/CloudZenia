import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useLoader, extend, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

extend({ OrbitControls })

export function CloudLoading() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial attach="material" color="white" transparent opacity={0.6} roughness={1} metalness={0} />
    </mesh>
  )
}

 function Cloud(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, 'untitled.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.snow1.geometry} material={materials.Material_0}>
          <meshStandardMaterial attach="material" color="white" roughness={0.5} a ddLight={true} directIntesity={1.5} metalness={0.3} />
        </mesh>
      </group>
    </group>
  )
}

export const CloudCameraControls = () => {
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
  return <orbitControls ref={controls} args={[camera, domElement]} enableZoom={true} minAzimuthAngle={-Math.PI / 4} minPolarAngle={0} />
}

export default Cloud;
  