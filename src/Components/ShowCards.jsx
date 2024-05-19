import React from 'react'
import Cards from './Cards'

const ShowCards = () => {
   
    const itemsContent = [
        "Our Industrial Training  program on cybersecurity is designed to empower  individuals with the knowledge and skills necessary to navigate the complex world of cyber threats.",

        "Our dedicated team works closely with or clients to tailor CTF events to their specific needs and academic objectives. Whether it's a beginnerfriendly competition or an advanced challenge for seasoned professionals,  we customize the experience to align with the skill",

        "Our Industrial Training  program on cybersecurity is designed to empower  individuals with the knowledge and skills necessary to navigate the complex world of cyber threats.",
        
        "Our Industrial Training  program on cybersecurity is designed to empower  individuals with the knowledge and skills necessary to navigate the complex world of cyber threats.",

        "Our dedicated team works closely with or clients to tailor CTF events to their specific needs and academic objectives. Whether it's a beginnerfriendly competition or an advanced challenge for seasoned professionals,  we customize the experience to align with the skill",

        "Our Industrial Training  program on cybersecurity is designed to empower  individuals with the knowledge and skills necessary to navigate the complex world of cyber threats.",

       
      ];

      const firstHalf= itemsContent.slice(0,3);
      const secondHalf=itemsContent.slice(3,6)
  return (
    <>
    <div className=''>
      <div className='justify-center  items-center  '>
        <p className='text-color4 text-center text-4xl '>SERVICES</p>
        <p className='text-color2 text-center text-5xl py-7'>WHAT WE PROVIDE</p>
      </div>
      
      <div className='container mx-auto pt-4 gap-28    justify-center p-0 sm:p-10  md:p-0 lg:p-0 xl:p-0'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '>
      {firstHalf.map((text, index)=>(
        <Cards key={index} text={text}/>
    ) )}

      {secondHalf.map((text, index)=>(
        <Cards key={index + 3} text={text}/>
    ) )}
      </div>
      </div>
    </div>
    
    </>
  )
}

export default ShowCards;