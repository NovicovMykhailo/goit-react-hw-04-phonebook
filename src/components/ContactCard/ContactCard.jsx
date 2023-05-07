import css from './ContactCard.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';


export default class ContactCard extends Component {

  handleDeleteCard = e => {
    let currentId = e.currentTarget.parentNode.dataset.id;
    this.props.deleteCard(currentId);
  };

  render() {
    const { name, number, id } = this.props;
    return (
      <li className={css.cardItem} title={name} data-id={id}>
        <button
          type="button"
          className={css.button}
          onClick={this.handleDeleteCard}
        ></button>
        <p className={css.contact}>
          Name : <span className={css.value}>{name}</span>
        </p>
        <p className={css.contact}>
          Number : <span className={css.value}>{number}</span>
        </p>
      </li>
    );
  }
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}; 