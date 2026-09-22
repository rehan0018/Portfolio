import { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Starfield } from './Starfield';
import { CelestialHeroObject } from './CelestialHeroObject';
import { ConstellationOrbits } from './ConstellationOrbits';

interface UniverseCanvasProps {
  activeProjectId: string | null;
  onSelectProject?: (id: string) => void;
  onStarPrinciple?: (principle: string) => void;
}

export function UniverseCanvas({
  activeProjectId,
  onSelectProject,
  onStarPrinciple
}: UniverseCanvasProps) {
  const pointer = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check screen size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();

    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handlePointerMove = (e: MouseEvent) => {
      // Normalize pointer coordinates: -1 to 1
      pointer.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('resize', checkMobile);
    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handlePointerMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-cosmos-bg">
      {/* Subtle atmospheric radial gradient layer */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 35%, rgba(13, 17, 23, 0.4) 0%, rgba(7, 9, 13, 0.85) 60%, #07090D 100%)'
        }}
      />

      <Canvas
        camera={{ position: [0, 1.8, 7.5], fov: 45 }}
        dpr={[1, Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 1.5)]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="pointer-events-auto"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} color="#10151C" />
          <directionalLight position={[10, 10, 5]} intensity={0.4} color="#8FAFC4" />
          <directionalLight position={[-10, -5, -5]} intensity={0.2} color="#727B9A" />

          {/* Instanced Multi-Tier Starfield */}
          <Starfield 
            pointer={prefersReducedMotion ? { current: { x: 0, y: 0 } } : pointer}
            onStarClick={onStarPrinciple}
          />

          {/* Abstract Hero Celestial Object (Geometric rings & glowing core) */}
          {!isMobile && (
            <CelestialHeroObject 
              pointer={prefersReducedMotion ? { current: { x: 0, y: 0 } } : pointer} 
            />
          )}

          {/* Interactive Project Constellation Orbits */}
          <ConstellationOrbits 
            activeProjectId={activeProjectId} 
            onSelectProject={onSelectProject} 
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
