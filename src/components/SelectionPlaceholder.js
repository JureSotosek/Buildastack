import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  width: 250px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(37, 44, 97, 0.3);
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`;

const StackPlaceholder = () => <Wrapper>Empty 📭</Wrapper>;

export default StackPlaceholder;
