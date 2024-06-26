import React from 'react'
import firstImage from './../assests/images/Header.png'
import companyLogo from './../assests/images/clogo.png'

const Body1 = () => {
  return (
    <div className='bodyimage px-lg-4  '>
      <img src={firstImage} alt='bodyimage' className='image1 px-lg-4 mx-lg-4 m-auto'/>
      <img src={companyLogo} alt='companylog' className='m-auto w-50 d-flex py-lg-4 py-2'/>
    </div>
  )
}

export default Body1
