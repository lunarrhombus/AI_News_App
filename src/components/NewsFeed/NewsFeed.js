import React from 'react';
import './NewsFeed.css';

const NewsFeed = ({ articles }) => {
  return (
    <div className="news-feed">
      <h3>Latest News</h3>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
