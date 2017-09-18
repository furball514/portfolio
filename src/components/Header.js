import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import 'font-awesome/css/font-awesome.css';

const Header = () => (
  <header className={css(styles.header)}>
    <div className={css(styles.banner)}>
      <p className={css(styles.headerText)}>
        <a href="" className={css(styles.a)}>
          <span className="fa fa-code fa-lg" />&nbsp;furball514&nbsp;
        </a>
        <span className={css(styles.bar)}>|</span>
      </p>
      <Search />
      <Control style={{ alignSelf: 'flex-end' }} />
    </div>
  </header>
);

const Search = () => <SearchBox />;

const Control = () => <Toggle />;

export default Header;

const styles = StyleSheet.create({
  header: {
    left: 0,
    padding: '0 8px',
    position: 'fixed',
    right: 0,
    top: 0,
    width: '100%',
    zIndex: 600,
    backgroundColor: '#000',
    height: '50px',
  },
  banner: {
    height: '50px',
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    '@media (min-width: 1300px)': {
      width: '1300px',
      margin: 'auto',
    },
  },
  headerText: {
    color: '#fff',
    fontSize: '19px',
    paddingBottom: 10,
  },
  bar: {
    color: '#666',
    fontSize: '28px',
    paddingBottom: 2,
  },
  a: { textDecoration: 'none', color: '#fff' },
});
