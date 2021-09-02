import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import ProductDetail from './Components/Products/ProductDetail';
import AuthVerify from './common/auth-verify';
import { Order } from './Components/Order/Order';
import User from './Components/User/User';
import Login from './Components/Login/Login';
import {Footer} from './Components/Footer/Footer';
import "@material-tailwind/react/tailwind.css";

function App() {
  return (
    <div>
      <div>
        <Header />
        <Switch>
          <Route path='/products/:productName' component={ProductDetail} />
          <Route path='/orders' component={Order} />
          <Route path='/user' component={User} />
          <Route path='/login' component={Login} />
          <Route path='/' component={Home} />
        </Switch>
        <Footer />
      </div>

      <AuthVerify >
      </AuthVerify>
    </div>
  );
}

export default App;