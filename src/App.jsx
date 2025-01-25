import { Canvas } from '@react-three/fiber'
import React from 'react'
import { OrbitControls } from '@react-three/drei'
import Cyl from './Cyl'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'


const App = () => {
  return (
    <>
      <Canvas flat camera={{ fov: 30 }} >
        <OrbitControls />
        <ambientLight />
        <Cyl />
        <EffectComposer

        >

          <Bloom
            mipmapBlur
            intensity={15}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
          {/* your effects go here */}
          {/* <ToneMapping  adaptive/> */}
        </EffectComposer>
      </Canvas >
    </>
  )
}

export default App

//10:50
//14:00