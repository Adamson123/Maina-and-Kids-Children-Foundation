import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import StringText from "../components/10th Anniversary/StringText";
import AnniversaryModal from "../components/10th Anniversary/AnniversaryModal";
import DonateModal from "../components/DonateModal";

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        // Use setTimeout to ensure scroll happens after all content is rendered
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "auto" });
        }, 0);
    }, [pathname]);
    return null;
};

const Root = () => {
    return (
        <div className="font-kumbh">
            <Toaster position="top-center" />
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
