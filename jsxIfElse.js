import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    {Math.random() > 0.5
      ? <div>Schrödinger cat looks fine</div>
      : <div>Schrödinger doesn't look too good</div>
    }
  </div>,
  document.getElementById('app')
);
