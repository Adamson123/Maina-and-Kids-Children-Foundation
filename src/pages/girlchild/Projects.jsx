import { useState } from "react";
import {
    girlChildProjectExplanation,
    girlChildProjects,
} from "../../data/girlChildProjects";
import ProjectExplanationPopUp from "./ProjectExplanationPopUp";
//TODO: Put components into seperate files

const ProjectCard = ({ project, setCurrentExplanation }) => {
    const findAndSetCurrentExplanation = () => {
        const explanation = girlChildProjectExplanation.find(
            (exp) => exp.id === project.id
        );

        setCurrentExplanation(explanation);
    };

    return (
        <div
            onClick={findAndSetCurrentExplanation}
            id={project.id}
            className={`p-8 rounded-xl bg-[#F9F9F9] flex flex-col gap-5 shadow-lg h-auto scroll-mt-36 cursor-pointer hover-on-container`}
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
            <div className="text-[20px] sm:text-[16px]">{project.brief}</div>
        </div>
    );
};

const Projects = () => {
    const [currentExplanation, setCurrentExplanation] = useState(null);

    return (
        <div className="px-[100px] sm:px-[20px] space-y-5 md:px-[40px]">
            {/* Header */}
            <h1 className="font-extrabold text-[#0F172A] res-header-size">
                Projects
            </h1>
            <div className="flex gap-8 justify-center sm:flex-col md:text-base leading-8 md:leading-7">
                {/* 1 */}
                <div className="flex flex-col gap-8">
                    {girlChildProjects.slice(0, 2).map((project, _) => (
                        <ProjectCard
                            project={project}
                            key={project.id}
                            setCurrentExplanation={setCurrentExplanation}
                        />
                    ))}
                </div>
                {/* 2 */}
                <div className="flex flex-col gap-8">
                    {girlChildProjects.slice(2, 4).map((project, _) => (
                        <ProjectCard
                            project={project}
                            key={project.id}
                            setCurrentExplanation={setCurrentExplanation}
                        />
                    ))}
                </div>
            </div>
            <ProjectExplanationPopUp
                currentExplanation={currentExplanation}
                setCurrentExplanation={setCurrentExplanation}
            />
        </div>
    );
};

export default Projects;
