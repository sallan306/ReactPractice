import React, { Component } from 'react';
import Joke from "./Joke";
import jokeData from "./jokesData"


class JokeContainer extends Component {
  constructor(props) {
    super()
    this.state = {
    }
  }

  render() {
  
    const allJokes = jokeData.map(
        joke =>   <Joke 
                    key={joke.id}
                    question={joke.question} 
                    punchline={joke.punchline}
                  />)
    return (
        <div className="jokeContainer" style={{display: (this.props.currentContent === "joke") ? "block" : "none"}}>
            <h1>Jokes</h1>
            {allJokes}
        </div>
    );
  }
}

export default JokeContainer;
