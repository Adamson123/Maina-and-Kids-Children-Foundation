import Button from "../../components/Button";
import DonateButton from "../../components/DonateButton";
// import images

const Hero = () => {
    return (
        <div className="bg-[url('/assets/hero_bg.webp')] h-screen bg-no-repeat bg-cover flex pl-[75px]  sm:p-3 sm:items-center sm:justify-center">
            <div className="flex justify-center items-start flex-col py-[100px] sm:items-center">
                {/* title */}
                <h1 className="text-white uppercase sm:text-[28px] md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl text-left font-moul flex flex-col font-normal 2xl:!leading-[115px] xl:!leading-[115px] lg:!leading-[75px] md:!leading-[70px] sm:text-center sm:px-3">
                    help a child <br className="sm:hidden" /> and be our hero
                </h1>
                {/* subtitle */}
                <p className="sm:text-[13px] text-[22px] font-semibold text-center text-white  tracking-wide">
                    No Act of Kindess, no matter how small is ever wasted.
                </p>
                {/* button */}
                <div className="flex sm:flex-col sm:items-center sm:gap-[15px] mt-8 gap-[30px] sm:w-[90%] w-[542px]">
                    <DonateButton />
                    <Button
                        content={"get involved"}
                        btnStyle={"before:bg-[#0f172a] text-white border-2"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
