import React from 'react'
import TestimonialsSlider from './TestimonialsSlider'

const Testimonials = () => {

  const testimonials = [
    {
      name: 'John Doe',
      profile: 'GDSC GSFCU',
      comment: 'Being the GDSC Lead of GSFCU, I had the pleasure of organizing Havok Security’s penetration testing event alongside the Havok Security Team. Their expertise and professionalism were evident throughout the event, making it a resounding success.',
      imgSrc:'img6.jpg',
    },
    {
      name: 'Jane Smith',
      profile: 'Cybersecurity Specialist',
      comment: 'I participated in a Havok Security workshop, and it was one of the most comprehensive and engaging experiences I’ve had. The team’s deep knowledge and hands-on approach provided valuable insights into advanced security practices.',
      imgSrc:'img7.jpeg',
    },
    {
      name: 'Alice Johnson',
      profile: 'IT Manager, Tech Solutions Inc.',
      comment: 'Havok Security conducted a thorough penetration test for our company. Their detailed report and actionable recommendations significantly improved our security posture. I highly recommend their services.',
      imgSrc:'img9.jpg',
    },
  ];



  return (
    <>
     <div className="container max-w-7xl mx-auto justify-center items-center pt-16">
      <p className='text-3xl text-color4 text-center'>TESTIMONIALS</p>
      <p className='text-4xl text-color2 text-center py-5'>WHAT OUR PARTICIPANTS SAY!</p>
      <TestimonialsSlider testimonials={testimonials} />
    </div>
    
    </>
  )
}

export default Testimonials