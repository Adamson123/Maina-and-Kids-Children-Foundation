import React from "react";
// import icon images
import icon1 from "/assets/Icon.png";
import icon2 from "/assets/Icon(1).png";
import icon3 from "/assets/Icon(2).png";
import icon4 from "/assets/Icon(3).png";
import FadeInElement from "../../components/FadeInElement";
import { motion } from "framer-motion";

const Objectives = () => {
    const data = [
        {
            id: 1,
            icon: icon1,
            title: "educational support",
            desc: "Providing educational support, including scholarships, school supplies, tutoring, or after-school programs, to ensure children have access to quality education.",
        },
        {
            id: 2,
            icon: icon2,
            title: "health care initiatives",
            desc: "Organizing medical outreaches, health check-ups, and awareness campaigns to promote children's health and well-being.",
        },
        {
            id: 3,
            icon: icon3,
            title: "skills development",
            desc: "Conducting workshops, vocational training, or mentoring programs to equip children with valuable skills for their personal and professional growth.",
        },
        {
            id: 4,
            icon: icon4,
            title: "Advocacy and Awareness",
            desc: "Raising awareness about children's rights, promoting child protection policies, and advocating for policy changes.",
        },
    ];

    return (
        <div
            id="objectives"
            className="flex justify-center flex-col sm:px-[16px]  md:px-[35px] sm:gap-[30px] gap-[50px] lg:px-[60px] xl:px-[100px] 2xl:px-[200px] sm:overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                {/* subtitle */}
                <p className="text-[#336699] sm:text-center md:text-center font-semibold text-xl capitalize font-montserrat sm:text-[16px]">
                    What We Do
                </p>
                {/* bigger text */}
                <h3 className="sm:text-center md:text-center font-extrabold text-[#0F172A] res-header-size">
                    Giving Little Children Chances Through;
                </h3>
                {/* sub text only on mobile */}
                <p className="hidden sm:block text-center text-[#0F172A] sm:text-[16px]">
                    Our organization caters to children and girls, we have
                    programs that are intended for them.
                </p>
            </motion.div>
            {/* grid box */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 grid-rows-2 gap-[95px] sm:gap-[50px] 2xl:grid-cols-2">
                {data.map((card) => {
                    return (
                        <FadeInElement key={card.id}>
                            <div className="flex sm:flex-col sm:items-center md:flex-col sm:gap-y-[15px] md:gap-x-[15px] lg:gap-x-[30px] xl:gap-x-[40px] 2xl:gap-x-[42px] items-center md:mb-3 sm:mb-5">
                                <img
                                    src={card.icon}
                                    alt={`Icon ${card.id}`}
                                    className="h-[90px] w-[90px] object-cover"
                                />
                                <div>
                                    <h4 className="text-[24px] h-[30px] font-semibold capitalize mb-[20px] sm:text-center md:text-center md:whitespace-nowrap md:text-lg md:my-[10px] sm:text-[20px]">
                                        {card.title}
                                    </h4>
                                    <p className="hover:cursor-default before:bg-[#ffe9b7] sm:text-center md:text-center sm:text-[16px]">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        </FadeInElement>
                    );
                })}
            </div>
        </div>
    );
};

export default Objectives;
