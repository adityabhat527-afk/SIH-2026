import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const KineticGlobeMesh: React.FC<{ mousePos: { x: number; y: number }; scrollY: number }> = ({
  mousePos,
  scrollY,
}) => {
  const groupRef = useRef<THREE.Group>(null!);
  const innerSphereRef = useRef<THREE.Mesh>(null!);
  const outerWireframeRef = useRef<THREE.Mesh>(null!);
  const nodePinsRef = useRef<THREE.Group>(null!);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
      // Scroll speed acceleration
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mousePos.y * 0.4 + scrollY * 0.001,
        0.05
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mousePos.x * 0.4 + scrollY * 0.002,
        0.05
      );
    }
    if (outerWireframeRef.current) {
      outerWireframeRef.current.rotation.y -= delta * 0.2;
    }
  });

  // IoT Sensor Node Points around the globe
  const nodePoints = [
    [1.8, 0.4, 0.2],
    [-1.5, 0.8, -0.6],
    [0.2, 1.7, 0.5],
    [-0.5, -1.6, 0.8],
    [1.2, -1.0, -1.0],
  ];

  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <group ref={groupRef}>
        {/* Core Terrain/Disaster Mesh with Distort */}
        <mesh ref={innerSphereRef} scale={1.8}>
          <icosahedronGeometry args={[1, 4]} />
          <MeshDistortMaterial
            color="#10b981"
            emissive="#047857"
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
            distort={0.35}
            speed={2}
          />
        </mesh>

        {/* Outer Global Telemetry Wireframe Grid */}
        <mesh ref={outerWireframeRef} scale={2.4}>
          <sphereGeometry args={[1, 24, 24]} />
          <meshBasicMaterial color="#ef4444" wireframe transparent opacity={0.35} />
        </mesh>

        {/* Floating IoT Telemetry Nodes */}
        <group ref={nodePinsRef}>
          {nodePoints.map((pos, idx) => (
            <mesh key={idx} position={pos as [number, number, number]} scale={0.12}>
              <sphereGeometry args={[1, 16, 16]} />
              <meshBasicMaterial color={idx % 2 === 0 ? '#10b981' : '#ef4444'} />
            </mesh>
          ))}
        </group>
      </group>
    </Float>
  );
};

interface ThreeHeroMeshProps {
  className?: string;
}

export const ThreeHeroMesh: React.FC<ThreeHeroMeshProps> = ({ className }) => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = -(clientY / window.innerHeight) * 2 + 1;
    setMousePos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`w-full h-[480px] lg:h-[580px] relative ${className || ''}`}
    >
      <Canvas camera={{ position: [0, 0, 5.5], fov: 48 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} color="#10b981" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#ef4444" />
        <KineticGlobeMesh mousePos={mousePos} scrollY={scrollY} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
    </div>
  );
};
