import React, { Component } from 'react';
import Navbar from "./components/Navbar"
import MainContent from './components/MainContent';
import Footer from "./components/Footer"
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      navBackground: "red"
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar background={this.state.navBackground}/>
        <MainContent/>
        <Footer/>
      </div>
    );
  }
}

export default App;
