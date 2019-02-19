import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { GalleryImage } from '../components/GalleryImage';
import { GalleryModal } from '../components/GalleryModal';
import { toggleModal } from '../js/actions/index';
import { Arrows } from './Arrows';


const mapStateToProps = state => {
  return {
    showModal: state.showModal,
    galleryUrl: state.galleryUrl,
    activeIndex: state.activeIndex
  };
}
const mapDispatchToProps = dispatch => {
  return {
    toggleModal: (index) => { dispatch(toggleModal(index)) }
  };
}

class ConnectedApp extends Component {
  toggleModal = index => {
    this.props.toggleModal(index);
  }

  render() {
    const {
      galleryUrl,
      showModal,
      activeIndex } = this.props;

    const modalUrl = galleryUrl[activeIndex];

    return (
      <>
        {
          galleryUrl.map((element, index) =>
            <GalleryImage
              src={element}
              key={"img_" + index}
              handleClick={() => this.toggleModal(index)}
            />
          )
        }

        {
          showModal
            ?
            (
              <GalleryModal
                src={modalUrl}
                handleClick={() => this.toggleModal()}
                preventClick={(event) => event.stopPropagation()}
              >
                <Arrows
                  galleryUrl={galleryUrl}
                  activeIndex={activeIndex}
                />
              </GalleryModal>
            ) :
            (
              null
            )
        }

      </>
    );
  }
}

ConnectedApp.propTypes = {
  showModal: PropTypes.bool,
  galleryUrl: PropTypes.array,
  toggleModal: PropTypes.func,
  activeIndex: PropTypes.number
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);
export default App;