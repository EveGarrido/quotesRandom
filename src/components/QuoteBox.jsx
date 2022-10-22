import React from 'react';
import quotes from '../quotes.json';

const QuoteBox = ({index}) => {

  return (
    <div className='main-quote'>
      <i className="fa-solid fa-quote-left"></i> 
      <p>{quotes[index].quote}</p> 
      <i className="fa-solid fa-quote-right close"></i>
    </div>
  )
};

export default QuoteBox;