import React, { Component } from 'react';
import ContactCardContainer from './ContactCard/ContactCardContainer';
import JokeContainer from './Joke/JokeContainer';
import ToDoContainer from './ToDo/ToDoContainer';

class MainContent extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: false,

    }
  }
  render() {


  
    
    const clickLogIn = () => {
      this.setState({
        loggedIn: true
      })
    }
    if(this.state.loggedIn) {
      return(
        <div className="mainContent">
          <ContactCardContainer/>
          <JokeContainer/>
          <ToDoContainer/>
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
