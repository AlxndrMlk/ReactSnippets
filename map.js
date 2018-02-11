import React from 'react';
import ReactDOM from 'react-dom';

const people = ['John Zorn', 'Abe Brown', 'Paul Klee', 'Chuck Norris'];

const peopleLis = people.map(person =>
  <li>{person}</li>                           
);

ReactDOM.render(
  <ul>{peopleLis}</ul>,
  document.getElementById('app')
);                             
