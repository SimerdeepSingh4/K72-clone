import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";

export const usePageTransition = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timelineRef = useRef(null);

  const handleRouteChange = (to) => {
    if (isTransitioning || location.pathname === to) return;

    setIsTransitioning(true);

    // Kill all old GSAP animations before transitioning
    gsap.globalTimeline.clear();

    const tl = gsap.timeline({
      onComplete: () => {
        navigate(to);
        setTimeout(() => setIsTransitioning(false), 600); // give loader & stairs time
      },
    });

    // Example exit animation (stair closing)
    tl.to(".stair", {
      y: "0%",
      height: "100%",
      duration: 0.6,
      ease: "power2.inOut",
      stagger: 0.1,
    });

    timelineRef.current = tl;
  };

  // On route load (entry animation)
  useEffect(() => {
    if (!isTransitioning) {
      const tl = gsap.timeline();
      tl.from(".stair", {
        y: "150%",
        duration: 0.7,
        ease: "power2.inOut",
        stagger: { amount: -0.35 },
      });
    }
  }, [location]);

  return { handleRouteChange, isTransitioning };
};
