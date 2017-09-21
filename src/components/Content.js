import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Content = () => <div data-is-scrollable className={css(styles.content)} />;

export default Content;

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '94%',
    padding: '51px 3% 0',
    '@media (max-width: 480px)': {
      padding: '76px 3% 0',
    },
    minWidth: '320px', //
    '@media (max-width: 320px)': {
      width: '320px',
    },
  },
});
