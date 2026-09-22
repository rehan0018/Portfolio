import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CelestialHeroObjectProps {
  pointer: React.MutableRefObject<{ x: number; y: number }>;
}

export function CelestialHeroObject({ pointer }: CelestialHeroObjectProps) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const wireframeSphereRef = useRef<THREE.Mesh>(null);
  const dataNodesRef = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Gentle parallax with damped mouse tracking
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.current.x * 0.25 + t * 0.05,
        0.04
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.current.y * 0.25,
        0.04
      );
    }

    if (coreRef.current) {
      const pulse = 1 + Math.sin(t * 1.5) * 0.03;
      coreRef.current.scale.set(pulse, pulse, pulse);
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.12;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.x += delta * 0.08;
      ring2Ref.current.rotation.y += delta * 0.09;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.z -= delta * 0.06;
      ring3Ref.current.rotation.x += delta * 0.04;
    }

    if (wireframeSphereRef.current) {
      wireframeSphereRef.current.rotation.y += delta * 0.04;
      wireframeSphereRef.current.rotation.z += delta * 0.02;
    }

    if (dataNodesRef.current) {
      dataNodesRef.current.rotation.y -= delta * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 1. Core Sphere: glowing celestial seed */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial
          color="#0D1117"
          emissive="#121820"
          emissiveIntensity={0.6}
          roughness={0.7}
          metalness={0.2}
        />
      </mesh>

      {/* 2. Structured Wireframe Sphere: represents engineering systems & geometry */}
      <mesh ref={wireframeSphereRef}>
        <sphereGeometry args={[1.45, 20, 20]} />
        <meshStandardMaterial
          color="#8FAFC4"
          wireframe
          transparent
          opacity={0.16}
        />
      </mesh>

      {/* 3. Equatorial Geometric Ring (Steel Blue) */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0.2, 0]}>
        <ringGeometry args={[2.0, 2.02, 64]} />
        <meshBasicMaterial
          color="#8FAFC4"
          side={THREE.DoubleSide}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* 4. Inclined Orbital Path (Muted Gold - very subtle) */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 4, 0.5, 0.3]}>
        <ringGeometry args={[2.5, 2.515, 64]} />
        <meshBasicMaterial
          color="#C8A96B"
          side={THREE.DoubleSide}
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* 5. Outer System Boundary Ring (Cosmic Slate) */}
      <mesh ref={ring3Ref} rotation={[0.4, -0.6, 0]}>
        <ringGeometry args={[3.1, 3.11, 64]} />
        <meshBasicMaterial
          color="#727B9A"
          side={THREE.DoubleSide}
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* 6. Orbital Data Points: small telemetry markers along the ring */}
      <points ref={dataNodesRef} rotation={[Math.PI / 3, 0.2, 0]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              new Float32Array([
                2.01 * Math.cos(0), 2.01 * Math.sin(0), 0,
                2.01 * Math.cos(Math.PI * 0.5), 2.01 * Math.sin(Math.PI * 0.5), 0,
                2.01 * Math.cos(Math.PI), 2.01 * Math.sin(Math.PI), 0,
                2.01 * Math.cos(Math.PI * 1.5), 2.01 * Math.sin(Math.PI * 1.5), 0,
              ]),
              3
            ]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.09}
          color="#8FAFC4"
          transparent
          opacity={0.8}
        />
      </points>

      {/* Subtle point light at the core to softly illuminate nearby rings */}
      <pointLight color="#8FAFC4" intensity={0.8} distance={8} decay={2} />
    </group>
  );
}
