import styled, { css } from 'styled-components';

export const BtnWrapper = styled.div`
    position: absolute;
    top: 50%;
    cursor: pointer;
    transition: linear .2s;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 7px;
  
  ${props => props.left && css`
    left: 15px;
  `}

  ${props => props.right && css`
    right: 15px;
  `}

  &:hover {
    color: salmon;
  }
`;