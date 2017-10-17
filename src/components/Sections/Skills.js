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
        <img alt="" className={css(styles.jsLogo)} src={jsLogo} />
        <p className={css(styles.skillName)}>JavaScript</p>
        <i className={css(styles.skillName)}>(ES5,ES6,ES7)</i>
      </div>
      <div className={css(styles.skill)}>
        <img alt="" className={css(styles.reactLogo)} src={reactLogo} />
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
    padding: '90px 5%',
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
    '@media (min-width: 1300px)': {
      fontSize: '32px',
    },
  },
  container: {
    display: 'flex',
    width: '90%',
    justifyContent: 'space-between',
    '@media (max-width: 480px)': {
      width: '80%',
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
  },
  jsLogo: {
    height: '16vw',
    width: '16vw',
    display: 'block',
    margin: '10px 0',
    '@media (max-width: 480px)': {
      height: '20vw',
      width: '20vw',
    },
    '@media (min-width: 720px)': {
      height: '11vw',
      width: '11vw',
    },
    '@media (min-width: 1300px)': {
      height: '7vw',
      width: '7vw',
    },
  },
  reactLogo: {
    height: '20vw',
    width: '20vw',
    display: 'block',
    marginTop: '6px',
    marginBottom: '4px',
    marginLeft: 0,
    marginRight: 0,
    '@media (max-width: 480px)': {
      marginTop: '15px',
      marginBottom: '4px',
      height: '24vw',
      width: '24vw',
    },
    '@media (min-width: 720px)': {
      marginTop: 0,
      marginBottom: 0,
      height: '14vw',
      width: '14vw',
    },
    '@media (min-width: 1300px)': {
      height: '8vw',
      width: '8vw',
    },
  },
  koaLogo: {
    fontSize: '16vw',
    fontFamily: 'Italiana',
    display: 'block',
    marginTop: '9px',
    marginBottom: '3px',
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
    textAlign: 'center',
    '@media (max-width: 480px)': {
      marginBottom: 0,
    },
    '@media (min-width: 720px)': {
      fontSize: '11vw',
    },
    '@media (min-width: 1300px)': {
      fontSize: '7vw',
    },
  },
  skill: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  skillName: {
    fontSize: '15px',
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: '1px',
    padding: 0,
    display: 'block',
    '@media (max-width: 480px)': {
      marginBottom: '5px',
    },
    '@media (min-width: 1300px)': {
      fontSize: '17px',
    },
  },
});

//even
