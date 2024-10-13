import React from 'react'
import headill from "./../assests/images/headill.png"

import signup from "./../assests/images/Group 81.png"
import clogo from "./../assests/images/clogo.png"



const Body1 = () => {
  return (
    <div >
      <div className='firstpage   d-flex flex-lg-row flex-column  w-100  '>
      <p className=' w-100  fs-sm-5 mt-5 ms-lg-5 ms-md-5
        ms-3 fw-bold d-lg-flex d-flex ml-3  position-relative  letsbuild '>
      Let’s Build Something
      amazing with GPT-3 OpenAI
      </p>
      <img src={headill} className=' headill  position-relative ' alt='header illustration' data-aos="fade-up" data-aos-duration='1500'/>
    </div>
    <div className='subtext px-lg-5 d-flex flex-column '>
       <p className='textSub  position-relative  px-2 px-lg-0 py-md-4'>Yet bed any for travelling assistance indulgence unpleasing. 
        Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
         Party we years to order allow asked of.</p>
         <div className='d-flex e-g flex-column flex-lg-row flex-md-column ' >
         <form >
           <input  placeholder="Your email address" type="email"  className='sin   form-control  transparent-border '  />
         </form>
         <button className=' text-white getstarted d-flex align-content-center rounded-3  pt-lg-4 justify-content-center  '>Get started</button>
         </div>
        
        
    </div>
    <div className='d-flex  py-3  gp'>
    <img src={signup} className='w-25 h-25 px-lg-5 ms-5 ms-lg-5 groupfoto ' alt='signup image'/>
    
    <span className='text-white spantexts w-100 position-relative  '>1,600 people requested access a visit in last 24 hours</span>
    
    </div>
    <div className='ms-auto w-75'>
    <img src={clogo}  className='w-75 m-auto pb-lg-5' alt='companies logo'/>
    </div>
    
    
    </div>
    
  )
}

export default Body1
