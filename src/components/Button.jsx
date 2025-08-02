import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Btn = ({ btnStyle, content, onclick = () => {} }) => {
    return (
        <button
            onClick={onclick}
            className={`h-[56px] w-[256px] rounded-[8px] border border-[#336699] capitalize p-[16px] ${btnStyle} flex items-center justify-center gap-4 z-[1] relative outline-none overflow-hidden transition-all duration-300 ease-in-out hover-on-button`}
        >
            {content}
            <FaArrowRight />
        </button>
    );
};

const Button = ({ content, link, linkStyle, btnStyle, onclick }) => {
    if (link) {
        return (
            <a href={link} className={"w-[256px] " + linkStyle}>
                <Btn btnStyle={btnStyle} content={content} />
            </a>
        );
    }
    return <Btn btnStyle={btnStyle} content={content} onclick={onclick} />;
};

export default Button;
