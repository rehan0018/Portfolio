import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface StarfieldProps {
  pointer: React.MutableRefObject<{ x: number; y: number }>;
  onStarClick?: (principle: string) => void;
}

const PRINCIPLES = [
  'Simplicity precedes reliability.',
  'Make failure modes explicit and observable.',
  'Decouple state from execution.',
  'Idempotency is the cornerstone of distributed consistency.',
  'Understand the abstraction beneath the one you use.'
];

export function Starfield({ pointer, onStarClick }: StarfieldProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const distantDustRef = useRef<THREE.Points>(null);

  // 1. Navigation / Midground Stars
  const { positions, colors, starData } = useMemo(() => {
    const count = 750;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const data: { principle?: string }[] = [];

    const baseColor = new THREE.Color('#8FAFC4');
    const goldColor = new THREE.Color('#C8A96B');
    const slateColor = new THREE.Color('#727B9A');
    const whiteColor = new THREE.Color('#F1F3F5');

    for (let i = 0; i < count; i++) {
      // Spherical distribution around center
      const radius = 12 + Math.random() * 38;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      // Color variation: mostly subtle cool slate/white, occasional gold
      const rand = Math.random();
      let c = slateColor;
      if (rand > 0.85) c = goldColor;
      else if (rand > 0.5) c = baseColor;
      else if (rand > 0.3) c = whiteColor;

      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;

      // Assign principle to a few special stars
      if (i < PRINCIPLES.length) {
        data.push({ principle: PRINCIPLES[i] });
      } else {
        data.push({});
      }
    }
    return { positions: pos, colors: col, starData: data };
  }, []);

  // 2. Distant Cosmic Dust (Subtle low-opacity background points)
  const distantPositions = useMemo(() => {
    const count = 1200;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 45 + Math.random() * 40;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      // Gentle background celestial rotation
      pointsRef.current.rotation.y += delta * 0.02;
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(
        pointsRef.current.rotation.x,
        pointer.current.y * 0.08,
        0.05
      );
      pointsRef.current.rotation.z = THREE.MathUtils.lerp(
        pointsRef.current.rotation.z,
        -pointer.current.x * 0.08,
        0.05
      );
    }

    if (distantDustRef.current) {
      distantDustRef.current.rotation.y += delta * 0.008;
    }
  });

  return (
    <group>
      {/* Midground Stars */}
      <points
        ref={pointsRef}
        onClick={(e) => {
          e.stopPropagation();
          if (e.index !== undefined && starData[e.index]?.principle) {
            onStarClick?.(starData[e.index].principle!);
          }
        }}
      >
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          vertexColors
          transparent
          opacity={0.85}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      {/* Distant Cosmic Dust */}
      <points ref={distantDustRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[distantPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#727B9A"
          transparent
          opacity={0.35}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  );
}
