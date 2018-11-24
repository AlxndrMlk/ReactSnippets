import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    {Math.random() > 0.5 &&
      <div>Random is high today</div>
    }
  </div>,
  document.getElementById('app')
);
