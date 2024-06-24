import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import './Header.css'
import Main from './components/Main';
import './Main.css';
import Footer from './components/Footer';
import './Footer.css';
import News from './components/News';
import './News.css';

const App = () => {
    // Додаємо стан для відстеження поточного відображення
    const [currentPage, setCurrentPage] = useState('home');

    // Функція для зміни поточної сторінки
    const changePage = (page) => {
      setCurrentPage(page);
    };
    
    // Створюємо стан для зберігання списку новин
    const [newsList, setNewsList] = useState([]);

    // Функція для додавання нової новини до списку
    const addNews = (newNews) => {
      setNewsList([...newsList, newNews]);
    };

  return (
      <div className="App">
          <Header changePage={changePage} />
          {currentPage === 'home' ? <Main /> : <News newsList={newsList} />} 
          <Footer addNews={addNews} />
      </div>
  );
}

export default App;