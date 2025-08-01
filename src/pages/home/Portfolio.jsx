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
//import SwiperComponent from "../../components/SwiperComponent";
import image1 from "/assets/portfolio-img-1.webp";
import image2 from "/assets/portfolio-img-2.webp";
import image3 from "/assets/portfolio-img-3.webp";

//import image4 from "/assets/portfolio-img-4.webp";

const Portfolio = () => {
    // sm:px-[30px] md:px-[50px] lg:px-[60px] xl:px-[70px] 2xl:px-[80px]
    const images = [image1, image2, image3, image1, image2, image3];
    const ANIMATION_DELAY = 0.5;
    const ANIMATION_DURATION = 40;
    return (
        <div
            id="portfolio"
            className="flex flex-col items-center w-full sm:gap-[30px] gap-[50px]"
        >
            <div className="text-center">
                {/* subtitle */}
                <p className="font-bold sm:text-base text-xl uppercase tracking-widest text-[#336699] sm:text-[16px]">
                    portfolio
                </p>
                {/* bigger text */}
                <h3 className="text-center res-header-size font-extrabold text-[#0F172A]">
                    {" "}
                    Captured Moments
                </h3>
            </div>
            {/* Big screens */}
            <div className="w-full max-w-[1536px] relative h-[320px] image-slide overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_25%,white_75%,transparent)] sm:hidden">
                {images.map((image, index) => (
                    <div
                        key={index}
                        style={{
                            animationDelay: `${
                                (ANIMATION_DURATION / images.length) *
                                (images.length - (index + ANIMATION_DELAY)) *
                                -1
                            }s`,
                            left: `max(${500 * (images.length - 1)}px,100%)`,
                        }}
                        id={index}
                        className="w-[500px] h-[320px] px-[10px] absolute left-full portfolio-image"
                    >
                        <img
                            src={image}
                            alt={`Portfolio ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Big screens */}
            <div
                className="w-full max-w-[1536px] relative h-[260px] image-slide overflow-hidden
            [mask-image:linear-gradient(to_right,transparent,white_7%,white_93%,transparent)] md:hidden lg:hidden xl:hidden 2xl:hidden scrollbar-none"
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        style={{
                            animationDelay: `${
                                (ANIMATION_DURATION / images.length) *
                                (images.length - (index + ANIMATION_DELAY)) *
                                -1
                            }s`,
                            left: `max(${350 * (images.length - 1)}px,100%)`,
                        }}
                        id={index}
                        className="w-[375px] h-[250px] px-[10px] absolute left-full portfolio-image"
                    >
                        <img
                            src={image}
                            alt={`Portfolio ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;

/**
  <div className="flex overflow-hidden w-full image-slide-container [mask-image:linear-gradient(to_right,transparent,white_25%,white_75%,transparent)] relative h-[300px]">
                <div className="image-slide flex absolute">
                    {[image1, image2, image3].map((image, index) => (
                        <div
                            id={index}
                            className="w-[500px] h-[300px] px-[10px]"
                            key={index}
                        >
                            <img
                                src={image}
                                alt={`Portfolio ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>
                <div className="image-slide2 flex absolute">
                    {[image1, image2, image3].map((image, index) => (
                        <div
                            id={index}
                            className="w-[500px] h-[300px] px-[10px]"
                            key={index}
                        >
                            <img
                                src={image}
                                alt={`Portfolio ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
 */
