import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: absolute;
  text-transform: uppercase;
  top: 10px;
  right: 20px;
  cursor: pointer;
  transition: linear .2s;
  background-color: transparent;
  border: none;
  transition: linear .2s;

  &:hover:before {
    color: hotpink;
  }

  &:before {
    display: inline-block;
    content: "\00d7";
    font-size: 55px;
    color: white;
    margin: 0;
  }
`;



export function Close(props) {
  return (
    <StyledButton></StyledButton>
  );
} 