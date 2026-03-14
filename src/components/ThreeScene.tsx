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
          color={theme === 'dark' ? '#6e3bff' : '#000000'}
          emissive={theme === 'dark' ? '#4a1fa8' : '#000000'}
          emissiveIntensity={theme === 'dark' ? 0.8 : 0}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          wireframe
        />
      </Sphere>
    </Float>
  );
};

export const ThreeScene: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => {
  return (
    <div className="absolute inset-0 -z-10 opacity-20 dark:opacity-70">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={theme === 'dark' ? 0.4 : 0.5} />
        <pointLight position={[10, 10, 10]} intensity={theme === 'dark' ? 1.5 : 1} color={theme === 'dark' ? '#6e3bff' : '#ffffff'} />
        <pointLight position={[-8, -6, 4]} intensity={theme === 'dark' ? 0.8 : 0} color="#ff2d9b" />
        <pointLight position={[0, 0, 6]} intensity={theme === 'dark' ? 0.6 : 0} color="#00d4ff" />
        <AnimatedSphere theme={theme} />
      </Canvas>
    </div>
  );
};