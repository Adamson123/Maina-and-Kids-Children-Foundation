// import React from "react";
// import SwiperComponent from "../../components/SwiperComponent";

// const Portfolio = () => {
//     return (
//         <div
//             id="portfolio"
//             className="flex justify-center items-center flex-col py-[90px] sm:pt-12 sm:px-[30px] md:px-[50px] lg:px-[60px] xl:px-[70px] 2xl:px-[80px]"
//         >
//             {/* subtitle */}
//             <p className="font-bold sm:text-base text-xl uppercase tracking-widest text-[#336699]">
//                 portfolio
//             </p>
//             {/* bigger text */}
//             <h3 className="sm:text-[32px] text-center md:text-[55px] text-[56px] font-extrabold text-[#0F172A] mb-[30px]">
//                 {" "}
//                 Captured Moments
//             </h3>
//             <SwiperComponent />
//         </div>
//     );
// };

// export default Portfolio;

import React, { useEffect, useRef } from "react";
//import SwiperComponent from "../../components/SwiperComponent";
import image1 from "/assets/portfolio-img-1.webp";
import image2 from "/assets/portfolio-img-2.webp";
import image3 from "/assets/portfolio-img-3.webp";

//import image4 from "/assets/portfolio-img-4.webp";

const Portfolio = () => {
    const imageSlideRef = useRef(null);

    useEffect(() => {
        const swiperContainer = imageSlideRef.current;
        if (swiperContainer) {
            let currentIndex = 0;
        }
    }, []);

    return (
        <div
            id="portfolio"
            className="flex justify-center items-center flex-col py-[90px] sm:pt-12 sm:px-[30px] md:px-[50px] lg:px-[60px] xl:px-[70px] 2xl:px-[80px]"
        >
            {/* subtitle */}
            <p className="font-bold sm:text-base text-xl uppercase tracking-widest text-[#336699] sm:text-[16px]">
                portfolio
            </p>
            {/* bigger text */}
            <h3 className="stext-center md:text-[55px] text-[56px] font-extrabold text-[#0F172A] mb-[30px] sm:text-[22px]">
                {" "}
                Captured Moments
            </h3>
            {/* Sliding Images */}
            <div
                ref={imageSlideRef}
                className="swiper-container flex w-full max-w-[550px] gap-0 overflow-hidden h-[300px]"
            >
                {[image1, image2, image3].map((image, index) => (
                    <div id={index} className="h-96 min-w-full" key={index}>
                        <img
                            src={image}
                            alt={`Portfolio ${index + 1}`}
                            className="w-full h-full object-cover rounded-x transition-transform duration-500 ease-in-out"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
