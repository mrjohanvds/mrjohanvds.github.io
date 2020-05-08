import React from 'react';
import Routes from './routes';
import { NavigationBar, Copyrights } from './components'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <div className="App">
          <Routes />
      </div>
      <Copyrights />
    </React.Fragment>
  );
}

export default App;
