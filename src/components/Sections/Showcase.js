import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ScrollableAnchor from 'react-scrollable-anchor';

const ShowcaseSection = () => (
  <section className={css(styles.section)}>
    <ScrollableAnchor id="showcase">
      <h2 className={css(styles.heading)}>Showcase</h2>
    </ScrollableAnchor>
    Simon Game, URL Shortener, TutorPug
  </section>
);

export default ShowcaseSection;

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#eaeaea',
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

/*magenta keywords

* (iframe https://codepen.io/furball/pen/egGPeZ) Simon Game
  One of my earliest attempts at coding. My version of the <a>Simon Game</a> is a very simple memory game, utilising HTML5, CSS3, and jQuery.
  fa-github(https://github.com/furball514/simon-game), fa-link(https://furball514.github.io/simon-game)
  Jan 2017 

* URL Shortener (gif)
  A link shortening service in node.js using Pug and Material UI for the front-end, Koa for the back-end, and MongoDB as database.
  fa-github(https://github.com/furball514/url_shortener_service), fa-link(https://ee.glitch.me)
  May 2017

* (icon img || gif) TutorPug
  A functional (mock) cross-platform 'find-a-tutor' mobile app. Uses React Native and the Expo SDK for the front-end, Koa for the back-end, and MongoDB as database.
  fa-github(https://github.com/furball514/TutorPug), fa-link(expo.io)
  Under development

*/
