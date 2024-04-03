import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { StyleSheet, css } from 'aphrodite';

const AboutSection = () => (
  <section className={css(styles.section)}>
    <ScrollableAnchor id="about">
      <h2 className={css(styles.heading)}>About</h2>
    </ScrollableAnchor>
    <div>
      This is my coding portfolio!<br />I can be found online by the usernames <i>furball514</i>.
      
    </div>
    <br />
   
  </section>
);

export default AboutSection;

const styles = StyleSheet.create({
  section: {
    color: '#f4f4f4',
    backgroundColor: '#5c005c',
    padding: '90px 5%',
    width: '100%',
    margin: 0,
    fontSize: '17px',
    fontWeight: '300',
    minWidth: '319px', //
    '@media (max-width: 319px)': {
      width: '319px',
    },
    '@media (max-width: 480px)': {
      padding: '40px 5%',
      fontSize: '15px',
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
//overflow
