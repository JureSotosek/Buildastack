import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ApolloProvider } from 'react-apollo';
import client from './lib/graphql/apolloClient';

import styled from 'styled-components';

import Header from './containers/header';
import IndexPage from './pages/index';
import BuilderPage from './pages/builder';
import StackPage from './pages/stack';
import SavedPage from './pages/saved';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Switch>
          <Route path="/builder/:id?" component={BuilderPage} />
          <Route path="/s/:id" component={StackPage} />
          <Route path="/saved" component={SavedPage} />
          <Route path="/" component={IndexPage} />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
