import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LeftArrow } from '../components/arrows/LeftArrow';
import { RightArrow } from '../components/arrows/RightArrow';
import { nextSlide } from '../js/actions/index';

const mapDispatchToProps = dispatch => {
  return {
    nextSlide: (next, path) => { dispatch(nextSlide(next, path)) },
  }
}

class ConnectedArrows extends Component {
  nextSlide = () => {
    let { activeIndex, galleryUrl } = this.props;
    let current = activeIndex;
    let next = ++current % galleryUrl.length;
    let path = galleryUrl[next];
    console.log(path);
    this.props.nextSlide(next, path);
  }

  render() {
    return (
      <>
        <LeftArrow handleClick={() => this.prevSlide()} />

      </>
    );
  }
}

const Arrows = connect(null, mapDispatchToProps)(ConnectedArrows);

export { Arrows };