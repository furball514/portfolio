import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NavBar from './NavBar';

const Content = () => (
  <div data-is-scrollable className={css(styles.content)}>
    <NavBar />
  </div>
);

export default Content;

const styles = StyleSheet.create({
  content: {
    width: '100%',
    minWidth: '319px', //
    '@media (max-width: 319px)': {
      width: '319px',
    },
    margin: '0 auto',
    transform: 'translate(0,-1px)',
  },
});
