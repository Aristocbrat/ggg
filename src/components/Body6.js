import React from 'react'
import recta  from './../assests/images/Group 99.png'
import rectas  from './../assests/images/Recta.png'
import rectb from  './../assests/images/Rectb.png'
import rectba from './../assests/images/Rectba.png'
import rbb  from  './../assests/images/Rectbb.png'
import rectca from './../assests/images/rectca.png'
import rectda from './../assests/images/Rectda.png'
import rectea from './../assests/images/Rectea.png'


const Body6 = () => {
  return (
      <div className='d-flex flex-column flex-lg-row  w-100 px-3 py-5 six  text-white '>
            <div className=' d-flex flex-column m-lg-auto px-lg-5 px-md-5  py-3 zerorow'
             data-aos="fade-up" data-aos-duration="2000">

                  <div className="position-relative">
                  <img src={rectas} className='a' /> 
                  <img src={rectb} className='a ba' />
                  </div>
                  <section className="position-absolute corrs px-2 px-lg-2 py-5 py-lg-0  ">
                  <p>Sep 26, 2021</p>
                  <p className='w-75'>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                  <a href='' className='text-deoration-none text-white'>Read Full Article</a>  
                  </section>
               
            </div>
            <div className='d-flex flex-column m-lg-auto  gap-4 px-lg-5 px-md-5 px-2  firstrow'
            data-aos="fade-down" data-aos-duration="2000" data-aos-delay="350">
               <div className='py-4 position-relative'> 
               <img src={rectba}  className='c' alt='c'/>
               <img src={rbb} className='d' alt='d'/>
               <section className='position-absolute corr px-5 py-2 py-lg-0'>
               <p>Sep 26, 2021</p>
                  <p>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                  <a href='' className='text-deoration-none text-white'>Read Full Article</a>     
               </section>
               </div>
                <div className='py-4 position-relative'> 
                <img src={rectca} className='c' alt='e'/>
                <img src={rbb} className='d' alt='f'/>
                <section className='position-absolute corr px-5 py-2 py-lg-0'>
                <p>Sep 26, 2021</p>
                  <p>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                  <a href='' className='text-deoration-none text-white'>Read Full Article</a>   
                </section>
                </div>
            </div>
            <div className='d-flex flex-column m-lg-auto gap-4 px-2 px-lg-5 px-md-5  secrow'
             data-aos="fade-down" data-aos-duration="2000" data-aos-delay="450">
                <div className='py-4 position-relative'>
                <img src={rectda} className='c' alt='g' />
                 <img src={rbb} className='d' alt='d'/>
                 <section className='position-absolute corr px-5 py-2 py-lg-0'>
                 <p>Sep 26, 2021</p>
                  <p>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                  <a href='' className='text-deoration-none text-white'>Read Full Article</a> 
                 </section>
                </div> 
                <div className='py-4 position-relative'>
                <img src={rectea} className='c ' alt='e' />
                <img src={rbb} className='d' alt='f'/>
                <section className='position-absolute corr px-5 py-2 py-lg-0'>
                  <p>Sep 26, 2021</p>
                  <p>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                  <a href='' className='text-deoration-none text-white'>Read Full Article</a>
                        
               </section>
                </div>  
            </div>
           

      </div>
//   <div className='sixthPage  mx-auto px-4 d-flex flex-column flex-lg-row flex-wrap gap-md-3 '>
//     <div className=' w-25 ms-lg-5 ms-3  pb-5 pb-lg-0 and'>
//        <img src={rectas} className='a' /> 
//        <img src={rectb} className='a ba' /> 
//        <div className='position-absolute dd  ps-3 '>
//        <span className='spanner text-white'>Sep 26, 2021</span><br/>
//        <span className='pa y text-white  w-25'>
//         GPT-3 and Open  AI is the future. Let us exlore how it is?</span>
//         <p className='rfp oc pt-2 text-white'><a href='#' className='text-decoration-none text-white'>Read Full Article</a></p>
//         </div>
//   </div>
//   <div className='w-25 cand pb-5  pb-lg-0'>
//       <img src={rectba}  className='c' alt='c'/>
//       <img src={rbb} className='d' alt='d'/>
//       <div className='position-absolute ss  ps-lg-3 ps-4 '>
//       <span className='spanner text-white '>Sep 26, 2021</span><br/>
//        <span className='pa  x text-white  w-25'>
//         GPT-3 and Open  AI is the future. Let us exlore how it is?</span>
//         <p className='rfp pt-1 text-white ps-1 ps-lg-0 ps-md-0'><a href='#' className='text-decoration-none text-white'>Read Full Article</a></p>
//         </div>
//   </div>
//   <div className='w-25 ms-lg-5 ms-4 pb-4 pb-lg-0 cand e '>
//   <img src={rectca} className='c' alt='e'/>
//   <img src={rbb} className='d' alt='f'/>
//   <div className='position-absolute  ss ps-lg-3 ps-4'>
//   <span className='spanner text-white'>Sep 26, 2021</span><br/>
//        <span className='pa x text-white w-25'>
//         GPT-3 and Open  AI is the future. Let us exlore how it is?</span>
//         </div>
//   <p className='rfp pt-1  gt ms-lg-3 text-white ps-1 ps-lg-0 ps-md-2 '><a href='#' className='text-decoration-none text-white'>Read Full Article</a></p>
//   </div>
 
//   <div className='w-25 gand pb-4 pb-lg-0 ps-lg-4  pb-md-0 '>
//   <img src={rectda} className='c' alt='g' />
//   <img src={rbb} className='d' alt='d'/>
//   <div className='position-absolute ss ps-lg-3 ps-4'> 
//   <span className='spanner text-white mt-md-5'>Sep 26, 2021</span><br/>
//        <span className='pa x text-white w-25'>
//         GPT-3 and Open  AI is the future. Let us exlore how it is?</span> 
//         <p className='rfp pt-1  text-white ps-1 ps-lg-0 ps-md-0 '><a href='#' className='text-decoration-none text-white'>Read Full Article</a></p>
//         </div>
//   </div>
//   <div className='w-25 eand ps-lg-3 '>
//     <img src={rectea} className='c ' alt='e' />
//     <img src={rbb} className='d' alt='f'/>
//     <div className='position-absolute ss ps-lg-3 ps-4'>
//     <span className='spanner text-white'>Sep 26, 2021</span><br/>
//        <span className='pa x text-white '>
//         GPT-3 and Open  AI is the future. Let us exlore how it is?</span>
//         <p className='rfp  pt-1 text-white  ps-1 ps-lg-0  ps-lg-0 mt-md-5 mt-lg-4 ps-md-0'><a href='#' className='text-decoration-none text-white'>Read Full Article</a></p>
//         </div>
//   </div>
     

//   </div>
  )
}

export default Body6
