import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import Video from "../components/home/Video"
import HomeHeroText from "../components/home/HomeHeroText"
import HomeBottom from "../components/home/HomeBottom"
import { useGSAP } from "@gsap/react"

const Home = () => {
  const mainVideoRef = useRef(null)       // 🎬 main fullscreen video
  const inlineVideoRef = useRef(null)     // 🎬 inline small video
  const imgRef = useRef(null)
  const inlineVideoWrapperRef = useRef(null)

  useEffect(() => {
    if (mainVideoRef.current && inlineVideoRef.current) {
      mainVideoRef.current.currentTime = 0
      inlineVideoRef.current.currentTime = 0

      // keep inline hidden initially
      gsap.set(inlineVideoWrapperRef.current, { opacity: 0 })
    }

    if (imgRef.current) {
      gsap.to(imgRef.current, {
        opacity: 0,
        delay: 2.5,
        onStart: () => {
          // 🔑 start videos slightly before fade completes
          if (mainVideoRef.current) mainVideoRef.current.play()
          if (inlineVideoRef.current) inlineVideoRef.current.play()
          gsap.to(inlineVideoWrapperRef.current, {
            opacity: 1,
          })
        },
        onComplete: () => {
          if (imgRef.current) imgRef.current.style.display = "none"


        },
      })
    }
  }, [])

  const projetsRef = useRef(null);
  
  
      useGSAP(() => {
          gsap.from([projetsRef.current], {
              y: -100,
              opacity: 0,
              delay: 1.7,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.3,
          });
      });


  return (
    <div className=''>
      <div className='h-screen w-screen fixed'>
        <img
          ref={imgRef}
          src="/Assets/img1.jpg"
          alt="loading..."
          className="absolute top-0 left-0 h-full w-full object-cover z-10"

        />
        <Video ref={mainVideoRef} />
      </div>
      <div className='h-screen w-screen relative flex flex-col justify-between '>
        <HomeHeroText
          inlineVideoWrapperRef={inlineVideoWrapperRef}
          inlineVideoRef={inlineVideoRef}
        />
        <div className="font-[font2] ml-30 lg:ml-300 pr-2.5 text-sm indent-19 tracking-wider" ref={projetsRef}>
          
          K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la  friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête,  on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
        </div>
        <HomeBottom />
      </div>

    </div>
  )
}

export default Home
