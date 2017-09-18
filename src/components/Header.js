import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Header = () => (
  <header className={css(styles.header)}>
    <div className={css(styles.banner)}>
      <h2 className={css(styles.headerText)}>furball514</h2>
    </div>
  </header>
);

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
    '@media (min-width: 1300px)': {
      width: '1300px',
      margin: 'auto',
    },
  },
  headerText: {
    color: '#fff',
  },
});
