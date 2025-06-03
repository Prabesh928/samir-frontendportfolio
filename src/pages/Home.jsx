import React from 'react'
import face from '../Images/face.jpg'
import Button from '../Common/Button'
import Typewriter from 'typewriter-effect';



import { faLinkedin, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../Common/PageWrapper';

const Home = () => {
  let navigate = useNavigate();
  const handleDownload = () => {
   
  const link = document.createElement('a');
  link.href = '/resume.pdf'; 
  link.download = 'resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const handleContact=()=>{
  navigate('/contact');
}
  return (
    <PageWrapper>
    <div className='h-[75vh] w-[100vw] lg:flex-row lg:justify-center md:flex-row flex flex-col gap-1 sm:items-center justify-center'>
        <div className='flex justify-center mb-3  lg:w-[30vw] lg:h-[50vh]'>
            <img src={face} className='md:w-[95%] lg:w-[80%] w-[70%] h-full rounded-full object-contain'></img>
        </div>
        <div className='h-[50%] lg:mr-25 lg:h-[45%]  lg:justify-center lg:w-[25%]  md:h-[40%] flex flex-col justify-around items-center md:gap-0 gap-5 w-[100%]'>
        <div className='flex  flex-col justify-around items-center w-[100%] h-[35%] text-center '>
        <h className="font-garamond  lg:text-xl text-2xl mt-10 lg:mt-4 md:text-3xl">Hello I'm</h>
     
        <h className="font-bold text-4xl lg:text-3xl lg:font-garamond mt-2">
              <Typewriter
        options={{
          strings: ['Samir Thapa', 'Professional Line Cook', 'Passionate About Culinary Arts'],
          autoStart: true,
          loop: true,
          delay: 85,
        }}
      />
        </h>
        
        <h className="font-garamond text-2xl mt-2 md:text-3xl lg:text-xl">Elevating Every Plate.</h>
        </div>
        <div className='flex justify-around lg:justify-center lg:gap-2 lg:h-[35%] md:mt-15 items-center  lg:w=[60%] h-[30%] md:h-[20%] w-[100%]  mt-5'>
          
            <Button text={"Download CV"} isActive={true} onClick={handleDownload}/>

            <Button text={"Contact Info"} isActive={false} onClick={handleContact}/>
           
        </div>
        <div className=' flex justify-center gap-5 mb-0 '>
          <a href="https://www.linkedin.com/in/samir-thapa-304b3b276/"
             target="_blank"
             rel="noopener noreferrer"
          ><FontAwesomeIcon icon={faLinkedin} className='text-5xl rounded-full lg:text-3xl transition-all duration-1000 hover:scale-105'/></a>
          <a   href="https://wa.me/14377756431"  
                target="_blank"
               rel="noopener noreferrer"
          ><FontAwesomeIcon icon={faWhatsapp} className='text-5xl lg:text-3xl transition-all duration-1000 hover:scale-105'/></a>  
           
        </div>

        </div>

   
    </div>
    </PageWrapper>
  )
}

export default Home