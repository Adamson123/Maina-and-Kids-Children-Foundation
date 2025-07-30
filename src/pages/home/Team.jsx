import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { teamInHompage } from "../../data/team";
import { Link } from "react-router-dom";

//TODO Replace images
const Team = () => {
    return (
        <div
            id="team"
            className="flex justify-center items-center flex-col mb-[100px] lg:mb-[70px] xl:mb-[80px] 2xl:mb-[100px] sm:mb-12 md:mb-14"
        >
            <p className="sm:block text-center text-primary-blue  font-semibold text-[20px] tracking-widest">
                THE TEAM
            </p>

            <h3 className="sm:text-[30px] sm:text-center md:text-[55px] md:text-center text-[56px] font-extrabold text-[#0F172A]">
                The Hearts Behind The Mission
            </h3>

            {/* grid box */}
            <div className="grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-2 grid-cols-3 grid-rows-2 md:gap-[40px] lg:gap-[50px] xl:gap-[54px] 2xl:gap-[60px] md:mt-[60px] lg:my-[70px] xl:my-[80px] 2xl:my-[100px] sm:my-10 md:mb-14 md:mx-3">
                {teamInHompage.map((person) => {
                    return (
                        <div
                            className="sm:w-[180px] w-[229px] h-[215px] flex flex-col justify-center items-center gap-[3px]"
                            key={person.id}
                        >
                            <img
                                src={person.image}
                                alt={person.speakerName + " image"}
                                className="min-h-[120px] min-w-[120px] max-h-[120px] max-w-[120px] rounded-full object-cover"
                            />
                            <p className="text-center sm:text-sm text-lg text-primary-blue">
                                {person.speakerName}
                            </p>
                            <p className="text-center sm:text-xs text-[#0f172a] leading-5">
                                {person.speakerPosition}
                            </p>
                        </div>
                    );
                })}
            </div>

            <Link
                to={"/about/#team"}
                className="flex items-center text-primary-blue text-base gap-3 hover:opacity-[0.6] transition-all duration-300"
            >
                See All{" "}
                <BiArrowBack className="rotate-180 w-6 h-6 arrow-bounce" />
            </Link>
        </div>
    );
};

export default Team;
