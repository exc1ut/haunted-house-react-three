import { useLoader } from '@react-three/fiber';
import { useLayoutEffect, useRef } from 'react';
import type { Mesh } from 'three';
import { Float32BufferAttribute, RepeatWrapping, TextureLoader } from 'three';

export interface BaseProps {}

const Base = ({}: BaseProps) => {
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

  const color = useLoader(TextureLoader, '/textures/grass/color.jpg');
  color.repeat.set(8, 8);
  color.wrapS = RepeatWrapping;
  color.wrapT = RepeatWrapping;

  const ambient = useLoader(
    TextureLoader,
    '/textures/grass/ambientOcclusion.jpg'
  );
  ambient.repeat.set(8, 8);
  ambient.wrapS = RepeatWrapping;
  ambient.wrapT = RepeatWrapping;

  const normal = useLoader(TextureLoader, '/textures/grass/normal.jpg');
  normal.repeat.set(8, 8);
  normal.wrapS = RepeatWrapping;
  normal.wrapT = RepeatWrapping;

  const roughness = useLoader(TextureLoader, '/textures/grass/roughness.jpg');
  roughness.repeat.set(8, 8);
  roughness.wrapS = RepeatWrapping;
  roughness.wrapT = RepeatWrapping;

  return (
    <mesh receiveShadow ref={ref} rotation={[-Math.PI * 0.5, 0, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial
        map={color}
        aoMap={ambient}
        normalMap={normal}
        roughnessMap={roughness}
      />
    </mesh>
  );
};
export default Base;
