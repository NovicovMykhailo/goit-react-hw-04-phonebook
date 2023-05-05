import css from './ContactCard.module.css';
export default function ContactCard() {
  return (
    <li classList={css.cardItem} title="Novicov Mykhailo">
      <button type="button" className={css.button}></button>
      <p className={css.contact}>
        Name : <span className={css.value}>Novicov Mykhailo</span>
      </p>
      <p className={css.contact}>
        Number : <span className={css.value}>+380637169960</span>
      </p>
    </li>
  );
}
