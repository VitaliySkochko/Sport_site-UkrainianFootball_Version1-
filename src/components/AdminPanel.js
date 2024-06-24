import React, { useState } from 'react';

const AdminPanel = ({ addNews }) => {
  const [password, setPassword] = useState('');
  const [newsTitle, setNewsTitle] = useState('');
  const [newsContent, setNewsContent] = useState('');

  const handleAddNews = () => {
    // Перевірка на валідність пароля
    if (password === 'Admin') {
      // Додавання новини за допомогою переданої функції
      addNews({ title: newsTitle, content: newsContent });
      // Очищення полів після додавання новини
      setNewsTitle('');
      setNewsContent('');
      // Закриття вікна адміністратора після вдалого входу
      setPassword('');
    } else {
      alert('Неправильний пароль. Спробуйте ще раз.');
    }
  };

  const handleAddNews_two = () => {
    
    
      // Додавання новини за допомогою переданої функції
      addNews({ title: newsTitle, content: newsContent });
      // Очищення полів після додавання новини
      setNewsTitle('');
      setNewsContent('');
      // Закриття вікна адміністратора після вдалого входу
      setPassword('');
    }

  return (
    <div>
      <h2>Адмінська панель</h2>
     
      <input
        type="text"
        placeholder="Заголовок новини"
        value={newsTitle}
        onChange={(e) => setNewsTitle(e.target.value)}
      />
      <textarea
        placeholder="Зміст новини"
        value={newsContent}
        onChange={(e) => setNewsContent(e.target.value)}
      ></textarea>
      <button onClick={handleAddNews_two}>Додати новину</button>
    </div>
  );
};

export default AdminPanel;

