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
    const particles: Particle[] = [];
    const particleCount = 70;
    const colors = ["hsl(187, 100%, 50%)", "hsl(338, 100%, 62%)", "#ffffff"]; // Primary, Accent, White

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      particles.length = 0; // Reset particles on resize
      init();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.5 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }

      draw() {
        if(!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function connect() {
      if(!ctx) return;
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance = Math.sqrt(
            Math.pow(particles[a].x - particles[b].x, 2) +
            Math.pow(particles[a].y - particles[b].y, 2)
          );

          if (distance < 150) {
            opacityValue = 1 - (distance / 150);
            ctx.strokeStyle = `rgba(187, 100, 50, ${opacityValue})`; // A mix of colors could be complex, let's use a primary-like one for lines
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    }

    const animate = () => {
      if (ctx) {
        ctx.clearRect(0, 0, w, h);
        particles.forEach(p => {
          p.update();
          p.draw();
        });
        connect();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10 opacity-50" />;
};

export default ParticleWave;
