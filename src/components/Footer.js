import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import 'font-awesome/css/font-awesome.css';
import cert from '../fcccert.jpg';

const LeftFooter = () => (
  <div className={css(styles.leftFooter)}>
    <ul className={css(styles.linkList)}>
      <li className={css(styles.heading)}>Links</li>
      <li>
        <a href="https://github.com/furball514" className={css(styles.link)}>
          <span className="fa fa-github" aria-hidden />&nbsp; GitHub
        </a>
      </li>
      <li>
        <a href="http://scr.im/3nji" target="_blank" className={css(styles.link)}>
          <span className="fa fa-envelope" aria-hidden />&nbsp; Mail
        </a>
      </li>
      <li>
        <a
          href={`${process.env.PUBLIC_URL}/old portfolio/oldportfolio.html`}
          className={css(styles.link)}>
          <span className="fa fa-code" aria-hidden />&nbsp; Old Portfolio
        </a>
      </li>
    </ul>
  </div>
);

const RightFooter = () => (
  <div className={css(styles.rightFooter)}>
    <div className={css(styles.imageContainer)}>
      <a href="https://www.freecodecamp.org/furball514/front-end-certification">
        <img src={cert} alt="frontend certificate" className={css(styles.image)} />
      </a>
      <a href="https://github.com/furball514/portfolio" className={css(styles.source)}>
        <span className="fa fa-code-fork" aria-hidden />&nbsp; View This Site On GitHub
      </a>
    </div>
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
    '@media (max-width: 480px)': {},
  },
  leftFooter: {
    width: '50%',
    float: 'left',
  },
  rightFooter: {
    width: '50%',
    float: 'right',
  },
  footerText: {
    textAlign: 'center',
    color: '#666',
    fontWeight: 'bold',
  },
  linkList: {
    listStyleType: 'none',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
  image: {
    width: '45%',
    height: '20vw',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  source: {
    textAlign: 'right',
    textDecoration: 'none',
    color: '#fff',
  },
  heading: {
    fontWeight: 'bold',
  },
});
