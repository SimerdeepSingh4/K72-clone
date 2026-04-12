import React, { useContext, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'
import { TransitionContext } from '../../context/NavContext'

const Stairs = (props) => {
    const currentPath = useLocation().pathname
    const { isTransitioning } = useContext(TransitionContext)

    const stairParentRef = useRef(null)
    const pageRef = useRef(null)
    const stairsCount = props.stairsCount || 5
    const stairsRefs = useRef([])

    const firstLoad = useRef(true)

    // Handle Entry/Reveal animation when path changes
    useGSAP(
        () => {
            const stairs = stairsRefs.current;
            const tl = gsap.timeline();

            // Always ensure parent is visible during transition
            gsap.set(stairParentRef.current, { display: 'block' });

            if (firstLoad.current) {
                // Initial load: stairs skip the entering phase and just slide out
                gsap.set(stairs, { y: '0%' });
                firstLoad.current = false;
            }

            tl.to(stairs, {
                y: '100%',
                duration: 0.7,
                ease: 'power2.inOut',
                stagger: 0.1,
            });

            tl.set(stairParentRef.current, { display: 'none' });

            // Animate page content fade in (skip initial load if handled by Loader/placeholder)
            if (!firstLoad.current) {
                gsap.fromTo(pageRef.current, 
                    { opacity: 0 }, 
                    { opacity: 1, duration: 0.4, ease: 'power2.out' }
                );
            } else {
                gsap.set(pageRef.current, { opacity: 1 });
            }

            return () => {
                tl.kill();
            };
        },
        { dependencies: [currentPath], revertOnUpdate: true }
    );

    // Handle Exit/Cover animation when transition starts
    useGSAP(() => {
        if (isTransitioning) {
            const stairs = stairsRefs.current;
            gsap.set(stairParentRef.current, { display: 'block' });
            gsap.set(stairs, { y: '-100%' });
            
            gsap.to(stairs, {
                y: '0%',
                duration: 0.6,
                ease: "power2.inOut",
                stagger: 0.1,
            });
        }
    }, [isTransitioning])

    return (
        <div className="relative">
            <div 
                ref={stairParentRef} 
                className="stairs-parent fixed inset-0 z-[9999] pointer-events-none" 
                aria-hidden="true"
                style={{ display: 'none' }}
            >
                <div className="h-full w-full flex">
                    {Array.from({ length: stairsCount }).map((_, i) => (
                        <div
                            key={i}
                            className="stair h-full flex-1 bg-black"
                            ref={el => stairsRefs.current[i] = el}
                        ></div>
                    ))}
                </div>
            </div>
            <div ref={pageRef} className="w-full h-full">{props.children}</div>
        </div>
    );
}

export default Stairs
