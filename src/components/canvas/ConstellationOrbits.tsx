import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { projects } from '../../data/projects';

interface ConstellationOrbitsProps {
  activeProjectId: string | null;
  onSelectProject?: (id: string) => void;
}

export function ConstellationOrbits({ activeProjectId, onSelectProject }: ConstellationOrbitsProps) {
  const orbitsGroupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (orbitsGroupRef.current) {
      orbitsGroupRef.current.rotation.y = t * 0.015;
    }
  });

  return (
    <group ref={orbitsGroupRef} position={[0, -0.5, 0]}>
      {projects.map((proj, idx) => {
        const angle = (idx * (Math.PI * 2)) / projects.length;
        const x = Math.cos(angle) * proj.orbitRadius;
        const z = Math.sin(angle) * proj.orbitRadius;
        const isActive = activeProjectId === proj.id;

        return (
          <group key={proj.id}>
            {/* Orbital path line */}
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <ringGeometry args={[proj.orbitRadius - 0.008, proj.orbitRadius + 0.008, 96]} />
              <meshBasicMaterial
                color={isActive ? '#8FAFC4' : '#1F2937'}
                transparent
                opacity={isActive ? 0.45 : 0.15}
                side={THREE.DoubleSide}
              />
            </mesh>

            {/* Project Planet Node */}
            <mesh
              position={[x, 0, z]}
              onClick={(e) => {
                e.stopPropagation();
                onSelectProject?.(proj.id);
              }}
            >
              <sphereGeometry args={[isActive ? 0.14 : 0.09, 16, 16]} />
              <meshStandardMaterial
                color={proj.color}
                emissive={proj.color}
                emissiveIntensity={isActive ? 0.9 : 0.35}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}
