import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Video from './Video'

const HomeHeroText = ({ inlineVideoRef, inlineVideoWrapperRef }) => {
    const containerRef = useRef(null)

    useEffect(() => {
        // Only animate text, do not control video here
        const lines = containerRef.current.querySelectorAll(".hero-line")

        gsap.fromTo(
            lines,
            { y: "-100%", opacity: 0 },   // start state
            {
                y: "0%",
                opacity: 1,
                delay: 1.4,
                duration: 0.9,
                stagger: 0.3,
                ease: "power3.out"
            }
        )
    }, [])

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
