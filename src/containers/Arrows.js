import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LeftArrow } from '../components/arrows/LeftArrow';
import { RightArrow } from '../components/arrows/RightArrow';
import { nextSlide, prevSlide } from '../js/actions/index';

const mapDispatchToProps = dispatch => {
  return {
    nextSlide: next => { dispatch(nextSlide(next)) },
    prevSlide: prev => { dispatch(prevSlide(prev)) }
  }
}

class ConnectedArrows extends Component {
  nextSlide = () => {
    let { activeIndex, galleryUrl } = this.props;
    let current = activeIndex;
    let next = ++current % galleryUrl.length;
    this.props.nextSlide(next);
  }

  prevSlide = () => {
    //TODO: maybe add the url ONCE at the end in App instead of reconfigure it every
    //dispatch
    let { activeIndex, galleryUrl } = this.props;
    let prev = activeIndex - 1;
    if (prev < 0) {
      prev = galleryUrl.length - 1;
    }
    this.props.prevSlide(prev);
  }

  render() {
    return (
      <>
        <LeftArrow handleClick={() => this.prevSlide()} />
        <RightArrow handleClick={() => this.nextSlide()} />
      </>
    );
  }
}

const Arrows = connect(null, mapDispatchToProps)(ConnectedArrows);

export { Arrows };