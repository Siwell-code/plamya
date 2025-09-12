import React, { useState, useRef, useEffect, useCallback } from 'react';
import { iconItems } from '../../data/iconData';
import './Home.css';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import NavigationDots from '../../components/NavigationDots/NavigationDots';
import { useDeviceDetection } from '../../hooks/useDeviceDetection';
import { useMenuLogic } from '../../hooks/useMenuLogic';
import { usePopupLogic } from '../../hooks/usePopupLogic';

const Home = () => {
  const { isTouch } = useDeviceDetection();
  const {
    selectedPath,
    setSelectedPath,
    mobileSubmenu,
    setMobileSubmenu,
    closeAllMenus
  } = useMenuLogic();

  const {
    firstMenuPosition,
    setFirstMenuPosition,
    calculatePopupPosition
  } = usePopupLogic();

  const [activeDot, setActiveDot] = useState(0);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const popupRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const touchStartTimeRef = useRef(0);

  // Обработчики событий
  const handleScroll = useCallback(() => {
    setIsHeaderHidden(window.scrollY > 160);
  }, []);

  const handleEscape = useCallback((e) => {
    if (e.key === 'Escape') {
      closeAllMenus();
    }
  }, [closeAllMenus]);

  const handleClickOutside = useCallback((event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      // Проверяем, не был ли это быстрый тап по элементу меню
      const touchTime = Date.now() - touchStartTimeRef.current;
      if (isTouch && touchTime < 300) return;
      
      closeAllMenus();
    }
  }, [closeAllMenus, isTouch]);

  const handleIconClick = useCallback((item, event) => {
    if (isTouch) return; // На мобильных используем только touch
    
    event?.stopPropagation();
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
  }, [calculatePopupPosition, setFirstMenuPosition, setSelectedPath, isTouch]);

  const handleIconTouch = useCallback((item, event) => {
    if (!isTouch) return;
    
    event?.stopPropagation();
    event?.preventDefault();
    
    touchStartTimeRef.current = Date.now();
    
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
  }, [calculatePopupPosition, setFirstMenuPosition, setSelectedPath, isTouch]);

  const handleServiceClick = useCallback((service, event) => {
    event?.stopPropagation();

    if (service.section) {
      document.getElementById(service.section)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    closeAllMenus();
  }, [closeAllMenus]);

  const handleServiceTouch = useCallback((service, event) => {
    event?.stopPropagation();
    event?.preventDefault();

    if (service.section) {
      document.getElementById(service.section)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    closeAllMenus();
  }, [closeAllMenus]);

  // Обработчик для элементов первого меню на мобильных
  const handleMobileContentSelect = useCallback((contentItem, event) => {
    event?.stopPropagation();
    event?.preventDefault();
    
    touchStartTimeRef.current = Date.now();
    
    // Для второй иконки - сразу скроллим
    if (selectedPath[0] === 2) {
      const sectionMap = {
        21: "section16",
        22: "section20", 
        23: "section24"
      };
      
      const sectionId = sectionMap[contentItem.id];
      if (sectionId) {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        closeAllMenus();
      }
      return;
    }
    
    // Для первой иконки - открываем/закрываем подменю
    setMobileSubmenu(prev => prev === contentItem.id ? null : contentItem.id);
    
    // Устанавливаем selectedPath для подсветки активного элемента
    setSelectedPath(prev => [prev[0], contentItem.id]);
  }, [selectedPath, closeAllMenus, setMobileSubmenu, setSelectedPath]);

  // Обработчик для элементов первого меню на десктопе
  const handleContentHover = useCallback((contentItem, event) => {
    if (isTouch) return;
    
    event?.stopPropagation();
    
    if (selectedPath[0] === 1) {
      setSelectedPath([selectedPath[0], contentItem.id]);
    }
  }, [selectedPath, setSelectedPath, isTouch]);

  // Эффекты
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [handleEscape]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', (e) => {
      touchStartTimeRef.current = Date.now();
    });
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Вспомогательные функции
  const getCurrentIcon = useCallback(() => 
    iconItems.find(item => item.id === selectedPath[0]), 
    [selectedPath]
  );
  
  const getCurrentContentItems = useCallback(() => 
    getCurrentIcon()?.content || [], 
    [getCurrentIcon]
  );
  
  const getCurrentServices = useCallback(() => {
    const icon = getCurrentIcon();
    if (!icon) return [];
    
    if (selectedPath[0] === 2) {
      return icon.content || [];
    }
    
    if (selectedPath[0] === 1 && selectedPath[1]) {
      const contentItem = icon.content?.find(item => item.id === selectedPath[1]);
      return contentItem?.services || [];
    }
    
    return [];
  }, [getCurrentIcon, selectedPath]);

  return (
    <div className="home-page">
      {/* Левая панель с иконками */}
      <div className={`left-panel ${isHeaderHidden ? 'hidden' : ''}`}>
        {iconItems.map((item) => (
          <div
            key={item.id}
            className={`icon-button1 ${selectedPath[0] === item.id ? 'active' : ''}`}
            onClick={(e) => !isTouch && handleIconClick(item, e)}
            onTouchEnd={(e) => isTouch && handleIconTouch(item, e)}
            title={item.name}
          >
            {item.icon}
            <span className="icon-name">{item.name}</span>
          </div>
        ))}
      </div>

      {/* Меню уровня 1 */}
      {selectedPath.length >= 1 && selectedPath[0] !== 3 && (
        <>
          <div 
            className="popup-overlay" 
            onClick={(e) => !isTouch && closeAllMenus()}
            onTouchEnd={(e) => {
              // Для мобильных - закрываем только при тапе на оверлей, а не на меню
              if (isTouch && popupRef.current && !popupRef.current.contains(e.target)) {
                closeAllMenus();
              }
            }}
          />
          <div
            ref={popupRef}
            className={`popup-content level1 ${
              selectedPath[0] === 1 ? 'menu-icon1' : 
              selectedPath[0] === 2 ? 'menu-icon2' : ''
            }`}
            style={{
              top: `${firstMenuPosition.top}px`,
              left: `${firstMenuPosition.left}px`
            }}
          >
            
            <ul className="main-menu">
              {getCurrentContentItems().map((contentItem) => (
                <li
                  key={contentItem.id}
                  className={`content-item ${selectedPath[1] === contentItem.id ? 'active' : ''} ${
                    isTouch && mobileSubmenu === contentItem.id ? 'submenu-open' : ''
                  }`}
                  onClick={(e) => {
                    if (isTouch) return; // На мобильных используем только touch
                    e.stopPropagation();
                    // Логика для десктопа
                    if (selectedPath[0] === 2) {
                      const sectionMap = {
                        21: "section16",
                        22: "section20", 
                        23: "section24"
                      };
                      const sectionId = sectionMap[contentItem.id];
                      if (sectionId) {
                        document.getElementById(sectionId)?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start'
                        });
                        closeAllMenus();
                      }
                    } else {
                      setSelectedPath([selectedPath[0], contentItem.id]);
                    }
                  }}
                  onTouchEnd={(e) => {
                    if (!isTouch) return;
                    e.stopPropagation();
                    e.preventDefault();
                    handleMobileContentSelect(contentItem, e);
                  }}
                  onMouseEnter={(e) => !isTouch && handleContentHover(contentItem, e)}
                >
                  <span className="menu-item-text">{contentItem.name}</span>
                  
                  {/* Стрелка для мобильных, если есть подменю */}
                  {isTouch && selectedPath[0] === 1 && contentItem.services && contentItem.services.length > 0 && (
                    <span className="mobile-arrow">
                      {mobileSubmenu === contentItem.id ? '▲' : '▼'}
                    </span>
                  )}
                  
                  {/* Подменю */}
                  {selectedPath[0] === 1 && selectedPath[1] === contentItem.id && 
                   ((isTouch && mobileSubmenu === contentItem.id) || 
                   (!isTouch && selectedPath[1] === contentItem.id)) && (
                    <div className="sub-popup">
                      <div
                        className="popup-content level2"
                        style={{
                          top: isTouch ? '100%' : '0',
                          left: isTouch ? '0' : 'calc(100% + 10px)'
                        }}
                      >
                        <ul className="services-menu">
                          {getCurrentServices().map((service, index) => (
                            <li
                              key={index}
                              className="service-item"
                              onClick={(e) => handleServiceClick(service, e)}
                              onTouchEnd={(e) => handleServiceTouch(service, e)}
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

      <NavigationDots 
        activeDot={activeDot}
        setActiveDot={setActiveDot}
        isHeaderHidden={isHeaderHidden}
      />

      <ScrollToTop />
      
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
        
        <div id="section16" className="section">Секция 16: Разработка систем безопасности</div>
        <div id="section20" className="section">Секция 20: Установка систем видеонаблюдения</div>
        <div id="section24" className="section">Секция 24: Техническое обслуживание систем</div>
        
        <div id="section28" className="section">Секция 28: Разработка СТУ</div>
      </div>
    </div>
  );
};

export default Home;