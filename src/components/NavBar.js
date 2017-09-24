import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const NavBar = () => (
  <div className={css(styles.navbar)}>
    <div style={{ backgroundColor: '#5c005c' }}>
      <h1 className={css(styles.h1)}>Portfolio</h1>
      <nav>
        <ul className={css(styles.ul)}>
          <li>
            <a className={css(styles.link)} href="">
              About
            </a>
          </li>
          <li>
            <a className={css(styles.link)} href="">
              Skills
            </a>
          </li>
          <li>
            <a className={css(styles.link)} href="">
              Showcase
            </a>
          </li>
          <li>
            <a className={css(styles.link)} href="">
              Tools
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default NavBar;

const styles = StyleSheet.create({
  navbar: {
    zIndex: 500,
    position: 'relative',
  },
  h1: {
    fontSize: '76px',
    fontFamily: 'Source Sans Pro ExtraLight',
    color: '#f8f8f8',
  },
  ul: {
    listStyleType: 'none',
  },
  link: {
    fontSize: '17px',
    fontWeight: '300',
    textDecoration: 'none',
    color: '#fff',
    ':hover': {
      fontWeight: '700',
      fontSize: '18px',
    },
  },
});
