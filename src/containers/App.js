import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { GalleryImage } from '../components/GalleryImage';
import { GalleryModal } from '../components/GalleryModal';
import { toggleModal } from '../js/actions/index';

const mapStateToProps = state => {
  return {
    showModal: state.showModal,
    galleryUrl: state.galleryUrl,
    modalUrl: state.modalUrl,
    activeIndex: state.activeIndex
  };
}
const mapDispatchToProps = dispatch => {
  return {
    toggleModal: (element, index) => { dispatch(toggleModal(element, index)) }
  };
}

class ConnectedApp extends Component {
  toggleModal = (element, index) => {
    this.props.toggleModal(element, index);
  }


  render() {
    const {
      galleryUrl,
      showModal,
      modalUrl } = this.props;

    return (
      <>
        {
          galleryUrl.map((element, index) =>
            <GalleryImage
              src={element}
              key={"img_" + index}
              handleClick={() => this.toggleModal(element, index)}
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
              />
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
  modalUrl: PropTypes.string,
  activeIndex: PropTypes.number
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);
export default App;