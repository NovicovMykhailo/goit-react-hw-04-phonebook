import css from './App.module.css';
import { Component } from 'react';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
const shortid = require('shortid');

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  removingCard = id => {
    this.setState(prevState => ({ 
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))

  };

  addContact = data => {
    const id = shortid.generate();
    let obj = { id, ...data };
    // this.setState({
    //   ...this.state.contacts +
    //   obj,
    // });
    console.log( obj);

  };

  render() {
    return (
      <div className={css.app}>
        <h1>Phonebook</h1>
        <PhoneBookForm
          addContact={this.addContact}
          onSubmit={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter />
        <ContactList
          list={this.state.contacts}
          removeCard={this.removingCard}
        />
      </div>
    );
  }
}
