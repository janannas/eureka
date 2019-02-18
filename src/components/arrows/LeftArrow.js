import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { BtnWrapper } from './styles_arrows';

export function LeftArrow(props) {
  return (
    <BtnWrapper left onClick={props.handleClick}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </BtnWrapper>
  );
} 