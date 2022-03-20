import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import ProductDetail from './component/Products/ProductDetail';
import AuthVerify from './common/auth-verify';
import { Order } from './component/Order/Order';
import UserInformation from './component/User/UserInfomation';
import Login from './component/Login/Login';
import Purchase from './component/Purchase/Purchase';
import {Footer} from './component/Footer/Footer';
import "@material-tailwind/react/tailwind.css";
import { useSelector, useDispatch } from 'react-redux';
import ChangePasswordForm from './component/User/ChangePasswordForm';
import FilteredProducts from './component/Products/FilteredProducts';
import Cart from './component/Purchase/Cart';
import RegisterUser from './component/User/RegisterUser';

function App() {
  const state = useSelector(state=>state.auth);

  // const dispatch = useDispatch();
  // if (state.user) {
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       console.log('Hello, World!');
  //       dispatch(logout());
  //     }, 5000);
  //     return () => clearTimeout(timer);
  //   }, []);
  // }
  
  return (
    <div>
      <div>
        <Header/>
        <Switch>
          {/* <Route path="events" element={<Events />} /> */}
          <Route path='/products/:productName' component={ProductDetail} />
          <Route path='/purchase/:productName'>
            {/* {state.user ? <Purchase /> : <Redirect to={`/login?success=purchase&product=${useLocation().pathname.split('/').pop()}`} />} */}
            {state.user ? <Purchase /> : <Redirect to={`/login`} />}
          </Route>
          <Route path='/orders'>
            {/* {state.user ? <Order /> : <Redirect to="/login?success=order" />} */}
            {state.user ? <Order /> : < Redirect to="/login" />}
          </Route>
          <Route path='/user'>
            {state.user ? <UserInformation /> : <Redirect to="/login" />}
          </Route>
          <Route path='/register'>
            {!state.user ? <RegisterUser /> : <Redirect to="/" />}
          </Route>
          <Route path='/change-password'>
            {state.user ? <ChangePasswordForm /> : <Redirect to="/login" />}
          </Route>
          <Route path='/login' component={Login} />
          <Route path='/filtered-products/:keyword' component={FilteredProducts} />
          <Route path='/cart'>
            {state.user ? <Cart /> : < Redirect to="/login" />}
          </Route>
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