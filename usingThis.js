import React from 'react';
import ReactDOM from 'react-dom';

class SomeThings extends React.Component {
  get fav_food() {
    return 'Tofu'
  }
  get fav_artist () {
    return 'John Zorn' 
  }
  render() {
    return (
    <div>
      <h1>Foods</h1>
      <p>My fav artist is {this.fav_artist}</p>
      <p>My favorite food is {this.fav_food}</p>
    </div>)
  }
};

ReactDOM.render(
  <SomeThings/>,
  document.getElementById('root')
);
