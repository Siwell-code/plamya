import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MobileMenu from './MobileMenu/MobileMenu';
import image1 from '../../assets/images/C5A35F8D.jpg';
import image2 from '../../assets/images/C5A35F8F.jpg';
import image3 from '../../assets/images/C5A35F8A.jpg';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">

        <NavLink to="/" className="logo-section">
          <LogoIcon className="logo-icon" />
          <TextIcon className="logo-text" />
        </NavLink>

        <nav className="nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Главная
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Стоимость работ
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            О нас
          </NavLink>
        </nav>

        <div className="header-right">
          {/* Иконки */}
          <button className="icon-button search-button">
            <SearchIcon className="search-icon" />
          </button>

          {/* Контакты для десктопа */}
          <div className="contact-info">
            <div className="contact-item">
              <PhoneIcon className="contact-icon" />
              <div className="contact-details">
                <span className="contact-label">Телефон</span>
                <span className="contact-value">7 (495) 763-76-27</span>
              </div>
            </div>

            <div className="message-item">
              <EmailIcon className="message-icon" />
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <span className="contact-value">info@mosplamya.ru</span>
              </div>
            </div>
          </div>

          {/* Кнопка бургер-меню для мобильных */}
          <button
            className="burger-menu-button"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </div>

      {/* Мобильное меню */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

    </header>
  );
};

// SVG Иконки компонентами
const LogoIcon = ({ className }) => (
  <svg
    className={className}
    version="1.1"
    viewBox="0 0 512 512"
    style={{ enableBackground: 'new 0 0 512 512' }}
    space="preserve"
  >
    <style>{`
      .st0 { fill: #FFFFFF; }`}</style>
    <g>
      <path className="st0" d="M417,153.2" />
      <g>
        <g>
          <image
            style={{ overflow: 'visible' }}
            width="1051"
            height="994"
            xlinkHref={image1}
            transform="matrix(0.24 0 0 0.24 150.4486 64.1287)"
          />
        </g>
      </g>
      <g>
        <g>
          <image
            style={{ overflow: 'visible' }}
            width="1013"
            height="896"
            xlinkHref={image2}
            transform="matrix(0.24 0 0 0.24 90.4468 211.5867)"
          />
        </g>
      </g>
      <g>
        <g>
          <image
            style={{ overflow: 'visible' }}
            width="522"
            height="449"
            xlinkHref={image3}
            transform="matrix(0.24 0 0 0.24 193.2449 200.7882)"
          />
        </g>
      </g>
    </g>
  </svg>
);

const TextIcon = ({ className }) => (
  <svg
    className={className}
    version="1.1"
    viewBox="0 0 512 512"
    style={{ enableBackground: 'new 0 0 512 512' }}
    space="preserve"
  >
    <style>{`.st0 { fill: #000000; }`}</style>
    <g>
      <g>
        <path className="st0" d="M102.1,144v111H75.8v-86.1H46.4V255H20V144H102.1z" />
        <path className="st0" d="M168,168.9c-8,0-27.3,2-27.3,44.6c0,11.1,1,29.6,2.1,41.6h-26.6c-2.4-22.6-2.6-35.3-2.6-41.7
          c0-62.2,29.1-69.2,43.8-69.2h40.1v111h-26.4v-86.1C171.2,168.9,168,168.9,168,168.9z"/>
        <path className="st0" d="M262.6,144c6.9,13.2,23.8,48.5,32.5,111h-26.4c-2-13.2-1.5-11.1-2.9-18.7h-26.1c1.4-8,3-15.7,4.7-23.2h16.1
          c-2.3-10.8-6.3-23-10.4-32.9c-8.9,22.6-15.4,49.7-18.9,74.8H205c4.7-30.2,17.1-82.1,32.5-111L262.6,144L262.6,144z"/>
        <path className="st0" d="M346.5,236.6c-4.5-30.5-14.6-43.3-17.5-46.8V255h-26.4V144H329c10.4,11.2,22.2,34.6,25.6,48.1h0.5
          c2.9-13.2,15.5-37.4,25.5-48.1h26.4v111h-26.4v-65.2c-5.6,7-13.6,20.3-17.5,46.8H346.5z"/>
        <path className="st0" d="M464.8,168.9c-6.5,0-19.6,0.6-19.6,16.6c0,8.1,4.5,19.4,25.9,15.9v24.8c-2.1,1.3-16,10.3-21.6,28.9h-28
          c6.6-19.9,16-29.4,24.3-34.7v-0.7c-12.5-1.3-27.6-10.9-27.6-34.4c0-39.3,29.6-41.1,41-41.1h43.3v111h-26.4v-86.2H464.8
          L464.8,168.9z"/>
      </g>
      <g>
        <path className="st0" d="M35,312c-0.8,0.5-2.6,1-4.9,1c-5.9,0-9.5-4.4-9.5-11.2c0-7.3,4.3-11.8,10-11.8c2.3,0,3.8,0.5,4.5,1l-0.7,3.2
          c-0.9-0.5-2.1-0.9-3.6-0.9c-3.8,0-6.5,2.8-6.5,8.2c0,4.9,2.4,8,6.5,8c1.3,0,2.8-0.3,3.7-0.8L35,312L35,312z"/>
        <path className="st0" d="M48.6,290.3v7.9c0,3.5,0,6.8-0.2,9.8h0.1c1-2.5,2.1-5.2,3.4-7.7l4.9-10h3.4v22.3h-3.1v-7.9
          c0-3.5,0-6.4,0.3-9.2h-0.1c-0.9,2.6-2.1,5.3-3.3,7.7l-4.7,9.4h-3.8v-22.3L48.6,290.3L48.6,290.3z"/>
        <path className="st0" d="M85.1,312c-0.8,0.5-2.6,1-4.9,1c-5.9,0-9.5-4.4-9.5-11.2c0-7.3,4.3-11.8,10-11.8c2.3,0,3.8,0.5,4.5,1
          l-0.7,3.2c-0.9-0.5-2.1-0.9-3.6-0.9c-3.8,0-6.5,2.8-6.5,8.2c0,4.9,2.4,8,6.5,8c1.3,0,2.8-0.3,3.7-0.8L85.1,312L85.1,312z"/>
        <path className="st0" d="M99.9,293.7h-5.3v-3.4h14.1v3.4h-5.4v18.9h-3.4V293.7z" />
        <path className="st0" d="M128.9,302.7h-7v6.5h7.8v3.3h-11.2v-22.3h10.8v3.3h-7.5v5.8h7L128.9,302.7L128.9,302.7z" />
        <path className="st0" d="M156,303.5c-0.1-2.9-0.2-6.4-0.2-9.4h-0.1c-0.6,2.7-1.4,5.7-2.2,8.6l-2.8,9.6h-2.6l-2.5-9.5
          c-0.7-2.8-1.4-5.9-1.9-8.6h0c-0.1,2.9-0.2,6.4-0.3,9.5l-0.4,9h-3.2l1.3-22.3h4.5l2.4,9c0.6,2.6,1.3,5.3,1.7,7.7h0.1
          c0.5-2.4,1.1-5.2,1.8-7.8l2.6-8.9h4.4l1.1,22.3h-3.3L156,303.5L156,303.5z"/>
        <path className="st0" d="M174.1,290.3v8c0.5-0.1,1.5-0.2,2.1-0.2c3.8,0,7.3,2.2,7.3,7.2c0,2.1-0.6,3.7-1.5,4.8
          c-1.7,2.1-4.5,2.7-7.2,2.7c-1.8,0-3.2-0.2-4.1-0.3v-22.2L174.1,290.3L174.1,290.3z M174.1,309.6c0.4,0.1,1,0.1,1.6,0.1
          c2.2,0,4.2-1.5,4.2-4.3c0-2.9-2.2-4.1-4.2-4.1c-0.7,0-1.3,0-1.6,0.1C174.1,301.4,174.1,309.6,174.1,309.6z M188.8,290.3v22.3h-3.4
          v-22.3C185.4,290.3,188.8,290.3,188.8,290.3z"/>
        <path className="st0" d="M231.1,290.3v3.3H223v4.8c0.6-0.1,1.6-0.2,2.3-0.2c1.8,0,3.7,0.5,5,1.7c1.3,1.1,2.3,2.9,2.3,5.4
          c0,2.1-0.6,3.8-1.7,4.9c-1.6,1.8-4.4,2.5-7.1,2.5c-1.9,0-3.3-0.2-4.2-0.3v-22.2C219.6,290.3,231.1,290.3,231.1,290.3z M223,309.6
          c0.5,0.1,1.1,0.1,1.8,0.1c1.3,0,2.4-0.5,3.2-1.4c0.6-0.7,1-1.7,1-2.9c0-1.4-0.5-2.4-1.3-3.1c-0.8-0.8-2-1.1-3.1-1.1
          c-0.5,0-1.1,0-1.7,0.1L223,309.6L223,309.6z"/>
        <path className="st0" d="M253.5,302.7h-7v6.5h7.8v3.3h-11.2v-22.3h10.8v3.3h-7.5v5.8h7L253.5,302.7L253.5,302.7z" />
        <path className="st0" d="M264.5,291.7c1.3-1,3.1-1.7,5.4-1.7c3.7,0,6,2.2,6,5.6c0,2.8-1.6,4.8-3.8,5.3l0,0c2.4,0.4,4.4,2.4,4.4,5.5
          c0,4.8-3.8,6.6-7.2,6.6c-1.8,0-3.7-0.5-5.3-1.5l0.8-3.2c1,0.6,2.8,1.4,4.4,1.4c2.4,0,3.8-1.4,3.8-3.5c0-2.8-2.4-3.5-4.4-3.5h-1.5
          v-3.1h1.5c2.1,0,3.8-1.4,3.8-3.4c0-1.8-1.1-2.9-3.1-2.9c-1.4,0-2.9,0.7-4,1.4L264.5,291.7L264.5,291.7z"/>
        <path className="st0" d="M303.5,301.2c0,7.5-3.8,11.8-8.9,11.8c-5.1,0-8.6-4.8-8.6-11.3c0-6.9,3.6-11.7,8.9-11.7
          S303.5,294.9,303.5,301.2z M289.6,301.5c0,4.6,1.9,8.2,5.2,8.2c3.2,0,5.1-3.7,5.1-8.3c0-4.2-1.8-8.2-5.1-8.2
          S289.6,297,289.6,301.5z"/>
        <path className="st0" d="M328.4,290.3v22.3H325v-18.9h-7.5v18.9H314v-22.3C314,290.3,328.4,290.3,328.4,290.3z" />
        <path className="st0" d="M343.6,306.3l-1.6,6.3h-3.5l6-22.3h4.4l6,22.3h-3.7l-1.7-6.3H343.6z M349,303.2l-1.5-5.5
          c-0.3-1.4-0.6-2.9-1-4.2h0c-0.3,1.3-0.6,2.8-0.9,4.2l-1.5,5.5H349z"/>
        <path className="st0" d="M377.9,312c-0.8,0.5-2.6,1-4.9,1c-5.9,0-9.5-4.4-9.5-11.2c0-7.3,4.3-11.8,10-11.8c2.3,0,3.8,0.5,4.5,1
          l-0.7,3.2c-0.9-0.5-2.1-0.9-3.6-0.9c-3.8,0-6.5,2.8-6.5,8.2c0,4.9,2.4,8,6.5,8c1.3,0,2.8-0.3,3.7-0.8L377.9,312L377.9,312z"/>
        <path className="st0" d="M391.8,290.3v8.9h7.9v-8.9h3.4v22.3h-3.4v-9.8h-7.9v9.8h-3.4v-22.3C388.4,290.3,391.8,290.3,391.8,290.3z" />
        <path className="st0" d="M431.1,301.2c0,7.5-3.8,11.8-8.9,11.8s-8.6-4.8-8.6-11.3c0-6.9,3.6-11.7,8.9-11.7
          C427.7,290,431.1,294.9,431.1,301.2z M417.1,301.5c0,4.6,1.9,8.2,5.2,8.2s5.1-3.7,5.1-8.3c0-4.2-1.8-8.2-5.1-8.2
          S417.1,297,417.1,301.5z"/>
        <path className="st0" d="M455,312c-0.8,0.5-2.6,1-4.9,1c-5.9,0-9.5-4.4-9.5-11.2c0-7.3,4.3-11.8,10-11.8c2.3,0,3.8,0.5,4.5,1l-0.7,3.2
          c-0.9-0.5-2.1-0.9-3.6-0.9c-3.8,0-6.5,2.8-6.5,8.2c0,4.9,2.4,8,6.5,8c1.3,0,2.8-0.3,3.7-0.8L455,312L455,312z"/>
        <path className="st0" d="M469.7,293.7h-5.3v-3.4h14.1v3.4h-5.4v18.9h-3.4V293.7z" />
        <path className="st0" d="M491.4,290.3v7.9c0,3.5,0,6.8-0.2,9.8h0.1c1-2.5,2.1-5.2,3.4-7.7l4.9-10h3.4v22.3h-3.1v-7.9
          c0-3.5,0-6.4,0.3-9.2h-0.1c-0.9,2.6-2.1,5.3-3.3,7.7l-4.7,9.4h-3.8v-22.3L491.4,290.3L491.4,290.3z"/>
      </g>
    </g>
  </svg>
);

const SearchIcon = ({ className }) => (
  <svg
    className={className}
    version="1.1"
    viewBox="0 0 512 512"
    style={{ enableBackground: 'new 0 0 512 512' }}
    space="preserve"
  >
    <style>{`
      .st6 { fill: #FF5A30; }
      .st1 { fill: none; stroke: #FF5A30; stroke-width: 47; stroke-miterlimit: 10; }
    `}</style>
    <g>
      <path className="st6" d="M284.2,182.7c62.8,0,113.9,51.1,113.9,113.9s-51.1,113.9-113.9,113.9c-62.8,0-113.9-51.1-113.9-113.9
        S221.4,182.7,284.2,182.7 M284.2,121.6c-96.7,0-175,78.3-175,175s78.3,175,175,175s175-78.3,175-175S380.8,121.6,284.2,121.6
        L284.2,121.6z"/>
    </g>
    <g>
      <path className="st1" d="M375.9,382c0,0,100.7,92.1,80.6,73.7" />
    </g>
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg
    version="1.1"
    className={className}
    viewBox="0 0 512 512"
    style={{ enableBackground: 'new 0 0 512 512' }}
    space="preserve">
    <style>{`
      .st15{fill:#FF5A30;}
      .st16{fill:none;stroke:#FF5A30;stroke-width:30;stroke-miterlimit:10;}
    `}</style>
    <g>
      <path class="st15" d="M307.6,57c15.7,0,28.4,12.7,28.4,28.4v308.2c0,15.7-12.7,28.4-28.4,28.4H191.4c-15.7,0-28.4-12.7-28.4-28.4
		V85.4c0-15.7,12.7-28.4,28.4-28.4H307.6 M307.6,27H191.4C159.2,27,133,53.2,133,85.4v308.2c0,32.3,26.2,58.4,58.4,58.4h116.2
		c32.3,0,58.4-26.2,58.4-58.4V85.4C366,53.2,339.8,27,307.6,27L307.6,27z"/>
    </g>
    <path class="st16" d="M287.5,58h-75c-4.1,0-7.5-3.4-7.5-7.5v0c0-4.1,3.4-7.5,7.5-7.5h75c4.1,0,7.5,3.4,7.5,7.5v0
	C295,54.6,291.6,58,287.5,58z"/>
  </svg>
);

const EmailIcon = ({ className }) => (
  <svg
    version="1.1"
    className={className}
    viewBox="0 0 512 512"
    style={{ enableBackground: 'new 0 0 512 512' }}
    space="preserve">
    <style>{`
	.st8 {fill:none; stroke:#FF5A30; stroke-width:20; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:10;}
	`}
    </style>
    <g>
        <path class="st8" d="M351.4,223.5c1.7,49.9-54.3,92.5-125.3,94.9c-22.7,0.1-42.4-2.8-59.2-7.9c-5.5-1.7-11.4-1.9-17-0.5
			c-30,7.4-61.1,19-60.6,15.8c-3.6,1.9,6.8-19.1,14.3-41.5c2.7-8,1.9-16.6-1.9-24.1c-26.1-51.6,14.5-115.9,118.1-122.6
			C290.7,135.1,349.6,173.6,351.4,223.5z"/>
    </g>
  </svg>
);


export default Header;