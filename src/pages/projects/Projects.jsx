import { useLocation } from "react-router-dom";
import {
    almajiriInTech,
    childCareStories,
    mainaKidsFoundation,
    safenetProgram,
} from "../../data/projects";
import { ProjectCard, ProjectChildCareCard } from "./ProjectCard";
import { useEffect } from "react";
import Button from "../../components/Button";

const Projects = () => {
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

    return (
        <div className="pt-40 flex flex-col gap-32 pb-32 w-full">
            <ProjectCard project={safenetProgram} />
            <ProjectCard project={almajiriInTech} />
            <ProjectCard project={mainaKidsFoundation} />
            <div id="child-care" className="flex flex-col gap-7 scroll-mt-36">
                <h2 className="font-bold text-center max-w-[1070px] leading-[70px] sm:leading-[40px] text-primary-blue sm:text-[22px] md:text-[30px] lg:text-[40px] xl:text-[45px] 2xl:text-[45px] self-center">
                    Child Care
                </h2>
                <div className="bg-[#F9F9F9] p-12 flex flex-col gap-10 justify-center items-center text-[#443838]">
                    {childCareStories.map((story, i) => (
                        <ProjectChildCareCard key={i} childCareStory={story} />
                    ))}
                </div>
                <div className="flex items-center justify-center gap-6 sm:flex-col sm:gap-y-4">
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
                    />{" "}
                </div>
            </div>
        </div>
    );
};

export default Projects;
