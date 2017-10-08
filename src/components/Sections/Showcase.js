import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ScrollableAnchor from 'react-scrollable-anchor';
import urlgif from '../../Assets/img/urlshort.gif';
import tutorpug from '../../Assets/img/app.png';
import 'font-awesome/css/font-awesome.css';

const ShowcaseSection = () => (
  <section className={css(styles.section)}>
    <ScrollableAnchor id="showcase">
      <h2 className={css(styles.heading)}>Showcase</h2>
    </ScrollableAnchor>
    <div className={css(styles.container)}>
      <div className={css(styles.showcaseItem)} style={{ backgroundColor: '#eaeaea' }}>
        <iframe
          scrolling="no"
          title="Simon Memory Game"
          src="//codepen.io/furball/embed/preview/egGPeZ/?height=250&theme-id=0&default-tab=result&embed-version=2"
          frameBorder="no"
          allowTransparency="true"
          allowFullScreen="true"
          style={{ width: '40%', float: 'left', height: '250px' }}
        />
        <div style={{ width: '60%', float: 'right', height: '250px' }}>
          <h3>Simon Game</h3> One of my earliest attempts at coding, my version of the
          <a>Simon Game</a> is a very simple memory game using HTML5, CSS3, and jQuery.
          <a href="https://github.com/furball514/simon-game">
            <span className="fa fa-github" />
          </a>
          <a href="https://furball514.github.io/simon-game">
            <span className="fa fa-link" />
          </a>
          Jan 2017
        </div>
      </div>

      <div className={css(styles.showcaseItem)} style={{ backgroundColor: '#f4f4f4' }}>
        <div style={{ width: '60%', float: 'left', height: '250px' }}>
          <h3>URL Shortener</h3> A link shortening service in node.js using Pug and Material UI for
          the front-end, Koa for the back-end, and MongoDB as database.
          <a href="https://github.com/furball514/url_shortener_service">
            <span className="fa fa-github" />
          </a>
          <a href="https://ee.glitch.me">
            <span className="fa fa-link" />
          </a>
          May 2017
        </div>
        <img src={urlgif} style={{ width: '40%', float: 'right', height: '250px' }} />
      </div>

      <div className={css(styles.showcaseItem)} style={{ backgroundColor: '#eaeaea' }}>
        <img src={tutorpug} style={{ width: '40%', float: 'left', height: '250px' }} />
        <div style={{ width: '60%', float: 'right', height: '250px' }}>
          <h3>TutorPug</h3> A functional (mock) cross-platform 'find-a-tutor' mobile app. Uses React
          Native and the Expo SDK for the front-end, Koa for the back-end, and MongoDB as database.
          <a href="https://github.com/furball514/TutorPug">
            <span className="fa fa-github" />
          </a>
          <a href="https://expo.io/@furball514" style={{ color: 'grey', cursor: 'not-allowed' }}>
            <span className="fa fa-link" />
          </a>
          Under development
        </div>
      </div>
    </div>
  </section>
);

export default ShowcaseSection;

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#eff6fc',
    padding: '1px 5%',
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
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
  },
  showcaseItem: {
    height: '250px',
    width: '100%',
    margin: '0 auto',
    padding: 0,
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
