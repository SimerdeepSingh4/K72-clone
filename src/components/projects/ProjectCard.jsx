import React from 'react'

const ProjectCard = (props) => {
    return (
        <>
            <div className='w-full sm:w-1/2 h-full group transition-all relative hover:rounded-4xl overflow-hidden'>
                <img className='h-full w-full object-cover lg:object-center object-top' src={props.image1}></img>
                <div className='opacity-0 absolute transition-all group-hover:opacity-100 top-0 flex items-center justify-center left-0 h-full w-full bg-black/10'>
                    <h2 className='uppercase text-2xl sm:text-6xl font-[font1] border-4 pt-4 px-4 text-white border-white rounded-full '> Vior le Projet</h2>

                </div>
            </div>
            <div className='w-full sm:w-1/2 h-full group transition-all relative hover:rounded-4xl overflow-hidden'>
                <img className='h-full w-full object-cover object-center' src={props.image2}></img>
                <div className='opacity-0 absolute transition-all group-hover:opacity-100 top-0 flex items-center justify-center left-0 h-full w-full bg-black/10'>
                    <h2 className='uppercase text-2xl sm:text-6xl  font-[font1] border-4 pt-4 px-4 text-white border-white rounded-full '> Vior le Projet</h2>

                </div>
            </div>
        </>
    )
}

export default ProjectCard
