import React, { Component } from 'react';
import ContactCardContainer from './ContactCard/ContactCardContainer';
import JokeContainer from './Joke/JokeContainer';
import ToDoContainer from './ToDo/ToDoContainer';
import Navbar from "./HeaderFooter/Navbar"
import Loading from "./Loading"
import Starwars from './Starwars';

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
      if (this.state.currentContent !== selected)
      {
        if (selected === "logout") {
          this.setState({
            currentContent: "none",
            loggedIn: false
          })
        }
        else {
          this.setState({
            currentContent: "loading"
          })
          setTimeout(()=> {
            this.setState({
              currentContent: selected
            })
          },1000)

        }

      }
    }
  
    
    const clickLogIn = () => {
      this.setState({
        loggedIn: true
      })
      this.clickNav("contact")
    }
    if(this.state.loggedIn) {

      return(
        <div className="mainContent">
          <Navbar clickNav={this.clickNav}/>
          {this.state.currentContent === "loading" ? <Loading/> : null}
          <ContactCardContainer currentContent={this.state.currentContent}/>
          <JokeContainer currentContent={this.state.currentContent}/>
          <ToDoContainer currentContent={this.state.currentContent}/>
          <Starwars currentContent={this.state.currentContent}/>
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
