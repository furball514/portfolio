import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    left: 0,
    padding: '0 8px',
    position: 'fixed',
    right: 0,
    top: 0,
    width: '100%',
    zIndex: 600,
    backgroundColor: '#000',
    height: '50px',
  },
  banner: {
    height: '50px',
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      //mobile
      height: '30px',
    },
  },
  headerText: {
    color: '#fff',
    fontSize: '19px',
    paddingBottom: '10px',
  },
  bar: {
    color: '#666',
    fontSize: '28px',
    paddingBottom: '2px',
  },
  a: { textDecoration: 'none', color: '#fff' },
  searchBox: {
    backgroundColor: '#fff',
    fontFamily: 'Source Sans Pro',
    marginTop: '6px',
  },
  control: {
    marginRight: '40px',
    display: 'flex',
    flexDirection: 'row',
    '@media (min-width: 768px)': {
      //desktop
      position: 'absolute',
      right: 0,
      transform: 'translate(0px,-23px)',
    },
    '@media (max-width: 768px)': {
      //mobile
      marginRight: '30px',
      marginLeft: 'auto',
    },
  },
  mobileHeader: {
    top: '50px',
    height: '30px',
    backgroundColor: '#212121',
    '@media (min-width: 768px)': {
      //desktop
      display: 'none',
    },
  },
  white: {
    color: '#fff',
  },
  toggle: {
    marginTop: '9px',
  },
  mobileControl: {
    '@media (max-width: 768px)': {
      //mobile
      display: 'none',
    },
  },
});

export default styles;
