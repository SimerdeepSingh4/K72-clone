import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useContext, useEffect, useRef, useState } from 'react'
import NavContext, { NavbarContext } from '../../context/NavContext';
import { Link } from 'react-router-dom';

const FullScreenNav = (props) => {
    const stairParentRef = useRef(null)
    const fullNavLinksRef = useRef(null)
    const fullScreenRef = useRef(null)
    const [time, setTime] = useState("")

    const [navOpen, setNavOpen] = useContext(NavbarContext)
    console.log(navOpen);


    const stairsCount = props.stairsCount || 5
    function gsapAnimation() {
        const tl = gsap.timeline()
        // prepare initial states so nothing lingers between opens/closes
        tl.set('.navtopbar', { opacity: 0 })
        tl.set('.stairing', { height: 0 })
        tl.set('.link', { opacity: 0, rotateX: 90 })
        tl.set('.navlink', { opacity: 0 })
        tl.set('.navfooter', { opacity: 0, y: 20, pointerEvents: 'none' })

        // show overlay (use autoAlpha for opacity+visibility)
        tl.set('.fullscreennav', { display: 'block' })
        tl.fromTo('.fullscreennav', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.12 })

        // reveal stairs
        tl.to('.stairing', {
            delay: 0.05,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })

        // reveal nav topbar and links
        tl.to('.navtopbar', {
            opacity: 1,
            duration: 0.2,
        }, '-=0.2')
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.2
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })

        // reveal footer (bottom links/socials)
        tl.to('.navfooter', { opacity: 1, y: 0, duration: 0.18, pointerEvents: 'auto' }, '-=0.15')
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        // hide links and footer first
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.2
            }
        })
        tl.to('.navlink', { opacity: 0 }, '<')
        tl.to('.navfooter', { opacity: 0, y: 20, duration: 0.15, pointerEvents: 'none' }, '<')

        // hide topbar and stairs
        tl.to('.navtopbar', {
            opacity: 0,
            duration: 0.18,
        }, '<');
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.3
            }
        })

        // fade out overlay, then set display none to remove it from the DOM flow
        tl.to('.fullscreennav', { autoAlpha: 0, duration: 0.15 })
        tl.set('.fullscreennav', { display: 'none' })
        // restore navtopbar default inline opacity for next open
        tl.set('.navtopbar', { opacity: 1 });
    }



    useGSAP(function () {
        if (navOpen) {
            gsapAnimation()
        } else {
            gsapAnimationReverse()
        }
    }, [navOpen])

    useEffect(() => {
        document.body.style.overflow = navOpen ? "hidden" : "";
    }, [navOpen]);

    useEffect(() => {
        const updateClock = () => {
            const options = {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
                timeZone: 'America/Toronto', // Montreal timezone
            }
            setTime(new Intl.DateTimeFormat('en-GB', options).format(new Date()))
        }

        updateClock()
        const interval = setInterval(updateClock, 1000)
        return () => clearInterval(interval)
    }, [])
    const projetsRef = useRef(null);
    return (
    <div ref={fullScreenRef} id='fullscreennav' className='fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 fixed top-0 left-0'>
            <div ref={stairParentRef} className='h-screen w-full fixed'>
                <div className='h-full sm:w-full w-[120%] flex'>
                    <div className='stairing h-full w-[35%] sm:w-1/5 bg-black'></div>
                    <div className='stairing h-full w-[35%] sm:w-1/5 bg-black'></div>
                    <div className='stairing h-full w-[35%] sm:w-1/5 bg-black'></div>
                    <div className='stairing h-full w-[35%] sm:w-1/5 bg-black'></div>
                    <div className='stairing h-full w-[35%] sm:w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={fullNavLinksRef} className='relative '>
                <div className='navtopbar flex w-full justify-between p-5 items-start'>
                    <div className=''>
                        <div className=' w-28'>
                            <svg className=' w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                                <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div onClick={() => {
                        setNavOpen(false)
                    }} className='h-24 w-24 relative cursor-pointer'>
                        <div className='h-33 w-0.5 -rotate-45 origin-top absolute bg-[#FFF]'></div>
                        <div className='h-33 w-0.5 right-0 rotate-45 origin-top absolute bg-[#FFF]'></div>
                    </div>
                </div>
                <div className="py-36 sm:py-3">
                    <Link to="/projects" onClick={() => setNavOpen(false)} className="block relative">
                        <div className='link origin-top relative border-t-2 border-white'>
                            <h1 className='font-[font2] lg:text-[8vw] text-[13vw] leading-[1] text-center lg:leading-[0.8] pt-3 uppercase pb-0'>project</h1>
                            <div className='moveLink absolute flex top-0 text-black bg-[#D3FD50] border-black'>
                                <div className='moveX flex items-center '>
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[13vw] leading-[1] text-center lg:leading-[0.8] pt-4 uppercase'> Pour tout voir</h2>
                                    <img src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg"
                                        alt="" className='lg:h-24 rounded-full shrink-0 lg:w-72 object-cover h-15 w-25' />
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[13vw] leading-[1] text-center lg:leading-[0.8] pt-4 uppercase'>Pour tout voir</h2>
                                    <img src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                                        alt="" className='lg:h-24 rounded-full shrink-0 lg:w-72 object-cover h-15 w-25' />

                                </div>
                                <div className='moveX flex items-center '>
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[13vw] leading-[1] text-center lg:leading-[0.8] pt-4 uppercase'> Pour tout voir</h2>
                                    <img src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg"
                                        alt="" className='lg:h-24 rounded-full shrink-0 lg:w-72 object-cover h-15 w-25' />
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[13vw] leading-[1] text-center lg:leading-[0.8] pt-4 uppercase'>Pour tout voir</h2>
                                    <img src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                                        alt="" className='lg:h-24 rounded-full shrink-0 lg:w-72 object-cover h-15 w-25' />

                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/agence" onClick={() => setNavOpen(false)} className="block relative">
                        <div className='link origin-top relative border-t-2 border-white'>
                            <h1 className='font-[font2] lg:text-[8vw] text-[13vw] leading-[1] text-center lg:leading-[0.8] pt-3 uppercase'>Agence</h1>
                            <div className='moveLink absolute flex top-0 text-black bg-[#D3FD50]'>
                                <div className='moveX flex items-center '>
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[13vw] leading-[1] text-center lg:leading-[0.8] pt-4 uppercase'> Pour tout savoir</h2>
                                    <img src="https://k72.ca/uploads/teamMembers/Carl_640X290-640x290.jpg"
                                        alt="" className='lg:h-24 rounded-full shrink-0 lg:w-72 object-cover h-15 w-25' />
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[13vw] leading-[1] text-center lg:leading-[0.8] pt-4 uppercase'>Pour tout savoir</h2>
                                    <img src="https://k72.ca/uploads/teamMembers/Michele_640x290-640x290.jpg"
                                        alt="" className='lg:h-24 rounded-full shrink-0 lg:w-72 object-cover h-15 w-25' />

                                </div>
                                <div className='moveX flex items-center '>
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[13vw] leading-[1] text-center lg:leading-[0.8] pt-4 uppercase'> Pour tout savoir</h2>
                                    <img src="https://k72.ca/uploads/teamMembers/Carl_640X290-640x290.jpg"
                                        alt="" className='lg:h-24 rounded-full shrink-0 lg:w-72 object-cover h-15 w-25' />
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[13vw] leading-[1] text-center lg:leading-[0.8] pt-4 uppercase'>Pour tout savoir</h2>
                                    <img src="https://k72.ca/uploads/teamMembers/Michele_640x290-640x290.jpg"
                                        alt="" className='lg:h-24 rounded-full shrink-0 lg:w-72 object-cover h-15 w-25' />

                                </div>
                            </div>
                        </div> </Link>
                    <Link to="/agence" onClick={() => setNavOpen(false)} className="block relative">
                        <div className='link origin-top relative border-t-2 border-white'>
                            <h1 className='font-[font2] lg:text-[8vw] text-[13vw] leading-[1] text-center lg:leading-[0.8] pt-3 uppercase'>Contact</h1>
                            <div className='moveLink absolute flex top-0 text-black bg-[#D3FD50]'>
                                <div className='moveX flex items-center '>
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[13vw] leading-[1] text-center lg:leading-[0.8] pt-4 uppercase'> Pour envoyer un fax</h2>
                                    <img src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg"
                                        alt="" className='lg:h-24 rounded-full shrink-0 lg:w-72 object-cover h-15 w-25' />
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[13vw] leading-[1] text-center lg:leading-[0.8] pt-4 uppercase'>Pour envoyer un fax</h2>
                                    <img src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                                        alt="" className='lg:h-24 rounded-full shrink-0 lg:w-72 object-cover h-15 w-25' />

                                </div>
                                <div className='moveX flex items-center '>
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[13vw] leading-[1] text-center lg:leading-[0.8] pt-4 uppercase'> Pour envoyer un fax</h2>
                                    <img src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg"
                                        alt="" className='lg:h-24 rounded-full shrink-0 lg:w-72 object-cover h-15 w-25' />
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[13vw] leading-[1] text-center lg:leading-[0.8] pt-4 uppercase'>Pour envoyer un fax</h2>
                                    <img src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                                        alt="" className='lg:h-24 rounded-full shrink-0 lg:w-72 object-cover h-15 w-25' />

                                </div>
                            </div>
                        </div> </Link>
                    <Link to="/agence" onClick={() => setNavOpen(false)} className="block relative">
                        <div className='link origin-top relative border-t-2 border-b-2 border-white'>
                            <h1 className='font-[font2] lg:text-[8vw] text-[13vw] leading-[1] text-center lg:leading-[0.8] pt-3 uppercase'>Blogue</h1>
                            <div className='moveLink absolute flex top-0 text-black bg-[#D3FD50]'>
                                <div className='moveX flex items-center '>
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[13vw] leading-[1] text-center lg:leading-[0.8] pt-4 uppercase'> Lire les articles </h2>
                                    <img src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                                        alt="" className='lg:h-24 rounded-full shrink-0 lg:w-72 object-cover h-15 w-25' />
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[13vw] leading-[1] text-center lg:leading-[0.8]pt-4 uppercase'>Lire les articles </h2>
                                    <img src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                                        alt="" className='lg:h-24 rounded-full shrink-0 lg:w-72 object-cover h-15 w-25' />

                                </div>
                                <div className='moveX flex items-center '>
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[13vw] leading-[1] text-center lg:leading-[0.8] pt-4 uppercase'>Lire les articles </h2>
                                    <img src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                                        alt="" className='lg:h-24 rounded-full shrink-0 lg:w-72 object-cover h-15 w-25' />
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[13vw] leading-[1] text-center lg:leading-[0.8] pt-4 uppercase'>Lire les articles </h2>
                                    <img src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                                        alt="" className='lg:h-24 rounded-full shrink-0 lg:w-72 object-cover h-15 w-25' />

                                </div>
                            </div>
                        </div></Link>
                </div>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-4 p-5 font-[font2] lg:mt-23 navfooter'>
                    <div className=" bottom-2 left-2 hidden lg:flex items-center gap-4 text-2xl font-[font2] text-white ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 120 120"
                            className="w-8 h-8 text-white"
                            fill="currentColor"
                        >
                            <path d="M60 120C26.9 120 0 93.1 0 60S26.9 0 60 0s60 26.9 60 60-26.9 60-60 60zM60 5C29.7 5 5 29.7 5 60s24.7 55 55 55 55-24.7 55-55S90.3 5 60 5z" />
                            <path d="M60 120c-19.3 0-34.4-26.4-34.4-60S40.7 0 60 0s34.4 26.4 34.4 60-15.1 60-34.4 60zM60 5C43.8 5 30.5 29.7 30.5 60s13.2 55 29.5 55 29.5-24.7 29.5-55S76.2 5 60 5z" />
                            <path d="M12.2 25.6h95.6v5H12.2zM12.2 89.5h95.6v5H12.2zM2.5 57.5h115v5H2.5z" />
                            <path d="M57.5 2.5h5v115h-5z" />
                        </svg>

                        <span className='text-xl'>MONTREAL_{time}</span>

                    </div>
                    <div className='flex flex-col lg:flex-row justify-between gap-3 text-sm text-center'>
                        <a href="#" className='hover:text-[#D3FD50]'>Politique de confidentialité</a>
                        <a href="#" className='hover:text-[#D3FD50]'>Avis de confidentialité</a>
                        <a href="#" className='hover:text-[#D3FD50]'> Rapport éthique</a>
                        <a href="#" className='hover:text-[#D3FD50]'>Options de consentement</a>
                    </div>
                    <div className='flex justify-between gap-3 text-4xl  text text-center'>
                        <h4 className='border-2 px-3 rounded-3xl hover:text-[#D3FD50] font-extrabold'>FB</h4>
                        <h4 className='border-2 px-3 rounded-3xl hover:text-[#D3FD50] font-extrabold'>IG</h4>
                        <h4 className='border-2 px-3 rounded-3xl hover:text-[#D3FD50] font-extrabold'>IN</h4>
                        <h4 className='border-2 px-3 rounded-3xl hover:text-[#D3FD50] font-extrabold'>BE</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav
