import React, { useEffect } from "react";
import image from "/assets/about-us-img.png";
import Button from "../../components/Button";
import {
    founder,
    threeSpeakers1,
    threeSpeakers2,
    threeSpeakers3,
    twoSpeakers,
} from "../../data/team";
import { useLocation } from "react-router-dom";
import { MultiProfileContainer, ProfileCard } from "./Profile";
import womenImage from "/assets/women.webp";
import DonateButton from "../../components/DonateButton";

const AboutUs = () => {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash.replace("#", "");

        if (hash) {
            setTimeout(() => {
                const el = document.getElementById(hash);
                if (el)
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 0);
        }
    }, [location.hash]);

    /**
     md:py-[80px] lg:py-[100px] xl:py-[100px] 2xl:py-[100px] s:px-[20px] sm:px-[25px] md:px-[40px] lg:px-[60px] xl:px-[70px] flex flex-col items-center gap-y-[64px]
     */
    return (
        <div className="flex flex-col justify-center gap-32 px-16 sm:px-3 items-center text-[#453838] pt-40">
            {/* hero section */}
            <div className="space-y-8">
                {/* head */}
                <h1 className="text-[#336699] uppercase font-bold res-header-size text-center">
                    maina and kids children foundation
                </h1>
                <img src={image} alt="Display Image" />
            </div>
            {/* Write up */}
            <div className="flex flex-col items-start gap-10 max-w-[1300px]">
                {/* grid grid-cols-[60%_40%] md:grid-cols-1 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-2 */}
                <div className="gap-7 sm:px-4 flex md:flex-col md:items-center sm:flex-col sm:items-center">
                    {/* text */}
                    <div className="flex flex-col gap-[40px] w-[70%] md:w-full sm:w-full text-[18px] sm:text-[15px] sm:text-center md:text-center">
                        <p className="tracking-wide leading-9">
                            Maina & Kids children foundation is a
                            Non-governmental, Non-profit Organization, with
                            members dedicated at helping children of the
                            community, by giving them hope of a better tomorrow.
                            Maina & Kids Children Foundation particularly
                            reaches out to Orphans, Sick, physically disabled,
                            and less privileged Children in the society. At
                            Maina & Kids Children Foundation, our mission is to
                            promote the holistic development of children and
                            youth by equipping them with practical skills that
                            will enhance their employability, foster
                            entrepreneurship, and contribute to sustainable
                            community growth. We firmly believe that every child
                            deserves a fair chance to reach their full
                            potential, regardless of their background or
                            circumstances.
                        </p>
                        <p className="tracking-wide leading-9">
                            It was established on the 30th Day of October 2014
                            by Gambo Maina Bawa, started carrying out projects
                            across Jigawa State and then Bauchi state, and now
                            its spans wide to Kano, Gombe, Borno, Bauchi, and
                            Gombe. With the support of its Board of Trustees,
                            friends, family, supporters, donors and
                            well-wishers, Maina & Kids grows bigger by the day,
                            with more-than a hundred members across the country
                            working effortless to achieve its goals and visions,
                            with over 35 successful projects reaching out to
                            thousands of children.
                        </p>
                    </div>

                    {/* image */}
                    <div className="w-[30%] md:w-full sm:w-full md:h-[470px]">
                        <img
                            src={womenImage}
                            alt="women image"
                            className="object-cover rounded-md h-full w-full"
                        />
                    </div>
                </div>

                {/* button */}
                <div className="flex sm:flex-col sm:justify-center md:justify-center items-center gap-6 w-full">
                    <DonateButton />
                    <Button
                        content={"get involved"}
                        btnStyle={
                            "text-[#453838] before:bg-[#0f172a] hover:text-white hover:border-white"
                        }
                    />
                </div>
            </div>

            {/* Team */}
            <div
                id="team"
                className="w-full pb-36 px-28 lg:px-16 sm:px-7 max-w-[1275px] space-y-7 scroll-mt-36"
            >
                <h3 className="text-4xl font-bold text-center res-header-size">
                    The Hearts Behind The Mission
                </h3>
                {/* Team */}
                <div className="w-full flex flex-col gap-16 items-center">
                    {/* Head */}
                    <div className="flex flex-col items-center w-full px-24 lg:max-w-[750px] md:max-w-[500px]  sm:max-w-[400px]">
                        <ProfileCard
                            image={founder.image}
                            name={founder.name}
                            position={founder.position}
                        />
                        {/* Lines */}
                        <div className="flex items-center -space-x-[4px] w-full py-5">
                            <div className="relative w-full">
                                <div className="border-[4px] border-transparent  border-r-purple-300 border-b-purple-300  rounded-br-2xl h-20 sm:h-12"></div>
                                <div className="border-[4px] border-transparent border-t-purple-300 border-l-purple-300  rounded-tl-2xl h-20 sm:h-12 -translate-x-[8px] -translate-y-[4px]"></div>
                            </div>
                            <div className="relative w-full">
                                <div className="border-[4px] border-transparent  border-l-purple-300 border-b-purple-300  rounded-bl-2xl h-20 sm:h-12"></div>
                                <div className="border-[4px] border-transparent border-t-purple-300 border-r-purple-300  rounded-tr-2xl h-20 sm:h-12 translate-x-[8px] -translate-y-[4px]"></div>
                            </div>
                        </div>
                    </div>
                    {/* big screens */}
                    <div className="flex  md:hidden sm:hidden lg:hidden">
                        <div className="flex items-start">
                            <MultiProfileContainer profiles={threeSpeakers1} />
                            <MultiProfileContainer profiles={threeSpeakers2} />
                            <MultiProfileContainer profiles={threeSpeakers3} />
                            <MultiProfileContainer profiles={twoSpeakers} />
                        </div>
                    </div>
                    {/* lg screens */}
                    <div className="flex md:hidden sm:hidden xl:hidden 2xl:hidden">
                        <div className="flex items-start">
                            <MultiProfileContainer profiles={threeSpeakers1} />
                            <MultiProfileContainer
                                profiles={threeSpeakers2.concat(twoSpeakers[0])}
                            />
                            <MultiProfileContainer
                                profiles={threeSpeakers3.concat(twoSpeakers[1])}
                            />
                        </div>
                    </div>
                    {/* md and sm screens */}
                    <div className="flex lg:hidden xl:hidden 2xl:hidden">
                        <div className="flex items-start">
                            <MultiProfileContainer
                                profiles={threeSpeakers1.concat(
                                    threeSpeakers3.slice(0, 1)
                                )}
                            />
                            <MultiProfileContainer
                                profiles={threeSpeakers2.concat(
                                    threeSpeakers3.slice(2),
                                    twoSpeakers
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
