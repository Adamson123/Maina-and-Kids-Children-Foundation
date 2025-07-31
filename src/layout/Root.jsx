import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import StringText from "../components/10th Anniversary/StringText";
import AnniversaryModal from "../components/10th Anniversary/AnniversaryModal";
import DonateModal from "../components/DonateModal";

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        if (!hash) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [pathname, hash]);
    return null;
};

const Root = () => {
    return (
        <div className="font-kumbh">
            <ScrollToTop />
            <Navbar />
            <MenuBar />
            <Outlet />
            <AnniversaryModal />
            <StringText />
            {/* <FloatingAnniversaryBox/> */}
            <DonateModal />
            <Footer />
        </div>
    );
};

export default Root;
