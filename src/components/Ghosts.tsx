import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import type { PointLight } from 'three';

export interface GhostsProps {}

const Ghosts = ({}: GhostsProps) => {
  const ghost1 = useRef<PointLight>(null);
  const ghost2 = useRef<PointLight>(null);
  const ghost3 = useRef<PointLight>(null);

  useFrame(({ clock }) => {
    if (!ghost1.current || !ghost2.current || !ghost3.current) return;

    const elapsedTime = clock.getElapsedTime();

    // Ghosts
    const ghost1Angle = elapsedTime * 0.5;
    ghost1.current.position.x = Math.cos(ghost1Angle) * 4;
    ghost1.current.position.z = Math.sin(ghost1Angle) * 4;
    ghost1.current.position.y = Math.sin(elapsedTime * 3);

    const ghost2Angle = -elapsedTime * 0.32;
    ghost2.current.position.x = Math.cos(ghost2Angle) * 5;
    ghost2.current.position.z = Math.sin(ghost2Angle) * 5;
    ghost2.current.position.y =
      Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5);

    const ghost3Angle = -elapsedTime * 0.18;
    ghost3.current.position.x =
      Math.cos(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.32));
    ghost3.current.position.z =
      Math.sin(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.5));
    ghost3.current.position.y =
      Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5);
  });

  return (
    <>
      <pointLight castShadow ref={ghost1} args={['#ff00ff', 2, 3]} />
      <pointLight castShadow ref={ghost2} args={['#00ffff', 2, 3]} />
      <pointLight castShadow ref={ghost3} args={['#ffff00', 2, 3]} />
    </>
  );
};
export default Ghosts;
