import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NavBar from './NavBar';
import AboutSection from './Sections/About';
import SkillsSection from './Sections/Skills';
import ShowcaseSection from './Sections/Showcase';
import ToolsSection from './Sections/Tools';

const Content = () => (
  <div className={css(styles.content)}>
    <NavBar />
    <AboutSection />
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
});
