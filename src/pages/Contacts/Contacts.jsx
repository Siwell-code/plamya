import React from 'react';
import FeedbackForm from '../../components/Feedback/FeedbackForm';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className="contacts-page">
      <div className="contacts-container">
        <h1>Контакты</h1>
        
        <div className="contacts-content">
          <div className="contact-info">
            <h2>Наши контакты</h2>
            
            <div className="contact-item">
              <h3>📧 Email</h3>
              <p>info@mysite.ru</p>
              <p>support@mysite.ru</p>
            </div>
            
            <div className="contact-item">
              <h3>📞 Телефон</h3>
              <p>+7 (999) 123-45-67</p>
              <p>+7 (495) 123-45-67</p>
            </div>
            
            <div className="contact-item">
              <h3>📍 Адрес</h3>
              <p>г. Москва, ул. Примерная, д. 123</p>
            </div>
            
            <div className="contact-item">
              <h3>🕒 Часы работы</h3>
              <p>Пн-Пт: 9:00-18:00</p>
              <p>Сб-Вс: выходной</p>
            </div>
          </div>
          
          <div className="feedback-section">
            <h2>Напишите нам</h2>
            <FeedbackForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;