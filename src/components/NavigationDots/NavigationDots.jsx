import React from 'react';
import './NavigationDots.css';

const NavigationDots = ({ activeDot, setActiveDot, isHeaderHidden }) => {
  const dots = Array.from({ length: 13 }, (_, i) => i);

  const handleDotClick = (dotIndex) => {
    setActiveDot(dotIndex);
    // Здесь можно добавить логику скролла к соответствующей секции
    const sectionId = `section${dotIndex + 1}`;
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className={`dots-container ${isHeaderHidden ? 'hidden' : ''}`}>
      {dots.map((dot) => (
        <button
          key={dot}
          className={`dot dot-${dot} ${activeDot === dot ? 'active' : ''}`}
          onClick={() => handleDotClick(dot)}
          aria-label={`Перейти к секции ${dot + 1}`}
          title={`Секция ${dot + 1}`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;