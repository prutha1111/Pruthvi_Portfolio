import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { PointMaterial, Points } from '@react-three/drei';
import { useTheme } from './ThemeProvider';

export const ParticleBackground = () => {
  const ref = useRef();
  const { theme } = useTheme();
  
  // Resolve actual theme for particles if "system" is selected
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const particleColor = isDark ? '#ffffff' : '#050505';

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 3000; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 30;
      ref.current.rotation.y -= delta / 40;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial transparent color={particleColor} size={0.015} sizeAttenuation={true} depthWrite={false} opacity={0.3} />
    </Points>
  );
};
