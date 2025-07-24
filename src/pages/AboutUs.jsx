import React from "react";
import image from "/assets/about-us-img.png";
import Button from "../components/Button";

const AboutUs = () => {
    return (
        <div className="flex flex-col justify-center items-center text-[#453838] pt-10">
            {/* hero section */}
            <div className="md:py-[80px] lg:py-[100px] xl:py-[100px] s:px-[20px] sm:px-[25px] md:px-[40px] lg:px-[60px] xl:px-[70px] flex flex-col items-center gap-y-[64px]">
                <h1 className="text-[#336699] uppercase font-bold s:text-[20px] sm:text-[20px] md:text-[30px] lg:text-[40px] xl:text-[48px]">
                    <span>maina and kids children</span> <span>foundation</span>
                </h1>
                <img src={image} alt="Display Image" />
            </div>
            {/* text */}
            <div className="s:mx-6 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24 flex flex-col gap-[50px]">
                <p className="tracking-wide leading-9 text-[18px] pt-8">
                    Maina & Kids children foundation is a Non-governmental,
                    Non-profit Organization, with members dedicated at helping
                    children of the community, by giving them hope of a better
                    tomorrow. Maina & Kids Children Foundation particularly
                    reaches out to Orphans, Sick, physically disabled, and less
                    privileged Children in the society. At Maina & Kids Children
                    Foundation, our mission is to promote the holistic
                    development of children and youth by equipping them with
                    practical skills that will enhance their employability,
                    foster entrepreneurship, and contribute to sustainable
                    community growth. We firmly believe that every child
                    deserves a fair chance to reach their full potential,
                    regardless of their background or circumstances.
                </p>
                <p className="tracking-wide leading-9 text-[18px]">
                    It was established on the 30th Day of October 2014 by Gambo
                    Maina Bawa, started carrying out projects across Jigawa
                    State and then Bauchi state, and now its spans wide to Kano,
                    Gombe, Borno, Bauchi, and Gombe. With the support of its
                    Board of Trustees, friends, family, supporters, donors and
                    well-wishers, Maina & Kids grows bigger by the day, with
                    more-than a hundred members across the country working
                    effortless to achieve its goals and visions, with over 35
                    successful projects reaching out to thousands of children.
                </p>
            </div>
            {/* location */}
            <div className="capitalize w-full s:px-4 sm:px-6 md:px-10 lg:px-14 xl:px-24 my-16 flex flex-col gap-8">
                <div>
                    <h2 className="text-xl font-inter font-bold">
                        corporate office
                    </h2>
                    <p>
                        maina and kids children foundation, start-up jigawa,
                        dutse - jigawa state
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-inter font-bold">branches</h2>
                    <ul className="ml-8 list-disc">
                        <li>kano state</li>
                        <li>bauchi state</li>
                        <li>borno state</li>
                        <li>plateau state</li>
                        <li>gombe state</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-inter font-bold">
                        campus links
                    </h2>
                    <ul className="ml-8 list-disc">
                        <li>abubakar tafawa balewa university bauchi (ATBU)</li>
                        <li>university of maiduguri (UNIMAID)</li>
                        <li>federal university dutse (FUD)</li>
                    </ul>
                </div>
            </div>
            {/* button */}
            <div className="flex s:flex-col sm:flex-col  gap-[30px] xl:w-[542px] mb-[100px]">
                <Button
                    content={"donate"}
                    btnStyle={
                        "bg-[#336699] text-white before:bg-[#0f172a] hover:border-white"
                    }
                />
                <Button
                    content={"get involved"}
                    btnStyle={
                        "text-[#453838] before:bg-[#0f172a] hover:text-white hover:border-white"
                    }
                />
            </div>
        </div>
    );
};

export default AboutUs;
