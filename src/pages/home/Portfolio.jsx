import React from "react";
import SwiperComponent from "../../components/SwiperComponent";

const Portfolio = () => {
    return (
        <div
            id="portfolio"
            className="flex justify-center items-center flex-col py-[90px] sm:px-[30px] md:px-[50px] lg:px-[60px] xl:px-[70px] 2xl:px-[80px]"
        >
            {/* subtitle */}
            <p className="font-bold sm:text-base text-xl uppercase tracking-widest text-[#336699]">
                portfolio
            </p>
            {/* bigger text */}
            <h3 className="sm:text-[32px] text-center md:text-[55px] text-[56px] font-extrabold text-[#0F172A] mb-[30px]">
                {" "}
                Captured Moments
            </h3>
            <SwiperComponent />
        </div>
    );
};

export default Portfolio;
