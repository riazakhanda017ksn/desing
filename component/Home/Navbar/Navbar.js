import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    
    window.addEventListener("scroll",function(){
        let header=document.querySelector("nav")
        header.classList.toggle("sticky",window.scrollY > 500)
    })
   
   
    
    return (
        
<nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <span className='mr-4'><FontAwesomeIcon icon={faCameraRetro} /></span>
        <span className='customize'>Unrealistic Photography</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav navbar-customize navItem">
         <li>
             <Link>Home</Link>
         </li>
         <li>
             <Link>About</Link>
         </li>
         <li>
             <Link>Dashboard</Link>
         </li>
         <li>
             <Link>Contact</Link>
         </li>
      </ul>
    </div>
  </div>
</nav>
       
    );
};

export default Navbar;