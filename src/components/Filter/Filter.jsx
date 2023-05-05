import css from './Filter.module.css';
import { Component } from 'react';

export default class Filter extends Component {
  state = {
    filter: '',
  };

  onInputValue = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    return (
      <label className={css.label}>
        <input
          type="text"
          className={css.filterField}
          value={this.state.filter}
          onChange={this.onInputValue}
        />
        Contact Finder
      </label>
    );
  }
}
