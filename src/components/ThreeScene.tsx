import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = ({ theme }: { theme: 'light' | 'dark' }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2}>
        <MeshDistortMaterial
          color={theme === 'dark' ? '#00ff00' : '#000000'}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.5}
          wireframe
        />
      </Sphere>
    </Float>
  );
};

export const ThreeScene: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => {
  return (
    <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-50">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere theme={theme} />
      </Canvas>
    </div>
  );
};
