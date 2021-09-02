import React from 'react';
import InsuranceItems from '../ListInsurance/ListInsurance';
import Slider from '../Slider/Slider';
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