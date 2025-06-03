import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Work from './pages/Work.jsx'
import Skill from './pages/Skill.jsx'
import Login from './pages/Login.jsx'
import Navbar from './layout/navbar.jsx'
import Layout from './pages/Layout.jsx'
import Admindashboard from './pages/admindashboard.jsx'
import { Navigate } from 'react-router-dom';

const router = createBrowserRouter([
    {
    path: '/',
    element: <Layout />,  // Wrap everything inside Layout
    children: [
      {path:'/', element: <Home/>  },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'work', element: <Work /> },
      { path: 'contact', element: <Contact /> },
      { path: 'login', element: <Login /> },
      {path:'dashboard', element:<Admindashboard/>}
    ],
  },

])

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
 
)
