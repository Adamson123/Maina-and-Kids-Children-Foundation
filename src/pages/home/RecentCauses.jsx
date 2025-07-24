import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

// import data
import { projects } from "../../data/projects";
import { useNavigate } from "react-router-dom";

const RecentCauses = () => {
    const navigate = useNavigate();

    return (
        <div
            id="recentCauses"
            className="flex justify-center items-center flex-col sm:px-[20px] sm:py-[25px] md:p-[35px] lg:p-[60px] xl:p-[100px] 2xl:p-[100px]"
        >
            {/* subtitle */}
            <p className="font-bold sm:text-base text-xl uppercase tracking-widest text-[#336699]">
                a glimpse into
            </p>
            {/* bigger text */}
            <h3 className="sm:text-[30px] sm:text-center sm:whitespace-nowrap md:text-[55px] md:text-center text-[56px] font-extrabold text-[#0F172A] capitalize">
                our most recent causes
            </h3>
            {/* grid box */}
            <div className="grid sm:grid-cols-1 grid-cols-2  sm:mt-[30px] mt-[50px] sm:gap-y-[40px] md:gap-[60px] lg:gap-[80px] xl:gap-[100px] 2xl:gap-[110px]">
                {projects.map((project) => {
                    return (
                        <div
                            className="flex flex-col sm:items-center sm:text-center"
                            key={project.id}
                        >
                            <img
                                src={`${project.img}`}
                                alt={`Image ${project.id}`}
                            />
                            <h3 className="font-extrabold text-[32px] text-[#0F172A] my-[10px] md:whitespace-nowrap md:text-[23px]">
                                {project.title}
                            </h3>
                            <span className="text-[18px] mb-[25px]">
                                {project.description.substring(0, 70) + " ..."}
                            </span>
                            <div className="sm:flex sm:justify-center">
                                <Link to={"/projects"}>
                                    <Button
                                        content={"Learn More"}
                                        btnStyle={
                                            "bg-[#336699] text-white before:bg-[#0f172a] hover:border-white mt-4"
                                        }
                                    />
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RecentCauses;
