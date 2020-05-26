/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Routes from './routes';
import { Copyrights } from './components';
import home from './ressources/images/home.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  if (window.location.pathname !== '/') {
    return (
      <>
        <a href="./" className="backHome"><img src={home} alt="contact" /></a>
        <Scrollbars autoHide className="App pages">
          <Routes />
        </Scrollbars>
        <Copyrights className="copyrights" />
      </>
    );
  }
  return (
    <>
      <div className="App">
        <Routes />
      </div>
      <Copyrights className="copyrights" />
    </>
  );
}

export default App;
