import React, { useRef, useEffect, useContext } from "react"
import { gsap } from "gsap"
import Video from "../components/home/Video"
import HomeHeroText from "../components/home/HomeHeroText"
import HomeBottom from "../components/home/HomeBottom"
import { useGSAP } from "@gsap/react"
import { LoaderContext } from "../context/NavContext"

const Home = () => {
  const mainVideoRef = useRef(null)       // 🎬 main fullscreen video
  const inlineVideoRef = useRef(null)     // 🎬 inline small video
  const imgRef = useRef(null)
  const inlineVideoWrapperRef = useRef(null)
  const [loading] = useContext(LoaderContext)

  useEffect(() => {
    if (loading) return; // Wait for loader to finish

    if (mainVideoRef.current && inlineVideoRef.current) {
      mainVideoRef.current.currentTime = 0
      inlineVideoRef.current.currentTime = 0

      // keep inline hidden initially
      gsap.set(inlineVideoWrapperRef.current, { opacity: 0 })
    }

    if (imgRef.current) {
      // Start reveal instantly when loader fade begins for maximum responsiveness
      gsap.to(imgRef.current, {
        opacity: 0,
        duration: 2,
        ease: "power2.inOut",
        delay: 0.1, 
        onStart: () => {
          // Play videos as the image begins its slow fade
          if (mainVideoRef.current) mainVideoRef.current.play()
          if (inlineVideoRef.current) inlineVideoRef.current.play()
          gsap.to(inlineVideoWrapperRef.current, {
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
          })
        },
        onComplete: () => {
          if (imgRef.current) imgRef.current.style.display = "none"
        },
      })
    }
  }, [loading])

  const projetsRef = useRef(null);
  
  
  useGSAP(() => {
    if (loading) return;

    gsap.from([projetsRef.current], {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5, 
    });
  }, [loading]);


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
