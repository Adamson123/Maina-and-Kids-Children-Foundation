import React, { useState } from "react";
// import images
import image1 from "/assets/portfolio-img-1.png";
import image2 from "/assets/portfolio-img-2.png";
import image3 from "/assets/portfolio-img-3.png";
import image4 from "/assets/portfolio-img-4.png";
import { BiArrowBack } from "react-icons/bi";

const SwiperComponent = () => {
    const images = [image1, image2, image3];

    // State to keep track of the current image index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next image
    const nextImage = () => {
        // setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        if (currentIndex >= images.length - 1) return;
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    // Function to go to the previous image
    const prevImage = () => {
        // setCurrentIndex(
        //     (prevIndex) => (prevIndex - 1 + images.length) % images.length
        // );
        if (currentIndex <= 0) return;
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    return (
        <div className="relative ">
            <div className="relative w-full rounded-lg shadow-lg flex flex-col items-center">
                <img
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    className="w-full h-auto transition-all duration-500 ease-in-out"
                />
            </div>

            {/* Optional: Image index display */}
            {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                {currentIndex + 1} / {images.length}
            </div> */}
            <div className="flex items-center w-full gap-[100px] justify-center mt-5">
                <button
                    onClick={prevImage}
                    className={`flex items-center gap-3 ${
                        currentIndex > 0 && "text-primary-blue"
                    }`}
                >
                    <BiArrowBack /> Prev
                </button>
                <button
                    onClick={nextImage}
                    className={`flex items-center gap-3 ${
                        currentIndex < images.length - 1 && "text-primary-blue"
                    }`}
                >
                    Next <BiArrowBack className="rotate-180" />
                </button>
            </div>
        </div>
    );
};

export default SwiperComponent;
