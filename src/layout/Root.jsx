import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import StringText from "../components/10th Anniversary/StringText";
// import FloatingAnniversaryBox from '../components/10th Anniversary/FloatingAnniversaryBox'
import AnniversaryModal from "../components/10th Anniversary/AnniversaryModal";

const Root = () => {
    return (
        <div className="font-kumbh">
            <Navbar />
            <MenuBar />
            <Outlet />
            <AnniversaryModal />
            <StringText />
            {/* <FloatingAnniversaryBox/> */}
            <Footer />
        </div>
    );
};

export default Root;
