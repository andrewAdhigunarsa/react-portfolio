import React, { Component } from 'react';
import './App.scss';
import AppHeader from './components/header/AppHeader';
import { BrowserRouter as Router } from 'react-router-dom';
import { PagesRouter } from './pages/PagesRouter';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore } from 'redux';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppHeader />
            <PagesRouter />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
