import type { PointLightProps } from '@react-three/fiber';
import React from 'react';

export interface GhostProps {}

const Ghost = ({}: PointLightProps) => {
  return <pointLight args={['#ff00ff', 2, 3]} />;
};
export default Ghost;
