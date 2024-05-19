

// export default Contact;
import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Email submitted:', email);
  };

  return (
    <>
    <div className='pt-20 flex flex-col lg:flex-row p-4 sm:p-10 lg:p-20 gap-10 lg:gap-16 w-full'>
        <div className='bg-color5 border-2 border-color4 rounded-2xl w-full lg:w-5/6 p-5'>
          <h1 className='text-center text-color2 text-3xl'>GET IN TOUCH</h1>
          <div className='text-color4'>
            <h2 className='text-2xl py-4'>Registered Office</h2>
            <div className='flex gap-x-5'>
              <img src='Address.png' alt='Address' />
              <p>FF 101, Waghodia GIDC Gate No-2, Near Aarti Pipe, Waghodia, Gujarat - 391760</p>
            </div>
            <div className='flex gap-x-5 py-4'>
              <img src='Email Sign.png' alt='Email' />
              <a href='mailto:info@havoksec.in' className='hover:underline'>info@havoksec.in</a>
            </div>
            <div className='flex gap-x-5'>
              <img src='Call.png' alt='Call' />
              <a href='tel:+919429882924' className='hover:underline'>+91 9429882924</a>
            </div>
          </div>
        </div>

        <div className='w-full lg:w-full flex flex-col gap-10'>
          <div className='flex flex-col lg:flex-row gap-10'>
            <div className='bg-color5 border-2 border-color4 rounded-2xl p-5 w-full lg:w-3/4'>
              <h1 className='text-center text-color2 text-3xl'>QUICK LINKS</h1>
              <div className='flex flex-wrap justify-between'>
                <div className='flex flex-col text-color2 text-xl pt-10'>
                  <a href='#' className='hover:underline relative inline-block'>
                    <span className='arrow'>›</span> About Us
                  </a>
                  <a href='#' className='hover:underline relative inline-block'>
                    <span className='arrow'>›</span> Services
                  </a>
                  <a href='#' className='hover:underline relative inline-block'>
                    <span className='arrow'>›</span> Contact
                  </a>
                </div>
                <div className='flex flex-col text-color2 text-xl pt-10'>
                  <a href='#' className='hover:underline relative inline-block'>
                    <span className='arrow'>›</span> Careers
                  </a>
                  <a href='#' className='hover:underline relative inline-block'>
                    <span className='arrow'>›</span> Privacy Policy
                  </a>
                </div>
              </div>
            </div>
            <div className='flex  flex-row lg:flex-col justify-around mt-5 border-2 border-color4 rounded-2xl p-3'>
              <a href="#"><img src='LinkedIn.png' alt='LinkedIn' /></a>
              <a href="#"><img src='Instagram.png' alt='Instagram' /></a>
              <a href="#"><img src='TwitterX.png' alt='Twitter' /></a>
            </div>
          </div>

          <div className=' rounded-2xl w-full    p-5 flex flex-col lg:flex-row items-center '>
            <form onSubmit={handleSubmit} className='space-y-4 w-full lg:w-full  flex flex-col lg:flex-row lg:items-center gap-4 bg-color4 border-2 border-color4 p-1 rounded-2xl '>
              <div className='flex items-center w-full lg:w-full'>
                <img src='Email Sign1.png' alt='Email Icon' className=' text-color5' />
                <input
                  type='email'
                  id='email'
                  name='email'
                  Placeholder='Email Address'
                  value={email}
                  onChange={handleChange}
                  className='shadow appearance-none border  w-full  py-4 px-3 bg-color5 rounded-2xl text-color2 leading-tight focus:outline-none focus:shadow-outline'
                  required
                />
              </div>
            </form>
            <div className='mt-4 lg:mt-0 lg:ml-6 border-color4  p-1  rounded-2xl bg-color4'>
              <button
                type='submit'
                className='bg-color5 p-5   border-2 border-color4 hover:bg-color2 text-white font-bold py-2 px-10 rounded-2xl focus:outline-none focus:shadow-outline'
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='py-10'>
        <hr className='bg-color4 h-1 '/>
        <div className='flex flex-col md:flex-row lg:flex-row    justify-between text-color2 py-5 p-5 gap-5'>
          <p>©2024 Havok Security, All Right Reserved </p>
          <p>Design & Developed by Havok Security</p>
        </div>
        <hr className='bg-color4 h-3 mb-5'/>
      </div>
    </>
  );
}

export default Contact;
