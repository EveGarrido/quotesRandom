import './App.css';
import quotes from './quotes.json';
import QuoteBox from './components/QuoteBox';
import Shuffle from './components/Shuffle';
import { useState } from 'react';

function App() {
  //declaración índice de elementos de array//
  let [ index, setIndex] = useState(Math.floor(Math.random() * quotes.length));
  
  const randomIndex = ()=>{
    let randomIndexQuote = Math.floor(Math.random() * quotes.length);
    setIndex(randomIndexQuote);
  }

  //declaración de colores y su indice en array//
  const colors = ['#feb44e', '#c03559', '#0064a6', '#260857', '#00c9aa', '#daadff', '#e11212', '#00901c', '#d89485', '#56bb00', '#4a271f', '#1212e1', '#d700ab', '#a7a100', '#4b8178', '#e1a212'];
  
  let randomColor = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColor]}`;

  return (
    <div className="App" style={{color:`${colors[randomColor]}`}}>
      <div className='container-box'>
        <QuoteBox index={index}/>
        <Shuffle index={index} randomIndex={randomIndex} color={colors} randomColor={randomColor}/>
      </div>
    </div>
  )
}

export default App
