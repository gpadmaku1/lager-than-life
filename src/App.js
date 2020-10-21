import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar title='Lager Than Life' />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
