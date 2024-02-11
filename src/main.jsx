import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Home from './componants/Home'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";  
import Resume from './componants/Resume.jsx';
import Project from './componants/Project.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
       
        <Route path='/' element={<Home/>}/>
        <Route path='resume' element={<Resume/>}/>
        <Route path='project' element={<Project/>}/>
        
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
