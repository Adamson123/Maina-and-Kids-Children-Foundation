import Button from "../../components/Button";
// import data
//import { projects } from "../../data/projects";
import image1 from "/assets/girl-child-projects/hygiene.webp";
import image2 from "/assets/international-women.webp";

const recentActivities = [
    {
        title: "World Menstrual Hygiene Day",
        content: "To commemorate the world menstrual hygiene day, the girl...",
        link: "/girl-child/#hygiene",
        img: image1,
    },
    {
        title: "International Women’s Day",
        content: "Celebrating the international women’s day with activities...",
        link: "/girl-child/#women's-day",
        img: image2,
    },
];

const RecentCauses = () => {
    return (
        <div
            id="recentCauses"
            className="flex justify-center items-center flex-col sm:gap-[30px] gap-[50px] pt-24 sm:px-[20px] md:px-[35px] lg:px-[60px] xl:px-[100px] 2xl:px-[100px]"
        >
            <div className="text-center">
                {/* subtitle */}
                <p className="font-bold sm:text-base text-xl uppercase tracking-widest text-[#336699] sm:text-[16px]">
                    a glimpse into
                </p>
                {/* bigger text */}
                <h3 className="sm:text-center sm:whitespace-nowrap md:text-center font-extrabold text-[#0F172A] capitalize res-header-size">
                    Our Recent Activities
                </h3>
            </div>
            {/* grid box */}
            <div className="grid sm:grid-cols-1 grid-cols-2 sm:gap-y-[40px] md:gap-[60px] lg:gap-[80px] xl:gap-[100px] 2xl:gap-[110px]">
                {recentActivities.map((project, i) => {
                    return (
                        <div
                            className="flex flex-col sm:items-center sm:text-center"
                            key={i}
                        >
                            <img
                                src={`${project.img}`}
                                alt={`${project.title} Image`}
                                className="w-[530px] h-[282px] object-cover rounded-md"
                            />
                            <h3 className="font-extrabold text-[32px] text-[#0F172A] my-[10px] md:whitespace-nowrap md:text-[23px] sm:text-[20px]">
                                {project.title}
                            </h3>
                            <span className="text-[18px] mb-[25px] sm:text-[16px]">
                                {project.content}
                            </span>
                            <div className="sm:flex sm:justify-center">
                                <Button
                                    link={project.link}
                                    content={"Learn More"}
                                    btnStyle={
                                        "bg-[#336699] text-white before:bg-[#0f172a] hover:border-white mt-4"
                                    }
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RecentCauses;
