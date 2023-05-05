import css from './ContactList.module.css'
import ContactCard from '../ContactCard/ContactCard';


export default function ContactList() {
  return (
    <ul className={css.contactList}>
      <ContactCard />
    </ul>
  );
}
