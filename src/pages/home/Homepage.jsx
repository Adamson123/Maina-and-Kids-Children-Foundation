import React from "react";
import Hero from "./Hero";
import Objectives from "./Objectives";
import RecentCauses from "./RecentCauses";
import Portfolio from "./Portfolio";
import Team from "./Team";
import Statistics from "./Statistics";
import AboutUs from "./AboutUs";
import Stories from "./story/Stories";
import FadeInElement from "../../components/FadeInElement";
// import DedicatedService from './home/DedicatedService'

const Homepage = () => {
    return (
        <main>
            <div className="flex flex-col gap-32 sm:gap-24 md:gap-28">
                <Hero />
                <FadeInElement>
                    <AboutUs />
                </FadeInElement>
                <Objectives />
                {/* <DedicatedService/> */}

                <RecentCauses />
                <Stories />
                <Portfolio />
                <Team />
            </div>
            <Statistics />
        </main>
    );
};

export default Homepage;
