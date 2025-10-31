import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import _ScrollTrigger from 'gsap/ScrollTrigger'

const Projects = () => {

  const projects = [
    {
      image1: 'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b',
      image2: 'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e'
    },
    {
      image1: 'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022',
      image2: 'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996'
    },
    {
      image1:  'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
      image2: 'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda'
    },
    {
      image1:  'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479',
      image2:  'https://k72.ca/images/caseStudies/BEST/BEST_site_menu_Thumbnail.jpg?w=1280&h=960&s=d3b20d81946c6a7f4a6cd7ce1cfbb0fd',
    },
    {
      image1:   'https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47',
      image2:   'https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f'
    },
  ]
  gsap

  gsap.registerPlugin(_ScrollTrigger)
  useGSAP(function(){
    gsap.from('.hero',{
      height:'150px',
      width:'full',
      stagger:{
        amount:0.1
      },
      scrollTrigger:{
        trigger: '.lol',
        markers:true,
        start:'top 70.1%',
        end: 'top -150%',
        scrub:true
      }
    })
  })
  return (
    <div className='p-4 bg-white text-black'>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] text-[9.5vw] uppercase '>projets</h2>
      </div>
      <div className='-mt-10 lol'>
        {projects.map(function (elem, idx) {
          return<div key={idx} className='hero w-full  h-[600px] mb-4 flex gap-4 '>
           <ProjectCard image1={elem.image1} image2={elem.image2} />
           </div>
        })}
      </div>
    </div>
  )
}

export default Projects
