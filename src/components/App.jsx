import css from './App.module.css';
import { Component } from 'react';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  render() {
    return (
      <div className={css.app}>
        <h1>Phonebook</h1>
        <PhoneBookForm />
        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        <ContactList/>
      </div>
    );
  }
}

{/* <div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div> */}
