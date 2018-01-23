import React, { Component } from 'react';
import NavigationBar from './navs/Navigation';

class App extends Component {
  render() {
      sessionStorage.setItem("user","");
    return (
      <div >
          <NavigationBar />
      </div>
    );
  }
}

export default App;
