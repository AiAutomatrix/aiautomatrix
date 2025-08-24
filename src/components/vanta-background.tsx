"use client"

import { useState, useEffect, useRef } from 'react'

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
  const vantaRef = useRef(null)

  useEffect(() => {
    let effect: any;
    if (window.VANTA && window.THREE) {
      effect = window.VANTA.WAVES({
        el: vantaRef.current,
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
    return () => {
      if (effect) effect.destroy()
    }
  }, [])

  return <div ref={vantaRef} className="absolute inset-0 -z-10" />
}

export default VantaBackground;
