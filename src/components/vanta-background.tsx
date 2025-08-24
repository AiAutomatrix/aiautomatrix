"use client";

import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

// Correctly type the window object to include VANTA
declare global {
  interface Window {
    VANTA: {
      WAVES: (options: {
        el: HTMLElement | string;
        THREE: typeof THREE;
        mouseControls: boolean;
        touchControls: boolean;
        gyroControls: boolean;
        minHeight: number;
        minWidth: number;
        scale: number;
        scaleMobile: number;
        color: number;
        shininess: number;
        waveHeight: number;
        waveSpeed: number;
        zoom: number;
      }) => any;
    };
  }
}

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically load the waves script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/vanta/dist/vanta.waves.min.js';
    script.onload = () => {
      if (vantaRef.current && !vantaEffect && window.VANTA) {
        const effect = window.VANTA.WAVES({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x1e293b,
          shininess: 40.00,
          waveHeight: 15.00,
          waveSpeed: 0.8,
          zoom: 0.8,
        });
        setVantaEffect(effect);
      }
    };
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
      document.body.removeChild(script);
    };
  }, [vantaEffect]); // Re-run if vantaEffect changes, though it shouldn't after init

  return <div ref={vantaRef} className="absolute inset-0 -z-10" />;
};

export default VantaBackground;
