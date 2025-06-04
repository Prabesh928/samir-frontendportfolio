import { useState } from 'react'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../Common/PageWrapper';




const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
 const BASE_URL = import.meta.env.VITE_API_URL || '';

  let handellogin=async()=>{

  try{
  let response = await axios.post(`${BASE_URL}/auth/login`,{
    email,
    password
  },
  {
        withCredentials: true,   
      }
);
    const data = response.data;
    

     if (data.token) {
      
      localStorage.setItem('token', data.token);
      alert('Login successful!');
      setEmail('');
      setPassword('');
       navigate('/dashboard');
       window.location.reload();
      
    } else {
      alert('Login failed: ' + data.message);
    }
    

  }
  catch(error){
    console.log(error);
  }


}

    const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <PageWrapper>
<div className='h-[80vh] w-[100vw]  flex justify-center items-center  '>
      
    <div style={{}} className='h-[40vh] lg:h-[55vh] w-[75vw] lg:w-[25vw] mb-20 rounded-3xl flex flex-col items-center justify-around shadow-2xl'>
      <h1 className='font-bold text-3xl font-garamond'>Login </h1>
      <input placeholder='Email Address' value={email}  onChange={(e) => setEmail(e.target.value)} className='w-[90%] border-b text-xl '></input>
      <div className='w-[90%]'>
      <input placeholder='Password' className='w-[100%] border-b text-xl' type={showPassword ? 'text' : 'password'} value={password}  onChange={(e) => setPassword(e.target.value)}>
       </input><FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className='lg:opacity-0 absolute right-25 text-xl'  onClick={togglePassword} />
      </div>
      
      <button className='bg-black text-white w-[90%] text-xl h-[17%] rounded-3xl transform transition-transform duration-300 ease-in-out lg:hover:scale-90 lg:hover:cursor-pointer' onClick={handellogin}>Login</button>

    </div>
    
    </div>

    </PageWrapper>
    
    
  )
}

export default Login