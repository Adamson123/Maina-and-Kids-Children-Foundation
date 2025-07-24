import image1 from "/assets/AboutUs.png";

const AboutUsText = () => {
    return (
        <div className="space-y-3 md:text-center sm:text-center md:px-10">
            <p className="text-primary-blue font-semibold text-[20px]">
                About Us
            </p>
            <h3 className=" sm:leading-[40px] leading-[60px] sm:text-[30px] text-[56px] font-extrabold text-[#0F172A]">
                Maina And Kids Children Foundation
            </h3>
            <div className="sm:leading-[30px] md:leading-[30px] 2xl:leading-[40px] xl:leading-[40px] lg:leading-[40px] space-y-8 sm:space-y-5 2xl:text-[20px] xl:text-[20px] lg:text-[20px]">
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
            <div className="grid grid-cols-[42%_58%] gap-x-12 sm:px-[20px] sm:py-[25px] md:p-[35px] lg:p-[60px] xl:p-[100px] 2xl:py-[100px] 2xl:px-[200px] items-center md:hidden sm:hidden">
                <div className="full py-6 md:py-0 h-[calc(100%-20px)]">
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

            <div className="grid grid-cols-1 gap-x-12 sm:px-[20px] sm:pt-[70px] sm:pb-[25px] md:p-[35px] lg:p-[60px] xl:p-[100px] 2xl:py-[100px] 2xl:px-[200px] items-center lg:hidden xl:hidden 2xl:hidden">
                {/* Text */}
                <AboutUsText />

                <div className="full py-6 md:px-20">
                    <img
                        className="object-cover w-full h-full  rounded-md"
                        src={image1}
                        alt=""
                    />
                </div>
            </div>
        </>
    );
};

export default About;
