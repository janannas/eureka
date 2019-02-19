import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import styled from 'styled-components';

const StyledButton = styled.button`
  text-transform: uppercase;
  position: absolute;
  right: 30px;
  width: 60px;
  cursor: pointer;
  transition: linear .2s;
  background-color: black;
  border: none;
  outline: none;
  transition: linear .2s;

  &:hover:before {
    color: salmon;
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
  const { handleClick } = props;

  return (
    <StyledButton onClick={handleClick}></StyledButton>
  );
} 