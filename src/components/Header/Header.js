import React, { Component } from 'react';
import { css } from 'aphrodite';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import styles from './headerstyles';
import 'font-awesome/css/font-awesome.css';

const HeaderText = () => (
  <p className={css(styles.headerText)}>
    <a href="" className={css(styles.a)}>
      <span className="fa fa-code fa-lg" />&nbsp;&nbsp;furball514&nbsp;&nbsp;
    </a>
    <span className={css(styles.bar)}>|</span>&nbsp;&nbsp;
  </p>
);

class Search extends Component {
  state = {
    value: '',
  };

  render() {
    return (
      <TextField
        className={css(styles.searchBox)}
        placeholder="Start typing..."
        value={this.state.value}
        addonString="Search"
        onChanged={value => this.setState({ value })}
      />
    );
  }
}

const Control = () => (
  <div className={css(styles.control)}>
    <p className={css(styles.white)}>Invert colors</p>&nbsp;&nbsp;&nbsp;<Toggle
      className={css(styles.toggle)}
      onChanged={() => document.getElementById('root').classList.toggle('invert')}
    />
  </div>
);

const Header = () => (
  <header className={css(styles.header)}>
    <div className={css(styles.leftBanner)}>
      <HeaderText />
      <Search />
    </div>
    <div className={css(styles.rightBanner)}>
      <Control />
    </div>
  </header>
);

export default Header;

//clearInput
//inputclassname
