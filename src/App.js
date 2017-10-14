import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { configureAnchors } from 'react-scrollable-anchor';
import Header from './components/Header/Header';
import Content from './components/Content';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import FixedActionButton from './components/FAB';

const App = () => {
  configureAnchors({ offset: -250, scrollDuration: 500 });
  return (
    <Fabric className={css(styles.container)}>
      <Header />
      <NavBar />
      <Content />
      <Footer />
      <FixedActionButton />
    </Fabric>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    fontFamily: 'Source Sans Pro',
    width: '100%',
    overflow: 'hidden',
    minWidth: '319px', //
    '@media (max-width: 319px)': {
      width: '319px',
    },
    margin: '0 auto',
  },
});

//no fonts // no icons

//tooltip?, cert-badgeribbon
//spinner
//accessibility
//~index.css~
// jtt - fab (mobile)
//cursive?

//searchbox - render content or jump to footer
//control - invert - colors/themes/styles/desktop
//responsive
//max-width

//firefoxmob
//smg
//fontweight
//headingspace
//colors
//skillsize
//enja
//overflow
//padding
//370
//divider
//toggleinvertcolor
//nvbaraffix
//fontsiz
