import React from 'react';
import TravelInsuranceItems from '../../Components/RecommendInsurance/TravelInsuranceRecommend';
import Slider from '../../Components/Slider/Slider';
import Login from '../../Components/Login/login2';
const Home = ({ handleLogged }) => {
  return (
    <div >
      <Slider />
      <TravelInsuranceItems />
      {/* <Login /> */}
      {/* <AdvertiseList /> */}
      {/* <Switch>
                <Route exact path='/' component={NewHome}/>
            </Switch> */}
    </div>
  );
};

export default Home;