import React from 'react';
import InsuranceItems from '../../Components/ListInsurance/ListInsurance';
import Slider from '../../Components/Slider/Slider';
import Login from '../../Components/Login/login';
const Home = ({ handleLogged }) => {
  return (
    <div >
      <Slider />
      <InsuranceItems />
      {/* <Login /> */}
      {/* <AdvertiseList /> */}
      {/* <Switch>
                <Route exact path='/' component={NewHome}/>
            </Switch> */}
    </div>
  );
};

export default Home;