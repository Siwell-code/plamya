import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <div className="about-line"></div>
          <h1 className="about-title">О КОМПАНИИ</h1>
        </div>
      </div>
      
      <div className="about-content">
        <div className="about-photo">
          <img 
            src="/images/office-photo.jpg" 
            alt="Наш офис" 
            className="about-image"
          />
        </div>
        
        <div className="about-map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A..."
            title="Карта расположения офиса"
            className="map-iframe"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default About;