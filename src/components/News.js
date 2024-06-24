import React, { useState } from 'react';

const News = ({ newsList }) => {
  const [selectedNews, setSelectedNews] = useState(null);

  const handleClick = (news) => {
    setSelectedNews(news);
  };

  return (
    <div className="news">
      <h2>Останні новини</h2>
      <ul>
        {newsList.slice(0).reverse().map(news => ( // Змінено порядок відображення
          <li key={news.id}>
            <h3 onClick={() => handleClick(news)}>{news.title}</h3>
            {selectedNews === news && (
              <p>{news.content}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;





