import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Верхняя часть с текстом и чертой */}
      <div className="footer-top">
        <div className="footer-header">
          <h3 className="footer-main-text">
            Системы обеспечения пожарной безопасности для Вашего объекта. 
            Разработано Siwell-code.
          </h3>
          <div className="footer-line"></div>
        </div>
      </div>

      {/* Основное содержимое - 3 колонки */}
      <div className="footer-content">
        {/* Первая колонка - ссылки на секции */}
        <div className="footer-column">
          <h4 className="footer-title">Наши услуги</h4>
          <div className="footer-links">
            <Link 
              to="section1" 
              smooth={true} 
              duration={500} 
              className="footer-link"
            >
              Проектирование
            </Link>
            <Link 
              to="section6" 
              smooth={true} 
              duration={500} 
              className="footer-link"
            >
              Пожарная сигнализация
            </Link>
            <Link 
              to="section7" 
              smooth={true} 
              duration={500} 
              className="footer-link"
            >
              Системы оповещения
            </Link>
            <Link 
              to="section8" 
              smooth={true} 
              duration={500} 
              className="footer-link"
            >
              Дымоудаление
            </Link>
          </div>
        </div>

        {/* Вторая колонка - дополнительные ссылки */}
        <div className="footer-column">
          <h4 className="footer-title">Разделы</h4>
          <div className="footer-links">
            <Link 
              to="section16" 
              smooth={true} 
              duration={500} 
              className="footer-link"
            >
              Системы безопасности
            </Link>
            <Link 
              to="section20" 
              smooth={true} 
              duration={500} 
              className="footer-link"
            >
              Видеонаблюдение
            </Link>
            <Link 
              to="section24" 
              smooth={true} 
              duration={500} 
              className="footer-link"
            >
              Обслуживание
            </Link>
            <Link 
              to="section28" 
              smooth={true} 
              duration={500} 
              className="footer-link"
            >
              СТУ разработка
            </Link>
          </div>
        </div>

        {/* Третья колонка - контактная информация */}
        <div className="footer-column">
          <h4 className="footer-title">Контакты</h4>
          <div className="footer-contacts">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>125171, г. Москва, ул. Космонавта Волкова, д. 6А</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+7 (495) 763-76-27</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>info@mosplamya.ru</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕒</span>
              <span>Пн-Пт: 9:00-18:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className="footer-bottom">
        <div className="footer-bottom-line"></div>
        <p className="footer-copyright">
          © {currentYear} Siwell-code. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;