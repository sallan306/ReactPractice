import React, { Component } from 'react';
import contactCardData from "./contactCardData";
import ContactCard from './ContactCard';


class ContactCardContainer extends Component {
  constructor(props) {
    super()
    this.state = {
    }
  }

  render() {
    const allContacts = contactCardData.map(
        contact => <ContactCard 
                      key={contact.id}
                      url={contact.url}
                      name={contact.name}
                      email={contact.email}
                      phone={contact.phone}
                    />)
    return (
        <div className="contactCardContainer" style={{display: (this.props.currentContent === "contact") ? "block" : "none"}}>
            <h1>Contact Cards</h1>
            {allContacts}
        </div>
    );
  }
}

export default ContactCardContainer;
