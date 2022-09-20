import type { MeshProps } from '@react-three/fiber';
import React from 'react';

export interface GravesProps {}

const Graves = ({}: GravesProps) => {
  const Grave = (props: MeshProps) => {
    return (
      <mesh {...props}>
        <boxGeometry args={[0.6, 0.8, 0.2]} />
        <meshStandardMaterial color={'#b2b6b1'} />
      </mesh>
    );
  };
  const graves = new Array(50).fill(null).map((_, i) => {
    const angle = Math.random() * Math.PI * 2;
    const radius = 3 + Math.random() * 6;
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;
    const rotation = (Math.random() - 0.5) * 0.4;
    return (
      <Grave
        key={i}
        position={[x, 0.4, z]}
        rotation={[rotation / 2, rotation, rotation]}
        castShadow
      />
    );
  });

  return <group>{graves}</group>;
};
export default Graves;
