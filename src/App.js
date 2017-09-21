import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import Header from './components/Header/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => (
  <Fabric className={css(styles.container)}>
    <Header />
    <Content />
    <Footer />
  </Fabric>
);

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    fontFamily: 'Source Sans Pro',
    width: '100%',
    minWidth: '319px', //
    '@media (max-width: 319px)': {
      width: '319px',
    },
    margin: '0 auto',
  },
});

//no fonts // no icons

//spinner
//accessibility
