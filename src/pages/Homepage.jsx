import React from "react";
import Hero from "./home/Hero";
import Objectives from "./home/Objectives";
import RecentCauses from "./home/RecentCauses";
import Portfolio from "./home/Portfolio";
import Team from "./home/Team";
import Statistics from "./home/Statistics";
import AboutUs from "./home/AboutUs";
import Stories from "./home/Stories";
import FadeInElement from "../components/FadeInElement";
// import DedicatedService from './home/DedicatedService'

const Homepage = () => {
    return (
        <>
            <div className="flex flex-col gap-32 sm:gap-24 md:gap-28">
                <Hero />
                <FadeInElement>
                    <AboutUs />
                </FadeInElement>
                <Objectives />
                {/* <DedicatedService/> */}
                <FadeInElement>
                    <RecentCauses />
                </FadeInElement>
                <FadeInElement>
                    <Stories />
                </FadeInElement>
                <Portfolio />
                <Team />
            </div>
            <Statistics />
        </>
    );
};

export default Homepage;
