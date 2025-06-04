import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Button from './Button';


const Navlist = ({text, isactive,isLoggedIn, setIsLoggedIn}) => {
  const navigate = useNavigate();
  const isHome = text.toLowerCase() === "home";
const BASE_URL = import.meta.env.VITE_API_URL || '';


  let handleLogout =async()=>{
    
    try {
    await fetch(`${BASE_URL}/logout`, {
      method: 'POST',
      credentials: 'include',  
    });
  
    localStorage.removeItem('token');
    
    
     if (setIsLoggedIn) setIsLoggedIn(false);
     navigate('/')
   
  } catch (error) {
    console.error("Logout failed", error);
  }
  
}

  let path = isHome ? "/" : `/${text.toLowerCase()}`;
  return (
    <>
    {path == '/logout' ? (<a onClick={handleLogout} className={`mt-4 p-5 rounded-3xl  ${isactive ? 'bg-black text-white' :'active:bg-black active:text-white'}`}>{text}</a> ): (<Link to={`${path}`} className={`mt-4 p-5 rounded-3xl  ${isactive ? 'bg-black text-white' :'active:bg-black active:text-white'}`}>{text}</Link>)}
     </>

    
        
     
  
    
  )
}

export default Navlist
