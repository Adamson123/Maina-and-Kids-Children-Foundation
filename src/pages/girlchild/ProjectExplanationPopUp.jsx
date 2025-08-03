import { CgClose } from "react-icons/cg";

const ProjectExplanationPopUp = ({
    currentExplanation,
    setCurrentExplanation,
}) => {
    return (
        <div
            onClick={() => setCurrentExplanation(null)}
            className={`fixed inset-0 bg-black/55 z-[150] items-center justify-center flex flex-col gap-2 p-3 transition-all  ${
                currentExplanation ? "scale-1" : "scale-0"
            } !mt-0`}
        >
            <p className="text-white flex items-center justify-between font-semibold gap-3 max-w-[460px] w-full p-1 flex-col">
                <CgClose
                    className="cursor-pointer text-gray-400 h-8 w-8 p-2 
                                    rounded-full border border-gray-400 hover:bg-gray-400/30"
                />
                <span>{currentExplanation?.title}</span>
            </p>
            <div
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col gap-5 text-left bg-white max-w-[470px] rounded-md p-7 max-h-[600px] overflow-y-auto sm:text-[16px]"
            >
                {currentExplanation?.content.map((block, i) => {
                    switch (block.type) {
                        case "paragraph":
                            return <p key={i}>{block.content}</p>;
                        case "head":
                            return (
                                <h4 className="font-bold" key={i}>
                                    {block.content}
                                </h4>
                            );
                        case "list":
                            return (
                                <ul key={i} className="list-disc pl-5">
                                    {block.content.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            );
                        case "quote":
                            return (
                                <blockquote
                                    className="border-l-4 border-primary-blue pl-4 italic text-gray-600"
                                    key={i}
                                >
                                    {block.content}
                                </blockquote>
                            );
                        default:
                            return null;
                    }
                })}
            </div>
        </div>
    );
};

export default ProjectExplanationPopUp;
