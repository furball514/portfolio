import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { StyleSheet, css } from 'aphrodite';

const AboutSection = () => (
  <section className={css(styles.section)}>
    <ScrollableAnchor id="about">
      <h2 className={css(styles.heading)}>About</h2>
    </ScrollableAnchor>
    <div>
      This is my coding portfolio!<br />I can be found online by the usernames <i>furball514</i>&nbsp;/&nbsp;
      <i>furball</i>&nbsp;&nbsp;or&nbsp;under the name <i>Carr Thicke</i>.
    </div>
    <span>Born: March 2 2000</span>
  </section>
);

export default AboutSection;

const styles = StyleSheet.create({
  section: {
    color: '#f4f4f4',
    backgroundColor: '#5c005c',
    padding: '0 3%',
    width: '100%',
    margin: 0,
  },
  heading: {
    fontFamily: 'Source Sans Pro ExtraLight',
  },
});
