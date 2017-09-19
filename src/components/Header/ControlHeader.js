import React from 'react';
import { css } from 'aphrodite';
import { Control } from './Header';
import styles from './headerstyles';

const ControlHeader = () => (
  <header className={css(styles.header, styles.mobileHeader)}>
    <div className={css(styles.banner, styles.mobileBanner)}>
      <Control />
    </div>
  </header>
);

export default ControlHeader;
