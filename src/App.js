import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import BreweryState from './context/brewery/BreweryState';
import AlertState from './context/alert/AlertState';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Alert from './components/Alert';

const App = () => {
  return (
    <BreweryState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar title='Lager Than Life' />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </BreweryState>
  );
};

export default App;
