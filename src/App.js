import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import Header from './components/Header';

export default class App extends Component {
  render() {
    return (
      <Fabric className={css(styles.container)}>
        <Header />
      </Fabric>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

//no fonts // no icons

//spinner
