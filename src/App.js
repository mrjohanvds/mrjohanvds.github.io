import React from 'react';
import Routes from './routes';
import { Copyrights } from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
function App() {
  return (
    <React.Fragment >
      <div className="App">
          <Routes />
      </div>
      <Copyrights className="copyrights" />
    </React.Fragment>
  );
}

export default App;
