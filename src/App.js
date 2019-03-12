import React, { Component } from 'react';
import MainContent from './components/MainContent';
import Footer from "./components/HeaderFooter/Footer"
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      
      
    }
  }

  render() {
    return (
      <div className="App">
        <MainContent/>
        <Footer/>
      </div>
    );
  }
}

export default App;
