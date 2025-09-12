// hooks/useDeviceDetection.js
import { useState, useEffect } from 'react';

export const useDeviceDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth <= 768;
      const touch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
      
      setIsMobile(mobile);
      setIsTouch(touch);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return { isMobile, isTouch };
};