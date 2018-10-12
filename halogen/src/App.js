import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
// import TopNavBar from './containers/TopNavBar';
import MainNav from './layout/navigation';


class App extends Component {
  render() {
    return (
      <div className="Layout">
     
        <MainNav />
        { this.props.children }
      </div>
    );
  }
}

export default App;
