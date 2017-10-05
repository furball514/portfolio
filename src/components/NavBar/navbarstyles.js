import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  pageTitle: {
    color: 'white',
    backgroundColor: '#5c005c',
    width: '100%',
    padding: '0 5%',
    height: '236px',
    margin: '0 auto',
    minWidth: '319px', //
    '@media (max-width: 319px)': {
      width: '319px',
    },
    '@media (max-width: 480px)': {
      height: '200px',
    },
  },
  heading: {
    fontSize: '76px',
    fontFamily: 'Source Sans Pro ExtraLight',
    color: '#f8f8f8',
    transition: 'font-size 167ms cubic-bezier(.1,.9,.2,1)',
    paddingTop: '50px',
    '@media (max-width: 480px)': {
      fontSize: '48px',
      paddingTop: '40px',
    },
  },
  list: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
  listItem: {
    float: 'left',
  },
  link: {
    display: 'block',
    textAlign: 'center',
    padding: '14px 1.5vw',
    textDecoration: 'none',
    fontFamily: 'Source Sans Pro ExtraLight',
    fontSize: '17px',
    color: '#fff',
    fontWeight: 'bold',
    ':hover': {
      fontFamily: 'Source Sans Pro',
    },
    '::after': {
      display: 'block',
      content: 'attr(title)',
      fontFamily: 'Source Sans Pro',
      fontWeight: '100',
      height: '0',
      overflow: 'hidden',
      visibility: 'hidden',
    },
    '@media (max-width: 480px)': {
      fontSize: '15px',
    },
  },
  /* fixed */
  fixedPageTitle: {
    color: 'white',
    backgroundColor: '#5c005c',
    padding: '0 5%',
    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
    position: 'fixed',
    zIndex: 500,
    height: '150px',
    width: '100%',
  },
  fixedHeading: {
    fontFamily: 'Source Sans Pro ExtraLight',
    color: '#f8f8f8',
    transition: 'font-size 167ms cubic-bezier(.1,.9,.2,1)',
    fontSize: '24px',
    paddingTop: '50px',
  },
  fixedLink: {
    display: 'block',
    textAlign: 'center',
    paddingLeft: 0,
    paddingTop: '14px',
    paddingBottom: '14px',
    paddingRight: '2vw',
    textDecoration: 'none',
    fontFamily: 'Source Sans Pro ExtraLight',
    fontSize: '15px',
    color: '#fff',
    fontWeight: 'bold',
    ':hover': {
      fontFamily: 'Source Sans Pro',
    },
    '::after': {
      display: 'block',
      content: 'attr(title)',
      fontFamily: 'Source Sans Pro',
      fontWeight: '100',
      height: '0',
      overflow: 'hidden',
      visibility: 'hidden',
    },
  },
});

export default styles;
