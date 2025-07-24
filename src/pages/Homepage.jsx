import React from "react";
import Hero from "./home/Hero";
import Objectives from "./home/Objectives";
import RecentCauses from "./home/RecentCauses";
import Portfolio from "./home/Portfolio";
import Team from "./home/Team";
import Statistics from "./home/Statistics";
import AboutUs from "./home/AboutUs";
import Stories from "./home/Stories";
// import DedicatedService from './home/DedicatedService'

const Homepage = () => {
    return (
        <div>
            <Hero />
            <AboutUs />
            <Objectives />
            {/* <DedicatedService/> */}
            <RecentCauses />
            <Stories />
            <Portfolio />
            <Team />
            <Statistics />
        </div>
    );
};

export default Homepage;
