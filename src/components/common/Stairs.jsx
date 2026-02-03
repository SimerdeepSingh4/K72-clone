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

    useGSAP(
        () => {
            const stairs = stairsRefs.current;
            const tl = gsap.timeline({ paused: true });

            if (firstLoad.current) {
                tl.set(stairParentRef.current, { display: 'block' });
                tl.set(stairs, { y: '-50%' });
                tl.to(stairs, {
                    y: '150%',
                    duration: 0.7,
                    ease: 'power2.inOut',
                    stagger: { amount: -0.35 },
                });
                tl.to(stairParentRef.current, { display: 'none' });
                tl.play();
                firstLoad.current = false;
            } else {
                // Entry animation
                tl.set(stairParentRef.current, { display: 'block' });
                tl.from(stairs, {
                    height: 0,
                    duration: 0.7,
                    ease: 'power2.inOut',
                    stagger: { amount: -0.35 },
                });
                tl.to(stairs, {
                    y: '150%',
                    duration: 0.7,
                    ease: 'power2.inOut',
                    stagger: { amount: -0.35 },
                });
                tl.to(stairParentRef.current, { display: 'none' });
                tl.to(stairs, { y: '0%' });
                tl.play();
            }

            gsap.from(pageRef.current, {
                opacity: 0,
                duration: 0.2,
                delay: 1,
                ease: 'power2.out',
            });

            return () => {
                tl.kill();
            };
        },
        [currentPath]
    );

    useGSAP(() => {
        if (isTransitioning) {
            const tl = gsap.timeline();
            tl.to(".stair", {
                y: "0%",
                height: "100%",
                duration: 0.6,
                ease: "power2.inOut",
                stagger: 0.1,
            });
        }
    }, [isTransitioning])

    return (
        <div>
            <div ref={stairParentRef} className="h-[200%] w-full fixed z-10 top-0" aria-hidden="true">
                <div className="h-[150%] lg:h-full w-full flex">
                    {Array.from({ length: stairsCount }).map((_, i) => (
                        <div
                            key={i}
                            className="stair h-full w-1/5 bg-black"
                            ref={el => stairsRefs.current[i] = el}
                        ></div>
                    ))}
                </div>
            </div>
            <div ref={pageRef}>{props.children}</div>
        </div>
    );
}

export default Stairs
