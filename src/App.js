import React, { Component } from 'react';
import logo from './logo.svg';
import './App.less';
import {Button} from 'antd'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button type="primary">哈哈</Button>
        </header>
      </div>
    );
  }
}

export default App;
