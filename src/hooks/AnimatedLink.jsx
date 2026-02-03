import { useContext } from "react";
import { TransitionContext } from "../context/NavContext";

const AnimatedLink = ({ to, children, className, onClick }) => {
    const { handleRouteChange } = useContext(TransitionContext);

    const handleClick = (e) => {
        e.preventDefault();
        if (onClick) onClick();
        handleRouteChange(to);
    };

    return (
        <div onClick={handleClick} className={className} style={{ cursor: 'pointer' }}>
            {children}
        </div>
    );
};

export default AnimatedLink;
