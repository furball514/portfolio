import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const LeftFooter = () => (
  <ul className={css(styles.leftFooter)}>
    <li>
      <span />
      <a />
    </li>
    <li>
      <span />
      <a />
    </li>
  </ul>
);

const RightFooter = () => (
  <div className={css(styles.rightFooter)}>
    <img /> <a />
  </div>
);

const Footer = () => (
  <footer className={css(styles.footer)}>
    <div className={css(styles.footerContent)}>
      <LeftFooter />
      <RightFooter />
    </div>
    <div className={css(styles.footerText)}>This Site Is Compatible With Safari Reader View</div>
  </footer>
);

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
    minWidth: '319px', //
    '@media (max-width: 319px)': {
      width: '319px',
    },
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
  },
  footerContent: {
    width: '100%',
    minWidth: '319px', //
    '@media (max-width: 319px)': {
      width: '319px',
    },
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 480px)': {
      flexWrap: 'wrap',
    },
  },
  leftFooter: {
    width: '50%',
    listStyleType: 'none',
  },
  rightFooter: {
    width: '50%',
  },
  footerText: {
    textAlign: 'center',
    color: '#666',
    fontWeight: 'bold',
  },
});
