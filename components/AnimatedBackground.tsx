import React, { useState, useEffect } from 'react';

interface ParticleStyle {
  id: number;
  top: string;
  left: string;
  size: string;
  animationDuration: string;
  animationDelay: string;
  opacity: number;
  boxShadow: string;
}

const AnimatedBackground: React.FC = () => {
  const [particles, setParticles] = useState<ParticleStyle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const numParticles = 40;
      const newParticles: ParticleStyle[] = [];
      for (let i = 0; i < numParticles; i++) {
        const size = Math.random() * 4 + 2; // Particle size from 2px to 6px
        const glowColor = '#0100fd';
        const trailColor = '#140f4b';
        
        newParticles.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size: `${size}px`,
          animationDuration: `${Math.random() * 30 + 20}s`, // 20s to 50s
          animationDelay: `${Math.random() * 20}s`, // 0s to 20s delay
          opacity: Math.random() * 0.6 + 0.2, // Opacity from 0.2 to 0.8
          boxShadow: `0 0 8px ${glowColor}, 0 0 16px ${glowColor}, 0 0 24px ${trailColor}`,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0" aria-hidden="true">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-[#0100fd]"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            boxShadow: particle.boxShadow,
            animation: `float ${particle.animationDuration} ${particle.animationDelay} infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;