import image1 from "/assets/AboutUs.webp";

const AboutUsText = () => {
    return (
        <div className="flex gap-y-5 flex-col">
            <div>
                <p className="text-[#336699]  font-semibold text-xl capitalize font-montserrat sm:text-[16px]">
                    About Us
                </p>
                {/* sm:leading-[40px] leading-[70px]  */}
                <h3 className="font-extrabold text-[#0F172A] res-header-size">
                    Maina And Kids Children Foundation
                </h3>
            </div>
            <div className="sm:leading-[30px] md:leading-[30px] 2xl:leading-[40px] xl:leading-[40px] lg:leading-[40px] space-y-8 sm:space-y-5 2xl:text-[20px] xl:text-[20px] lg:text-[20px] sm:text-[16px]">
                <p>
                    Maina & Kids Children Foundation is a Non-governmental,
                    Non-profit Organization, with members dedicated at helping
                    children of the community, by giving them hope of a better
                    tomorrow. Maina & Kids Children Foundation particularly
                    reaches out to Orphans, Sick, physically disabled, and less
                    privileged Children in the society. It was established on
                    the 30th Day of October 2014 by Gambo Maina Bawa.
                </p>
                <p>
                    With the support of its Board of Trustees, friends, family,
                    supporters, donors and well-wishers, Maina & Kids grows
                    bigger by the day, with more-than a hundred members across
                    the country working effortless to achieve its goals and
                    visions, with over 35 successful projects reaching out to
                    thousands of children.
                </p>
            </div>
        </div>
    );
};

const About = () => {
    return (
        <>
            {/* For Big screens (lg,xl,2xl) */}
            <div className="grid grid-cols-[42%_58%] gap-x-12 lg:px-[60px] xl:px-[100px] 2xl:px-[200px] items-center md:hidden sm:hidden">
                <div className="full py-5 h-[calc(100%-20px)]">
                    {/* Todo alt */}
                    <img
                        className="object-cover w-full h-full  rounded-md"
                        src={image1}
                        alt=""
                    />
                </div>
                {/* Text */}
                <AboutUsText />
            </div>
            {/* For small and mid screens (sm,md) */}
            <div className="grid grid-cols-1 gap-x-12 sm:px-[20px] items-center lg:hidden xl:hidden 2xl:hidden md:px-10">
                {/* Text */}
                <AboutUsText />

                <div className="full py-6 md:h-[470px]">
                    <img
                        className="object-cover w-full h-full rounded-md"
                        src={image1}
                        alt=""
                    />
                </div>
            </div>
        </>
    );
};

export default About;
