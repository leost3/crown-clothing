import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';


import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    hats
  </div>
)


const App = () => (
    <div>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/shop/hats' exact component={HatsPage} />
      </Switch>
    </div>
)

export default App;
