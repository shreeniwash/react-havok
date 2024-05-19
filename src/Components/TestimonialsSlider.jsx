import React from 'react'
import { useState , useEffect } from 'react';

const TestimonialsSlider = ({ testimonials }) => {
  
    const [currentSlide, setCurrentSlide] = useState(0);
    const goToNextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
    };

    useEffect(() => {
      const intervalId = setInterval(goToNextSlide, 3000);
      return () => clearInterval(intervalId);
    }, []);
  
  return (
    

<div className="relative p-4 ">
      <div className="overflow-hidden ">
        <div
          className="flex transition-transform ease-in-out duration-300"
          style={{ width: `${testimonials.length * 100}%`, transform: `translateX(-${currentSlide * (100 / testimonials.length)}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-4">
              <div className="border rounded-lg text-color2 flex flex-col sm:flex-row items-center bg-color5">
                <div className='p-5'>
                  <img src={testimonial.imgSrc} className='w-full sm:w-64 rounded-xl' alt='testimonial' />
                </div>
                <div className='text-center sm:text-left p-5 flex-1'>
                  <p className='text-xl'>{testimonial.name}</p>
                  <h3 className='text-color4'>{testimonial.profile}</h3>
                  <p>{testimonial.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Pagination */}
      <div className="absolute left-1/2  transform -translate-x-1/2 flex border-2 border-color4 p-2 rounded-full">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`mx-1 w-4 h-4 rounded-full ${index === currentSlide ? 'bg-green-500' : 'bg-gray-300'}`}
          ></button>
        ))}
      </div>
    </div>

  )
}

export default TestimonialsSlider