import React from 'react'
import { useState,useEffect } from 'react';
import Hooter from '../Images/hooters.webp'
export const Worksection = () => {

  const [items, setItems] = useState([]);
  const BASE_URL = process.env.VITE_API_URL || '';

  useEffect(() => {
  
  async function fetchData() {
    const res = await fetch(`${BASE_URL}/work`);
    const data = await res.json();
    setItems(data.data);
  }

  
  fetchData();
}, []);
console.log(items)


  return (
   <div className='min-h-[90vh] h-auto w-[100vw] lg:flex-col lg:justify-center'>

    {items.map(item=>(
       <div key={item._id} className='flex flex-col lg:flex-row lg:justify-center lg:h-[80%] lg:gap-7 justify-center items-center  lg:w-[80%] mt-15'>
           <div className='lg:w-[30vw] lg:h-[50vh]'>
           <div  className=' h-[35vh] lg:h-[50vh] lg:w-[50vw] w-[60vw] mt-10 z-1 '>
             <img src={item.imageUrl} className='h-full lg:w-[60%] lg:shadow-2xl'/>
           </div>
           <div className=' h-[38vh] w-[60vw] z-[-2] absolute right-15  top-30 shadow-2xl  lg:w-[30vw] lg:left-40 lg:top-35 lg:h-[50vh] lg:shadow-2xl' ></div>
           </div>
           
           <div className='flex flex-col justify-start  items-right w-[70%] lg:w-[30vw] h-[30vh] mt-7 lg:ml-10 '>
             <h1 className=' text-xl lg:text-2xl font-garamond font-bold'>{item.workName}</h1>
             <h2 className='font-garamond'>{item.workLocation}</h2>
             <br/>
             <p>{item.workDetails}
             </p>
             <br/>
             <h4 className='font-garamond'>{item.workDate}</h4>
           </div>
         </div>
    ))}
         
       </div>
  )
}
export default Worksection;