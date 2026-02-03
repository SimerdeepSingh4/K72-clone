import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef, useState } from "react";
import { imageArray, getImageName } from "../components/agence/data";

const Agence = () => {


  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const listRef = useRef(null);
  const h3Ref = useRef(null);
  const h6Ref = useRef(null);

const [hovered, setHovered] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const team = [
  {
    role: "Conseillère",
    name: "Sophie Auger",
    image: "https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac",
  },
  {
    role: "Directeur principal",
    name: "Carl Godbout",
    image: "https://k72.ca/images/teamMembers/Carl_640X960.jpg?w=640&h=960&s=b523e3784fbd5e71c1aa74a917445235",
  },
  {
    role: "Conceptrice-rédactrice",
    name: "Camille Brière",
    image: "https://k72.ca/images/teamMembers/CAMILLE_640X960_2.jpg?w=640&h=960&s=28b4a95be0b5d4f2d698c8a63de0c8df",
  },
  {
    role: "Directrice artistique",
    name: "Mélanie Laviolette",
    image: "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
  },
  {
    role: "Directrice conseil",
    name: "Meggie Lavoie",
    image: "https://k72.ca/images/teamMembers/MEGGIE_640X980_2.jpg?w=640&h=960&s=7d78cdb1fad347408e05a311cc4018ef",
  },
  {
    role: "Directrice de la stratégie",
    name: "Michèle Riendeau",
    image: "https://k72.ca/images/teamMembers/Michele_640X980.jpg?w=640&h=960&s=145fe77d0a66376d9904f39939ad8891",
  },
];

  useGSAP(() => {
  

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
              end: "top -210%",

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

          gsap.to(section1Ref.current, {
            backgroundColor: "black", // fade to black
            color: "#fff", // text turns white for contrast
            scrollTrigger: {
              trigger: section2Ref.current,
              pin: true,
              start: "top center",
              end: "top center",
              markers: false,
              scrub: 2,
            },
          });


          return () => clearInterval(interval);
        }
      }
    );
    gsap.to(section1Ref.current, {
      backgroundColor: "black", // fade to black
      color: "#fff", // text turns white for contrast
      scrollTrigger: {
        trigger: section2Ref.current,
        pin: true,
        start: "top 100%",
        end: "top 100%",
        markers: false,
        scrub: 2,
      },
    });

    return () => {
      mm.revert();
    };
  });


  return (
    <div ref={section1Ref} className="min-h-screen w-full bg-white text-black">
      <div className="  section1 py-1">
        <div
          ref={imageDivRef}
          className="absolute overflow-hidden rounded-3xl h-[50vw] w-[30vw] top-[20vh] left-[20vw] lg:h-[20vw] lg:w-[15vw] lg:top-[25vh] lg:left-[25vw] "
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
      <div
        ref={section2Ref}
        className="section2 transition  flex flex-col justify-center items-center w-full ">
        <div className="py-10 w-full">
          <div
            onMouseEnter={(e) => {
              const list = e.currentTarget.querySelector(".list");
              const h6 = e.currentTarget.querySelector("h6");
              const h3 = e.currentTarget.querySelector("h3");

              list.classList.add("active");
              h6.style.color = "black";
              h3.style.color = "black";
            }}
            onMouseLeave={(e) => {
              const list = e.currentTarget.querySelector(".list");
              const h6 = e.currentTarget.querySelector("h6");
              const h3 = e.currentTarget.querySelector("h3");

              list.classList.remove("active");
              h6.style.color = "white";
              h3.style.color = "white";
            }}
            className="w-full"
          >
            <div className="list relative overflow-hidden cursor-pointer border-t-2 w-full flex items-center justify-between font-[font2] leading-[1] lg:leading-[2] pt-3 uppercase transition-colors duration-300">
              <h6 className="lg:text-[1.7vw] text-[3vw] text-left z-10">Conseillère</h6>
              <h3 className="lg:text-[3vw] text-[3vw] text-right z-10">Sophie Auger</h3>
            </div>
          </div>

          <div
            onMouseEnter={(e) => {
              const list = e.currentTarget.querySelector(".list");
              const h6 = e.currentTarget.querySelector("h6");
              const h3 = e.currentTarget.querySelector("h3");

              list.classList.add("active");
              h6.style.color = "black";
              h3.style.color = "black";
            }}
            onMouseLeave={(e) => {
              const list = e.currentTarget.querySelector(".list");
              const h6 = e.currentTarget.querySelector("h6");
              const h3 = e.currentTarget.querySelector("h3");

              list.classList.remove("active");
              h6.style.color = "white";
              h3.style.color = "white";
            }}
            className="w-full"
          >
            <div className="list relative overflow-hidden cursor-pointer border-t-2  w-full flex items-center justify-between font-[font2] leading-[1] lg:leading-[2] pt-3 uppercase transition-colors duration-300">
              <h6 className="lg:text-[1.7vw] text-[3vw] text-left z-10">Directeur principal</h6>
              <h3 className="lg:text-[3vw] text-[3vw] text-right z-10">Carl Godbout</h3>
            </div>
          </div>

          <div
            onMouseEnter={(e) => {
              const list = e.currentTarget.querySelector(".list");
              const h6 = e.currentTarget.querySelector("h6");
              const h3 = e.currentTarget.querySelector("h3");

              list.classList.add("active");
              h6.style.color = "black";
              h3.style.color = "black";
            }}
            onMouseLeave={(e) => {
              const list = e.currentTarget.querySelector(".list");
              const h6 = e.currentTarget.querySelector("h6");
              const h3 = e.currentTarget.querySelector("h3");

              list.classList.remove("active");
              h6.style.color = "white";
              h3.style.color = "white";
            }}
            className="w-full"
          >
            <div className="list relative overflow-hidden cursor-pointer border-t-2  w-full flex items-center justify-between font-[font2] leading-[1] lg:leading-[2] pt-3 uppercase transition-colors duration-300">
              <h6 className="lg:text-[1.7vw] text-[3vw] text-left z-10">Conceptrice-rédactrice</h6>
              <h3 className="lg:text-[3vw] text-[3vw] text-right z-10">Camille Brière</h3>
            </div>
          </div>
          <div
            onMouseEnter={(e) => {
              const list = e.currentTarget.querySelector(".list");
              const h6 = e.currentTarget.querySelector("h6");
              const h3 = e.currentTarget.querySelector("h3");

              list.classList.add("active");
              h6.style.color = "black";
              h3.style.color = "black";
            }}
            onMouseLeave={(e) => {
              const list = e.currentTarget.querySelector(".list");
              const h6 = e.currentTarget.querySelector("h6");
              const h3 = e.currentTarget.querySelector("h3");

              list.classList.remove("active");
              h6.style.color = "white";
              h3.style.color = "white";
            }}
            className="w-full"
          >
            <div className="list relative overflow-hidden cursor-pointer border-t-2  w-full flex items-center justify-between font-[font2] leading-[1] lg:leading-[2] pt-3 uppercase transition-colors duration-300">
              <h6 className="lg:text-[1.7vw] text-[3vw] text-left z-10"> Directrice artistique</h6>
              <h3 className="lg:text-[3vw] text-[3vw] text-right z-10">Mélanie Laviolette</h3>
            </div>
          </div>
          <div
            onMouseEnter={(e) => {
              const list = e.currentTarget.querySelector(".list");
              const h6 = e.currentTarget.querySelector("h6");
              const h3 = e.currentTarget.querySelector("h3");

              list.classList.add("active");
              h6.style.color = "black";
              h3.style.color = "black";
            }}
            onMouseLeave={(e) => {
              const list = e.currentTarget.querySelector(".list");
              const h6 = e.currentTarget.querySelector("h6");
              const h3 = e.currentTarget.querySelector("h3");

              list.classList.remove("active");
              h6.style.color = "white";
              h3.style.color = "white";
            }}
            className="w-full"
          >
            <div className="list relative overflow-hidden cursor-pointer border-t-2  w-full flex items-center justify-between font-[font2] leading-[1] lg:leading-[2] pt-3 uppercase transition-colors duration-300">
              <h6 className="lg:text-[1.7vw] text-[3vw] text-left z-10">Directrice conseil</h6>
              <h3 className="lg:text-[3vw] text-[3vw] text-right z-10">Meggie Lavoie</h3>
            </div>
          </div>
          <div
            onMouseEnter={(e) => {
              const list = e.currentTarget.querySelector(".list");
              const h6 = e.currentTarget.querySelector("h6");
              const h3 = e.currentTarget.querySelector("h3");

              list.classList.add("active");
              h6.style.color = "black";
              h3.style.color = "black";
            }}
            onMouseLeave={(e) => {
              const list = e.currentTarget.querySelector(".list");
              const h6 = e.currentTarget.querySelector("h6");
              const h3 = e.currentTarget.querySelector("h3");

              list.classList.remove("active");
              h6.style.color = "white";
              h3.style.color = "white";
            }}
            className="w-full"
          >
            <div className="list relative overflow-hidden cursor-pointer border-t-2 border-b-2 border-white w-full flex items-center justify-between font-[font2] leading-[1] lg:leading-[2] pt-3 uppercase transition-colors duration-300">
              <h6 className="lg:text-[1.7vw] text-[3vw] text-left z-10">Directrice de la stratégie</h6>
              <h3 className="lg:text-[3vw] text-[3vw] text-right z-10">Michèle Riendeau</h3>
            </div>
          </div>


        </div>

      </div>
    </div>
  );
};

export default Agence;