import {
    almajiriInTech,
    childCareStories,
    mainaKidsFoundation,
    safenetProgram,
} from "../../data/projects";
import { ProjectCard, ProjectChildCareCard } from "./ProjectCard";
import DonateButton from "../../components/DonateButton";
import useScrollToHash from "../../hooks/useScrollToHash";
import GetInvolvedButton from "../../components/GetInvolvedButton";

const Projects = () => {
    useScrollToHash();

    return (
        <main className="pt-40 flex flex-col gap-32 pb-32 w-full text-[18px]">
            <ProjectCard project={safenetProgram} />
            <ProjectCard project={almajiriInTech} />
            <ProjectCard project={mainaKidsFoundation} />
            <div
                id="child-care"
                className="flex flex-col scroll-mt-36 sm:scroll-mt-20"
            >
                <h2 className="font-bold text-center text-primary-blue mb-7 max-w-[1070px] self-center res-header-size">
                    Child Care
                </h2>
                <div className="bg-[#F9F9F9] p-12 sm:px-[20px] flex flex-col gap-10 justify-center items-center text-[#443838]">
                    {childCareStories.map((story, i) => (
                        <ProjectChildCareCard key={i} childCareStory={story} />
                    ))}
                </div>
                <div className="flex items-center justify-center mt-6 sm:flex-col gap-6 sm:gap-4">
                    <DonateButton />
                    <GetInvolvedButton />
                </div>
            </div>
        </main>
    );
};

export default Projects;
