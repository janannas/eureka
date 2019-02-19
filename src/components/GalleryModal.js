import React from 'react';
import styled from 'styled-components';


export function GalleryModal(props) {
  // The gray background
  const Backdrop = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    background-color: rgba(0,0,0,0.3);
    padding: 50px;
  `;

  // The modal "window"
  const Modal = styled.div`
    background-color: darkgrey;
    border-radius: 5px;
    max-width: 600px;
    margin: 0 auto;
    padding: 30px;
    border: solid 1px black;
  `;

  const { src, handleClick, preventClick } = props;

  return (
    <Backdrop onClick={handleClick}>
      {/* Preventing the modal-window from also being affected when the backdrop is clicked*/}
      <Modal onClick={preventClick}>
        <img src={src} alt="" style={{ width: '100%' }} />
        {props.children}
      </Modal>
    </Backdrop>
  );
}