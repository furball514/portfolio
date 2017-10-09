import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip';
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
          className={css(styles.preview)}
        />
        <div className={css(styles.showcase)}>
          <h3 className={css(styles.title)}>Simon Game</h3> One of my earliest attempts at coding,
          my version of the{' '}
          <Link href="https://en.wikipedia.org/wiki/Simon_(game)" className={css(styles.link)}>
            Simon Game
          </Link>{' '}
          is a very simple memory game using HTML5, CSS3, and jQuery.{'   '}
          <Link href="https://github.com/furball514/simon-game" className={css(styles.link)}>
            <span className="fa fa-github" />
          </Link>&nbsp;&nbsp;
          <Link href="https://furball514.github.io/simon-game" className={css(styles.link)}>
            <span className="fa fa-link" />
          </Link>
          <br />
          <br />
          <i>Jan 2017</i>
        </div>
      </div>

      <div className={css(styles.showcaseItem)} style={{ backgroundColor: '#f6fafd' }}>
        <div className={css(styles.showcase)}>
          <h3 className={css(styles.title)}>URL Shortener</h3> A link shortening service in node.js
          using Pug and Material UI for the front-end, Koa for the back-end, and MongoDB as
          database.{'   '}
          <Link
            href="https://github.com/furball514/url_shortener_service"
            className={css(styles.link)}>
            <span className="fa fa-github" />
          </Link>&nbsp;&nbsp;
          <Link href="https://ee.glitch.me" className={css(styles.link)}>
            <span className="fa fa-link" />
          </Link>
          <br />
          <br />
          <i>May 2017</i>
        </div>
        <img src={urlgif} className={css(styles.preview)} />
      </div>

      <div className={css(styles.showcaseItem)} style={{ backgroundColor: '#eaeaea' }}>
        <img src={tutorpug} className={css(styles.preview)} />
        <div className={css(styles.showcase)}>
          <h3 className={css(styles.title)}>TutorPug</h3> A functional (mock) cross-platform
          <TooltipHost
            content="Including features like Social oAuth, Chat, Maps, Ratings, and InstaHelp"
            delay="zero">
            &nbsp;'find-a-tutor'
          </TooltipHost>{' '}
          mobile app. Uses React Native and the Expo SDK for the front-end, Koa for the back-end,
          and MongoDB as database.{'   '}
          <Link href="https://github.com/furball514/TutorPug" className={css(styles.link)}>
            <span className="fa fa-github" />
          </Link>&nbsp;&nbsp;
          <Link href="https://expo.io/@furball514" style={{ color: 'grey', cursor: 'not-allowed' }}>
            <span className="fa fa-link" />
          </Link>
          <br />
          <br />
          <i>Under development</i>
        </div>
      </div>
    </div>
  </section>
);

export default ShowcaseSection;

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#eff6fc',
    padding: '90px 5%',
    fontSize: '15px',
    '@media (max-width: 480px)': {
      padding: '20px 5%',
    },
    '@media (min-width: 1300px)': {
      fontSize: '17px',
    },
  },
  heading: {
    fontSize: '28px',
    fontFamily: 'Source Sans Pro ExtraLight',
    '@media (max-width: 480px)': {
      fontSize: '21px',
    },
    '@media (min-width: 1300px)': {
      fontSize: '32px',
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
  preview: {
    width: '40%',
    float: 'left',
    height: '250px',
  },
  showcase: {
    width: '60%',
    float: 'left',
    height: '250px',
  },
  title: {
    fontSize: '21px',
    color: '#5c005c',
    fontFamily: 'Source Sans Pro ExtraLight',
    fontWeight: 'bold',
    '@media (min-width: 1300px)': {
      fontSize: '24px',
    },
  },
  link: {
    color: '#5c005c',
  },
});

/*
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
