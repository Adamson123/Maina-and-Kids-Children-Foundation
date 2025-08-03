import { useState } from "react";
import stories from "../../../data/stories";
import FadeInElement from "../../../components/FadeInElement";
import StoryPopUp from "./StoryPopUp";
//TODO: Put components into seperate files

const StoryCard = ({ story, setCurrentStory }) => {
    return (
        <div
            onClick={() => setCurrentStory(story)}
            className={`flex flex-col items-center gap-3 h-full max-w-[500px] cursor-pointer transition-all duration-300 ease-in-out hover-on-container`}
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
        <div className="flex flex-col items-center justify-center text-center sm:px-[20px] md:px-[25px] lg:px-[50px] xl:px-[90px] 2xl:px-[130px] sm:gap-[30px] gap-[50px]">
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
                        <FadeInElement key={i}>
                            <StoryCard
                                story={story}
                                setCurrentStory={setCurrentStory}
                            />
                        </FadeInElement>
                    ) : (
                        <FadeInElement
                            key={i}
                            className="md:col-span-2 sm:col-span-1 flex items-center justify-center"
                        >
                            <StoryCard
                                story={story}
                                setCurrentStory={setCurrentStory}
                            />
                        </FadeInElement>
                    )
                )}
            </div>

            {/*  Pop Up */}
            <StoryPopUp
                currentStory={currentStory}
                setCurrentStory={setCurrentStory}
            />
        </div>
    );
};

export default Stories;
