"use client";

import React, { useRef, useEffect } from 'react';

const ParticleWave = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w: number, h: number;
    let animationFrameId: number;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    class Particle {
      x: number;
      y: number;
      offset: number;

      constructor(x: number, y: number, offset: number) {
        this.x = x;
        this.y = y;
        this.offset = offset; // phase offset for wave
      }

      update(time: number) {
        // make particle wave up and down
        this.y = h / 2 + Math.sin(time * 0.001 + this.offset) * (h / 2.2);
      }

      draw(time: number, i: number) {
        // shifting colors with hue
        const hue = (time / 20 + i * 3) % 360;
        if (ctx) {
            ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
            ctx.fill();
        }
      }
    }

    const particles: Particle[] = [];
    const numParticles = 200;
    for (let i = 0; i < numParticles; i++) {
      const x = (w / numParticles) * i;
      const y = h / 2;
      const offset = i * 0.2;
      particles.push(new Particle(x, y, offset));
    }

    let lastTime = 0;
    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;
      lastTime = time;
      
      if (ctx) {
        ctx.clearRect(0, 0, w, h);

        particles.forEach((p, i) => {
          p.update(time);
          p.draw(time, i);
        });
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-10" />;
};

export default ParticleWave;
