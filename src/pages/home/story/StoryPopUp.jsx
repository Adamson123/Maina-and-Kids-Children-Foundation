import { CgClose } from "react-icons/cg";

const StoryPopUp = ({ currentStory, setCurrentStory }) => {
    return (
        <div
            onClick={() => setCurrentStory(null)}
            className={`fixed inset-0 bg-black/55 z-[100] items-center justify-center flex flex-col gap-2 p-3 transition-all ${
                currentStory ? "scale-1" : "scale-0"
            }`}
        >
            <p className="text-white flex items-center justify-between font-semibold gap-3 max-w-[460px] w-full p-1 flex-col">
                <CgClose
                    className="cursor-pointer text-gray-400 h-8 w-8 p-2 
            rounded-full border border-gray-400 hover:bg-gray-400/30"
                />
                <span>{currentStory?.title}</span>
            </p>
            <div
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col gap-5 text-left bg-white max-w-[470px] rounded-md p-7 max-h-[600px] overflow-y-auto sm:text-[16px]"
            >
                {currentStory?.story.map((paragraph, i) => {
                    return <p key={i}>{paragraph}</p>;
                })}
            </div>
        </div>
    );
};

export default StoryPopUp;
