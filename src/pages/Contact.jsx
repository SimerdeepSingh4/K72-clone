import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {
    useGSAP(() => {
        let direction = 1; // 
        let xPercent = 0;
        const speed = 0.5;

        const tick = () => {
            xPercent = gsap.utils.wrap(
                -100,
                0,
                xPercent - speed * direction * gsap.ticker.deltaRatio()
            );
            gsap.set(".marque", { xPercent });
        };

        gsap.ticker.add(tick);

        const tilt = (isDown) => {
            gsap.to(".move", {
                rotation: isDown ? -5 : 5,
                overwrite: "auto",
            });
        };


        const onWheel = (e) => {
            const isDown = e.deltaY > 0;
            direction = isDown ? 1 : -1;
            tilt(isDown);
        };

        // Mobile swipe
        let startY = 0;

        const onTouchStart = (e) => {
            startY = e.touches[0].clientY;
        };

        const onTouchMove = (e) => {
            let currentY = e.touches[0].clientY;
            const isDown = currentY < startY;
            direction = isDown ? 1 : -1;
            tilt(isDown);
            startY = currentY;
        };

        window.addEventListener("wheel", onWheel, { passive: true });
        window.addEventListener("touchstart", onTouchStart, { passive: true });
        window.addEventListener("touchmove", onTouchMove, { passive: true });

        return () => {
            gsap.ticker.remove(tick);
            window.removeEventListener("wheel", onWheel);
            window.removeEventListener("touchstart", onTouchStart);
            window.removeEventListener("touchmove", onTouchMove);
        };
    })

    return (
        <div className='flex flex-col  bg-black overflow-hidden'>
            <div className="min-h-screen w-full bg-black text-white relative gap-0.5">
                <div className="relative font-[font2] flex justify-evenly items-center flex-col lg:flex-row pt-25 lg:pt-0">

                    <div className="p-5 order-2 lg:order-1">
                        <p className="text-2xl lg:pt-130 text-white w-fit lg:text-sm text-center sm:tracking-wider ">
                            Dans un écran ou un bureau. <br />
                            Chez vous. Chez nous. <br />
                            Partout.
                        </p>
                    </div>
                    <div className="pt-[5vh] order-1 lg:order-2">
                        <h1 className="uppercase text-center text-[9vh] text-white lg:text-[20vh] leading-none " >
                            Pour <br /> parler de <br /> votre <br />
                        </h1>
                    </div>
                    <div className="p-5 order-3">
                        <p className="text-2xl lg:pt-130 text-white w-fit lg:text-sm text-center sm:tracking-wider ">
                            525 Av. Viger O - Suite 400 <br />
                            Montréal, QC H2Z 1G6 →
                        </p>
                    </div>
                </div>
                <div className='relative my-20 w-full lg:h-[100px] h-1'>
                    <div className="absolute left-[-30%] w-[180%] move font-[font2]  flex bg-[#D3FD50] overflow-hidden  text-black  -rotate-5">
                        <div className="marque flex items-center shrink-0 gap-[3vw] px-5 py-0">
                            <h1 className='lg:text-[9vw] text-5xl uppercase'>bonjour@k72.ca </h1>
                            <div className='heart lg:h-30 shrink-0 lg:w-30 object-cover h-15 w-15 ml-3.5 '></div>
                        </div>
                        <div className="marque flex items-center shrink-0 gap-[3vw] px-5">
                            <h1 className='lg:text-[9vw] text-5xl uppercase'>bonjour@k72.ca </h1>
                            <div className='heart lg:h-30 shrink-0 lg:w-30 object-cover h-15 w-15 ml-3.5 '></div>
                        </div>
                        <div className="marque flex items-center shrink-0 gap-[3vw] px-5">
                            <h1 className='lg:text-[9vw] text-5xl uppercase'>bonjour@k72.ca </h1>
                            <div className='heart lg:h-30 shrink-0 lg:w-30 object-cover h-15 w-15 ml-3.5 '></div>
                        </div>
                        <div className="marque flex items-center shrink-0 gap-[3vw] px-5">
                            <h1 className='lg:text-[9vw] text-5xl uppercase'>bonjour@k72.ca </h1>
                            <div className='heart lg:h-30 shrink-0 lg:w-30 object-cover h-15 w-15 ml-3.5 '></div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='text-center text-2xl pt-5'>Suivez-nous</h2>
                    <div className='flex justify-center gap-3 pt-5 pb-2 text-4xl text text-center items-center'>
                        <h4 className='border-2 px-3 pt-1 rounded-3xl hover:text-[#D3FD50] font-extrabold'>FB</h4>
                        <h4 className='border-2 px-3 pt-1 rounded-3xl hover:text-[#D3FD50] font-extrabold'>IG</h4>
                        <h4 className='border-2 px-3 pt-1 rounded-3xl hover:text-[#D3FD50] font-extrabold'>IN</h4>
                        <h4 className='border-2 px-3 pt-1 rounded-3xl hover:text-[#D3FD50] font-extrabold'>BE</h4>
                    </div>
                </div>
            </div>
            <div className="min-h-screen w-full bg-black text-white relative gap-0.5">
                <div className="relative font-[font2] flex justify-evenly items-center flex-col lg:flex-row pt-25 lg:pt-0">

                    <div className="p-5 order-2 lg:order-1">
                        <p className="text-2xl lg:pt-130 text-white w-fit lg:text-sm text-center sm:tracking-wider ">
                            Dans un écran ou un bureau. <br />
                            Chez vous. Chez nous. <br />
                            Partout.
                        </p>
                    </div>
                    <div className="pt-[5vh] order-1 lg:order-2">
                        <h1 className="uppercase text-center text-[9vh] text-white lg:text-[20vh] leading-none " >
                            Pour <br /> parler de <br /> votre <br />
                        </h1>
                    </div>
                    <div className="p-5 order-3">
                        <p className="text-2xl lg:pt-130 text-white w-fit lg:text-sm text-center sm:tracking-wider ">
                            525 Av. Viger O - Suite 400 <br />
                            Montréal, QC H2Z 1G6 →
                        </p>
                    </div>
                </div>
                <div className='relative my-20 w-full lg:h-[100px] h-1'>
                    <div className="absolute left-[-30%] w-[180%] move font-[font2]  flex bg-[#D3FD50] overflow-hidden  text-black  -rotate-5">
                        <div className="marque flex items-center shrink-0 gap-[3vw] px-5 py-0">
                            <h1 className='lg:text-[9vw] text-5xl uppercase'>bonjour@k72.ca </h1>
                            <div className='heart lg:h-30 shrink-0 lg:w-30 object-cover h-15 w-15 ml-3.5 '></div>
                        </div>
                        <div className="marque flex items-center shrink-0 gap-[3vw] px-5">
                            <h1 className='lg:text-[9vw] text-5xl uppercase'>bonjour@k72.ca </h1>
                            <div className='heart lg:h-30 shrink-0 lg:w-30 object-cover h-15 w-15 ml-3.5 '></div>
                        </div>
                        <div className="marque flex items-center shrink-0 gap-[3vw] px-5">
                            <h1 className='lg:text-[9vw] text-5xl uppercase'>bonjour@k72.ca </h1>
                            <div className='heart lg:h-30 shrink-0 lg:w-30 object-cover h-15 w-15 ml-3.5 '></div>
                        </div>
                        <div className="marque flex items-center shrink-0 gap-[3vw] px-5">
                            <h1 className='lg:text-[9vw] text-5xl uppercase'>bonjour@k72.ca </h1>
                            <div className='heart lg:h-30 shrink-0 lg:w-30 object-cover h-15 w-15 ml-3.5 '></div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='text-center text-2xl pt-5'>Suivez-nous</h2>
                    <div className='flex justify-center gap-3 pt-5 pb-2 text-4xl text text-center items-center'>
                        <h4 className='border-2 px-3 pt-1 rounded-3xl hover:text-[#D3FD50] font-extrabold'>FB</h4>
                        <h4 className='border-2 px-3 pt-1 rounded-3xl hover:text-[#D3FD50] font-extrabold'>IG</h4>
                        <h4 className='border-2 px-3 pt-1 rounded-3xl hover:text-[#D3FD50] font-extrabold'>IN</h4>
                        <h4 className='border-2 px-3 pt-1 rounded-3xl hover:text-[#D3FD50] font-extrabold'>BE</h4>
                    </div>
                </div>
            </div>
            <div className="min-h-screen w-full bg-black text-white relative gap-0.5">
                <div className="relative font-[font2] flex justify-evenly items-center flex-col lg:flex-row pt-25 lg:pt-0">

                    <div className="p-5 order-2 lg:order-1">
                        <p className="text-2xl lg:pt-130 text-white w-fit lg:text-sm text-center sm:tracking-wider ">
                            Dans un écran ou un bureau. <br />
                            Chez vous. Chez nous. <br />
                            Partout.
                        </p>
                    </div>
                    <div className="pt-[5vh] order-1 lg:order-2">
                        <h1 className="uppercase text-center text-[9vh] text-white lg:text-[20vh] leading-none " >
                            Pour <br /> parler de <br /> votre <br />
                        </h1>
                    </div>
                    <div className="p-5 order-3">
                        <p className="text-2xl lg:pt-130 text-white w-fit lg:text-sm text-center sm:tracking-wider ">
                            525 Av. Viger O - Suite 400 <br />
                            Montréal, QC H2Z 1G6 →
                        </p>
                    </div>
                </div>
                <div className='relative my-20 w-full lg:h-[100px] h-1'>
                    <div className="absolute left-[-30%] w-[180%] move font-[font2]  flex bg-[#D3FD50] overflow-hidden  text-black  -rotate-5">
                        <div className="marque flex items-center shrink-0 gap-[3vw] px-5 py-0">
                            <h1 className='lg:text-[9vw] text-5xl uppercase'>bonjour@k72.ca </h1>
                            <div className='heart lg:h-30 shrink-0 lg:w-30 object-cover h-15 w-15 ml-3.5 '></div>
                        </div>
                        <div className="marque flex items-center shrink-0 gap-[3vw] px-5">
                            <h1 className='lg:text-[9vw] text-5xl uppercase'>bonjour@k72.ca </h1>
                            <div className='heart lg:h-30 shrink-0 lg:w-30 object-cover h-15 w-15 ml-3.5 '></div>
                        </div>
                        <div className="marque flex items-center shrink-0 gap-[3vw] px-5">
                            <h1 className='lg:text-[9vw] text-5xl uppercase'>bonjour@k72.ca </h1>
                            <div className='heart lg:h-30 shrink-0 lg:w-30 object-cover h-15 w-15 ml-3.5 '></div>
                        </div>
                        <div className="marque flex items-center shrink-0 gap-[3vw] px-5">
                            <h1 className='lg:text-[9vw] text-5xl uppercase'>bonjour@k72.ca </h1>
                            <div className='heart lg:h-30 shrink-0 lg:w-30 object-cover h-15 w-15 ml-3.5 '></div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='text-center text-2xl pt-5'>Suivez-nous</h2>
                    <div className='flex justify-center gap-3 pt-5 pb-2 text-4xl text text-center items-center'>
                        <h4 className='border-2 px-3 pt-1 rounded-3xl hover:text-[#D3FD50] font-extrabold'>FB</h4>
                        <h4 className='border-2 px-3 pt-1 rounded-3xl hover:text-[#D3FD50] font-extrabold'>IG</h4>
                        <h4 className='border-2 px-3 pt-1 rounded-3xl hover:text-[#D3FD50] font-extrabold'>IN</h4>
                        <h4 className='border-2 px-3 pt-1 rounded-3xl hover:text-[#D3FD50] font-extrabold'>BE</h4>
                    </div>
                </div>
            </div>
            <div className="min-h-screen w-full bg-black text-white relative gap-0.5">
                <div className="relative font-[font2] flex justify-evenly items-center flex-col lg:flex-row pt-25 lg:pt-0">

                    <div className="p-5 order-2 lg:order-1">
                        <p className="text-2xl lg:pt-130 text-white w-fit lg:text-sm text-center sm:tracking-wider ">
                            Dans un écran ou un bureau. <br />
                            Chez vous. Chez nous. <br />
                            Partout.
                        </p>
                    </div>
                    <div className="pt-[5vh] order-1 lg:order-2">
                        <h1 className="uppercase text-center text-[9vh] text-white lg:text-[20vh] leading-none " >
                            Pour <br /> parler de <br /> votre <br />
                        </h1>
                    </div>
                    <div className="p-5 order-3">
                        <p className="text-2xl lg:pt-130 text-white w-fit lg:text-sm text-center sm:tracking-wider ">
                            525 Av. Viger O - Suite 400 <br />
                            Montréal, QC H2Z 1G6 →
                        </p>
                    </div>
                </div>
                <div className='relative my-20 w-full lg:h-[100px] h-1'>
                    <div className="absolute left-[-30%] w-[180%] move font-[font2]  flex bg-[#D3FD50] overflow-hidden  text-black  -rotate-5">
                        <div className="marque flex items-center shrink-0 gap-[3vw] px-5 py-0">
                            <h1 className='lg:text-[9vw] text-5xl uppercase'>bonjour@k72.ca </h1>
                            <div className='heart lg:h-30 shrink-0 lg:w-30 object-cover h-15 w-15 ml-3.5 '></div>
                        </div>
                        <div className="marque flex items-center shrink-0 gap-[3vw] px-5">
                            <h1 className='lg:text-[9vw] text-5xl uppercase'>bonjour@k72.ca </h1>
                            <div className='heart lg:h-30 shrink-0 lg:w-30 object-cover h-15 w-15 ml-3.5 '></div>
                        </div>
                        <div className="marque flex items-center shrink-0 gap-[3vw] px-5">
                            <h1 className='lg:text-[9vw] text-5xl uppercase'>bonjour@k72.ca </h1>
                            <div className='heart lg:h-30 shrink-0 lg:w-30 object-cover h-15 w-15 ml-3.5 '></div>
                        </div>
                        <div className="marque flex items-center shrink-0 gap-[3vw] px-5">
                            <h1 className='lg:text-[9vw] text-5xl uppercase'>bonjour@k72.ca </h1>
                            <div className='heart lg:h-30 shrink-0 lg:w-30 object-cover h-15 w-15 ml-3.5 '></div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='text-center text-2xl pt-5'>Suivez-nous</h2>
                    <div className='flex justify-center gap-3 pt-5 pb-2 text-4xl text text-center items-center'>
                        <h4 className='border-2 px-3 pt-1 rounded-3xl hover:text-[#D3FD50] font-extrabold'>FB</h4>
                        <h4 className='border-2 px-3 pt-1 rounded-3xl hover:text-[#D3FD50] font-extrabold'>IG</h4>
                        <h4 className='border-2 px-3 pt-1 rounded-3xl hover:text-[#D3FD50] font-extrabold'>IN</h4>
                        <h4 className='border-2 px-3 pt-1 rounded-3xl hover:text-[#D3FD50] font-extrabold'>BE</h4>
                    </div>
                </div>
            </div>
            <div className="min-h-screen w-full bg-black text-white relative gap-0.5">
                <div className="relative font-[font2] flex justify-evenly items-center flex-col lg:flex-row pt-25 lg:pt-0">

                    <div className="p-5 order-2 lg:order-1">
                        <p className="text-2xl lg:pt-130 text-white w-fit lg:text-sm text-center sm:tracking-wider ">
                            Dans un écran ou un bureau. <br />
                            Chez vous. Chez nous. <br />
                            Partout.
                        </p>
                    </div>
                    <div className="pt-[5vh] order-1 lg:order-2">
                        <h1 className="uppercase text-center text-[9vh] text-white lg:text-[20vh] leading-none " >
                            Pour <br /> parler de <br /> votre <br />
                        </h1>
                    </div>
                    <div className="p-5 order-3">
                        <p className="text-2xl lg:pt-130 text-white w-fit lg:text-sm text-center sm:tracking-wider ">
                            525 Av. Viger O - Suite 400 <br />
                            Montréal, QC H2Z 1G6 →
                        </p>
                    </div>
                </div>
                <div className='relative my-20 w-full lg:h-[100px] h-1'>
                    <div className="absolute left-[-30%] w-[180%] move font-[font2]  flex bg-[#D3FD50] overflow-hidden  text-black  -rotate-5">
                        <div className="marque flex items-center shrink-0 gap-[3vw] px-5 py-0">
                            <h1 className='lg:text-[9vw] text-5xl uppercase'>bonjour@k72.ca </h1>
                            <div className='heart lg:h-30 shrink-0 lg:w-30 object-cover h-15 w-15 ml-3.5 '></div>
                        </div>
                        <div className="marque flex items-center shrink-0 gap-[3vw] px-5">
                            <h1 className='lg:text-[9vw] text-5xl uppercase'>bonjour@k72.ca </h1>
                            <div className='heart lg:h-30 shrink-0 lg:w-30 object-cover h-15 w-15 ml-3.5 '></div>
                        </div>
                        <div className="marque flex items-center shrink-0 gap-[3vw] px-5">
                            <h1 className='lg:text-[9vw] text-5xl uppercase'>bonjour@k72.ca </h1>
                            <div className='heart lg:h-30 shrink-0 lg:w-30 object-cover h-15 w-15 ml-3.5 '></div>
                        </div>
                        <div className="marque flex items-center shrink-0 gap-[3vw] px-5">
                            <h1 className='lg:text-[9vw] text-5xl uppercase'>bonjour@k72.ca </h1>
                            <div className='heart lg:h-30 shrink-0 lg:w-30 object-cover h-15 w-15 ml-3.5 '></div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='text-center text-2xl pt-5'>Suivez-nous</h2>
                    <div className='flex justify-center gap-3 pt-5 pb-2 text-4xl text text-center items-center'>
                        <h4 className='border-2 px-3 pt-1 rounded-3xl hover:text-[#D3FD50] font-extrabold'>FB</h4>
                        <h4 className='border-2 px-3 pt-1 rounded-3xl hover:text-[#D3FD50] font-extrabold'>IG</h4>
                        <h4 className='border-2 px-3 pt-1 rounded-3xl hover:text-[#D3FD50] font-extrabold'>IN</h4>
                        <h4 className='border-2 px-3 pt-1 rounded-3xl hover:text-[#D3FD50] font-extrabold'>BE</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
