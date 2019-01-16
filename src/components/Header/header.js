import React from 'react'
import { Link } from 'gatsby'
import Container from '../Container/container'
import BrandLogo from '../../images/logo.png'
import './header.css'


const NavItem = ['About us','Our Investment','Resources','Linkedin','Twitter']
// const Navigation = <Link style={{margin : '0 1rem'}}></Link>

const Header = () => (

<header className="main-header">
    <Container>
        <div className="company-branding">  
        <Link to="/"><img src={BrandLogo} alt="Sangam ventures"/> </Link>
        </div>

        <nav className="web-nav"> 
        
        <ul>
         <li><Link to= '/about-us' >{NavItem[0]}</Link></li>
         <li><Link to= '/our-investment' >{NavItem[1]}</Link></li>
         {/* <li><Link to= '/resources' >{NavItem[2]}</Link></li> */}
         <li><Link to= '/linkedin' >{NavItem[3]}</Link></li>
         <li><Link to= '/twitter' >{NavItem[4]}</Link></li>
         </ul>
    
         </nav>
         
  
           <nav className="mob-nav" role="navigation">
           <div id="menuToggle">
   
           <input type="checkbox" />
           <span></span>
           <span></span>
           <span></span>
           
           <ul class="mob-nav-inner">
           <li><Link to= '/about-us' >{NavItem[0]}</Link></li>
           <li><Link to= '/our-investment' >{NavItem[1]}</Link></li>
           {/* <li><Link to= '/resources' >{NavItem[2]}</Link></li> */}
           <li><Link to= '/linkedin' >{NavItem[3]}</Link></li>
           <li><Link to= '/twitter' >{NavItem[4]}</Link></li>
           </ul>

           </div>
           </nav>

        {/* <nav className="mobile-nav"> 
        
        <ul>
         <li><Link to= '/about-us' >{NavItem[0]}</Link></li>
         <li><Link to= '/our-investment' >{NavItem[1]}</Link></li>
         <li><Link to= '/resources' >{NavItem[2]}</Link></li>
         <li><Link to= '/linkedin' >{NavItem[3]}</Link></li>
         <li><Link to= '/twitter' >{NavItem[4]}</Link></li>
         </ul>
    
         </nav> */}


        </Container>
  </header>
  
);

export default Header
