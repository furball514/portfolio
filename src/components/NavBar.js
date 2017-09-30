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

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  render() {
    const unfixed = !this.state.fixed;
    const smDevice = window.matchMedia('screen and (max-width: 480px)').matches;
    const pageTitle = css(unfixed || smDevice ? styles.pageTitle : styles.fixedPageTitle);
    const heading = css(unfixed || smDevice ? styles.heading : styles.fixedHeading);
    /* jsx */
    return (
      <div className={pageTitle}>
        <h1 className={heading}>Portfolio</h1>
        <nav>
          <ul className={css(styles.list)}>
            {navLinks.map(navLink => (
              <li className={css(styles.listItem)}>
                <a
                  className={css(unfixed || smDevice ? styles.link : styles.fixedLink)}
                  href={navLink.href}
                  title={navLink.title}>
                  {navLink.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

const navLinks = [
  { href: '#about', title: 'About' },
  { href: '#skills', title: 'Skills' },
  { href: '#showcase', title: 'Showcase' },
  { href: '#tools', title: 'Tools' },
];

const styles = StyleSheet.create({
  pageTitle: {
    color: 'white',
    backgroundColor: '#5c005c',
    padding: '0 5%',
    height: '236px',
    '@media (max-width: 480px)': {
      height: '200px',
    },
  },
  heading: {
    fontSize: '76px',
    fontFamily: 'Source Sans Pro ExtraLight',
    color: '#f8f8f8',
    transition: 'font-size 167ms cubic-bezier(.1,.9,.2,1)',
    paddingTop: '50px',
    '@media (max-width: 480px)': {
      fontSize: '48px',
      paddingTop: '40px',
    },
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
    '@media (max-width: 480px)': {
      fontSize: '15px',
    },
  },
  /* fixed */
  fixedPageTitle: {
    color: 'white',
    backgroundColor: '#5c005c',
    padding: '0 5%',
    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
    position: 'fixed',
    zIndex: 500,
    height: '150px',
    width: '100%',
  },
  fixedHeading: {
    fontFamily: 'Source Sans Pro ExtraLight',
    color: '#f8f8f8',
    transition: 'font-size 167ms cubic-bezier(.1,.9,.2,1)',
    fontSize: '24px',
    paddingTop: '50px',
  },
  fixedLink: {
    display: 'block',
    textAlign: 'center',
    paddingLeft: 0,
    paddingTop: '14px',
    paddingBottom: '14px',
    paddingRight: '2vw',
    textDecoration: 'none',
    fontFamily: 'Source Sans Pro ExtraLight',
    fontSize: '15px',
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
