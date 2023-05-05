import css from './Filter.module.css';

export default function Filter() {
  return (
    <label className={css.label}>
          <input type="text" className={css.filterField} />
          Contact Finder
    </label>
  );
}
