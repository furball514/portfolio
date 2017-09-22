import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  footer: {
    background: '#000',
    color: '#fff',
    fontWeight: '400',
    fontSize: '15px',
    padding: '30px 3%',
    position: 'relative',
    width: '94%',
    minWidth: '319px', //
    '@media (max-width: 319px)': {
      width: '319px',
    },
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
  },
  footerContent: {
    width: '100%',
    minWidth: '319px', //
    '@media (max-width: 319px)': {
      width: '319px',
    },
  },
  leftFooter: {
    width: '50%',
    float: 'left',
    '@media (max-width: 480px)': {
      transform: 'translate(-10%,0)',
    },
  },
  rightFooter: {
    width: '50%',
    float: 'right',
    '@media (max-width: 480px)': {
      transform: 'translate(-10%,0)',
    },
  },
  footerText: {
    textAlign: 'center',
    color: '#666',
    fontWeight: 'bold',
    width: '100%',
    paddingTop: '15px',
    minWidth: '319px', //
    '@media (max-width: 319px)': {
      width: '319px',
    },
  },
  linkList: {
    listStyleType: 'none',
    paddingTop: '12px',
    marginBottom: '9px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
  image: {
    width: '45%',
    height: '20vw',
    transform: 'translate(120%,0)',
    marginBottom: '9px',
    '@media (max-width: 480px)': {
      width: '100%',
      height: '50vw',
      transform: 'translate(3%,0)',
    },
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '12px',
    '@media (max-width: 480px)': {
      paddingLeft: '15px',
      borderLeft: '1px solid #fff',
    },
  },
  source: {
    textAlign: 'right',
    textDecoration: 'none',
    color: '#fff',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: '17px',
  },
  listItem: {
    marginBottom: '27px',
  },
});

export default styles;
