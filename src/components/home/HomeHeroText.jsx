import React, { useRef, useEffect, useContext } from 'react'
import { gsap } from 'gsap'
import Video from './Video'
import { useGSAP } from "@gsap/react"
import { LoaderContext } from '../../context/NavContext'

const HomeHeroText = ({ inlineVideoRef, inlineVideoWrapperRef }) => {
    const containerRef = useRef(null)
    const [loading] = useContext(LoaderContext)

    useGSAP(() => {
        if (loading) return;

        const lines = containerRef.current.querySelectorAll(".hero-line")

        gsap.fromTo(
            lines,
            { y: "150%", opacity: 0 },   // Start from below
            {
                y: "0%",
                opacity: 1,
                delay: 0.3,            // Starts shortly after loader begins to fade
                duration: 1.2,
                stagger: 0.15,
                ease: "power4.out"
            }
        )
    }, [loading]);

    return (
        <div 
            ref={containerRef} 
            className='font-[font1] mt-100 lg:mt-0 pt-5 text-center '
        >
            <div className='hero-line lg:text-[9.5vw] text-[12vw] mb-4 justify-center flex items-center uppercase leading-[8vw] '>
                L'étincelle
            </div>
            
            <div className='hero-line lg:text-[9.5vw] text-[12vw] mb-4 justify-center flex items-end-safe uppercase leading-[8vw] tracking-tighter'>
                <span className='mr-2'>qui</span>
                <div className='lg:h-[8vw] lg:w-[17vw] h-[10vw] w-[20vw] -mt-5 rounded-full overflow-hidden ' ref={inlineVideoWrapperRef}>
                    <Video ref={inlineVideoRef} /> 
                </div>
                génère
            </div>
            
            <div className='hero-line lg:text-[9.5vw] text-[12vw] mb-4 justify-center flex items-center uppercase leading-[8vw]'>
                la créativité
            </div>
        </div>
    )
}

export default HomeHeroText
