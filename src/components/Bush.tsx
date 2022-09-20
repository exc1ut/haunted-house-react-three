import type { MeshProps } from '@react-three/fiber';
import React from 'react';

export interface BushProps extends MeshProps {}

const Bush = (props: BushProps) => {
  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color={'#89c854'} />
    </mesh>
  );
};
export default Bush;
