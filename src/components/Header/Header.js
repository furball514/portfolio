import React from 'react';
import { css } from 'aphrodite';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
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

const Search = () => <SearchBox className={css(styles.searchBox)} />;

const Control = () => (
  <div className={css(styles.control)}>
    <p style={{ color: 'white' }}>Invert colors</p>&nbsp;&nbsp;<Toggle />{' '}
  </div>
);

const Header = () => (
  <header className={css(styles.header)}>
    <div className={css(styles.banner)}>
      <HeaderText />
      <Search />
      <Control />
    </div>
  </header>
);

export default Header;

//mobile
