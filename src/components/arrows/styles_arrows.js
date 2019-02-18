import styled, { css } from 'styled-components';

export const BtnWrapper = styled.div`
  position: fixed;
  top: 50%;
  cursor: pointer;
  transition: linear .2s;
  color: white;
  border: solid;

  ${props => props.left && css`
    left: 70px;
  `}

  ${props => props.right && css`
    right: 70px;
  `}
  
  &:hover {
    color: salmon;
  }
`;