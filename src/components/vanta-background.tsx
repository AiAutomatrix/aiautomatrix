"use client"

import { useState, useEffect } from 'react'

// Correctly type the window object to include VANTA
declare global {
  interface Window {
    THREE: any;
    VANTA: {
      WAVES: (options: any) => any;
    };
  }
}

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null)

  useEffect(() => {
    let effect: any;
    // Check if VANTA is loaded and if the target element exists
    if (window.VANTA && window.THREE && document.querySelector('#wave-bg')) {
      effect = window.VANTA.WAVES({
        el: "#wave-bg",
        THREE: window.THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x00e0ff,
        shininess: 40.00,
        waveHeight: 15.00,
        waveSpeed: 0.8,
        zoom: 0.8
      })
      setVantaEffect(effect);
    }

    // Cleanup function to destroy the effect when the component unmounts
    return () => {
      if (effect) effect.destroy()
    }
  }, []) // Empty dependency array ensures this runs only once on mount

  return null
}

export default VantaBackground;
