import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GalleryImage } from '../components/GalleryImage';

const mapStateToProps = state => {
  return {
    galleryUrl: state.galleryUrl
  };
}

class ConnectedApp extends Component {
  render() {
    const { galleryUrl } = this.props;
    console.log(galleryUrl);

    return (
      <>
        <GalleryImage src={galleryUrl} />
      </>
    );
  }
}

const App = connect(mapStateToProps)(ConnectedApp);
export default App;