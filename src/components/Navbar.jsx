import React, { useContext, useEffect, useState } from "react";
// import image logo
import Logo from "/assets/logo-bar-transparent-bg.webp";
// import dependencies, components and icons
import { useNavigate, useLocation } from "react-router-dom";
import { MenuContext } from "../context/MenuContext";
import { NavbarProjects } from "../data/projects";
import { BiChevronDown, BiMailSend, BiPhone } from "react-icons/bi";
import { contact } from "../data/contact";
import DonateButton from "./DonateButton";

const OurWorkDropdown = ({ isOurWorkActive }) => {
    const navigate = useNavigate();

    return (
        <div
            className={`absolute top-8 bg-white text-gray-600 rounded-lg  transition-all duration-200  shadow-lg md:text-sm w-[290px] z-20 right-1/2 translate-x-1/2 ${
                isOurWorkActive
                    ? "h-fit pointer-events-auto py-2"
                    : "h-0  overflow-hidden pointer-events-none"
            }`}
        >
            <ul>
                {NavbarProjects.map((nav, index) => (
                    <li
                        key={index}
                        className="hover:cursor-pointer hover:bg-[#e7e5e5] py-2 p-5"
                        onClick={() => {
                            navigate(nav.link);
                        }}
                    >
                        {nav.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Navbar = () => {
    // getting states from menu context
    const { isActive, setIsClicked, isClicked, toggleMenu } =
        useContext(MenuContext);

    // setting state for dropdown menu
    const [isOurWorkActive, setIsOurWorkActive] = useState(false);
    const [isContactUsActive, setIsContactUsActive] = useState(false);

    // initializing use location and use navigate
    const location = useLocation();
    const navigate = useNavigate();

    // setting state for scrolling on window
    const [isScrolled, setIsScrolled] = useState(false);

    // use effect to conditionally control state for window
    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > window.innerHeight - 100 //1000 //window.innerHeight / 2 - 130
                ? setIsScrolled(true)
                : setIsScrolled(false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        // based on how far a user is in a page, the navbar changes
        <nav
            className={`${
                isScrolled || location.pathname !== "/"
                    ? "bg-white"
                    : "bg-transparent"
            } transition-all duration-300 h-[82px] sm:h-[77px] flex justify-between items-center sm:px-[20px] md:px-[30px] lg:px-[30px] xl:px-[100px] 2xl:px-[100px] fixed top-0 z-[80] w-full sm:pr-1`}
        >
            {/* image */}
            <div onClick={() => navigate("/")} className="cursor-pointer">
                <img
                    src={Logo}
                    alt="Maina and Kids Foundation"
                    className={` sm:w-[150px] md:w-[150px] lg:w-[200px]  xl:w-[220px] 2xl:w-[260px] object-contain`}
                />
            </div>
            <div className="sm:block md:block lg:hidden xl:hidden"></div>
            {/* nav links desktop*/}
            <ul
                className={`sm:hidden flex gap-[60px] md:gap-[25px] lg:gap-[40px] justify-center font-semibold capitalize items-center md:text-sm ${
                    isScrolled || location.pathname !== "/"
                        ? "text-black"
                        : "text-white"
                }`}
            >
                {/* Our Work */}
                <li
                    // tabIndex={0}
                    onMouseOut={() => setIsOurWorkActive(false)}
                    onMouseOver={() => setIsOurWorkActive(true)}
                    onClick={() => setIsOurWorkActive(!isOurWorkActive)}
                    className={`flex gap-0.5 items-center relative hover:cursor-pointer`}
                >
                    <span className="flex items-center gap-1 hover:opacity-[0.75]">
                        Our Work
                        <BiChevronDown
                            className={`w-8 h-8 transition-all duration-200 ${
                                isOurWorkActive ? "rotate-180" : "rotate-0"
                            }`}
                        />
                    </span>
                    <OurWorkDropdown isOurWorkActive={isOurWorkActive} />
                </li>
                {/* Contact Us */}
                <li
                    //tabIndex={0}
                    onMouseOut={() => setIsContactUsActive(false)}
                    onMouseOver={() => setIsContactUsActive(true)}
                    onClick={() => setIsContactUsActive(!isContactUsActive)}
                    className="flex items-center relative cursor-pointer"
                >
                    <span
                        onClick={() => setIsContactUsActive(!isContactUsActive)}
                        className="flex items-center gap-1 hover:opacity-[0.75]"
                    >
                        Contact Us
                        <BiChevronDown
                            className={`w-8 h-8 transition-all duration-200 ${
                                isContactUsActive ? "rotate-180" : "rotate-0"
                            }`}
                        />
                    </span>
                    <div
                        className={`absolute top-8 bg-white text-gray-600 rounded-lg  transition-all duration-200  shadow-lg md:text-sm w-[290px] z-20 right-1/2 translate-x-1/2 ${
                            isContactUsActive
                                ? "h-fit pointer-events-auto py-2"
                                : "h-0  overflow-hidden pointer-events-none"
                        }`}
                    >
                        <a
                            href="tel:+23407056615346"
                            className="flex items-center gap-1 hover:cursor-pointer hover:bg-[#e7e5e5] py-2 p-5"
                        >
                            <BiPhone /> {contact.number}
                        </a>
                        <a
                            href="mailto:mainakids66@gmail.com"
                            className="flex items-center gap-1 hover:cursor-pointer lowercase hover:bg-[#e7e5e5] py-2 p-5"
                        >
                            <BiMailSend /> {contact.email}
                        </a>
                    </div>
                </li>
                {/* About Us */}
                <li
                    onClick={() => navigate("/about")}
                    className={`hover:cursor-pointer hover:opacity-[0.75] `}
                >
                    About Us
                </li>
                {/* Donate button */}
                <li>
                    <DonateButton btnStyle={"md:w-[170px]"} />
                </li>
            </ul>
            {/* mobile view menu tab */}
            <div
                onClick={() => {
                    setIsClicked(!isClicked), toggleMenu();
                }}
                className={`sm:flex flex-col justify-center items-center lg:hidden xl:hidden md:hidden 2xl:hidden cursor-pointer gap-[5px] mr-8 ${
                    isScrolled || location.pathname !== "/"
                        ? "[&>div]:bg-[#453838]"
                        : "[&>div]:bg-white"
                } `}
            >
                <div
                    className={`h-[3px] w-7 transition-transform duration-200 rounded-full ${
                        isActive ? "rotate-45 bg-[#326699] translate-y-2" : ""
                    }`}
                />
                <div
                    className={`h-[3px] w-7 bg-[#453838] transition-opacity duration-200 rounded-full ${
                        isActive ? "opacity-0 bg-[#326699]" : "opacity-100"
                    }`}
                />
                <div
                    className={`h-[3px] w-7 bg-[#453838] transition-transform duration-200 rounded-full ${
                        isActive ? "-rotate-45 bg-[#326699] -translate-y-2" : ""
                    }`}
                />
            </div>
        </nav>
    );
};

export default Navbar;
