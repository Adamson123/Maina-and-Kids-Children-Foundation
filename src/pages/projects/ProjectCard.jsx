import Button from "../../components/Button";

export const ProjectCard = ({ project }) => {
    const firstContent = project.contents[0];
    const secondContent = project.contents[1];
    return (
        <div id={project.id} className="flex flex-col scroll-mt-36">
            <h2 className="text-3xl font-bold text-center text-primary-blue mb-7 sm:text-[25px] md:text-[30px] lg:text-[40px] xl:text-[48px] 2xl:text-[48px]">
                {project.title}
            </h2>
            <div className="bg-[#F9F9F9] p-12 flex flex-col gap-10 justify-center items-center text-[#443838]">
                {/* First Content*/}
                <div className="flex items-center gap-10 leading-7 max-w-[1320px] sm:flex-col-reverse">
                    <img
                        className="rounded-md w-[50%] sm:w-full h-full object-cover md:max-h-[300px]"
                        src={firstContent.image}
                        alt={`${project.title} image`}
                    />
                    <div className="space-y-7 w-[50%] sm:w-full">
                        {firstContent.texts.map((te, i) => (
                            <p key={i}>
                                <strong>{te.title}</strong>
                                {te.text}
                            </p>
                        ))}
                    </div>
                </div>
                {/* Second Content*/}
                <div className="flex items-center gap-10 leading-7 max-w-[1200px] sm:flex-col">
                    <div className="space-y-7 w-[50%]  sm:w-full">
                        {secondContent.texts.map((te, i) => (
                            <p key={i}>
                                <strong>{te.title}</strong>
                                {te.text}
                            </p>
                        ))}
                    </div>
                    <img
                        className="rounded-md  h-full md:max-h-[300px] w-[50%] sm:w-full object-cover"
                        src={secondContent.image}
                        alt={`${project.title} image`}
                    />
                </div>
            </div>
            <div className="flex items-center justify-center gap-6 mt-6 sm:flex-col  sm:gap-y-4">
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
    );
};

export const ProjectChildCareCard = ({ childCareStory }) => {
    return (
        <div className="flex items-center gap-10 max-w-[1320px] sm:flex-col">
            <img
                src={childCareStory.image}
                alt={`${childCareStory.title} image`}
                className="rounded-md object-cover max-h-[250px] xl:max-h-[320px] 2xl:max-h-[320px]  w-[50%] sm:w-full"
            />
            <div className="leading-7 w-[50%] sm:w-full">
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
