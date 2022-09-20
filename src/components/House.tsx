import { useControls } from 'leva';
import React from 'react';

import Bush from './Bush';
import Door from './Door';
import Roof from './Roof';
import Walls from './Walls';

export interface HouseProps {}

const House = ({}: HouseProps) => {
  const { position } = useControls({
    position: [-0.5, 2.2, 2.7],
  });
  return (
    <group>
      <pointLight args={['#ff7d46', 1, 7]} position={position} castShadow />
      <Roof />
      <Walls />
      <Door />
      <Bush castShadow scale={[0.25, 0.25, 0.25]} position={[1.4, 0.1, 2.1]} />
      <Bush castShadow scale={[0.5, 0.5, 0.5]} position={[0.8, 0.2, 2.2]} />
      <Bush castShadow scale={[0.4, 0.4, 0.4]} position={[-0.8, 0.1, 2.2]} />
      <Bush castShadow scale={[0.15, 0.15, 0.15]} position={[-1, 0.05, 2.6]} />
    </group>
  );
};
export default House;
