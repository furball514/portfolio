import React from 'react';
import { css } from 'aphrodite';
import styles from './footerstyles';
import 'font-awesome/css/font-awesome.css';
import cert from '../../Assets/img/fcccert.jpg';

const LeftFooter = () => (
  <div className={css(styles.leftFooter)}>
    <ul className={css(styles.linkList)}>
      <li className={css(styles.heading, styles.listItem)}>Links</li>
      <li className={css(styles.listItem)}>
        <a href="https://github.com/furball514" className={css(styles.link)}>
          <span className="fa fa-github" aria-hidden />&nbsp; GitHub
        </a>
      </li>
      <li className={css(styles.listItem)}>
        <a
          href="http://scr.im/3nji"
          target="_blank"
          rel="noopener noreferrer"
          className={css(styles.link)}>
          <span className="fa fa-envelope" aria-hidden />&nbsp; Mail
        </a>
      </li>
      <li className={css(styles.listItem)}>
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
    <div className={css(styles.footerText)} aria-hidden>
      {/*This Site Is Compatible With Safari Reader View*/}
      What should I put here?
    </div>
  </footer>
);

export default Footer;

//link outside X
