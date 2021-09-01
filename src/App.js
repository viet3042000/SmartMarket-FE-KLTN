import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import { Product } from './Pages/Products/Products';
import ProductDetail from './Pages/Products/ProductDetail';
import AuthVerify from './common/auth-verify';
import { Order } from './Pages/Order/Order';
import User from './Pages/User/User';
import login from './Components/Login/login';
import {Footer} from './Components/Footer/Footer';
import "@material-tailwind/react/tailwind.css";

function App() {
  return (
    <div>
      <div>
        <Header/>
        <Switch>
          <Route path='/products/:productName' component={ProductDetail} />
          {/* <Route path='/products' component={Product} /> */}
          <Route path='/orders' component={Order} />
          <Route path='/user' component={User} />
          <Route path='/login' component={login} />
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