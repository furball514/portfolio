import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import AboutSection from './Sections/About';
import SkillsSection from './Sections/Skills';
import ShowcaseSection from './Sections/Showcase';
import ToolsSection from './Sections/Tools';

const Content = () => (
  <div className={css(styles.content)}>
    <AboutSection />
    <div className={css(styles.dividerContainer)}>
      <div className={css(styles.divider)} />
    </div>
    <SkillsSection />
    <ShowcaseSection />
    <ToolsSection />
  </div>
);

export default Content;

const styles = StyleSheet.create({
  content: {
    width: '100%',
    margin: '0 auto',
    transform: 'translate(0,-1px)',
    minWidth: '319px', //
    '@media (max-width: 319px)': {
      width: '319px',
    },
    '@media (max-width: 480px)': {
      paddingTop: '25px',
    },
  },
  dividerContainer: {
    height: '50px',
    overflow: 'hidden',
    backgroundColor: '#333',
  },
  divider: {
    width: 0,
    height: 0,
    borderTop: '100px solid #5c005c',
    borderLeft: '100vw solid transparent',
  },
});

//rotate?
