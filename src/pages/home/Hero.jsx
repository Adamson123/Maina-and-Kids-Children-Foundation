import Button from "../../components/Button";
// import images

const Hero = () => {
    return (
        <div className="bg-[url('/assets/hero_bg.webp')] h-screen bg-no-repeat bg-cover flex pl-[75px]  sm:p-3 sm:items-center sm:justify-center">
            <div className="flex justify-center items-start flex-col py-[100px] sm:items-center">
                {/* title */}
                <h1 className="text-white uppercase sm:text-[33px] md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-left font-moul flex flex-col font-normal max-w-[1070px] 2xl:!leading-[127px] xl:!leading-[100px] lg:!leading-[70px] md:!leading-[60px] sm:text-center sm:px-3">
                    help a child and be our hero
                </h1>
                {/* subtitle */}
                <p className="sm:text-[13px] text-[22px] font-semibold text-center text-white  tracking-wide">
                    No Act of Kindess, no matter how small is ever wasted.
                </p>
                {/* button */}
                <div className="flex sm:flex-col sm:items-center sm:gap-[15px] mt-8 gap-[30px] sm:w-[90%] w-[542px]">
                    <Button
                        content={"donate"}
                        btnStyle={
                            "bg-[#326699] text-white before:bg-[#0f172a] border-none"
                        }
                    />
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
