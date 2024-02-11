import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import email from "../../public/email.png";
import github from "../../public/github.png";
import linkedin from "../../public/linkedin.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navClass">
        <div className="container d-flex justify-content-between py-3">
          <div>
            <Link to='/' className='navbar-brand text-light fs-3 fw-bold main-heading'>Goutam Sirswa</Link>
          </div>
          <div className="" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
              <li className="nav-item">
                <Link to='resume' className='nav-link active  text-light'>Resume</Link>
              </li>
              <li className="nav-item">
                <Link to='project' className='nav-link active  text-light'>Projects</Link>
              </li>
              <li className="nav-item">
                <a href='mailto:siraswagoutam@gmail.com' target='_blank' rel='noopener noreferrer' className='nav-link active  text-light'><img src={email} alt="Email" /></a>
              </li>
              <li className="nav-item">
                <a href='https://www.linkedin.com/in/goutamsirswa/' target='_blank' rel='noopener noreferrer' className='nav-link active  text-light'><img src={linkedin} alt="LinkedIn" /></a>
              </li>
              <li className="nav-item">
                <a href='https://github.com/Goutamsirswa' target='_blank' rel='noopener noreferrer' className='nav-link active  text-light'><img src={github} alt="GitHub" /></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
