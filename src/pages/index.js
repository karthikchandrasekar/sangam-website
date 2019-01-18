import React, { Component } from 'react'
import Layout from '../components/layout'
import HeroImage from '../images/landing.jpg'
import SEO from '../components/seo'
import Container from '../components/Container/container'
import LocIcon from '../images/location.png'
import MobHero from '../images/mob-landing.jpg'
import SangamLogo from '../images/sangam-logo.png'


export default class IndexPage extends Component {




  render() {
    return (

  <Layout>
    <SEO title="Home" keywords={[`Seed Funding`, `Startup`, `Clean Tech`]} />
    
    <div className='hero-landing'>

      <div className="hero-image">   
      {/* <img src={HeroImage} alt="Sangam Venture"/> */}
      </div>
      
      <div className="hero-text"> 
        <img src={SangamLogo} alt="sangam venture" />
        <p>Sangam Ventures is a seed and early stage 
        venture fund that invests to improve access 
        to sustainable energy and resource productivity 
        solutions for the underserved in India that can 
        lead to inclusive development and creation of
        communities that are resilient to climate change.</p>
      </div>

    </div>

    <section className="contact-us">
    
    <Container>
    <div className="heading">
    <h3>Contact Us</h3>
    </div>


    <div className="address">
    
      
      <div className="location">
      <div className="map-frame">
      <iframe 
      width="100%" height="100%" frameBorder="0" scrolling="no" title="Google Maps" aria-label="Google Maps"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.002269290769!2d77.07292121482689!3d28.449347982490412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19162fc9fcf7%3A0x2fedb2162480ce0f!2sSangam+AIC!5e0!3m2!1sen!2sin!4v1547029795557" >
      </iframe>
      </div> 
     
      
      <p className="title" ><img src={LocIcon} alt="Location" height="25" width="20" style={{
              marginRight: '.5rem',
        }}/><strong>Gurugram</strong></p>
      
      <p>Plot#146, 5th Floor, CLC Towers,
        Sector 44, Gurugram,
        Haryana- 122003</p>
      </div>

      <div className="location">
      <div className="map-frame">
      <iframe 
      width="100%" height="100%" frameBorder="0" scrolling="no" title="Google Maps" 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.984191966707!2d77.60894551482195!3d12.972862790855084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1681259725b3%3A0x964a757ee00d9d2f!2sAxilor+Transit!5e0!3m2!1sen!2sin!4v1547030384680" >
      </iframe>
      </div> 
      <p className="title"><img src={LocIcon} alt="Location" height="25" width="20" style={{
              marginRight: '.5rem',
        }}/><strong>Bangalore</strong></p>
      <p>Axilor Transit, 3rd Floor,
       Commissariat Road, Ashok Nagar
       Bangalore 560025</p>
      </div>

      <div className="reach-email">
    
      <p style={{
        position : 'relative',
        top : '40%',
        fontSize : '16px',
      }}>Reach out to us @</p>
      <p  style={{
        position : 'relative',
        top : '40%',
      }}>prospect@sangam.vc</p>
      </div>
      </div>
    
   </Container>
  </section>
  </Layout>
)

}
}
