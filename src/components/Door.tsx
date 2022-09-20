import { useLoader } from '@react-three/fiber';
import React, { useLayoutEffect, useRef } from 'react';
import type { Mesh } from 'three';
import { Float32BufferAttribute, TextureLoader } from 'three';

export interface DoorProps {}

const Door = ({}: DoorProps) => {
  const ref = useRef<Mesh>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      const bufferArray = ref.current.geometry.attributes.uv?.array as any;
      ref.current.geometry.setAttribute(
        'uv2',
        new Float32BufferAttribute(bufferArray, 2)
      );
    }
  }, [ref]);

  const color = useLoader(TextureLoader, '/textures/door/color.jpg');
  const alpha = useLoader(TextureLoader, '/textures/door/alpha.jpg');
  const ambient = useLoader(
    TextureLoader,
    '/textures/door/ambientOcclusion.jpg'
  );
  const height = useLoader(TextureLoader, '/textures/door/height.jpg');
  const metalness = useLoader(TextureLoader, '/textures/door/metalness.jpg');
  const normal = useLoader(TextureLoader, '/textures/door/normal.jpg');
  const roughness = useLoader(TextureLoader, '/textures/door/roughness.jpg');
  return (
    <mesh ref={ref} position={[0, 1, 2.01]}>
      <planeGeometry args={[2.2, 2.2, 100, 100]} />
      <meshStandardMaterial
        transparent={true}
        map={color}
        alphaMap={alpha}
        aoMap={ambient}
        displacementMap={height}
        displacementScale={0.1}
        normalMap={normal}
        metalnessMap={metalness}
        roughnessMap={roughness}
      />
    </mesh>
  );
};
export default Door;
