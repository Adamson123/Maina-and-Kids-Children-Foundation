import Group from "/assets/Rectangle27.webp";
import Education from "/assets/Rectangle23.webp";
import Health from "/assets/Rectangle25.webp";
import Skill from "/assets/Rectangle26.webp";
import Confidence from "/assets/Rectangle24.webp";
import Line from "/assets/Line2.webp";
import Button from "../components/Button";
import { girlChildProjects } from "../data/projects";
import DonateButton from "../components/DonateButton";
import useScrollToHash from "../hooks/useScrollToHash";

const GirlChild = () => {
    useScrollToHash();

    return (
        <div className="pt-20">
            {/* First Section */}
            <div className="">
                {/* Header 1 */}
                <div className="flex justify-center items-center flex-col p-[100px] sm:px-0 sm:pb-6  gap-[10px]">
                    <h3 className="text-[#336699] font-semibold text-xl capitalize font-montserrat sm:text-[16px]">
                        GIRL CHILD
                    </h3>
                    <h1 className="res-header-size sm:text-center font-extrabold text-[#0F172A]">
                        Girl child Program
                    </h1>
                </div>

                {/* Image and text */}
                <div className="grid grid-cols-2 sm:grid-cols-1 items-center px-[100px] sm:px-[40px] gap-[67px] md:px-[20px]">
                    <img
                        className="w-full object-cover"
                        src={Group}
                        alt="Group image"
                    />
                    <div className="flex gap-[24px] items-center">
                        <img className="" src={Line} alt="" />
                        <p className="text-[18px] sm:text-[16px]">
                            The Girl Child Program was launched to carry out
                            awareness activities among young girls in rural
                            communities in the Northern part of Nigeria on
                            sanitary hygiene and bring about possible solution
                            to ending period poverty.
                        </p>
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div>
                {/* Header 2 */}
                <div className="flex justify-center items-center flex-col p-[100px] sm:px-0 sm:pb-0 gap-[10px]">
                    <h3 className="text-[#336699] font-semibold text-xl capitalize font-montserrat sm:text-[16px]">
                        PROBLEM
                    </h3>
                    <h1 className="font-extrabold text-[#0F172A] text-center res-header-size">
                        A glimpse into the problem
                    </h1>
                </div>

                {/* Paragraph */}
                <div className="sm:px-[50px] md:px-[20px] px-[100px] items-center mb-10 text-[18px] sm:text-[16px]">
                    <div className="grid grid-cols-2 sm:grid-cols-1 py-10 gap-[91px] sm:gap-8">
                        <p className="bg-[#F9F9F9] rounded-[10px] py-5 px-5">
                            The situation of the girl child in the northern part
                            of Nigeria is a toxic situation of disregard, lack
                            of awareness, lack of proper amenities,
                            discrimination, carelessness and utter
                            irresponsibility. The girl child is seen as the
                            lesser child, whose only purpose is marriage,
                            staying home and giving birth. no education, no
                            health awareness, no skills, no dreams and no voice.
                        </p>
                        <p className=" bg-[#CA8A04] rounded-[10px] py-5 px-5 text-white">
                            In a typical northern home the girl child is allowed
                            to get to 14 before she is shipped into marriage, in
                            cases where she gets lucky and starts school, She's
                            pulled out and sent to her husband. Parents and the
                            community assume she can't be controlled if she gets
                            exposed to any form of civility. Cases like this put
                            the girl child in a choke hold of stagnation, giving
                            little to no way of navigating life and leading her
                            to believe the hands she has been dealt with is
                            fair.
                        </p>
                    </div>
                    <div className="grid justify-center px-[200px] sm:px-0">
                        <p className="  bg-[#9747FF] rounded-[10px] py-5 px-5 text-white">
                            These problems stem from cultural and religious
                            beliefs that are still deep rooted and upheld in the
                            society, even though one might argue that with
                            civilization fast evolving things might get
                            different, but it's not, she keeps getting
                            blindsided, disregarded and under-represented. We
                            must do away with this problem and tackle them in a
                            way that will bring deserved change and development.
                        </p>
                    </div>
                </div>
            </div>

            {/* Third Section */}
            <div className="sm:px-[10px] md:px-[10px] px-[100px]">
                {/* Header 2 */}
                <div className="flex justify-center items-center flex-col p-[100px] sm:px-0 sm:pb-6 gap-[10px]">
                    <h3 className="text-[#336699] font-semibold text-xl capitalize font-montserrat sm:text-[16px]">
                        OUR OBJECTIVES{" "}
                    </h3>
                    <h1 className="res-header-size text-center font-extrabold text-[#0F172A]">
                        How we are tackling the problem
                    </h1>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-1 text-[16px] justify-between mb-0 sm:mb-[10px]">
                    <div className="flex flex-col p-10 gap-5">
                        <img src={Education} alt="" />
                        <p className="">
                            Educational Workshops: Conducting workshops to
                            promote access to quality education, career
                            guidance, and awareness about the importance of
                            education for girls.
                        </p>
                    </div>

                    <div className="flex flex-col p-10 gap-5">
                        <img src={Health} alt="" />
                        <p>
                            Health and Hygiene Programs: Implementing health and
                            hygiene sessions to educate girls about personal
                            well-being, reproductive health, and nutrition.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-1 text-[16px] justify-between mb-20 ">
                    <div className="flex flex-col p-10 gap-5">
                        <img src={Skill} alt="" />
                        <p>
                            {" "}
                            Skill Development Training: Providing vocational
                            training sessions to equip girls with practical
                            skills that will enhance their employability and
                            economic independence.
                        </p>
                    </div>

                    <div className="flex flex-col p-10 gap-5">
                        <img src={Confidence} alt="" />
                        <p>
                            Confidence-Building Activities: Organizing mentoring
                            sessions, leadership workshops, and extracurricular
                            activities to boost self-esteem and confidence among
                            the girls.
                        </p>
                    </div>
                </div>
            </div>

            {/* Fourth Section */}
            <div className="px-[100px] sm:px-[30px] space-y-5 md:px-[40px]">
                {/* Header */}
                <h1 className="font-extrabold text-[#0F172A] res-header-size">
                    Projects
                </h1>
                <div className="flex gap-8 justify-center sm:flex-col md:text-base leading-8 md:leading-7">
                    {/* 1 */}
                    <div className="flex flex-col gap-8">
                        {girlChildProjects.slice(0, 2).map((project, index) => (
                            <div
                                id={project.id}
                                key={index}
                                className={`p-8 rounded-xl bg-[#F9F9F9] flex flex-col gap-5 shadow-lg h-full scroll-mt-36`}
                            >
                                <h3 className="text-2xl sm:text-[20px] font-semibold">
                                    {project.title}
                                </h3>
                                <div className="h-[250px]">
                                    <img
                                        alt={`${project.title} image`}
                                        src={project.image}
                                        className="rounded-lg h-full w-full object-cover"
                                    />
                                </div>
                                <div className="text-[20px] sm:text-[16px]">
                                    {project.content}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* 2 */}
                    <div className="flex flex-col gap-8">
                        {girlChildProjects.slice(2, 4).map((project, index) => (
                            <div
                                id={project.id}
                                key={index}
                                className={`p-8 rounded-xl bg-[#F9F9F9] flex flex-col gap-5 shadow-lg`}
                            >
                                <h3 className="text-2xl sm:text-[20px] font-semibold">
                                    {project.title}
                                </h3>
                                <div className="h-[250px]">
                                    <img
                                        alt={`${project.title} image`}
                                        src={project.image}
                                        className="rounded-lg h-full w-full object-cover"
                                    />
                                </div>
                                <div className="text-[20px] sm:text-[16px]">
                                    {project.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex  sm:flex-col px-[100px] gap-6  sm:px-[50px] justify-center items-center my-20">
                <DonateButton />
                <Button
                    content={"get involved"}
                    btnStyle={
                        "before:bg-[#0f172a] text-[#0f172a] hover:text-white border-[#326699]"
                    }
                />
            </div>
        </div>
    );
};

export default GirlChild;
