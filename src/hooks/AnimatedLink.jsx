import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoaderContext } from "../context/NavContext";
import gsap from "gsap";

const AnimatedLink = ({ to, children, className, onClick }) => {
    const navigate = useNavigate();
    const [, setLoading] = useContext(LoaderContext);

    const handleClick = async (e) => {
        e.preventDefault();

        if (onClick) onClick();

        // STEP 1: Play page-closing stair animation
        await gsap.to(".stair", {
            height: "100%",
            duration: 0.5,
            ease: "power2.inOut",
            stagger: 0.05,
        });

        // STEP 2: Trigger loader to show
        setLoading(true);

        // STEP 3: Wait a bit for loader to play
        await new Promise((res) => setTimeout(res, 1000));

        // STEP 4: Navigate to new page
        navigate(to);

        // STEP 5: Give new page time to load + kill old animations
        await new Promise((res) => setTimeout(res, 800));

        // STEP 6: Hide loader
        setLoading(false);

        // STEP 7: Play page-opening stair animation
        gsap.fromTo(
            ".stair",
            { y: "100%" },
            {
                y: "0%",
                duration: 0.5,
                ease: "power2.inOut",
                stagger: 0.05,
            }
        );
    };

    return (
        <a href={to} onClick={handleClick} className={className}>
            {children}
        </a>
    );
};

export default AnimatedLink;
