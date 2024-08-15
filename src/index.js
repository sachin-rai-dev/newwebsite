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
import Loder from './components/loder';




let rout=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    loader:<Loder/>
  },
  {
    path:"/Services",
    element:<Services/>,
    loader:<Loder/>
  },
  {
    path:"/company",
    element:<Company/>,
    loader:<Loder/>
  },
  {
    path:"/Contactus",
    element:<Contact/>,
    loader:<Loder/>
  },
  {
    path:"Projects",
    element:<Project/>,
    loader:<Loder/>
  },
  {
    path:"*",
    element:<div><h1>404</h1></div>,
    loader:<Loder/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rout}/>
  </React.StrictMode>
);


reportWebVitals();
