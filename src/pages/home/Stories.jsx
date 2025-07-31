import { useState } from "react";
import stories from "../../data/stories";
import { CgClose } from "react-icons/cg";

const StoryCard = ({ story, setCurrentStory }) => {
    return (
        <div
            onClick={() => setCurrentStory(story)}
            className={`flex flex-col items-center gap-3 h-full max-w-[500px] cursor-pointer transition-all duration-300 ease-in-out relative hover-on-container`}
        >
            {/* <div className="absolute w scale-0 hover:scale-1 bg-white opacity-[0.2]"></div> */}
            <div className="w-full h-[250px]">
                {/* TODO: Add alt */}
                <img
                    className="h-full w-full rounded-md object-cover"
                    src={story.image}
                    alt=""
                />
            </div>

            <div className="text-left space-y-4">
                <h4 className="text-primary-blue text-[20px]">{story.title}</h4>
                <p className="text-[16px]">{story.storyGlimpse}</p>
            </div>
        </div>
    );
};

const Stories = () => {
    const [currentStory, setCurrentStory] = useState(null);

    //sm:py-12
    return (
        <div className="flex flex-col items-center justify-center text-center sm:px-[20px] md:px-[25px] lg:px-[50px] xl:px-[90px] 2xl:px-[130px] sm:gap-[30px] gap-[50px]  pt-24">
            {/* Heading */}
            {/* TODO: Horizontal gap */}
            <div>
                <p className="text-primary-blue  font-semibold text-[20px] tracking-widest sm:text-[16px]">
                    STORIES
                </p>
                <h3 className="res-header-size font-extrabold text-[#0F172A] capitalize">
                    Voices From The Journey
                </h3>
            </div>
            {/* Stories */}
            <div className="grid gap-[40px] xl:grid-cols-3 xl:grid-rows-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1  2xl:grid-cols-3 2xl:grid-rows-1 sm:grid-cols-1 sm:grid-rows-3 sm:place-items-center 2xl:items-start">
                {stories.map((story, i) =>
                    i < stories.length - 1 ? (
                        <StoryCard
                            key={i}
                            story={story}
                            setCurrentStory={setCurrentStory}
                        />
                    ) : (
                        <div
                            key={i}
                            className="md:col-span-2 sm:col-span-1 flex items-center justify-center"
                        >
                            <StoryCard
                                story={story}
                                setCurrentStory={setCurrentStory}
                            />
                        </div>
                    )
                )}
            </div>

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
        </div>
    );
};

export default Stories;
