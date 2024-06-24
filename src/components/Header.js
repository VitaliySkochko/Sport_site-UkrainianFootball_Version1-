import React from 'react';
import logo from '../img/logo.png';

const Header = ({ changePage }) => { // Приймаємо функцію changePage як вхідний параметр
  const handleNewsClick = () => {
    changePage('news'); // Викликаємо функцію changePage з параметром 'news' при натисканні кнопки "Новини"
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Логотип сайту" width="100" height="100" />
      </div>
      <div className="title">
        <h1>UkrainianFootball</h1>
      </div>
      <nav>
        <ul>
          <li><button className="button" onClick={handleNewsClick}>Новини</button></li>
          {/* Додаємо обробник подій для кнопки "Новини" */}
          <li><button className="button" onClick={() => changePage('home')}>Головна</button></li>
          {/* Додаємо обробник подій для кнопки "Головна" */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;


 
