import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { imageArray, getImageName } from "../components/agence/data";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

useGSAP(() => {
  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: "(min-width: 1024px)",
      isMobile: "(max-width: 1023px)",
    },
    (context) => {
      const { isDesktop, isMobile } = context.conditions;

      if (isDesktop) {
        gsap.to(imageDivRef.current, {
          scrollTrigger: {
            trigger: imageDivRef.current,
            start: "top 25%",
            end: "top -230%",
            scrub: true,
            pin: true,
            markers: false,
            onUpdate: (elem) => {
              const totalImages = imageArray.length;
              const imageIndex = Math.min(
                Math.floor(elem.progress * totalImages),
                totalImages - 1
              );
              if (imageRef.current) {
                imageRef.current.src = imageArray[imageIndex];
                imageRef.current.alt = getImageName(imageArray[imageIndex]);
              }
            },
          },
        });
      }

if (isMobile) {
  // Kill any existing ScrollTrigger just in case
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  let currentIndex = 0;
  const totalImages = imageArray.length;

  // Immediately show first image
  if (imageRef.current) {
    imageRef.current.src = imageArray[0];
    imageRef.current.alt = getImageName(imageArray[0]);
  }

  // 🔁 Automatically change every few seconds
  const interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    if (imageRef.current) {
      gsap.to(imageRef.current, {

        duration: 0.5,
        onComplete: () => {
          imageRef.current.src = imageArray[currentIndex];
          imageRef.current.alt = getImageName(imageArray[currentIndex]);
          gsap.to(imageRef.current, { duration: 0.5 });
        },
      });
    }
  }, 2500);


  return () => clearInterval(interval);
}
    }
  );


  return () => {
    mm.revert();
  };
});


  return (
    <div className="min-h-screen w-full bg-white text-black">
      <div className="  section1 py-1">
        <div
          ref={imageDivRef}
          className="absolute overflow-hidden rounded-3xl h-[50vw] w-[30vw] top-[20vh] left-[20vw] lg:h-[20vw] lg:w-[15vw] lg:top-[25vh] lg:left-[29vw] "
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover "
            src={imageArray[0]}
            alt={getImageName(imageArray[0])}
          />
        </div>
        <div className="relative font-[font2]">
          <div className="mt-[38vh] lg:mt-[35vh] lg:pt-20">
            <h1 className="uppercase text-center text-[9vh] text-black lg:text-[40vh] leading-tight" >
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="mt-30 lg:pl-150 lg:mt-5">
            <p className="text-2xl  text-black lg:pr-2.5 lg:text-7xl indent-50 lg:indent-70 lg:text-left text-center  sm:tracking-wider">
              Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
          </div>
          <div className="flex ml-[10vw] gap-[15vw] mt-[30vh] text-3xl font-[font2]">
            <div >
              <h2>Expertise</h2>
            </div>
            <div>
              <ul>
                <li>Stratégie</li>
                <li>Publicité</li>
                <li>Branding</li>
                <li>Design </li>
                <li>Contenu</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row p-5 mt-25 font-[font2] gap-10 text-3xl">
            <p>
              Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.
            </p>
            <p>
              Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.
            </p>
            <p>
              Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agence;