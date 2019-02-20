import React, { Component } from 'react';
import PropTypes from "prop-types";
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
  nextSlide = (index, urls) => {
    let current = index;
    let next = ++current % urls.length;
    this.props.nextSlide(next);
  }

  prevSlide = (index, urls) => {
    let prev = index - 1;
    if (prev < 0) {
      prev = urls.length - 1;
    }
    this.props.prevSlide(prev);
  }

  render() {
    let { activeIndex, galleryUrl } = this.props;
    return (
      <>
        <LeftArrow handleClick={() => this.prevSlide(activeIndex, galleryUrl)} />
        <RightArrow handleClick={() => this.nextSlide(activeIndex, galleryUrl)} />
      </>
    );
  }
}

ConnectedArrows.propTypes = {
  galleryUrl: PropTypes.array.isRequired,
  activeIndex: PropTypes.number,
  nextSlide: PropTypes.func.isRequired,
  prevSlide: PropTypes.func.isRequired,
}

const Arrows = connect(null, mapDispatchToProps)(ConnectedArrows);
export { Arrows };