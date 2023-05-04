import css from './ContactCard.module.css';
export default function ContactCard() {
  return (
    <li classList={css.cardItem}>
      <button type='button' className={css.button}></button>
      <p className={css.contact}>
        Name : <span className={css.value}>Kbkjb KJBkJbkj</span>
      </p>
      <p className={css.contact}>
        Number : <span className={css.value}>65165111651</span>
      </p>
    </li>
  );
}
