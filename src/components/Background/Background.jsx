import React, { useState, useEffect } from 'react';
import './Background.css';
import BackgroundDesktop from '../../assets/images/Background.jpg'; // Добавить импорт
import BackgroundMobile from '../../assets/images/BackgroundMobile.webp';

const Background = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const backgroundImage = isMobile ? BackgroundMobile : BackgroundDesktop;

useEffect(() => {
  console.log('isMobile:', isMobile);
  console.log('BackgroundDesktop:', BackgroundDesktop);
  console.log('BackgroundMobile:', BackgroundMobile);
}, [isMobile]);

  return (
    <div 
      className="background-wrapper"
      style={{ 
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className="background-overlay"></div>
    </div>
  );
};

export default Background;