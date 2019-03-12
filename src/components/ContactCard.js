import React, { Component } from 'react';

class ContactCard extends Component {
  constructor(props) {
    super()
    this.state = {
      url: props.url,
      name: props.name,
      phone: props.phone,
      email: props.email,
      editMenuVisibility: "none",
      value: "someValue"
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    var target = event.target.name
    if (target === "name"){
      this.setState({
        name: event.target.value
      });
    }
    else if (target === "phone"){
      this.setState({
        phone: event.target.value
      });
    }
    else if (target === "email"){
      this.setState({
        email: event.target.value
      });
    }

  }

  handleSubmit(event) {
    // console.log("submitted!")
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    const openEditMenu = () => {
      this.setState({
        editMenuVisibility: (this.state.editMenuVisibility === "none") ? "block" : "none"
      })
    }
    return (
        <div className="contactCard">
            <img alt={this.state.url} src={this.state.url}/>
            <h3>{this.state.name}</h3>
            <p>{this.state.phone}</p>
            <p>{this.state.email}</p>
            <button onClick={openEditMenu}>Edit</button>
            <form style={{display: this.state.editMenuVisibility}}>
              <label className="contactInputLabel"><br></br>
                Name:
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
              </label>
              <label className="contactInputLabel"><br></br>
                Phone:
                <input type="text" name="phone"value={this.state.phone} onChange={this.handleChange} />
              </label>
              <label className="contactInputLabel"><br></br>
                Email:
                <input type="text" name="email"value={this.state.email} onChange={this.handleChange} />
              </label>
            </form>
        </div>
    );
  }
}

export default ContactCard;
