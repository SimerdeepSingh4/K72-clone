import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { imageArray, getImageName } from "../components/agence/data";
import {
  ANIMATION_END,
  ANIMATION_START,
  IMAGE_HEIGHT,
  IMAGE_LEFT,
  IMAGE_TOP,
  IMAGE_WIDTH,
  TEXT_MARGIN_LEFT,
  TITLE_LINE_HEIGHT,
  TITLE_MARGIN_TOP,
} from "../components/agence/constants";
import "./Agence.css";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    function () {
      const tl = gsap.to(imageDivRef.current, {
        scrollTrigger: {
          trigger: imageDivRef.current,
          start: ANIMATION_START,
          end: ANIMATION_END,
          scrub: true,
          pin: true,
          // pinReparent: true,
          // pinType: 'transform',

          onUpdate: (elem) => {
            // Ensure every image appears while scrolling
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
      return () => {
        tl.kill();
      };
    },
    { scope: imageDivRef }
  );

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="section1 py-1">
        <div
          ref={imageDivRef}
          className="image-container"
          style={{
            height: IMAGE_HEIGHT,
            width: IMAGE_WIDTH,
            top: IMAGE_TOP,
            left: IMAGE_LEFT,
          }}
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover "
            src={imageArray[0]}
            alt={getImageName(imageArray[0])}
          />
        </div>
        <div className="title-container">
          <div style={{ marginTop: TITLE_MARGIN_TOP }}>
            <h1 className="title" style={{ lineHeight: TITLE_LINE_HEIGHT }}>
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div style={{ paddingLeft: TEXT_MARGIN_LEFT, marginTop: "5rem" }}>
            <p className="text pr-2.5 text-sm indent-20">
              Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;