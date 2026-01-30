import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="min-h-screen w-full bg-black text-white relative gap-0.5">
                <div className="relative font-[font2] flex justify-evenly items-center flex-col lg:flex-row pt-25 lg:pt-0">
                    
                    <div className="p-5">
                        <p className="text-2xl lg:pt-130 text-white w-fit lg:text-sm text-center sm:tracking-wider">
                            Dans un écran ou un bureau. <br />
                            Chez vous. Chez nous. <br />
                            Partout.
                        </p>
                    </div>
                    <div className="pt-[5vh]">
                        <h1 className="uppercase text-center text-[9vh] text-white lg:text-[20vh] leading-none" >
                            Pour <br /> parler de <br /> votre <br />
                            marque
                        </h1>
                    </div>
                    <div className="p-5">
                    <p className="text-2xl lg:pt-130 text-white w-fit lg:text-sm text-center sm:tracking-wider">
                            Dans un écran ou un bureau. <br />
                            Chez vous. Chez nous. <br />
                            Partout.
                        </p>
                    </div>
                </div>
                <div>
                <h2 className='text-center text-2xl pt-5'>Suivez-nous</h2>
                    <div className='flex justify-center gap-3 pt-5 pb-2 text-4xl text text-center'>
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