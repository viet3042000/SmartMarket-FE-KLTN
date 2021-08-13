import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import { Product } from './Pages/Products/Products';
import AuthVerify from './common/auth-verify';
import { Order } from './Pages/Order/Order';
import {User} from './Pages/User/User';

function App() {
  return (
    <div>
      <div>
        <Header />
        <Switch>
          <Route path='/products/:productName' component={Product} />
          <Route path='/products' component={Product} />
          <Route path='/orders' component={Order} />
          {/*
          <Route path='/user' component={User} />
          */}
          <Route path='/' component={Home} />
        </Switch>
      </div>
      <AuthVerify />
    </div>
  );
}

export default App;