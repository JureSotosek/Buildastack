import React from 'react';

import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  padding: 5px;
  margin: 5px;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(37, 44, 97, 0.3);
  border-width: 0;
  outline: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
  font-family: Source Sans Pro;

  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;

  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

  &:active {
    border-width: 0;
  }

  &:hover {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }

  background-color: ${props => props.color};
`;

export default Button;
