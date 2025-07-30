// import React, { useContext } from 'react';
// // import icons
// import { FaYoutube, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// // import footer image
// import image from '/assets/Logo-colored.png'
// // import anniversary context
// import { AnniversaryContext } from '../context/AnniversaryContext';

// const Footer = () => {
//   const { isTextShown } = useContext(AnniversaryContext);

//   return (
//     // setting margin bottom based on the informative text at bottom
//     <footer className={`${isTextShown ? 'mb-10' : 'mb-0'} bg-[#fafafa] text-[#453838] s:px-[20px] sm:px-[25px] md:px-[40px] lg:px-[60px] xl:px-[70px] capitalize`}>
//         {/* columns */}
//         <div className='md:h-[320px] lg:h-[322px] xl:h-[322px] grid s:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 py-[48px] gap-[48px]'>
//           <div className='flex flex-col gap-[25px]'>
//             <h3 className='font-semibold'>navigation</h3>
//             <a href="" className='hover:text-[#0f172a]'>causes</a>
//             <a href="" className='hover:text-[#0f172a]'>about us</a>
//             <a href="" className='hover:text-[#0f172a]'>girl child</a>
//             <a href="" className='hover:text-[#0f172a]'>contact us</a>
//           </div>
//           <div className='flex flex-col gap-[25px]'>
//             <h3 className='font-semibold'>get involved</h3>
//             <a href="" className='hover:text-[#0f172a]'>mentorship</a>
//             <a href="" className='hover:text-[#0f172a]'>sponsorship</a>
//             <a href="" className='hover:text-[#0f172a]'>partnership</a>
//           </div>
//           <div className='flex flex-col gap-[25px]'>
//             <h3 className='font-semibold'>donation</h3>
//             <a href="" className='hover:text-[#0f172a]'>grant</a>
//             <a href="" className='hover:text-[#0f172a]'>monthly</a>
//             <a href="" className='hover:text-[#0f172a]'>yearly</a>
//           </div>
//         </div>
//         {/* copyright and social links */}
//         <div className='h-[80px] flex sm:flex-col justify-between md:items-center lg:items-center xl:items-center s:gap-2 sm:gap-2 border-t border-[#0f1729]'>
//           {/* footer image */}
//           <div>
//             <img src={image} alt="Footer Image" />
//           </div>
//           <div className='flex sm:flex-col md:items-center md:ml-10 lg:items-center xl:items-center s:gap-3 sm:gap-5 md:gap-16 lg:gap-20 xl:gap-20'>
//             {/* copyright */}
//             <p className='md:text-sm md:whitespace-nowrap'>Maina and kids children foundation &copy; 2024. all rights reserved.</p>
//             {/* social links */}
//             <div className='flex text-xl gap-4 s:mb-4 sm:mb-4'>
//               <a href="" className='hover:text-[#0f172a]' title='Youtube'><FaYoutube/></a>
//               <a href="" className='hover:text-[#0f172a]' title='Facebook'><FaFacebookF/></a>
//               <a href="" className='hover:text-[#0f172a]' title='Twitter'><FaXTwitter/></a>
//               <a href="" className='hover:text-[#0f172a]' title='Instagram'><FaInstagram/></a>
//               <a href="" className='hover:text-[#0f172a]' title='LinkedIn'><FaLinkedinIn/></a>
//             </div>
//           </div>
//         </div>

//     </footer>
//   )
// }

// export default Footer

import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const links = [
    { href: "/about", label: "About Us" },
    { href: "/girl-child", label: "Girl Child" },
    { href: "/projects", label: "Our Works" },
    { href: "/projects/#child-care", label: "Child Care" },
    { href: "/projects/#almajiri-in-tech", label: "Almajiri In Tech" },
];

const socialLinks = [
    { href: "#", icon: <FaYoutube />, title: "Youtube" },
    { href: "#", icon: <FaFacebookF />, title: "Facebook" },
    { href: "#", icon: <FaXTwitter />, title: "Twitter" },
    { href: "#", icon: <FaInstagram />, title: "Instagram" },
    { href: "#", icon: <FaLinkedinIn />, title: "LinkedIn" },
];

const Form = () => {
    return (
        <form className="flex flex-col gap-5 max-w-[400px] sm:max-w-[330px] sm:items-center">
            <h3 className="text-2xl font-semibold sm:text-center max-w-[300px]">
                Sign Up For Our Monthly Newsletter
            </h3>
            <p className="text-sm sm:text-center">
                Want to hear what we are up to? sign up to get deets on our
                projects and activities
            </p>
            <input
                type="email"
                placeholder="Enter your Email"
                className="border border-primary-blue rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent min-w-[calc(100%-70px)] max-w-[calc(100%-70px)] sm:min-w-full"
            />
            <button
                type="submit"
                className="bg-primary-blue text-white rounded-md p-2 hover:bg-blue-700 transition-colors duration-300 max-w-[calc(100%-150px)] min-w-[calc(100%-150px)] sm:min-w-[calc(100%-50px)]"
            >
                Submit
            </button>
        </form>
    );
};

const Footer = () => {
    return (
        <div className="bg-black items-center text-white pt-20 flex flex-col gap-16">
            <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-y-10  sm:grid-rows-2 sm:justify-evenly items-start md:px-16 lg:gap-x-28 xl:gap-x-44 2xl:gap-x-[300px]">
                {/* Links */}
                <div className="grid grid-cols-2 gap-y-[60px] sm:justify-items-center">
                    {links.map((link, index) =>
                        index !== links.length - 1 ? (
                            <Link
                                to={link.href}
                                key={index}
                                className="hover:opacity-[0.8]"
                            >
                                {link.label}
                            </Link>
                        ) : (
                            <Link
                                to={link.href}
                                key={index}
                                className="hover:opacity-[0.8] col-span-2"
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                </div>
                {/* Form */}
                <Form />
            </div>
            {/*  Social media links*/}
            <div className="text-sm  pb-7 flex gap-7 sm:flex-col text-center items-center justify-center">
                <p>Maina and kids children foundation @ 2024</p>
                <div className="flex items-center gap-6">
                    {socialLinks.map((social, index) => (
                        <a
                            href={social.href}
                            className="hover:text-[#0f172a]"
                            title={social.title}
                            key={index}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;
