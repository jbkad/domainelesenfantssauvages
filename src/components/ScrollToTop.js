import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        const scrollElements = {
            top: 0,
            left: 0,
            behavior: "instant"
        };

        window.scrollTo(scrollElements);
    },  [pathname]);

    return null;
};