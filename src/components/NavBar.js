import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class NavBar extends Component {
  state = {
    fixed: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    const fixed = window.scrollY >= 108;
    this.setState({ fixed });
  }

  render() {
    return (
      <div className={css(styles.navbar)}>
        <div className={css(this.state.fixed ? styles.fixedDiv : styles.div)}>
          <h1 className={css(this.state.fixed ? styles.fixedH1 : styles.h1)}>Portfolio</h1>
          <nav className={css(styles.linksContainer)}>
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
  }
}

const styles = StyleSheet.create({
  navbar: {
    color: 'white',
    backgroundColor: '#5c005c',
    padding: '0 5%',
  },
  div: {
    height: '236px',
  },
  h1: {
    fontSize: '76px',
    fontFamily: 'Source Sans Pro ExtraLight',
    color: '#f8f8f8',
    paddingTop: '50px',
    '@media (max-width: 480px)': {
      fontSize: '48px',
      paddingTop: '40px',
    },
    transition: 'font-size 167ms cubic-bezier(.1,.9,.2,1)',
  },
  linksContainer: {},
  ul: {
    listStyleType: 'none',
    display: 'flex',
  },
  link: {
    fontFamily: 'Source Sans Pro ExtraLight',
    fontSize: '17px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#fff',
    ':hover': {
      fontFamily: 'Source Sans Pro',
      fontWeight: '900',
    },
  },
  /* fixed */
  fixedDiv: {
    boxShadow: '0 10px 30px -10px rgba(0,0,0,.2)',
    position: 'fixed',
    zIndex: 500,
    height: '128px',
  },
  fixedH1: {
    fontSize: '24px',
    paddingTop: '32px',
    color: '#f8f8f8',
  },
});
