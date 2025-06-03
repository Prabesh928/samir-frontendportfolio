import React from 'react'
import aboutphoto from '../Images/about2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate, faUser } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import Experience from '../Common/Experience'
import PageWrapper from '../Common/PageWrapper'
const About = () => {
  return (
    <PageWrapper>
    
    <div className='h-[91vh] w-full flex flex-col gap-5 lg:gap-20 justify-start items-center '> 
    
    <div className="about text-center lg:ml-50 font-bold text-3xl h-[5%]">
      <p className='text-sm font-normal'>Get To Know More</p>
      About Me</div>
      <div className='flex flex-col gap-5 lg:flex-row lg:justify-center items-center'>
    <div className="about lg:h-[40vh] lg:w-[25vw]  h-[25%] flex justify-center">
      <img src={aboutphoto} className='h-[100%] w-[50%] lg:w-[80%] rounded-3xl'/>
    </div>
    <div className='flex flex-col items-center justify-center gap-5 lg:w-[40vw] lg:mr-20'>
      <div className='flex flex-col w-[100%] gap-5 justify-center items-center lg:flex-row lg:'>
  <Experience ico={faCertificate} title={"Experience"} year={"+2 Years" } skill={"Linecook"}/>
    <Experience ico={faUsers} title={"Education"} year={"Hotel Management" } skill={"Dip. Hospitality Service"}/>
    </div>
    
    <div style={{fontSize:'17px'}} className="about text-xl font-garamond lg:text-md">
     I'm passionate about the culinary arts and love creating delicious dishes that bring people joy. As a line cook, I thrive in fast-paced kitchen environments where precision, timing, and creativity come together. Cooking isn't just my job — it's something I truly enjoy and take pride in.


    </div>
    </div>
    </div>
    </div>
    </PageWrapper>
  )
}

export default About ;
