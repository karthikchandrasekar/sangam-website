import React, { Component } from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import Container from '../components/Container/container'
import Thesis1 from '../images/thesis-4.svg'
import Thesis2 from '../images/thesis-5.svg'
import Thesis3 from '../images/thesis-6.svg'
import SDG from '../images/SDG.jpg'
import InfiCold from '../images/logo-inficold.svg'
import Promethean from '../images/logo-promethean.svg'
import CarbonMaster from '../images/logo-carbon-masters.svg'
import Solshare from '../images/logo-solshare.svg'
import DelectricSystems from '../images/logo-delectric-systems.svg'
import Khethworks from '../images/logo-khethworks.svg'
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
    <div class= "thesis-type">

    <div className="thesistype-1 thesistype-mob thesistype">
        <p><strong>Energy Transition</strong></p>
        <img src={Thesis1} />
    </div>

    <div class="thesistype-2 thesistype-mob thesistype">
        <p><strong>Circular Economy</strong></p>
        <img src={Thesis2} />
    </div>

    <div class="thesistype-3 thesistype-mob thesistype">
        <p><strong>Competent SMEs</strong></p>
        <img src={Thesis3} />
    </div>

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
    <img src={SDG} />
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
