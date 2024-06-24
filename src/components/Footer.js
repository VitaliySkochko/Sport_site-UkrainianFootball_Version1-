import React, { useState } from 'react';
import AdminPanel from './AdminPanel';


const Footer = ({ addNews }) => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleAdminClick = () => {
    setIsAdminOpen(!isAdminOpen);
    setPasswordInput('');
  };

  const handlePasswordSubmit = () => {
    if (passwordInput === 'Admin') {
      setIsAdminOpen(true);
      setPassword('');
    } else {
      alert('Неправильний пароль. Спробуйте ще раз.');
    }
  };

  return (
    <footer>
      <div className="footer-content">
        <p>© 2024 UkrainianFootball. Всі права захищені.</p>
        <button onClick={handleAdminClick}>{isAdminOpen ? 'Закрити Адмін-панель' : 'Адмін'}</button>
        {isAdminOpen && (
          <>
            <p>Пароль: <input type="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} /></p>
            <button onClick={handlePasswordSubmit}>Підтвердити пароль</button>
          </>
        )}
        {isAdminOpen && passwordInput === 'Admin' && (
          <AdminPanel addNews={addNews} />
        )}
      </div>
    </footer>
  );
};

export default Footer;


