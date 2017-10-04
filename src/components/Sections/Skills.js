import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ScrollableAnchor from 'react-scrollable-anchor';
import jsLogo from '../../Assets/img/JS.png';
import reactLogo from '../../Assets/img/React.png';

const SkillsSection = () => (
  <section className={css(styles.section)}>
    <ScrollableAnchor id="skills">
      <h2 className={css(styles.heading)}>Skills</h2>
    </ScrollableAnchor>
    <div className={css(styles.container)}>
      <div>
        <img className={css(styles.jsLogo)} src={jsLogo} /> <p>JavaScript</p> <p>(ES5,ES6,ES7)</p>
      </div>
      <div>
        <img className={css(styles.reactLogo)} src={reactLogo} /> <p>React</p>
      </div>
      <div>
        <p className={css(styles.koaLogo)}>koa</p>
        <p>Koa</p>
      </div>
    </div>
  </section>
);

export default SkillsSection;

const styles = StyleSheet.create({
  section: {
    color: '#f8f8f8',
    backgroundColor: '#333',
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
  container: {
    display: 'flex',
    width: '80%',
    justifyContent: 'space-between',
  },
  jsLogo: {
    height: '40px',
    width: '40px',
  },
  reactLogo: {
    height: '50px',
    width: '50px',
  },
  koaLogo: {
    fontSize: '30px',
    fontFamily: 'Italiana',
  },
});
