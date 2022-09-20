import { useLoader } from '@react-three/fiber';
import React, { useLayoutEffect, useRef } from 'react';
import type { Mesh } from 'three';
import { Float32BufferAttribute, TextureLoader } from 'three';

export interface WallsProps {}

const Walls = ({}: WallsProps) => {
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

  const color = useLoader(TextureLoader, '/textures/bricks/color.jpg');
  const ambient = useLoader(
    TextureLoader,
    '/textures/bricks/ambientOcclusion.jpg'
  );
  const normal = useLoader(TextureLoader, '/textures/bricks/normal.jpg');
  const roughness = useLoader(TextureLoader, '/textures/bricks/roughness.jpg');

  return (
    <mesh castShadow ref={ref} position={[0, 1.25, 0]}>
      <boxGeometry args={[4, 2.5, 4]} />
      <meshStandardMaterial
        map={color}
        aoMap={ambient}
        normalMap={normal}
        roughnessMap={roughness}
      />
    </mesh>
  );
};
export default Walls;
