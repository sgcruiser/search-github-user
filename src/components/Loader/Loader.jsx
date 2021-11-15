import { Component } from 'react';

import Loader from 'react-loader-spinner';

import styles from './Loader.module.scss';

export default class App extends Component {
  //other logic
  render() {
    return (
      <Loader
        type="Grid"
        color="#00113355"
        height={70}
        width={70}
        timeout={3000} //3 secs
        className={styles.Loader}
      />
    );
  }
}
