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
      <div className={css(styles.skill)}>
        <img className={css(styles.jsLogo)} src={jsLogo} />
        <p className={css(styles.skillName)}>JavaScript</p>
        <p className={css(styles.skillName)}>(ES5,ES6,ES7)</p>
      </div>
      <div className={css(styles.skill)}>
        <img className={css(styles.reactLogo)} src={reactLogo} />
        <p className={css(styles.skillName)}>React</p>
      </div>
      <div className={css(styles.skill)}>
        <p className={css(styles.koaLogo)}>koa</p>
        <p className={css(styles.skillName)} style={{ margin: 0, padding: 0 }}>
          Koa
        </p>
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
    '@media (max-width: 480px)': {
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
  },
  jsLogo: {
    height: '11vw',
    width: '11vw',
    display: 'block',
    margin: '10px 0',
    '@media (min-width: 720px)': {
      height: '7vw',
      width: '7vw',
    },
    '@media (min-width: 1300px)': {
      height: '3.5vw',
      width: '3.5vw',
    },
  },
  reactLogo: {
    height: '13.5vw',
    width: '13.5vw',
    display: 'block',
    marginTop: '6px',
    marginBottom: '4px',
    marginLeft: 0,
    marginRight: 0,
    '@media (min-width: 720px)': {
      height: '8.5vw',
      width: '8.5vw',
    },
    '@media (min-width: 1300px)': {
      height: '4vw',
      width: '4vw',
    },
  },
  koaLogo: {
    fontSize: '11vw',
    fontFamily: 'Italiana',
    display: 'block',
    marginTop: '9px',
    marginBottom: '3px',
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
    textAlign: 'center',
    '@media (min-width: 720px)': {
      fontSize: '7vw',
    },
    '@media (min-width: 1300px)': {
      fontSize: '3.5vw',
    },
  },
  skill: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  skillName: {
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: '1px',
    padding: 0,
    display: 'block',
  },
});
