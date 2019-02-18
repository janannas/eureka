import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { BtnWrapper } from './styles_arrows';

export function RightArrow(props) {
  return (
    <BtnWrapper right onClick={props.handleClick}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
    </BtnWrapper>
  );
} 