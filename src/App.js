import React, { Component } from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

export default class App extends Component {
  render() {
    return (
      <Fabric style={styles.container}>
        <div>
          <h2>Welcome to React</h2>
        </div>
        <DefaultButton>
          <a href={`${process.env.PUBLIC_URL}/old portfolio/oldportfolio.html`}>click here</a>
        </DefaultButton>
      </Fabric>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'white',
    fontFamily: 'Arial',
  },
};

//no fonts // no icons
