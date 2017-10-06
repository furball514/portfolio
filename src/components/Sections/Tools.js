import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ScrollableAnchor from 'react-scrollable-anchor';

const ToolsSection = () => (
  <section className={css(styles.section)}>
    <ScrollableAnchor id="tools">
      <h2 className={css(styles.heading)}>Some other tools I've dabbled with</h2>
    </ScrollableAnchor>
  </section>
);

export default ToolsSection;

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#eff6fc',
    padding: '1px 5%',
    width: '100%',
    margin: 0,
    minWidth: '319px', //
    '@media (max-width: 319px)': {
      width: '319px',
    },
    '@media (max-width: 480px)': {
      padding: '20px 5%',
    },
  },
  heading: {
    fontSize: '28px',
    fontFamily: 'Source Sans Pro ExtraLight',
    '@media (max-width: 480px)': {
      fontSize: '21px',
    },
  },
});

/* 
HTML5, CSS3, React-Native, Markdown, jQuery, UIKits -hover(Bootstrap,Material,Animate,NativeBase,Fabric,FontAwesome,WeatherIcons) 
,Pug, git, Unix Command Line, Chrome-Devtools, npm, MongoDB, nodejs, Sass, C++, D3, AppleScript, flow-typed, Apache Cordova
QBasic, Visual Basic
*/

//npm?
