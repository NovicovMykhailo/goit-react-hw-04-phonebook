import css from './PhoneBookForm.module.css';
import { Component } from 'react';

export default class PhoneBookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputValue = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { addContact } = this.props;
    const { name, number } = this.state;
    return (
      <form action="" className={css.form} onSubmit={addContact}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.onInputValue}
          />
        </label>
        <label>
          Telephone
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="+038-000-00-00"
            value={number}
            onChange={this.onInputValue}
          />
        </label>
        <button type="submit" className={css.addContact}>
          Add Contact
        </button>
      </form>
    );
  }
}
