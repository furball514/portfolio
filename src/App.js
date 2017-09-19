import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import Header from './components/Header/Header';
import ControlHeader from './components/Header/ControlHeader';

const App = () => (
  <Fabric className={css(styles.container)}>
    <Header />
    <ControlHeader />
  </Fabric>
);

export default App;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    fontFamily: 'Source Sans Pro',
  },
});

//no fonts // no icons

//spinner
//accessibility
