import React, { Component } from 'react';
import { css } from 'aphrodite';
import styles from './navbarstyles';

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

//desktop hover
//navbar
