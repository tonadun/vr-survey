// src/App.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Survey from './Survey';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Three.js Canvas */}
      <Canvas style={{ height: '100vh' }}>
        {/* Lighting for the scene */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Coca-Cola Can */}
        <Survey />

        {/* Orbit Controls allow user interaction with the scene */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
