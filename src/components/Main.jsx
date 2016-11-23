import React, { Component } from 'react';
import { Match } from 'react-router';
import classnames from 'classnames';
import MainApp from './mainapp';
// import Signup from './signup';
// import Login from './login';

class Main extends Component {
  render() {
    return (
      <div>
        <Match pattern="/" component={MainApp} />
        {/* <Match pattern="/login" component={Login} /> */}
        {/* <Match pattern="/signup" component={Signup} /> */}
      </div>
    )
  }
}

export default Main;
