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
