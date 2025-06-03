import React from 'react'
import { useState } from 'react';
import { faBars, faClose, faCross, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navlist from '../Common/Navlist';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageWrapper from '../Common/PageWrapper';

export const Navbar = () => {
  let navigate = useNavigate();
    const location = useLocation();
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const BASE_URL = process.env.REACT_APP_API_URL || '';

   let handleLogout =async()=>{
    
    try {
    await fetch(`${BASE_URL}/auth/logout`, {
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
  
  useEffect(() => {
   
   
    fetch(`${BASE_URL}/auth/verification`, {
      method: 'GET',
      credentials: 'include', // 
    })
      .then((res) => {
         if (!res.ok) {
      
      
      setIsLoggedIn(false);
      return null;
    }
       
        return res.json();})
      .then((data) => {
        if (data.islogin) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((err) => {
        console.log('User not login ');
        console.log("API BASE URL is:",BASE_URL);
        setIsLoggedIn(false);
      });
      
      
  }, []);

   
     const [isMenuOpen, setIsMenuOpen] = useState(false);
    
     

     
      
  useEffect(() => {
  setIsMenuOpen(false);
}, [location.pathname]);

    let toggleMenu=()=>{
         setIsMenuOpen(prev => !prev);
    }
         

  //admin verification 
  




        
    
  return ( 
   <div className=' h-[7vh] w-[100vw]  flex justify-between lg:justify-center lg:gap-50 items-center lg:p-10 p-8 '>
    <div className='logo font-garamond text-2xl font-normal lg:p-6 '>Samir Thapa</div>
    <div className='navicon md:hidden'>
        <FontAwesomeIcon icon={isMenuOpen? faClose: faBars}className='text-2xl' onClick={toggleMenu}/>
    </div>
    <ul className={`  lg:hidden md:hidden  bg-white h-[80vh] w-[60vw] fixed top-0 right-0 flex flex-col items-left  text-2xl gap-0.5 mt-10 transform
         transition-transform duration-500 ease-in-out  ${isMenuOpen ? 'translate-x-0 pointer-events-auto opacity-90' : 'translate-x-full pointer-events-none overflow-hidden opacity-0'}`}>
      
        <Navlist text={"Home"} isactive={true}/>
        <Navlist text={"About"} isactive={false}/>
        <Navlist text={"Work"} isactive={false}/>
        <Navlist text={"Contact"} isactive={false}/>
        {isLoggedIn ? <Navlist text={"Logout"} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isactive={false}/> :<Navlist text={"Login"} isactive={false}/> }
        
        {isLoggedIn &&  <Navlist text={"Dashboard"} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isactive={false}/>}
      </ul>

   {/* desk and tabler */} 

   {/* Tablet/Desktop Nav */}

  <PageWrapper>
      <ul className="hidden md:flex lg:flex lg:items-center gap-10 lg:ml-10 text-md font-medium w-[70%] lg:w-[50%] lg:p-2 lg:font-garamond  hover:scale-100 transition-all duration-500 ease-in-out ">
        <Link to={'/'} className="px-6 py-1 lg:h-[80%] hover:text-white hover:bg-black cursor-pointer active:bg-black active:text-white rounded-xl transition-all duration-400 ease-in ">Home</Link>
        <Link to={'/about'} className="px-6 py-1 lg:h-[80%] hover:text-white hover:bg-black cursor-pointer active:bg-black active:text-white rounded-xl transition-all duration-400 ease-in ">About</Link>
        <Link to={'/work'} className="px-6 py-1 lg:h-[80%] hover:text-white hover:bg-black cursor-pointer active:bg-black active:text-white rounded-xl transition-all duration-400 ease-in ">Work</Link>
        <Link to={'/contact'} className="px-6 py-1 lg:h-[80%] hover:text-white hover:bg-black cursor-pointer active:bg-black active:text-white rounded-xl transition-all duration-400 ease-in">Contact</Link>
        {isLoggedIn && <Link to={'/dashboard'} className="px-6 py-1 lg:h-[80%] hover:text-white hover:bg-black cursor-pointer active:bg-black active:text-white rounded-xl transition-all duration-400 ease-in">Dashboard</Link>}
       {isLoggedIn ? <button className='px-6 py-1 lg:h-[80%] rounded-xl bg-black text-white cursor-pointer' onClick={handleLogout}>Logout</button>  :<button className='px-6 py-1 lg:h-[80%] rounded-xl bg-black text-white'><Link to={'/login'}>Login</Link></button>}
       
      </ul>
      </PageWrapper>
      
   </div>
  )
}

export default Navbar;