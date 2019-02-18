import React from 'react';
import styled from 'styled-components';

export function GalleryImage(props) {
  const StyledImg = styled.img`
    height: 230px;
    width: 300px;
    overflow: hidden;
    object-fit: cover;
    max-width: 100%;
    min-height: 100%;
  `;

  const { src, handleClick } = props;
  return (
    <div>
      <StyledImg src={src} alt="" onClick={handleClick} />
    </div>
  );
}