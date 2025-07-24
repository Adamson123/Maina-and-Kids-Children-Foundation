import React, { useEffect } from "react";
import { projects } from "../data/projects";
import Button from "../components/Button";
import { useLocation } from "react-router-dom";

const MappedProjects = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to the section if a hash exists in the URL
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return projects.map((project) => {
        return (
            <div key={project.id} className="my-10" id={project.idName}>
                <div className="relative">
                    <img src={project.heroImg} alt="" />
                    <div className="absolute top-52 w-full">
                        <h1 className="font-bold text-[56px] text-white text-center">
                            {project.title}
                        </h1>
                    </div>
                </div>
                <div className="flex sm:flex-col justify-center items-center h-[700px] bg-[#f9f9f9] gap-x-11 px-16">
                    <img
                        src={project.projectImg}
                        alt=""
                        className="w-2/4 h-[425px] object-cover rounded-[10px]"
                    />
                    <p className="w-2/4 text-xl leading-loose">
                        {project.description}
                    </p>
                </div>
                {/* button */}
                <div className="flex sm:flex-col items-center sm:gap-[15px] md:mt-5 gap-[30px] sm:w-[90%] w-[542px] xl:my-10 xl:justify-center xl:w-full">
                    <Button
                        content={"donate"}
                        btnStyle={
                            "bg-[#326699] text-white before:bg-[#0f172a] border-white"
                        }
                    />
                    <Button
                        content={"get involved"}
                        btnStyle={
                            "before:bg-[#0f172a] text-[#0f172a] hover:text-white border-[#326699]"
                        }
                    />
                </div>
            </div>
        );
    });
};

export default MappedProjects;
