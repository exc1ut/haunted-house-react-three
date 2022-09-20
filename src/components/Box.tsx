import React, { useRef, useState } from 'react';
import type { Mesh } from 'three';

export default function Box() {
  const ref = useRef<Mesh>(null);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // useFrame((state, delta) => {
  //   if (ref.current) {
  //     ref.current.rotation.x += 0.01;
  //   }
  // });

  return (
    <mesh
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />

      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}
