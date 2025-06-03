import React from 'react'
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
faCertificate

export const Experience = ({title, year, skill,ico}) => {
  return (
     <div className="about border-2 border-black rounded-3xl h-[17vh] w-[80%] flex flex-col justify-center items-center">
    
          <FontAwesomeIcon icon={ico} className='text-2xl'/>
          <h className="font-bold text-2xl lg:text-xl">{title}</h>
          <h style={{fontSize:'14px'}}className="text-xl lg:text-md">{year}</h>
          <h className="text-xl lg:text-md">{skill}</h>
        </div>
  )
}
export default Experience;