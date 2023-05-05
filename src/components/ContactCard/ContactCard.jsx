import css from './ContactCard.module.css';


export default function ContactCard(props) {
  const { name, number, deleteCard,id} = props
  return (
    <li className={css.cardItem} title={name} data-id={id}>
      <button
        type="button"
        className={css.button}
        onClick={deleteCard}
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
