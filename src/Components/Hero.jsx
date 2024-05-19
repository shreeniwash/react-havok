import React from 'react'

const Hero = () => {
  return (

<div className="mx-4 md:mx-8 lg:mx-16 mt-8 md:mt-12"> 
  <div className="max-w-7xl mx-auto p-4 md:p-8">
    <img src="hero.png" alt="hero" className="w-full" />
    <div className='flex flex-wrap justify-center py-20 gap-20 md:gap-12 '>
      <div className='flex flex-col justify-center gap-4  md:gap-12 sm:flex-col md:flex-row lg:flex-row min-w-full '>
        <p className=' font-custom1  text-[30px] sm:text-6xl  md:text-4xl  lg:text-5xl xl:text-7xl 2xl:w-8xl px-2 py-3 md:px-5 md:py-7  border-2 border-color2 rounded-lg text-color4 text-center'>Stay Ahead of the Game in</p>
        <img src='img2.jpeg' className='rounded-full w-full h-28 md:h-auto lg:h-auto xl:h-auto   md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 '></img>
      </div>
      

      <div className='flex flex-col justify-center gap-4  md:gap-12 sm:flex-col md:flex-row lg:flex-row min-w-full '>
      <img src='img3.jpeg' className='rounded-full  h-28 md:h-28 lg:h-28 xl:h-40  w-full md:w-[55%]  '></img>
        <p className=' font-custom1  text-[30px] sm:text-6xl   md:text-4xl lg:text-5xl xl:text-7xl 2xl:w-8xl px-2 py-3 md:px-5 md:py-7  border-2 border-color2 rounded-lg text-color4 text-center'>Digital World</p>
       
      </div>

      <div className='flex flex-col justify-center gap-4  md:gap-12 sm:flex-col md:flex-row lg:flex-row min-w-full '>
      <p className=' font-custom1  text-[30px] sm:text-6xl   md:text-4xl lg:text-5xl xl:text-7xl 2xl:w-8xl px-2 py-3 md:px-5 md:py-7  border-2 border-color2 rounded-lg text-color4 text-center'>Cybersecurity</p>
      <img src='img4.jpeg' className='rounded-full  h-28 md:h-28 lg:h-28 xl:h-40  w-full md:w-2/3   '></img>
       
       
      </div>
      
    </div>
 
    
    
  </div>
</div>


  )
}

export default Hero;