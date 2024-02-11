// import React from 'react'
import './App.css'
// import { Route, BrowserRouter as Router,Switch } from 'react-router-dom'
// import Home from "./componants/Home"
// import About from "./componants/About"
import { Outlet } from 'react-router-dom'
import Navbar from './componants/Navbar'
import Footer from './componants/Footer'

function App() {
  return (
   <>
<Navbar/>
<Outlet/>
<Footer/>

   </>
  )
}

export default App
