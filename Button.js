// `Button` receives `talk` method from `Talker` and runs it `onClick`

import React from 'react';

export default class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.talk}>
        Click me!
      </button>
    );
  }
}
