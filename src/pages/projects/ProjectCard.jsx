import DonateButton from "../../components/DonateButton";
import GetInvolvedButton from "../../components/GetInvolvedButton";

export const ProjectCard = ({ project }) => {
    const firstContent = project.contents[0];
    const secondContent = project.contents[1];

    return (
        <div
            id={project.id}
            className="flex flex-col scroll-mt-36 sm:scroll-mt-20"
        >
            <h2 className="font-bold text-center text-primary-blue mb-7 max-w-[1020px] self-center res-header-size">
                {project.title}
            </h2>
            <div className="bg-[#F9F9F9] p-12 flex flex-col gap-10 justify-center items-center text-[#443838] sm:text-[16px]">
                {/* First Content*/}
                <div className="flex items-center gap-10 leading-7 max-w-[1060px] sm:max-w-[570px] sm:flex-col-reverse">
                    <img
                        className="rounded-md w-[50%] sm:w-full h-full object-cover max-h-[320px] sm:max-h-[290px]"
                        src={firstContent.image}
                        alt={`${project.title} image`}
                    />
                    <div className="space-y-7 md:space-y-5 w-[50%] sm:w-full">
                        {firstContent.texts.map((te, i) => (
                            <p key={i}>
                                <strong>{te.title}</strong>
                                {te.text}
                            </p>
                        ))}
                    </div>
                </div>
                {/* Second Content*/}
                <div className="flex items-center gap-10 leading-7 max-w-[1060px] sm:max-w-[570px] sm:flex-col">
                    <div className="space-y-7 md:space-y-5 w-[50%]  sm:w-full">
                        {secondContent.texts.map((te, i) => (
                            <p key={i}>
                                <strong>{te.title}</strong>
                                {te.text}
                            </p>
                        ))}
                    </div>
                    <img
                        className="rounded-md  h-full w-[50%] sm:w-full object-cover max-h-[320px] sm:max-h-[290px]"
                        src={secondContent.image}
                        alt={`${project.title} image`}
                    />
                </div>
            </div>
            <div className="flex items-center justify-center mt-6 sm:flex-col gap-6 sm:gap-4">
                <DonateButton />
                <GetInvolvedButton />
            </div>
        </div>
    );
};

export const ProjectChildCareCard = ({ childCareStory }) => {
    return (
        <div className="flex items-center gap-10 max-w-[1060px] sm:max-w-[570px] sm:flex-col">
            <img
                src={childCareStory.image}
                alt={`${childCareStory.title} image`}
                className="rounded-md object-cover max-h-[320px] md:max-h-[280px] w-[50%] sm:w-full  sm:max-h-[290px]"
            />
            <div className="leading-7 w-[50%] sm:w-full sm:text-[16px]">
                <p>
                    <strong className="text-primary-blue">
                        {childCareStory.title}:{" "}
                    </strong>
                    {childCareStory.story}
                </p>
            </div>
        </div>
    );
};
