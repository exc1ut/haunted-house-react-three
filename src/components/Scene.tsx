import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Glitch,
  Vignette,
} from '@react-three/postprocessing';
import { GlitchMode, KernelSize, Resizer } from 'postprocessing';
import React, { Suspense } from 'react';
import { PCFSoftShadowMap } from 'three';

import Base from './Base';
import Ghosts from './Ghosts';
import Graves from './Graves';
import House from './House';

export interface ExampleProps {}

const Scene = ({}: ExampleProps) => {
  return (
    <div
      css={{
        backgroundColor: 'black',
        width: '100%',
        height: '100vh',
      }}
      id="canvas-container"
    >
      <Canvas
        css={{ cursor: 'grab' }}
        camera={{ position: [4, 2, 5], fov: 75, near: 0.1, far: 100 }}
        color={'#262837'}
        shadows={{ type: PCFSoftShadowMap }}
      >
        <color attach={'background'} args={['#262837']} />
        <fog attach="fog" args={['#262837', 1, 16]} />
        <PerspectiveCamera />
        <ambientLight color={'#b9d5ff'} intensity={0.12} />
        <directionalLight
          castShadow
          args={['#b9d5ff', 0.12]}
          position={[4, 5, -2]}
        />
        {/* <Sky sunPosition={[7, 5, 1]} /> */}
        {/* <Terrain /> */}
        <Ghosts />
        <Suspense fallback={null}>
          <Base />
          <House />
          <Graves />
        </Suspense>
        <OrbitControls makeDefault maxPolarAngle={Math.PI / 2.3} />
        <EffectComposer>
          <DepthOfField
            focusDistance={0}
            focalLength={0.4}
            bokehScale={2}
            height={480}
          />
          <Bloom
            intensity={1.0} // The bloom intensity.
            blurPass={undefined} // A blur pass.
            width={Resizer.AUTO_SIZE} // render width
            height={Resizer.AUTO_SIZE} // render height
            kernelSize={KernelSize.LARGE} // blur kernel size
            luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
          />
          {/* <Noise opacity={0.02} /> */}
          <Vignette eskil={false} offset={0.3} darkness={1.1} />
          <Glitch
            delay={[3.5, 6.5]} // min and max glitch delay
            duration={[0.1, 0.5]} // min and max glitch duration
            strength={[0.2, 0.5]} // min and max glitch strength
            mode={GlitchMode.SPORADIC} // glitch mode
            active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
            ratio={0.1} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
          />

          {/* <Scanline
            blendFunction={BlendFunction.OVERLAY} // blend mode
            density={1.55} // scanline density
          /> */}
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Scene;
