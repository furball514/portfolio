import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Footer = () => <footer className={css(styles.footer)} />;

export default Footer;

const styles = StyleSheet.create({
  footer: {
    background: '#000',
    color: '#fff',
    fontWeight: '400',
    fontSize: '14px',
    padding: '32px 3%',
    position: 'relative',
    width: '94%',
    minWidth: '320px', //
    '@media (max-width: 320px)': {
      width: '320px',
    },
    margin: '0 auto',
  },
});
