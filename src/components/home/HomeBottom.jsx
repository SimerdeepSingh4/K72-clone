import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HomeBottom = () => {
    const [time, setTime] = useState("")

  useEffect(() => {
    const updateClock = () => {
      const options= {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'America/Toronto', // Montreal timezone
      }
      setTime(new Intl.DateTimeFormat('en-GB', options).format(new Date()))
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)
    return () => clearInterval(interval)
  }, [])
    const projetsRef = useRef(null);


    useGSAP(() => {
        gsap.from([projetsRef.current], {
            y: 100,
            opacity: 0,
            delay: 1.7,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.3,
        });
    });

    return (
        <div className="font-[font2] flex items-center justify-center gap-5 pb-3 " ref={projetsRef}>
            <div
                ref={projetsRef}
                className="leading-[4vw] uppercase flex items-end border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full px-5 lg:px-7 lg:pt-3"
            >
                <Link className="text-[6vw] mt-3 mb-1" to="/projects">
                    Projets
                </Link>
            </div>
            <div
                className="leading-[4vw] uppercase flex items-end border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full px-5 lg:px-7 lg:pt-3"
            >
                <Link className="text-[6vw] mt-3 mb-1" to="/Agence">
                    Agence
                </Link>
            </div>
            {/* Montreal clock bottom-left */}
            <div className="absolute bottom-2 left-2 hidden lg:flex items-center gap-4 text-2xl font-[font2] text-white ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 120 120"
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                >
                    <path d="M60 120C26.9 120 0 93.1 0 60S26.9 0 60 0s60 26.9 60 60-26.9 60-60 60zM60 5C29.7 5 5 29.7 5 60s24.7 55 55 55 55-24.7 55-55S90.3 5 60 5z" />
                    <path d="M60 120c-19.3 0-34.4-26.4-34.4-60S40.7 0 60 0s34.4 26.4 34.4 60-15.1 60-34.4 60zM60 5C43.8 5 30.5 29.7 30.5 60s13.2 55 29.5 55 29.5-24.7 29.5-55S76.2 5 60 5z" />
                    <path d="M12.2 25.6h95.6v5H12.2zM12.2 89.5h95.6v5H12.2zM2.5 57.5h115v5H2.5z" />
                    <path d="M57.5 2.5h5v115h-5z" />
                </svg>

                <span className='text-xl'>MONTREAL_{time}</span>

            </div>

        </div>
    );
};

export default HomeBottom;
