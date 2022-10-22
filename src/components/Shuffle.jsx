import React, { useState } from 'react';
import quotes from '../quotes.json';

const Shuffle = ({index, randomIndex, color, randomColor}) => {

  return (
    <div className='author-and-btn'>
      <p>{quotes[index].author}</p>
      <button onClick={randomIndex} style={{background:`${color[randomColor]}`}}><i className="fa-solid fa-shuffle"></i></button>
    </div>
  );
};

export default Shuffle;