import React from 'react'
import feature from './../assests/images/Feature.png'
import feature2 from './../assests/images/feature2.png'
import cta from './../assests/images/CTA.png'
import blog from './../assests/images/Blog.png'
import footer from './../assests/images/Footer.png'

const Body3 = () => {
  return (
    <div className='featureimg px-lg-4'>
      <img src={feature} alt="featureimg" className='feature mx-lg-5 d-flex py-lg-5 ps-lg-4 justify-content-center'/>
      <img src={feature2} alt='feature2img' className='feature2 mx-lg-5 d-flex py-lg-5 ps-lg-4 py-3 justify-content-center '/>
      <img src={cta} alt='ctaimg' className='feature2 mx-lg-5 d-flex py-lg-5 ps-lg-4 py-3 justify-content-center blog '/>
      <img src={blog} alt='blog' className='feature2 mx-lg-5 d-flex py-lg-5 ps-lg-4 py-3 justify-content-center blog'/>
      <img src={footer} alt='footer' className='feature2  d-flex py-lg-5  py-3 justify-content-center blog footerimg'/>
    </div>
  )
}

export default Body3
