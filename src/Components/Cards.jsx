import React from 'react'

const Cards = ({ text }) => {
    
  return (
   <>
   <div className='py-10  p-10'>
    <div className='flex flex-col rounded-2xl bg-color5 justify-center items-center relative '>
        <img src='arcticons.png' className='w-16 border-2 border-color4 rounded-full p-2 block mt-[-30px] bg-color5'></img>
        <p className='text-center text-color4 py-14 px-3'>{text}</p>
        <img src=' solar_map.png' className='w-16 border-2 border-color4 rounded-full p-2 block mb-[-30px] bg-color2'></img>
    </div>
   </div>
   </>
  )
}

export default Cards