import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const usePageTransition = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleRouteChange = (to) => {
    if (isTransitioning || location.pathname === to) return;

    setIsTransitioning(true);
    setTimeout(() => {
      navigate(to);
      setIsTransitioning(false)
    }, 1000); // This duration should be in sync with the stair animation
  };

  return { handleRouteChange, isTransitioning };
};
