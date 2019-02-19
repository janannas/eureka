import styled, { css } from 'styled-components';

const desktop = "850px";
export const BtnWrapper = styled.div`
    position: fixed;
    top: 50%;
    cursor: pointer;
    transition: linear .2s;
    color: white;
  
  ${props => props.left && css`
    left: 15px;

    @media (min-width: ${desktop}) {
      left: 70px;
    }
  `}

  ${props => props.right && css`
    right: 15px;

    @media (min-width: ${desktop}) {
      right: 70px;
    } 
  `}

  &:hover {
    color: salmon;
  }
`;