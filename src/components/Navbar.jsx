import React, { useContext, useEffect, useState } from "react";
// import image logo
import Logo from "/assets/logo-bar.png";
// import dependencies, components and icons
import { useNavigate, useLocation } from "react-router-dom";
import { MenuContext } from "../context/MenuContext";
import { Link } from "react-scroll";

import { projects } from "../data/projects";
import Button from "./Button";
import { BiChevronDown } from "react-icons/bi";

const DropDown = ({ isDropdownHovered }) => {
    return (
        <div
            className={`absolute top-10 bg-white text-gray-600 rounded-lg  shadow-lg md:text-sm left-0 w-[290px] z-20 ${
                isDropdownHovered
                    ? "h-fit p-5 pointer-events-auto"
                    : "h-0  overflow-hidden p-0 pointer-events-none"
            }`}
        >
            <ul>
                <li className="hover:cursor-pointer hover:text-[#453838] border-b py-1.5">
                    <Link
                        onClick={() => navigate("/projects")}
                        to="Safe-Net-Ambassadors-Program"
                        smooth={true}
                    >
                        Girl Child
                    </Link>
                </li>
                <li className="hover:cursor-pointer hover:text-[#453838] border-b py-1.5">
                    <Link
                        onClick={() => navigate("/projects")}
                        to="Almajiri-in-Tech-Initiative"
                        smooth={true}
                    >
                        Almajiri in Tech Initiative
                    </Link>
                </li>
                <li className="hover:cursor-pointer hover:text-[#453838] border-b py-1.5">
                    <Link
                        onClick={() => navigate("/projects")}
                        to="Safe-Net-Ambassadors-Program"
                        smooth={true}
                    >
                        Safenet Ambassador's Program
                    </Link>
                </li>
                <li className="hover:cursor-pointer hover:text-[#453838] border-b py-1.5">
                    <Link
                        //  onClick={() => navigate("/projects")}
                        to="Safe-Net-Ambassadors-Program"
                        smooth={true}
                    >
                        Child Care
                    </Link>
                </li>
                <li className="hover:cursor-pointer hover:text-[#453838] border-b py-1.5">
                    <Link
                        //   onClick={() => navigate("/projects")}
                        to="Safe-Net-Ambassadors-Program"
                        smooth={true}
                    >
                        10 Years Anniversary
                    </Link>
                </li>
                {/* 
                <li className="hover:cursor-pointer hover:text-[#453838] border-b py-1.5">
                    <Link
                        onClick={() => navigate("/projects")}
                        to="Empower-Her-Future"
                        smooth={true}
                    >
                        Empower Her Future
                    </Link>
                </li>
                <li className="hover:cursor-pointer hover:text-[#453838] border-b py-1.5">
                    <Link
                        onClick={() => navigate("/projects")}
                        to="Health-Awareness"
                        smooth={true}
                    >
                        Health Awareness
                    </Link>
                </li> */}
            </ul>
        </div>
    );
};

const Navbar = () => {
    // getting states from menu context
    const { isActive, setIsClicked, isClicked, toggleMenu } =
        useContext(MenuContext);

    // setting state for dropdown menu
    const [isDropdownHovered, setIsDropDownHovered] = useState(false);
    // Set drop down to only be visible in home page
    const [isVisible, setIsVisible] = useState(false);

    // function to handle dropdown state
    const handleNavHover = () => {
        setIsDropDownHovered(!isDropdownHovered);
    };

    // initializing use location and use navigate
    const location = useLocation();
    const navigate = useNavigate();

    // initializing navbar bg color and setting bg color based on path
    // let navbarBg = 'bg-white';
    // if (location.pathname === '/') {
    //   navbarBg = "bg-[url('/assets/hero-bg.png')]"
    // }

    useEffect(() => {
        if (location.pathname === "/") {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [location]);

    // setting state for scrolling on window
    const [isScrolled, setIsScrolled] = useState(false);

    // use effect to conditionally control state for window
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > window.innerHeight - 100 //1000 //window.innerHeight / 2 - 130
                ? setIsScrolled(true)
                : setIsScrolled(false);
        });
    });

    return (
        // based on how far a user is in a page, the navbar changes
        <nav
            className={`${
                isScrolled || location.pathname !== "/"
                    ? "bg-white"
                    : "bg-transparent"
            } transition-all duration-300 h-[120px] flex justify-between items-center sm:px-[20px] md:px-[30px] lg:px-[80px] xl:px-[100px] 2xl:px-[100px] fixed top-0 z-10 w-full sm:pr-1`}
        >
            {/* image */}
            <div onClick={() => navigate("/")} className="cursor-pointer">
                <img
                    src={Logo}
                    alt="Maina and Kids Foundation"
                    className={`${
                        isActive ? "hidden" : "block"
                    }  sm:w-[200px] md:w-[150px] lg:w-[200px]  xl:w-[220px] 2xl:w-[260px] object-contain`}
                />
            </div>
            <div className="s:block sm:block md:block lg:hidden xl:hidden"></div>
            {/* nav links desktop*/}
            <ul
                className={`sm:hidden flex gap-[60px] md:gap-[40px]  justify-center font-semibold capitalize items-center ${
                    isScrolled || location.pathname !== "/"
                        ? "text-black"
                        : "text-white"
                } `}
            >
                <li
                    onClick={() => handleNavHover()}
                    className={`flex gap-0.5 items-center relative hover:cursor-pointer`}
                >
                    <span className="flex items-center gap-1">
                        Our Work{" "}
                        <BiChevronDown
                            className={`w-8 h-8 transition-all duration-300 ${
                                isDropdownHovered ? "rotate-180" : "rotate-0"
                            }`}
                        />
                    </span>
                    <DropDown isDropdownHovered={isDropdownHovered} />
                </li>
                <li
                    onClick={() => navigate("/about")}
                    className={`hover:cursor-pointer`}
                >
                    about us
                </li>
                <li>
                    <Button
                        content={"donate"}
                        btnStyle={
                            "bg-[#326699] text-white before:bg-[#0f172a] md:w-[200px] border-none"
                        }
                    />
                </li>
            </ul>
            {/* mobile view menu tab */}
            <div
                onClick={() => {
                    setIsClicked(!isClicked), toggleMenu();
                }}
                className="sm:flex flex-col justify-center items-center lg:hidden xl:hidden md:hidden 2xl:hidden cursor-pointer gap-[5px] mr-8"
            >
                <div
                    className={`h-[3px] w-7 bg-[#453838] transition-transform duration-200 rounded-full ${
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
