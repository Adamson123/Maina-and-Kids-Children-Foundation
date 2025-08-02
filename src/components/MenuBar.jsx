import React, { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { NavbarProjects } from "../data/projects";
import { BiMailSend, BiPhone } from "react-icons/bi";
import { contact } from "../data/contact";
import DonateButton from "./DonateButton";

const MenuBar = () => {
    const navigate = useNavigate();
    // menu context
    const { isClicked, handleMenuClose } = useContext(MenuContext);
    return (
        <div>
            {isClicked && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 w-full md:hidden lg:hidden xl:hidden 2xl:hidden z-[90]">
                    <section
                        className={`translate-x-0 h-screen w-full fixed top-0 right-0 bg-[#f7faf9] transition-all duration-200 transform shadow-2xl rounded-md`}
                    >
                        <div className="relative w-full">
                            {/* closing icon on menu bar */}
                            <div
                                onClick={() => handleMenuClose()}
                                className="s:flex sm:flex flex-col justify-center items-center lg:hidden xl:hidden md:hidden cursor-pointer gap-[5px] mr-4 absolute right-5 -top-[80px]"
                            >
                                <div className="h-[3px] w-7 rounded-full rotate-45 bg-[#326699] translate-y-4" />
                                <div className="h-[3px] w-7 rounded-full opacity-0" />
                                <div className="h-[3px] w-7 rounded-full -rotate-45 bg-[#326699] -translate-y-0" />
                            </div>
                            {/* links */}
                            <ul className="flex flex-col gap-6 justify-center text-[#453838] font-semibold text-[20px] capitalize mt-[100px] px-5">
                                <li className="cursor-pointer">
                                    <span className="font-bold">Our Work</span>
                                    <ul className="pl-3 font-thin">
                                        {NavbarProjects.map((project, i) => (
                                            <li
                                                onClick={() => {
                                                    navigate(project.link);
                                                    handleMenuClose();
                                                }}
                                                key={i}
                                                className="text-base p-2 border-transparent border-l-2 border-l-[#e7e5e5] hover:bg-[#e7e5e5]"
                                            >
                                                {project.name}
                                            </li>
                                        ))}
                                    </ul>
                                </li>

                                {/* Contact Us */}

                                <li className="cursor-pointer">
                                    <span className="font-bold">
                                        Contact Us
                                    </span>
                                    <div className="pl-3 font-thin text-base">
                                        <a
                                            href={`tel:${contact.number}`}
                                            className="flex items-center gap-1 text-base p-2 border-transparent border-l-2 border-l-[#e7e5e5] hover:bg-[#e7e5e5]"
                                        >
                                            <BiPhone />
                                            {contact.number}
                                        </a>
                                        <a
                                            href={`mailto:${contact.email}`}
                                            className="flex items-center gap-1 text-base p-2 border-transparent border-l-2 border-l-[#e7e5e5] hover:bg-[#e7e5e5] lowercase"
                                        >
                                            <BiMailSend /> {contact.email}
                                        </a>
                                    </div>
                                </li>
                                {/* About Us */}
                                <li
                                    onClick={() => {
                                        navigate("/about"), handleMenuClose();
                                    }}
                                    className="hover:text-[#326699] cursor-pointer"
                                >
                                    About Us
                                </li>
                            </ul>
                            {/* buttons */}
                            <div className="flex flex-col w-full items-center gap-6 my-10 px-5">
                                <DonateButton btnStyle={"w-full"} />
                                <Button
                                    content={"get involved"}
                                    btnStyle={
                                        "text-[#453838] before:bg-[#0f172a] hover:text-white hover:border-white w-full"
                                    }
                                    linkStyle={"w-full"}
                                />
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
};

export default MenuBar;
