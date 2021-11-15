import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchForm.module.scss';

class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    query: '',
    textPlaceholder: '',
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.query);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ query: '' });
  };

  render() {
    const { textPlaceholder } = this.props;
    return (
      <Fragment>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <input
            className={styles.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            name="search"
            required
            value={this.state.query}
            placeholder={textPlaceholder}
            onChange={this.handleChange}
          />

          <button type="submit" className={styles.SearchForm__button}>
            <span className={styles.SearchForm__buttonLabel}>Search</span>
          </button>
        </form>
      </Fragment>
    );
  }
}

export default SearchForm;
