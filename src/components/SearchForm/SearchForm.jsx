import { Component, Fragment } from 'react';

import Button from '../Button';

import styles from './SearchForm.module.scss';

class SearchForm extends Component {
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
    const { textPlaceholder, contentButton } = this.props;
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

          <Button
            onClickButton={this.handleSubmit}
            contentButton={contentButton}
          />
        </form>
      </Fragment>
    );
  }
}

export default SearchForm;
