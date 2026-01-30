import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const Loader = ({ stairsCount = 5 }) => {
  const stairsRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let tl = null
    let globalFallback = null

    const startLoader = (bars) => {
      gsap.set(bars, { height: 10 })

      tl = gsap.timeline({
        defaults: { ease: 'power1.inOut' },
        onComplete: () => {
          gsap.to('.loader-container', {
            opacity: 0,
            duration: 1.2,
            ease: 'power2.out',
            onComplete: () => setIsVisible(false),
          })
        },
      })

      tl.to(bars, {
        height: 100,
        duration: 0.8,
        stagger: {
          each: 0.15,
          yoyo: true,
          repeat: 1,
        },
      })
    }

    const waitForWindowLoad = () => new Promise((resolve) => {
      if (document.readyState === 'complete') return resolve()
      window.addEventListener('load', () => resolve(), { once: true })
    })

    const waitForImages = () => {
      const imgs = Array.from(document.images)
      if (!imgs.length) return Promise.resolve()
      return Promise.all(imgs.map((img) => new Promise((res) => {
        if (img.complete) return res()
        img.addEventListener('load', res, { once: true })
        img.addEventListener('error', res, { once: true })
      })))
    }

    const waitForVideos = () => {
      const vids = Array.from(document.querySelectorAll('video'))
      if (!vids.length) return Promise.resolve()
      return Promise.all(vids.map((v) => new Promise((res) => {
        if (v.readyState >= 2) return res()
        const onReady = () => res()
        v.addEventListener('loadeddata', onReady, { once: true })
        v.addEventListener('error', onReady, { once: true })
      })))
    }

    const waitForFonts = () => (document.fonts ? document.fonts.ready : Promise.resolve())

    const waitForAssets = async () => {
      await Promise.allSettled([
        waitForWindowLoad(),
        waitForImages(),
        waitForVideos(),
        waitForFonts(),
      ])
    }

    // show loader visually and prevent scroll while waiting
    document.body.style.overflow = 'hidden'

    waitForAssets().then(() => {
      const bars = stairsRefs.current && stairsRefs.current.length ? stairsRefs.current : Array.from(document.querySelectorAll('.loader-bar'))
      if (bars && bars.length) {
        startLoader(bars)
      } else {
        setIsVisible(false)
      }
    })

    // global fallback to avoid infinite loader
    globalFallback = setTimeout(() => {
      setIsVisible(false)
      if (tl) tl.kill()
    }, 8000)

    return () => {
      document.body.style.overflow = ''
      if (tl) tl.kill()
      if (globalFallback) clearTimeout(globalFallback)
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loader-container fixed inset-0 z-[99999] bg-black flex flex-col justify-between">
      {/* Top-left SVG logo */}
      <div className="p-8">
        <div className="w-28">
          <svg
            className="w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 103 44"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Bottom-right loader bars */}
      <div className="flex justify-end items-end pb-10 pr-10">
        <div className="flex items-end gap-[6px]">
          {Array.from({ length: stairsCount }).map((_, i) => (
            <div
              key={i}
              ref={(el) => (stairsRefs.current[i] = el)}
              className="w-[10px] bg-white loader-bar"
              style={{ height: "10px" }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
