import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    left: 0,
    padding: '0 2.5%',
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 600,
    backgroundColor: '#000',
    height: '50px',
    width: '95%',
    minWidth: '319px', //
    '@media (max-width: 319px)': {
      width: '319px',
    },
  },
  leftBanner: {
    float: 'left',
    display: 'flex',
  },
  rightBanner: {
    float: 'right',
    '@media (max-width: 480px)': {
      float: 'left',
      width: '95%',
      height: '25px',
      backgroundColor: '#212121',
      left: 0,
      padding: '0 2.5%',
      position: 'fixed',
      zIndex: 600,
      right: 0,
      top: '50px',
      minWidth: '319px', //
      '@media (max-width: 319px)': {
        width: '319px',
      },
    },
  },
  headerText: {
    color: '#fff',
    fontSize: '19px',
    margin: 'auto 0',
    marginBottom: '10px',
  },
  bar: {
    color: '#666',
    fontSize: '28px',
  },
  a: { textDecoration: 'none', color: '#fff' },
  searchBox: {
    backgroundColor: '#fff',
    fontFamily: 'Source Sans Pro',
    marginTop: '10px',
    '@media (max-width: 520px)': {
      width: '152px',
    },
    '@media (max-width: 480px)': {
      width: '212px',
    },
    '@media (max-width: 370px)': {
      width: '152px',
    },
  },
  control: {
    display: 'flex',
    margin: 'auto 0',
    paddingTop: '3px',
    '@media (max-width: 480px)': {
      padding: 'none',
    },
  },
  white: {
    color: '#fff',
    paddingTop: '1px',
    '@media (max-width: 480px)': {
      paddingTop: 'none',
      margin: 'auto 0',
      paddingBottom: '12px',
      color: '#f8f8f8',
    },
  },
  toggle: {
    marginTop: '8px',
    '@media (max-width: 480px)': {
      margin: 'auto 0',
      transform: 'translate(0,-8px) scale(0.9,0.9)',
    },
  },
});

export default styles;
