/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Routes from './routes';
import { Copyrights } from './components';
import home from './ressources/images/home.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  if (window.location.pathname !== '/') {
    return (
      <React.Fragment>
        <div className="App">
          <Routes />
        </div>
        <a href="./" className="backHome"><img src={home} alt="contact"/></a>
        <Copyrights className="copyrights" />
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <div className="App">
        <Routes />
      </div>
      <Copyrights className="copyrights" />
    </React.Fragment>
  );
}

export default App;
