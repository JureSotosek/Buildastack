import React from 'react';

import styled from 'styled-components';

import { Query } from 'react-apollo';
import { savedStacksQuery } from '../../lib/graphql/queries';

import StackCard from '../../components/StackCard';
import Button from '../../components/Button';

import { isErrorForbidden } from '../../utils';

const StyledButton = styled(Button)`
  max-width: 400px;
  height: 50px;

  margin-top: 30px;
  border-radius: 10px;

  text-decoration: none;
  color: black;
  font-size: 22px;
`;

const Stacks = ({ history }) => (
  <Query query={savedStacksQuery} pollInterval={2000}>
    {({ loading, error, data }) => {
      if (loading) {
        return 'Loading';
      } else if (isErrorForbidden(error)) {
        return (
          <StyledButton color={'white'}>{'Login with github!'}</StyledButton>
        );
      } else if (error) {
        return 'Error';
      } else if (data) {
        return data.viewer.stacks.map(stack => (
          <StackCard
            id={stack.id}
            name={stack.name}
            dependencies={stack.dependencies}
            history={history}
          />
        ));
      }
    }}
  </Query>
);

export default Stacks;