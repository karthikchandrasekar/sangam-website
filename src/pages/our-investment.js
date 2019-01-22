import React, { Component } from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import Container from '../components/Container/container'
import Thesis1 from '../images/thesis-1.png'
import Thesis2 from '../images/thesis-2.png'
import Thesis3 from '../images/thesis-3.png'
import SDG1 from '../images/1.png'
import SDG2 from '../images/2.png'
import SDG3 from '../images/3.png'
import SDG4 from '../images/4.png'
import SDG5 from '../images/5.png'
import SDG6 from '../images/6.png'
import SDG7 from '../images/7.png'
import SDG8 from '../images/8.png'
import InfiCold from '../images/logo-inficold.jpg'
import Promethean from '../images/logo-promethean.jpg'
import CarbonMaster from '../images/logo-carbon-masters.jpg'
import Solshare from '../images/logo-solshare.jpg'
import DelectricSystems from '../images/logo-delectric-systems.jpg'
import Khethworks from '../images/logo-khethworks.jpg'
import Linkedin from '../images/linkedin.png'
import Twitter from '../images/twitter.png'
import Website from '../images/website.png'
import MobSdg from '../images/mob-sdg.svg'




export default class InvestmentPage extends Component {
  render() {
    return (
  <Layout>
  <SEO title="Home" keywords={[`Seed Funding`, `Startup`, `Clean Tech`]} />
  
  <section
  style={{
      display: 'grid',
      gridColumn: '1/4',
      gridTemplateColumns: 'inherit',
      marginBottom : '0rem',
      paddingTop : '100px',
      }}
   >

   <div style={{
       gridColumn : '2/3',
       margin : '2rem 0 0 0',
     }}>
     <h3>How we do investment?</h3>
     <p>Sangam Ventures is a seed and early stage 
      venture fund that invests to improve access 
      to sustainable energy and resource productivity 
      solutions for the underserved in India that 
      can lead to inclusive development and creation 
      of communities that are resilient to climate change.</p>
     </div> 
  </section>

  <section className="thesis">
   <div style={{
       gridColumn : '2/3',
       margin : '2rem 0 2rem 0',
     }}>

  <h3>Our thesis drives investments in:</h3>
  </div>

   <Container>
    
    <div className="thesistype-1 thesistype-mob">
        <p><strong>Energy Transition</strong></p>
        <img src={Thesis1} />
    </div>

    <div class="thesistype-2 thesistype-mob">
        <p><strong>Circular Economy</strong></p>
        <img src={Thesis2} />
    </div>

    <div class="thesistype-3 thesistype-mob">
        <p><strong>Competent SMEs</strong></p>
        <img src={Thesis3} />
    </div>

   </Container>
  </section>

  <section class="sdg-goals">
  <div style={{
       gridColumn : '2/3',
       margin : '5rem 0 2rem 0',
     }}>

  <h3>We are focussing on 7 SDG</h3>
  </div>

    <div className="sdg">
    <img src={SDG1} height="100px" width="100px"/>
    <img src={SDG2} height="100px" width="100px"/>
    <img src={SDG3} height="100px" width="100px"/>
    <img src={SDG4} height="100px" width="100px"/>
    <img src={SDG5} height="100px" width="100px"/>
    <img src={SDG6} height="100px" width="100px"/>
    <img src={SDG7} height="100px" width="100px"/>
    <img src={SDG8} height="100px" width="100px"/>
    </div>
    <div className="mob-sdg">
    <img src={MobSdg} /> 
    </div>
  </section>

  <section class="portfolio"
  style={{
    display: 'grid',
    gridColumn: '1/4',
    gridTemplateColumns: 'inherit',
    marginBottom : '2rem',
    }}>

    <div style={{
       gridColumn : '2/3',
       margin : '5rem 0 2rem 0',
     }}>
     <h3>Our Portfolio</h3>
     </div> 

     <div style={{display : 'flex',gridColumn : '2/3',justifyContent: 'space-around',flexWrap : 'wrap'}}>
     
     <div class="portfolio-1" >
     <img src={InfiCold} />
     <p>Inficold Thermal battery provides 6hrs of 
         backup power for cooling at 83% lower 
         cost/kWh of backup vs. diesel or 25% of 
         cost of Lead Acid Batteries</p>
         <a href="http://www.inficold.com/" target="blank" style={{
          padding : '0 1rem 0 0',
        }}><img src={Website} alt="Linkedin" height="20" width="20"/></a>
                    <a href="https://www.linkedin.com/company/inficold/" target="blank" style={{
          padding : '0 1rem 0 0',
        }}><img src={Linkedin} alt="Linkedin" height="20" width="20"/></a>
        <a href=" https://twitter.com/Inficold_Inc" target="blank"><img src={Twitter} alt="Twitter" height="15" width="20" /></a>  
     </div>

     <div class="portfolio-1">
     <img src={Promethean} />
     <p>Energy efficiency is a 3x better investment for increasing overall energy availability that energy generation </p>
     <a href=" http://www.prometheanenergy.com/" target="blank" style={{
          padding : '0 1rem 0 0',
        }}><img src={Website} alt="Linkedin" height="20" width="20"/></a>
                    <a href=" https://www.linkedin.com/company/promethean-energy/" target="blank" style={{
          padding : '0 1rem 0 0',
        }}><img src={Linkedin} alt="Linkedin" height="20" width="20"/></a>
        <a href="https://twitter.com/promethean_WHR" target="blank"><img src={Twitter} alt="Twitter" height="15" width="20" /></a> 
     </div>

     </div>

     <div style={{display : 'flex',gridColumn : '2/3',justifyContent: 'space-around', flexWrap : 'wrap'}}>
     
     <div class="portfolio-1">
     <img src={CarbonMaster} />
     <p>Carbon Masters has developed a circular business model for bottling & sale of biogas for kitchens, automobiles & agro-industries reducing harmful Methane & CO2 emissions</p>
     <a href="http://carbonlites.com/" target="blank" style={{
          padding : '0 1rem 0 0',
        }}><img src={Website} alt="Linkedin" height="20" width="20"/></a>
                    <a href="https://www.linkedin.com/company/carbon-masters/about/" target="blank" style={{
          padding : '0 1rem 0 0',
        }}><img src={Linkedin} alt="Linkedin" height="20" width="20"/></a>
        <a href="https://twitter.com/carbonlites" target="blank"><img src={Twitter} alt="Twitter" height="15" width="20" /></a>
     </div>

     <div class="portfolio-1">
     <img src={Solshare} />
     <p>SolShare is leading the Energiewende by developing services backbone for the future of utilities</p>
     <a href="https://www.me-solshare.com/" target="blank" style={{
          padding : '0 1rem 0 0',
        }}><img src={Website} alt="Linkedin" height="20" width="20"/></a>
                    <a href="https://www.linkedin.com/company/me-solshare/" target="blank" style={{
          padding : '0 1rem 0 0',
        }}><img src={Linkedin} alt="Linkedin" height="20" width="20"/></a>
        <a href="https://twitter.com/MESOL_share" target="blank"><img src={Twitter} alt="Twitter" height="15" width="20" /></a> 
     </div>

     </div>

     <div style={{display : 'flex',gridColumn : '2/3',justifyContent: 'space-around', flexWrap : 'wrap'}}>
     
     <div class="portfolio-1" >
     <img src={DelectricSystems} />
     <p>Delectrik Systems is developing very low cost, long duration sustainable energy storage system based on a mature Vanadium Redox Flow Battery chemistry</p>
     <a href="" target="blank" style={{
          padding : '0 1rem 0 0',
        }}><img src={Website} alt="Linkedin" height="20" width="20"/></a>
                    <a href="https://www.linkedin.com/company/delectrik/about/" target="blank" style={{
          padding : '0 1rem 0 0',
        }}><img src={Linkedin} alt="Linkedin" height="20" width="20"/></a>
        <a href="https://twitter.com/DelectrikInfo" target="blank"><img src={Twitter} alt="Twitter" height="15" width="20" /></a>
     </div>

     <div class="portfolio-2">
     <img src={Khethworks} />
     <p>Khethwork’s highly efficient solar pump design is optimised to give farmers the flow required for surface irrigation with less than 300 watts of power and payback in 2 years</p>
     <a href="http://khethworks.com/" target="blank" style={{
          padding : '0 1rem 0 0',
        }}><img src={Website} alt="Linkedin" height="20" width="20"/></a>
                    <a href="https://www.linkedin.com/company/khethworks/about/" target="blank" style={{
          padding : '0 1rem 0 0',
        }}><img src={Linkedin} alt="Linkedin" height="20" width="20"/></a>
        <a href="https://twitter.com/khethworks" target="blank"><img src={Twitter} alt="Twitter" height="15" width="20" /></a>  
     </div>
     </div>
  </section>


    </Layout>
    )
  }
}
