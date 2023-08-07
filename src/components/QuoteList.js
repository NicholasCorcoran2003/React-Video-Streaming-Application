import React, { useState } from 'react';
import Quote from './Quote';
import quotesData from '../quotes.json';

const QuoteList = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const handleNextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotesData.length);
  };

  const handlePrevQuote = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex === 0 ? quotesData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="quote-list">
      <Quote key={currentQuoteIndex} quote={quotesData[currentQuoteIndex]} />
      <div className="button-container">
        <button className="prev-button" onClick={handlePrevQuote}>
          Previous
        </button>
        <button className="next-button" onClick={handleNextQuote}>
          Next
        </button>
      </div>
    </div>
  );
};

export default QuoteList;
