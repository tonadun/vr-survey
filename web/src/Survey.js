// src/Survey.js

import React from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Survey = () => {
  // Load the texture (replace with your Coca-Cola label image path)
  const texture = useTexture('images/Coca-cola.jpg');

  // Ref to access and rotate the cylinder
  const cylinderRef = React.useRef();

  useFrame(() => {
    // Rotate the cylinder on the Y-axis
    if (cylinderRef.current) {
      cylinderRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={cylinderRef} position={[0, 0, 0]}>
      {/* CylinderGeometry: topRadius, bottomRadius, height, radialSegments */}
      <cylinderGeometry args={[1, 1, 2.5, 32]} />
      {/* MeshBasicMaterial applies the texture */}
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};


export default Survey;