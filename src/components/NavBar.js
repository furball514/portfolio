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
      <div className={css(styles.pageTitle)}>
        <h1 className={css(styles.heading)}>Portfolio</h1>
        <nav>
          <ul className={css(styles.list)}>
            <li className={css(styles.listItem)}>
              <a className={css(styles.link)} href="" title="About">
                About
              </a>
            </li>
            <li className={css(styles.listItem)}>
              <a className={css(styles.link)} href="" title="Skills">
                Skills
              </a>
            </li>
            <li className={css(styles.listItem)}>
              <a className={css(styles.link)} href="" title="Showcase">
                Showcase
              </a>
            </li>
            <li className={css(styles.listItem)}>
              <a className={css(styles.link)} href="" title="Tools">
                Tools
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  pageTitle: {
    color: 'white',
    backgroundColor: '#5c005c',
    padding: '0 5%',
    height: '236px',
  },
  heading: {
    fontSize: '76px',
    fontFamily: 'Source Sans Pro ExtraLight',
    color: '#f8f8f8',
    transition: 'font-size 167ms cubic-bezier(.1,.9,.2,1)',
    paddingTop: '50px',
  },
  list: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
  listItem: {
    float: 'left',
  },
  link: {
    display: 'block',
    textAlign: 'center',
    padding: '14px 1.5vw',
    textDecoration: 'none',
    fontFamily: 'Source Sans Pro ExtraLight',
    fontSize: '17px',
    color: '#fff',
    fontWeight: 'bold',
    ':hover': {
      fontFamily: 'Source Sans Pro',
    },
    '::after': {
      display: 'block',
      content: 'attr(title)',
      fontFamily: 'Source Sans Pro',
      fontWeight: '100',
      height: '0',
      overflow: 'hidden',
      visibility: 'hidden',
    },
  },
});

/*
    '@media (max-width: 480px)': {
      fontSize: '48px',
      paddingTop: '40px',
    boxShadow: '0 10px 30px -10px rgba(0,0,0,.2)',
    position: 'fixed',
    zIndex: 500,
    height: '128px',
    fontSize: '24px',
    paddingTop: '32px',
    color: '#f8f8f8',
*/
