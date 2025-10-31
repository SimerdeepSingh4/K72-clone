import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useContext, useRef } from 'react'
import NavContext, { NavbarContext } from '../../context/NavContext';

const FullScreenNav = (props) => {
    const stairParentRef = useRef(null)
    const fullNavLinksRef = useRef(null)
    const fullScreenRef = useRef(null)

    const [navOpen, setNavOpen] = useContext(NavbarContext)
    console.log(navOpen);


    const stairsCount = props.stairsCount || 5
    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.set('.navtopbar', { opacity: 0 })
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.1,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
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
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.2
            }
        })
        tl.to('.navtopbar', {
            opacity: 0,
            duration: 0.2,
        }, '<');
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
        tl.set('.navtopbar', { opacity: 1 });
    }



    useGSAP(function () {
        if (navOpen) {
            gsapAnimation()
        } else {
            gsapAnimationReverse()
        }
    }, [navOpen])

    return (
        <div ref={fullScreenRef} id='fullscreennav' className='fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 absolute'>
            <div ref={stairParentRef} className='h-screen w-full fixed'>
                <div className='h-full w-full flex'>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
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
                <div className="py-3">
                    <div className='link origin-top relative border-t-2 border-white'>
                        <h1 className='font-[font2] text-[8vw] text-center leading-[1] pt-3 uppercase pb-0'>Projects</h1>
                        <div className='moveLink absolute flex top-0 text-black bg-[#D3FD50] border-black'>
                            <div className='moveX flex items-center '>
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[1] pt-4 uppercase'> Pour tout voir</h2>
                                <img src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg"
                                    alt="" className='h-34 rounded-full shrink-0 w-96 object-cover' />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[1] pt-4 uppercase'>Pour tout voir</h2>
                                <img src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                                    alt="" className='h-34 rounded-full shrink-0 w-96 object-cover' />

                            </div>
                            <div className='moveX flex items-center '>
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[1] pt-4 uppercase'> Pour tout voir</h2>
                                <img src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg"
                                    alt="" className='h-34 rounded-full shrink-0 w-96 object-cover' />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[1] pt-4 uppercase'>Pour tout voir</h2>
                                <img src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                                    alt="" className='h-34 rounded-full shrink-0 w-96 object-cover' />

                            </div>
                        </div>
                    </div>
                    <div className='link origin-top relative border-t-2 border-white'>
                        <h1 className='font-[font2] text-[8vw] text-center leading-[1] pt-3 uppercase'>Agence</h1>
                        <div className='moveLink absolute flex top-0 text-black bg-[#D3FD50]'>
                            <div className='moveX flex items-center '>
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[1] pt-4 uppercase'> Pour tout savoir</h2>
                                <img src="https://k72.ca/uploads/teamMembers/Carl_640X290-640x290.jpg"
                                    alt="" className='h-34 rounded-full shrink-0 w-96 object-cover' />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[1] pt-4 uppercase'>Pour tout savoir</h2>
                                <img src="https://k72.ca/uploads/teamMembers/Michele_640x290-640x290.jpg"
                                    alt="" className='h-34 rounded-full shrink-0 w-96 object-cover' />

                            </div>
                            <div className='moveX flex items-center '>
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[1] pt-4 uppercase'> Pour tout savoir</h2>
                                <img src="https://k72.ca/uploads/teamMembers/Carl_640X290-640x290.jpg"
                                    alt="" className='h-34 rounded-full shrink-0 w-96 object-cover' />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[1] pt-4 uppercase'>Pour tout savoir</h2>
                                <img src="https://k72.ca/uploads/teamMembers/Michele_640x290-640x290.jpg"
                                    alt="" className='h-34 rounded-full shrink-0 w-96 object-cover' />

                            </div>
                        </div>
                    </div>
                    <div className='link origin-top relative border-t-2 border-white'>
                        <h1 className='font-[font2] text-[8vw] text-center leading-[1] pt-3 uppercase'>Contact</h1>
                        <div className='moveLink absolute flex top-0 text-black bg-[#D3FD50]'>
                            <div className='moveX flex items-center '>
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[1] pt-2 uppercase'> Pour envoyer un fax</h2>
                                <img src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg"
                                    alt="" className='h-34 rounded-full shrink-0 w-96 object-cover' />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[1] pt-2 uppercase'>Pour envoyer un fax</h2>
                                <img src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                                    alt="" className='h-34 rounded-full shrink-0 w-96 object-cover' />

                            </div>
                            <div className='moveX flex items-center '>
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[1] pt-2 uppercase'> Pour envoyer un fax</h2>
                                <img src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg"
                                    alt="" className='h-34 rounded-full shrink-0 w-96 object-cover' />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[1] pt-2 uppercase'>Pour envoyer un fax</h2>
                                <img src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                                    alt="" className='h-34 rounded-full shrink-0 w-96 object-cover' />

                            </div>
                        </div>
                    </div>
                    <div className='link origin-top relative border-t-2 border-b-2 border-white'>
                        <h1 className='font-[font2] text-[8vw] text-center leading-[1] pt-3 uppercase'>Blogue</h1>
                        <div className='moveLink absolute flex top-0 text-black bg-[#D3FD50]'>
                            <div className='moveX flex items-center '>
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[1] pt-4 uppercase'> Lire les articles </h2>
                                <img src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                                    alt="" className='h-34 rounded-full shrink-0 w-96 object-cover' />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[1] pt-4 uppercase'>Lire les articles </h2>
                                <img src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                                    alt="" className='h-34 rounded-full shrink-0 w-96 object-cover' />

                            </div>
                            <div className='moveX flex items-center '>
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[1] pt-4 uppercase'>Lire les articles </h2>
                                <img src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                                    alt="" className='h-34 rounded-full shrink-0 w-96 object-cover' />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[1] pt-4 uppercase'>Lire les articles </h2>
                                <img src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                                    alt="" className='h-34 rounded-full shrink-0 w-96 object-cover' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav
