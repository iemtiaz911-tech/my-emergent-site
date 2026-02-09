import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const GlobeCore = () => {
  const globeRef = useRef();
  const markersRef = useRef();

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
    if (markersRef.current) {
      markersRef.current.rotation.y += 0.002;
    }
  });

  // Location data with approximate lat/long coordinates
  const locations = [
    { name: 'New York', lat: 40.7128, lon: -74.0060, color: '#D4AF87' },
    { name: 'London', lat: 51.5074, lon: -0.1278, color: '#D4AF87' },
    { name: 'Cyprus', lat: 35.1264, lon: 33.4299, color: '#D4AF87' },
    { name: 'Ireland', lat: 53.3498, lon: -6.2603, color: '#D4AF87' },
    { name: 'India', lat: 20.5937, lon: 78.9629, color: '#D4AF87' }
  ];

  // Convert lat/lon to 3D coordinates
  const latLonToVector3 = (lat, lon, radius) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
  };

  return (
    <group>
      {/* Main Globe */}
      <Sphere ref={globeRef} args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#0a1929"
          wireframe={false}
          emissive="#06141B"
          roughness={0.9}
          metalness={0.1}
        />
      </Sphere>

      {/* Wireframe Overlay */}
      <Sphere args={[2.01, 32, 32]}>
        <meshBasicMaterial
          color="#4A5C6A"
          wireframe={true}
          opacity={0.25}
          transparent
        />
      </Sphere>

      {/* Atmospheric Glow */}
      <Sphere args={[2.15, 32, 32]}>
        <meshBasicMaterial
          color="#CCD0CF"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Location Markers */}
      <group ref={markersRef}>
        {locations.map((loc, i) => {
          const position = latLonToVector3(loc.lat, loc.lon, 2.05);
          return (
            <group key={i} position={position}>
              {/* Pin */}
              <Sphere args={[0.05, 16, 16]}>
                <meshBasicMaterial color={loc.color} />
              </Sphere>
              {/* Glow effect */}
              <Sphere args={[0.1, 16, 16]}>
                <meshBasicMaterial color={loc.color} transparent opacity={0.2} />
              </Sphere>
              {/* Pulse ring */}
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0.08, 0.12, 32]} />
                <meshBasicMaterial color={loc.color} transparent opacity={0.3} side={THREE.DoubleSide} />
              </mesh>
            </group>
          );
        })}
      </group>

      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#CCD0CF" />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#4A5C6A" />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
    </group>
  );
};

export const Globe3D = () => {
  const canvasRef = useRef();

  return (
    <div className="w-full h-full min-h-[500px] rounded-[40px] overflow-hidden bg-secondary-bg border border-border-main relative">
      <Canvas
        ref={canvasRef}
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <GlobeCore />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={2 * Math.PI / 3}
          rotateSpeed={0.5}
        />
      </Canvas>
      <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
        <p className="text-body-text text-xs tracking-widest uppercase">Global Client Base</p>
      </div>
    </div>
  );
};
