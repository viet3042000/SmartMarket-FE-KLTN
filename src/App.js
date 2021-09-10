import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import ProductDetail from './component/Products/ProductDetail';
import AuthVerify from './common/auth-verify';
import { Order } from './component/Order/Order';
import User from './component/User/User';
import UserInformation from './component/UserInfomation/UserInfomation';
import Login from './component/Login/Login';
import Purchase from './component/Purchase/Purchase';
import {Footer} from './component/Footer/Footer';
import "@material-tailwind/react/tailwind.css";

function App() {
  return (
    <div>
      <div>
        <Header/>
        <Switch>
          <Route path='/products/:productName' component={ProductDetail} />
          <Route path='/purchase/:productName' component={Purchase} />
          <Route path='/orders' component={Order} />
          <Route path='/user' component={User} />
          <Route path='/userinfor' component={UserInformation} />
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