import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Landing from './components/pages/landing';

const App = () => {

  return (
    <Router>
      <div className="App">
        <div id="landing">
          <Landing />
        </div>
      </div>
    </Router>
  );
}
export default App;
