import React from 'react';
import '../css/Card.css';

const Card = ({ image, title, items }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        {title && <h2 className="card-title">{title}</h2>}
        {items && (
          <ul className="card-list">
            {items.map((item, index) => (
              <li key={index} className="card-list-item">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Card;
