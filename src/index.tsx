import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './router';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from './globalStyle';
import { HashRouter } from 'react-router-dom';

const MainWrapper = styled.div`
  flex-grow: 1;
  position: relative;
  min-height: 100vh
`;
const AppContainer = styled.div`
  padding-bottom: 0
`;
const ViewsContainer = styled.div`
  width:100%
`;

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <GlobalStyle />
      <MainWrapper>
        <AppContainer>
          <Header />
          <ViewsContainer>
            <Routes />
          </ViewsContainer>
        </AppContainer>
        <Footer />
      </MainWrapper>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
