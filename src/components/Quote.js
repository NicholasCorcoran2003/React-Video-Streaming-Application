import React from 'react';

const Quote = ({ quote }) => {
  
  return (
    <div className="quote">
      <div className="quote-image-container">
        {quote.imageUrl.includes('.mp4') ? (
          <video controls>
            <source src={quote.imageUrl} type="video/mp4" />
          </video>
        ) : (
          <img src={quote.imageUrl} alt={quote.author} />
        )}
      </div>
      <div className="quote-content">
        <p>{quote.quote}</p>
        <span>{quote.author}</span>
      </div>
    </div>
  );
};

export default Quote;
