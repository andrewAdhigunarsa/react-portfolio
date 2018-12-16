import React, { Component } from 'react';
import './App.scss';
import AppHeader from './components/header/AppHeader';
import { BrowserRouter as Router } from 'react-router-dom';
import { PagesRouter } from './pages/PagesRouter';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppHeader />
          <PagesRouter />
        </div>
      </Router>
    );
  }
}

export default App;
