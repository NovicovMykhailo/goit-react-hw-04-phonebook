import css from './PhoneBookForm.module.css';
import { Component } from 'react';

export default class PhoneBookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputValue(e) {
    console.log(e)
  }

  render() {
    const { addContact } = this.props;
    return (
      <form action="" className={css.form}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          {this.name}
        </label>
        <label>
          Telephone
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          {this.number}
        </label>
        <button type="submit" className={css.addContact} onClick={addContact}>
          Add Contact
        </button>
      </form>
    );
  }
}
