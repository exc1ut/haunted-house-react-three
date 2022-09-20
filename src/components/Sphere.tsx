import React from 'react';

export interface SphereProps {}

const Sphere = ({}: SphereProps) => {
  return (
    <mesh position={[0, 1, 1]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial roughness={0.7} />
    </mesh>
  );
};
export default Sphere;
