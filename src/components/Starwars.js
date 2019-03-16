import React, { Component } from 'react';

class Starwars extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            starwars: {},
            firstName: "",
            lastName: "",
            isFriendly: "",
            gender: "",
            strength: 0,
            selectedAPICharacter: 1
        }
    }
    componentDidMount() {
        this.setState({
            loading: true
        })
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    loading: false,
                    starwars: data
                })
            })
    }
    reload = e => {
        e.preventDefault()
        this.setState({
            loading: true
        })
        fetch("https://swapi.co/api/people/"+this.state.selectedAPICharacter)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    starwars: data
                })
            })

    }
    handleChange = event => {

        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})

    }

  render() {
    return (
        <div className="starwars" style={{display: (this.props.currentContent === "starwars") ? "block" : "none"}}>
            Starwars API Calls!<br/>
            Name: { this.state.loading ? "Loading" : this.state.starwars.name}<br/>
            Height: { this.state.loading ? "Loading" : this.state.starwars.height}<br/>
            Birth Year: { this.state.loading ? "Loading" : this.state.starwars.birth_year}<br/>
            Weight: { this.state.loading ? "Loading" : this.state.starwars.mass}<br/>
            <form onSubmit={this.reload}>
                <label>Selected Starwars Character:</label>
                <select 
                    value={this.state.selectedAPICharacter}
                    onChange={this.handleChange}
                    name="selectedAPICharacter">
                    <option value={1}>Luke Skywalker</option>
                    <option value={2}>C-3PO</option>
                    <option value={3}>R2-D2</option>
                    <option value={4}>Darth Vader</option>
                </select><br/>
            <button style={{width: 100, height: 20}}>Reload</button><br/>
            </form>
            Whats your favorite starwars character?<br/>
            <form>
                <input 
                    name="firstName" 
                    value={this.state.firstName}
                    type="text" 
                    placeholder="first" 
                    onChange={this.handleChange}
                /><br/>
                <input 
                    name="lastName" 
                    value={this.state.lastName}
                    type="text" 
                    placeholder="last" 
                    onChange={this.handleChange}
                /><br/>
                <label>
                    <input
                        type="checkbox"
                        value={this.state.isFriendly}
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    />
                    Is Friendly?
                </label>
                <label><br/>
                    <input
                        type="radio"
                        value="male"
                        name="gender"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    />
                    Male
                </label>
                <label><br/>
                    <input
                        type="radio"
                        value="female"
                        name="gender"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    />
                    Female
                </label><br/>
                <label>strength:</label>
                <select 
                    value={this.state.strength}
                    onChange={this.handleChange}
                    name="strength">
                    <option value={0}></option>
                    <option value={1}>Weak</option>
                    <option value={2}>Can take care of himself</option>
                    <option value={3}>Unstoppable</option>
                </select>
            </form>
            {this.state.firstName +" "+this.state.lastName}
            {this.state.isFriendly === true ? " is a good guy! " : ""}
            {this.state.isFriendly === false ? " is a bad boi " : ""}

            {this.state.gender === "male" ? "His" : ""}
            {this.state.gender === "female" ? "Her" : ""}
            {this.state.strength > 0 ? " power level is: " + this.state.strength : ""}


        </div>
    );
  }
}

export default Starwars;
