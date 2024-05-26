import React from 'react'
import ImageSlider from './ImageSlider';

const Hero = () => {
 
  return (

<div className="mx-4 md:mx-8 lg:mx-16 mt-8 md:mt-12"> 
  <div className="max-w-7xl mx-auto p-4 md:p-8">
    <img src="hero.png" alt="hero" className="w-full" />
    <div className='flex flex-wrap justify-center py-20 gap-20 md:gap-12 '>
       
     
      <div className='flex flex-col text-center justify-center gap-4  md:gap-12 sm:flex-col md:flex-row lg:flex-row min-w-full '>
        <p className=' font-custom1  text-[30px] sm:text-6xl  md:text-4xl  lg:text-5xl xl:text-7xl 2xl:w-8xl px-2  md:px-3 py-5 md:py-8 lg:py-8 xl:py-5 2xl:py-5 border-2 border-color2 rounded-3xl text-color4 text-center h-24 md:h-32 lg:h-32 xl:h-32 2xl:h-32'>Stay Ahead of the Game in</p>
        <ImageSlider  className='rounded-full w-full h-28 md:h-auto lg:h-auto xl:h-auto   md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/4 '></ImageSlider> 
      </div>
      
       

        <div className='flex flex-col justify-center gap-4 md:gap-12 sm:flex-col md:flex-row lg:flex-row min-w-full'>
        <ImageSlider  className='rounded-full w-full h-28 md:h-auto lg:h-auto xl:h-auto   md:w-3/5 lg:w-2/4 xl:w-1/2 2xl:w-1/2 '></ImageSlider> 
            <p className='font-custom1 text-center text-[30px] sm:text-6xl md:text-4xl lg:text-5xl xl:text-7xl px-2  mt-7 md:mt-0 lg:mt-0 md:px-2 lg:px-2 xl:px-5 py-5 md:py-8 lg:py-8 xl:py-5 border-2 border-color2 rounded-3xl text-color4  h-24 md:h-32 lg:h-32 xl:h-32 2xl:h-32'>
              Digital World
            </p>
          </div>
          
          <div className='flex flex-col justify-center gap-4 md:gap-12 sm:flex-col md:flex-row lg:flex-row min-w-full'>
            <p className='font-custom1 text-[30px] sm:text-6xl md:text-4xl lg:text-5xl xl:text-7xl px-2  md:px-5  py-5 md:py-8 lg:py-8 xl:py-5 2xl:py-5 border-2 border-color2 rounded-3xl text-color4 text-center  h-24 md:h-32 lg:h-32 xl:h-32 2xl:h-32'>
              Cybersecurity
            </p>
            <ImageSlider  className='rounded-full w-full h-28 md:h-auto lg:h-auto xl:h-auto   md:w-3/5 lg:w-2/4 xl:w-1/2 2xl:w-1/2 '></ImageSlider> 
          </div>

    </div>
  </div>
</div>


  )
}

export default Hero;