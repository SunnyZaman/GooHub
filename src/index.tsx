import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './router';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from './globalStyle';
import { HashRouter } from 'react-router-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: async operation => {
    operation.setContext({
      headers: {
        authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      }
    });
  }
});
const MainWrapper = styled.div`
  flex-grow: 1;
  position: relative;
  min-height: 100vh;
  // width: 100%;
  // position: absolute
`;
const ViewsContainer = styled.div`
  // width: 100%;
  // height: calc(100% - 47px);
  // position: absolute;
  // top: 47px;
  // z-index: 0;
  padding-bottom: "64px"

`;

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
    <HashRouter>
      <GlobalStyle />
      <MainWrapper>
          <ViewsContainer>
          <Header />
            <Routes />
          </ViewsContainer>
        <Footer />
      </MainWrapper>
    </HashRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
