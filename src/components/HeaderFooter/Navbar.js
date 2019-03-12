import React, { Component } from 'react';

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      currentTime: this.date
    }
  }
  interval = setInterval( () => {
    this.setState({
      currentTime: Date()
    })
  }, 1000)
  date = new Date()
  hours = this.date.getHours()
  timeOfDay = () => {
    if (this.hours > 5 && this.hours < 12) {
      return "morning"
    }
    else if (this.hours >= 12 && this.hours < 17) {
      return "afternoon"
    }
    else {
      return "night"
    }
  }


  render() {
    return (
      <div className="navbar">
        <header className="header">
            {"good " + this.timeOfDay() + "! It is currently "+ this.state.currentTime}
            <br/>
            <button onClick={() => this.props.clickNav("contact")}>Contacts</button>
            <button onClick={() => this.props.clickNav("joke")}>Jokes</button>
            <button onClick={() => this.props.clickNav("todo")}>ToDo</button>
        </header>
      </div>
    );
  }
}

export default Navbar;
