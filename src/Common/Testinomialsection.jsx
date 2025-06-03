import React, { useEffect, useState } from 'react'
import Clientone from '../Images/clientone.jpg'


export const Testinomialsection = () => {
    const BASE_URL = process.env.REACT_APP_API_URL || '';

    let [testodata, settestodata]=useState([]);

    useEffect(() => {
      
      async function fetchData() {
        const res = await fetch(`${BASE_URL}/testinomial`);
        const data = await res.json();
        settestodata(data.data);
      }
    
      
      fetchData();
    }, []);
  
 
  return (
    <>
     <div className=' text-center mt-10 lg:mt-50'>
                <h className="text-2xl font-bold font-garamond lg:text-4xl">TESTIMONIALS</h>
                <h2 className='font-garamond'>Read what our client says</h2>
            </div>
    <div className='  min-h-[100vh] lg:min-h-[80vh] h-auto w-[100vw]  flex justify-center lg:gap-5  '>

        <div className='  min-h-[80vh] lg:min-h[70vh] h-auto  lg:h-[40vh] w-[80vw] lg:gap-12  lg:flex-row lg:flex  flex-col  justify-center items-center text-center'>
           

            {testodata.map(item=>(

                <div key={item._id} style={{backgroundColor:"#efefef"}} className=' h-[42vh] lg:h-[45vh] lg:w-[20vw] w-[80vw] relative mt-20 shadow-2xl '>
                <div className=' h-[20vh]  w-[40vw] lg:w-[10vw] rounded-full absolute top-[-50px] right-20 lg:left-20 border-white border-5'> 
                    <img src={item.photoUrl} className='rounded-full h-full w-full object-cover'/>
                </div>
                <div className=' h-[85%] mt-5  lg:w-[20vw]'>
                    <div className='h-[15vh] lg:none'></div>
                    <h className ="p-5 mt-10 font-garamond">{item.text}
                    </h>
                </div>
                <div className=' h-[5vh] flex justify-center items-center  lg:w-[20vw] '>
                    <h className="font-garamond text-xl font-semibold">{item.name} &nbsp;</h>
                    <p className='font-garamond mt-1 text-sm'> {item.post}</p>
                </div>
            </div>

            ))}
            
        </div>

    </div>
    </>
  )
}
export default Testinomialsection