import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import AboutPage from './AboutPage';
import OtherPage from './OtherPage';
import Uline from './Uline';
import Wellness from './Wellness';
import Harvest from './Harvest';
import Benefit from './Benefit';
import './index.css';

import {createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/", 
  element: <App/>,
  },
  {
    path: "about", 
  element: <AboutPage/>,
  },
  {
    path: "other", 
  element: <OtherPage/>,
  },
  {
    path: "uline", 
  element: <Uline/>,
  },
  {
    path: "wellness", 
  element: <Wellness/>,
  },
  {
    path: "puregreen", 
  element: <Harvest/>,
  },
  {
    path: "benefit", 
  element: <Benefit/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
