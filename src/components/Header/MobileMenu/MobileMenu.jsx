import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './MobileMenu.css';

const MobileMenu = ({ isOpen, onClose }) => {
  // Отключение скролла при открытии меню
  useEffect(() => {
    if (isOpen) {
      // Сохраняем текущую позицию скролла
      const scrollY = window.scrollY;
      
      // Блокируем скролл
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Восстанавливаем скролл
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      // Восстанавливаем позицию скролла
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    // Очистка при размонтировании
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="mobile-menu-overlay" onClick={onClose}>
      <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Кнопка закрытия */}
        <button className="mobile-menu-close" onClick={onClose}>
          <CloseIcon />
        </button>

        {/* Навигация */}
        <nav className="mobile-nav">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? 'mobile-nav-link active' : 'mobile-nav-link'
            }
            onClick={onClose}
          >
            <HomeIcon />
            Главная
          </NavLink>
                    
          <NavLink 
            to="/services"
            className={({ isActive }) => 
              isActive ? 'mobile-nav-link active' : 'mobile-nav-link'
            }
            onClick={onClose}
          >
            <ServicesIcon />
            Стоимость работ
          </NavLink>
          
          <NavLink 
            to="/contacts"
            className={({ isActive }) => 
              isActive ? 'mobile-nav-link active' : 'mobile-nav-link'
            }
            onClick={onClose}
          >
            <ContactIcon />
            Контакты
          </NavLink>
                    
          <NavLink 
            to="/about"
            className={({ isActive }) => 
              isActive ? 'mobile-nav-link active' : 'mobile-nav-link'
            }
            onClick={onClose}
          >
            <InfoIcon />
            О нас
          </NavLink>

        </nav>

        {/* Контакты в мобильном меню */}
        <div className="mobile-contacts">
          <div className="mobile-contact-item">
            <PhoneIcon />
            <span>+7 (999) 123-45-67</span>
          </div>
          <div className="mobile-contact-item">
            <EmailIcon />
            <span>info@mysite.ru</span>
          </div>
        </div>

      </div>
    </div>
  );
};

// SVG Иконки для мобильного меню
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
  </svg>
);

const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 2.5L16.5 9V17H12V12H8V17H3.5V9L10 2.5Z"/>
  </svg>
);

const InfoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 13H9v-6h2v6zm0-8H9V5h2v2z"/>
  </svg>
);

const ServicesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 2.5L16.5 9V17H12V12H8V17H3.5V9L10 2.5Z"/>
  </svg>
);

const ContactIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 4C2 2.9 2.9 2 4 2H16C17.1 2 18 2.9 18 4V16C18 17.1 17.1 18 16 18H4C2.9 18 2 17.1 2 16V4ZM4 4V6L10 10L16 6V4H4ZM16 8.25L10 12.25L4 8.25V16H16V8.25Z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
  </svg>
);

export default MobileMenu;