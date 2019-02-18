import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import { GalleryImage } from '../components/GalleryImage';
import { GalleryModal } from '../components/GalleryModal';

import { toggleModal } from '../js/actions/index';

const mapStateToProps = state => {
  return {
    showModal: state.showModal,
    galleryUrl: state.galleryUrl
  };
}

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => { dispatch(toggleModal()) }
  };
}

class ConnectedApp extends Component {
  openModal = (el, index) => {
    this.props.toggleModal();
  }

  render() {
    const { galleryUrl, showModal } = this.props;
    console.log(galleryUrl);

    return (
      <>

        {
          galleryUrl.map((el, index) =>
            <GalleryImage
              src={el}
              key={"img_" + index}
              handleClick={() => this.openModal(el, index)}
            />
          )
        }
        {
          showModal
            ?
            (
              <GalleryModal />
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
  toggleModal: PropTypes.func
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);
export default App;