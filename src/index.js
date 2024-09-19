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
import Branding from './components/Branding';
import Webapp from './components/Webapp';
import Mobile from './components/Mobile';
import Website from './components/Website';
import Dashbord from './dashbord';





let rout = createBrowserRouter([
  {
    path: "/",
    element: <App />,

  },
  {
    path: "/Services",
    element: <Services />,

  },
  {
    path: "/company",
    element: <Company />,

  },
  {
    path: "/Contactus",
    element: <Contact />,

  },
  {
    path: "Projects",
    element: <Project />,

  },
  {
    path:'/branding',
    element:<Branding/>
  },
  {
    path:'/mobile',
    element:<Mobile/>
  },{
    path:'/webapp',
    element:<Webapp/>
  },{
    path:'/website',
    element:<Website/>
  },{
    path:'/dash-bord',
    element:<Dashbord/>
  },
  {
    path: "*",
    element: <div><h1>404</h1></div>,
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rout} />
  </React.StrictMode>
);


reportWebVitals();
