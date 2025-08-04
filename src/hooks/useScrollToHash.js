import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useScrollToHash = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const hash = location.hash.replace("#", "");
        const onscrollEnd = () => {
            // Remove hash from URL after scrolling
            navigate(location.pathname, { replace: true });
        };
        //  window.addEventListener("scrollend", onscrollEnd);
        if (hash) {
            setTimeout(() => {
                const el = document.getElementById(hash);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    // onscrollEnd();
                }
            }, 0);
        }

        // return () => window.removeEventListener("scrollend", onscrollEnd);
    }, [location.hash, location.pathname, navigate]);
};

export default useScrollToHash;
