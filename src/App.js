import React from 'react';
import Routes from './routes';
import { NavigationBar } from './components'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <div className="App">
          <Routes />
      </div>
      <footer>
      </footer>
    </React.Fragment>
  );
}

export default App;
