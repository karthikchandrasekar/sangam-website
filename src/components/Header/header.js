import React from 'react'
import { Link } from 'gatsby'
import Container from '../Container/container'
import BrandLogo from '../../images/logo.png'
import './header.css'
import Linkedin from '../../images/linkedin.png'
import Twitter from '../../images/twitter.png'


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
         <li><a href="https://www.linkedin.com/showcase/sangam-aic/" target="blank" ><img src={Linkedin} alt="Linkedin" height="20" width="20"/></a></li>
         <li><a href="https://twitter.com/AicSangam" target="blank" ><img src={Twitter} alt="Twitter" height="15" width="20" /></a></li>
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
           <li><a href="https://www.linkedin.com/showcase/sangam-aic/" >{NavItem[3]}</a></li>
           <li><a href="https://twitter.com/AicSangam" >{NavItem[4]}</a></li>
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
