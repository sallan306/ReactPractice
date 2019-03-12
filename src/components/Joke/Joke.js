import React, { Component } from 'react';


class Joke extends Component {
  constructor(){
    super()
    this.state = {
      punchlineVisibility: "hidden",
      buttonVisibility: "visible"
    }
  }
  render() {
    const revealPunchline = () => {
      this.setState({
        punchlineVisibility: "visible",
        buttonVisibility: "hidden"
      })
    }
    return (
        <div className="joke">
            <p style={{display: !this.props.question && "none"}}>{this.props.question}</p>
            <p style={{ visibility: this.state.punchlineVisibility, 
                        color: !this.props.question && "gray"
                      }}>{this.props.punchline}</p>
            <button style={{visibility: this.state.buttonVisibility}}onClick={revealPunchline}>Reveal Punchline!</button>
        </div>
    );
  }
}

export default Joke;
