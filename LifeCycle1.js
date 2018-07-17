// Lifecycle methods example

import React from 'react';
import ReactDOM from 'react-dom';

export class MySong extends React.Component {
  componentWillMount() {
    alert('The Intro!');
  }
  
  componentDidMount() {
    alert('The First Verse! (wow!)');
  }

  render() {

    alert('Chorus!');

    

    return (
      <h1 style={{ color: this.props.color }}>
        (Chorus) La, la, la, la, la!
      </h1>
    );
  }
}

ReactDOM.render(
  <MySong color='#E91E63' />,
  document.getElementById('app')
);

setTimeout(() => {
  ReactDOM.render(
    <MySong color='#AD1457' />,
    document.getElementById('app')
  );
}, 2000);
