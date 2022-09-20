import React from 'react';

export interface RoofProps {}

const Roof = ({}: RoofProps) => {
  return (
    <mesh position={[0, 3, 0]} rotation={[0, Math.PI / 4, 0]}>
      <coneGeometry args={[3.5, 1, 4]} />
      <meshStandardMaterial color={'#b35f45'} />
    </mesh>
  );
};
export default Roof;
