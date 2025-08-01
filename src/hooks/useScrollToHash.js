import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useScrollToHash = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const hash = location.hash.replace("#", "");
        if (hash) {
            setTimeout(() => {
                const el = document.getElementById(hash);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    // Remove hash from URL after scrolling
                    navigate(location.pathname, { replace: true });
                }
            }, 0);
        }
    }, [location.hash, location.pathname, navigate]);
};

export default useScrollToHash;
