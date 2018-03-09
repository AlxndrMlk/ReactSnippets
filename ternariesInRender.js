import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

class CoinFlip extends React.Component{
  render() {
    return fiftyFifty ? 
     <h1>Wow! Heads!</h1>
   : <h1>Wow! Tails!</h1>
  }
}
