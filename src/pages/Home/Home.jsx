import React, { useState, useEffect, useRef, useCallback } from 'react';
import { iconItems } from '../../data/iconData';
import './Home.css';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import NavigationDots from '../../components/NavigationDots/NavigationDots'; // Импортируем новый компонент

const Home = () => {
  const [activeDot, setActiveDot] = useState(0);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [selectedPath, setSelectedPath] = useState([]);
  const [firstMenuPosition, setFirstMenuPosition] = useState({ top: 0, left: 0 });
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [isOverPopup, setIsOverPopup] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderHidden(window.scrollY > 160);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = useCallback(() => {
    setSelectedPath([]);
    setIsOverPopup(false);
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  }, [hoverTimeout]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllMenus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeAllMenus]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closeAllMenus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeAllMenus]);

  const calculatePopupPosition = (element) => {
    if (!element) {
      return { top: 0, left: 0 };
    }

    try {
      const rect = element.getBoundingClientRect();
      return {
        top: rect.top + window.scrollY - 110,
        left: rect.right + -10
      };
    } catch (error) {
      console.error('Error calculating position:', error);
      return { top: 0, left: -10 };
    }
  };

  const handleIconClick = (item, event) => {
    if (!event?.currentTarget) return;

    const position = calculatePopupPosition(event.currentTarget);
    setFirstMenuPosition(position);
    
    if (item.id === 3) {
      document.getElementById("section28")?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      return;
    }
    
    setSelectedPath([item.id]);
    setIsOverPopup(false);
  };

  const handleContentClick = (contentItem, event) => {
    if (!event?.currentTarget) return;
    
    if (selectedPath[0] === 2) {
      let sectionId = "";
      switch(contentItem.id) {
        case 21: sectionId = "section16"; break;
        case 22: sectionId = "section20"; break;
        case 23: sectionId = "section24"; break;
        default: break;
      }
      if (sectionId) {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        closeAllMenus();
      }
      return;
    }
    
    event.stopPropagation();
    setSelectedPath([selectedPath[0], contentItem.id]);
  };

  const handleContentHover = (contentItem, event) => {
    if (!event?.currentTarget) return;

    if (selectedPath[0] === 1) {
      event.stopPropagation();
      setSelectedPath([selectedPath[0], contentItem.id]);
    }
  };

  const handlePopupEnter = () => {
    setIsOverPopup(true);
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handlePopupLeave = () => {
    setIsOverPopup(false);
    const timeout = setTimeout(() => {
      closeAllMenus();
    }, 300);
    setHoverTimeout(timeout);
  };

  const handleServiceClick = (service, event) => {
    event?.stopPropagation();

    if (service.section) {
      document.getElementById(service.section)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    closeAllMenus();
  };

  const getCurrentIcon = () => iconItems.find(item => item.id === selectedPath[0]);
  const getCurrentContentItems = () => getCurrentIcon()?.content || [];
  const getCurrentServices = () => {
    const icon = getCurrentIcon();
    const contentItem = icon?.content?.find(item => item.id === selectedPath[1]);
    return contentItem?.services || [];
  };

  return (
    <div className="home-page">
      {/* Левая панель с иконками */}
      <div className={`left-panel ${isHeaderHidden ? 'hidden' : ''}`}>
        {iconItems.map((item) => (
          <div
            key={item.id}
            className={`icon-button1 ${selectedPath[0] === item.id ? 'active' : ''}`}
            onClick={(e) => handleIconClick(item, e)}
            title={item.name}
          >
            {item.icon}
            <span className="icon-name">{item.name}</span>
          </div>
        ))}
      </div>

      {/* Меню уровня 1 (только для иконок 1 и 2) */}
      {selectedPath.length >= 1 && selectedPath[0] !== 3 && (
        <>
          <div className="popup-overlay" onClick={closeAllMenus} />
          <div
            ref={popupRef}
            className="popup-content level1"
            style={{
              top: `${firstMenuPosition.top}px`,
              left: `${firstMenuPosition.left}px`
            }}
            onMouseEnter={handlePopupEnter}
            onMouseLeave={handlePopupLeave}
          >
            <ul className="main-menu">
              {getCurrentContentItems().map((contentItem) => (
                <li
                  key={contentItem.id}
                  className={`content-item ${selectedPath[1] === contentItem.id ? 'active' : ''}`}
                  onClick={(e) => handleContentClick(contentItem, e)}
                  onMouseEnter={(e) => handleContentHover(contentItem, e)}
                >
                  {contentItem.name}
                  
                  {selectedPath[0] === 1 && 
                   selectedPath[1] === contentItem.id && 
                   selectedPath.length === 2 && (
                    <div className="sub-popup">
                      <div
                        className="popup-content level2"
                        style={{
                          top: `-96px`,
                          left: `calc(100% + 30px)`
                        }}
                        onMouseEnter={handlePopupEnter}
                        onMouseLeave={handlePopupLeave}
                      >
                        <ul className="services-menu">
                          {getCurrentServices().map((service, index) => (
                            <li
                              key={index}
                              className="service-item"
                              onClick={(e) => handleServiceClick(service, e)}
                            >
                              {service.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* Компонент точек навигации */}
      <NavigationDots 
        activeDot={activeDot}
        setActiveDot={setActiveDot}
        isHeaderHidden={isHeaderHidden}
      />

      <ScrollToTop />
      {/* Контент страницы с секциями */}
      <div className="content">
        <div id="section1" className="section_2"></div>
        <div id="section2" className="section">Секция 2: Архитектурные планы</div>
        <div id="section3" className="section">Секция 3: 3D-моделирование</div>
        <div id="section4" className="section">Секция 4: Расчет нагрузок и материалов</div>
        <div id="section5" className="section">Секция 5: Подготовка проектной документации</div>
        <div id="section6" className="section">Секция 6: Пожарная сигнализация</div>
        <div id="section7" className="section">Секция 7: Системы оповещения</div>
        <div id="section8" className="section">Секция 8: Дымоудаление</div>
        <div id="section9" className="section">Секция 9: Противопожарные клапаны</div>
        <div id="section10" className="section">Секция 10: Системы пожаротушения</div>
        <div id="section11" className="section">Секция 11: Техническое обслуживание</div>
        <div id="section12" className="section">Секция 12: Плановые проверки</div>
        <div id="section13" className="section">Секция 13: Ремонт оборудования</div>
        <div id="section14" className="section">Секция 14: Модернизация систем</div>
        <div id="section15" className="section">Секция 15: Круглосуточная поддержка</div>
        
        {/* Секции для иконки 2 */}
        <div id="section16" className="section">Секция 16: Разработка систем безопасности</div>
        <div id="section20" className="section">Секция 20: Установка систем видеонаблюдения</div>
        <div id="section24" className="section">Секция 24: Техническое обслуживание систем</div>
        
        {/* Секция для иконки 3 */}
        <div id="section28" className="section">Секция 28: Разработка СТУ</div>
      </div>
    </div>
  );
};

export default Home;