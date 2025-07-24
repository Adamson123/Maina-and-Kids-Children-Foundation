import React from "react";
// import images
import speaker1 from "/assets/Gambo.jpg";
import speaker2 from "/assets/Afolabi.jpg";
import speaker3 from "/assets/Sodeeq.jpg";
import speaker4 from "/assets/Emmanuel.jpg";
import speaker5 from "/assets/speaker5.png";
import speaker6 from "/assets/Asaba.jpg";
import { BiArrowBack, BiArrowToRight } from "react-icons/bi";

const Team = () => {
    const data = [
        {
            id: 1,
            image: speaker1,
            speakerName: "Gambo Maina Bawa",
            speakerPosition: "Founder, Executive Director",
        },
        {
            id: 2,
            image: speaker2,
            speakerName: "Afolabi Joshua Voja",
            speakerPosition: "Programs Manager",
        },
        {
            id: 3,
            image: speaker3,
            speakerName: "Sadeeq A. Nuru",
            speakerPosition: "Finance Manager",
        },
        {
            id: 4,
            image: speaker4,
            speakerName: "Emmanuel Odewale",
            speakerPosition: "Communications Manager",
        },
        {
            id: 5,
            image: speaker5,
            speakerName: "Benjamin Peter",
            speakerPosition: "Human Resource & Development Manager ",
        },
        {
            id: 6,
            image: speaker6,
            speakerName: "Asaba Helen Peter",
            speakerPosition: "Monitoring & Evaluation Officer",
        },
    ];
    return (
        <div
            id="team"
            className="flex justify-center items-center flex-col mb-[100px] lg:mb-[70px] xl:mb-[80px] 2xl:mb-[100px] sm:mb-12 md:mb-14"
        >
            <p className="sm:block text-center text-primary-blue">THE TEAM</p>

            <h3 className="sm:text-[30px] sm:text-center md:text-[55px] md:text-center text-[56px] font-extrabold text-[#0F172A]">
                The Hearts Behind The Mission
            </h3>

            {/* grid box */}
            <div className="grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-2 grid-cols-3 grid-rows-2 md:gap-[40px] lg:gap-[50px] xl:gap-[54px] 2xl:gap-[60px] md:mt-[60px] lg:my-[70px] xl:my-[80px] 2xl:my-[100px] sm:my-10 md:mb-14 md:mx-3">
                {data.map((person) => {
                    return (
                        <div
                            className="sm:w-[180px] w-[229px] h-[215px] flex flex-col justify-center items-center gap-[3px]"
                            key={person.id}
                        >
                            <img
                                src={person.image}
                                alt=""
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

            <button className="flex items-center text-primary-blue text-base gap-4 hover:opacity-[0.6] transition-all duration-300">
                See All{" "}
                <BiArrowBack className="rotate-180 w-6 h-6 arrow-bounce" />
            </button>
        </div>
    );
};

export default Team;
