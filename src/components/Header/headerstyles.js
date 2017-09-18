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
    '@media (min-width: 1300px)': {
      width: '1300px',
      margin: 'auto',
    },
  },
  headerText: {
    color: '#fff',
    fontSize: '19px',
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  bar: {
    color: '#666',
    fontSize: '28px',
    paddingBottom: 2,
  },
  a: { textDecoration: 'none', color: '#fff' },
  searchBox: {
    backgroundColor: '#fff',
    fontFamily: 'Source Sans Pro',
    marginTop: 6,
  },
  control: {
    marginLeft: 'auto',
    marginRight: 30,
  },
});

export default styles;
