import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { teamInHompage } from "../../data/team";
import { Link } from "react-router-dom";

//TODO Replace images
const Team = () => {
    return (
        <div
            id="team"
            className="flex justify-center items-center flex-col sm:gap-[35px] gap-[55px]"
        >
            <div className="text-center">
                <p className="font-bold sm:text-base text-xl uppercase tracking-widest text-[#336699] sm:text-[16px]">
                    THE TEAM
                </p>

                <h3 className="sm:text-center md:text-center font-extrabold text-[#0F172A] res-header-size">
                    The Hearts Behind The Mission
                </h3>
            </div>
            {/* grid box */}
            <div className="grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-2 grid-cols-3 grid-rows-2 md:gap-[40px] lg:gap-[50px] xl:gap-[54px] 2xl:gap-[60px]  md:mx-3">
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
                            <p className="text-center text-[20px] text-lg text-primary-blue">
                                {person.speakerName}
                            </p>
                            <p className="text-center text-[16px] text-[#0f172a] leading-5">
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
