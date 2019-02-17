import React from 'react';

export function GalleryImage(props) {
  const style = {
    height: '230px',
    width: '300px',
    overflow: 'hidden',
    objectFit: 'cover',
    maxWidth: '100%',
    minHeight: '100%'
  }
  const { src } = props;
  return (
    <div>
      <img style={style} src={src} alt="" />
    </div>
  );
}