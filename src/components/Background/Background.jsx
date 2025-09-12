import React from 'react';
import './Background.css';
// Импортируем ОДИН фоновый образ в формате WebP
import BackgroundWebP from '../../assets/images/BackgroundMobile.webp'; // Переименуй файл и укажи правильный путь

const Background = () => {
  // Всё, что связано с isMobile - УДАЛЕНО

  return (
    <div 
      className="background-wrapper"
      style={{ 
        backgroundImage: `url(${BackgroundWebP})`
      }}
    >
      <div className="background-overlay"></div>
    </div>
  );
};

export default Background;