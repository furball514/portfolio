import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NavBar from './NavBar/NavBar';
import AboutSection from './Sections/About';
import SkillsSection from './Sections/Skills';
import ShowcaseSection from './Sections/Showcase';
import ToolsSection from './Sections/Tools';

const Content = () => (
  <div className={css(styles.content)}>
    <NavBar />
    <AboutSection />
    <div className={css(styles.shapeTop)} />
    <div className={css(styles.shapeBottom)} />
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
  shapeTop: {
    width: '0',
    height: '0',
    margin: 'auto',
    borderTop: '5vw solid #5c005c',
    borderLeft: '100vw solid transparent',
    borderRight: '300vw solid transparent',
  },
  shapeBottom: {
    width: '0',
    height: '0',
    margin: 'auto',
    borderBottom: '5vw solid #333',
    borderLeft: '300vw solid transparent',
    borderRight: '10vw solid transparent',
  },
});
