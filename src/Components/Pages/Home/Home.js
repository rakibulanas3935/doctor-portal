import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Services from "../../Shared/Services/Services";
import Appoinmentbanner from "../Appoinment/Appoinmentbanner";
import Headerappoinment from "../Appoinment/Headerappoinment";
import "./home.css";
const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Headerappoinment></Headerappoinment>
      <Services></Services>
      <Appoinmentbanner></Appoinmentbanner>
    </div>
  );
};

export default Home;
