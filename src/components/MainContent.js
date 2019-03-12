import React, { Component } from 'react';
import ContactCardContainer from './ContactCard/ContactCardContainer';
import JokeContainer from './Joke/JokeContainer';
import ToDoContainer from './ToDo/ToDoContainer';
import Navbar from "./HeaderFooter/Navbar"

class MainContent extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: false,
      currentContent: "none"
    }
  }
  render() {
    this.clickNav = (selected) => {
      this.setState({
        currentContent: selected
      })
    }
  
    
    const clickLogIn = () => {
      this.setState({
        loggedIn: true
      })
    }
    if(this.state.loggedIn) {

      return(
        <div className="mainContent">
          <Navbar clickNav={this.clickNav}/>
          <ContactCardContainer currentContent={this.state.currentContent}/>
          <JokeContainer currentContent={this.state.currentContent}/>
          <ToDoContainer currentContent={this.state.currentContent}/>
        </div>
      )
    }
    else {
      return(
        <div className="loggedOut">
          <h1>Please Log In</h1>
          <button onClick={clickLogIn}>Log In</button>
        </div>
      )
    }

  }
}

export default MainContent;
