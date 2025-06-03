import React from 'react'

const footer = () => {
  return (
    <div style={{background:'#383a3d'}} className=' text-white text-sm text-center w-[100%] h-[2.5vh] fixed bottom-0'>&copy; {new Date().getFullYear()} All rights reserved, built by Prabesh Gyawali</div>
  )
}

export default footer