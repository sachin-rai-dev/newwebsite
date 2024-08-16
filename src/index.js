import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Services from './services';
import Company from './abut-us';
import Contact from './contact-us';
import Project from './project';





let rout=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
   
  },
  {
    path:"/Services",
    element:<Services/>,
    
  },
  {
    path:"/company",
    element:<Company/>,
    
  },
  {
    path:"/Contactus",
    element:<Contact/>,
  
  },
  {
    path:"Projects",
    element:<Project/>,
    
  },
  {
    path:"*",
    element:<div><h1>404</h1></div>,
   
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rout}/>
  </React.StrictMode>
);


reportWebVitals();
