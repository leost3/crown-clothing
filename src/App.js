import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-out/sign-in-and-sign-up.component';

const App = () => (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/shop' exact component={ShopPage} />
        <Route path='/signin' exact component={SignInAndSignUp} />
      </Switch>
    </div>
)

export default App;
