import React, { Component } from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { StyleSheet, css } from 'aphrodite';
import { goToTop } from 'react-scrollable-anchor';
import 'font-awesome/css/font-awesome.css';

export default class FixedActionButton extends Component {
  state = {
    hidden: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    let hidden;
    if (window.scrollY < 158) hidden = true;
    else if (window.scrollY > 1400) hidden = true;
    else hidden = false;
    this.setState({ hidden });
  }

  render() {
    return this.state.hidden ? null : (
      <DefaultButton primary className={css(styles.fab)} onClick={() => goToTop()}>
        <span className="fa fa-angle-double-up fa-2x" />
      </DefaultButton>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    position: 'fixed',
    height: '30px',
    borderRadius: '20px',
    right: '2%',
    bottom: '20px',
    zIndex: 600,
    boxShadow: '0 10px 30px -10px rgba(0,0,0,2)',
    transform: 'scale(0.5,0.7)',
    ':hover': {
      zIndex: 100,
      boxShadow: 'none',
    },
    '@media (min-width: 480px)': {
      display: 'none',
    },
  },
});

//scroll
//footer
