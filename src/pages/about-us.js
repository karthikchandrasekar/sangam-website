import React, { Component } from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout' 
import Group from '../images/group.jpg'
import KC from '../images/KC.jpg'
import Anisha from '../images/Anisha.jpg'
import Ramesh from '../images/Ramesh.jpg'
import Shashank from '../images/Shashank.jpg'
import {Link} from 'gatsby'
import LexStart from '../images/Lexstart.png'
import Sangam from '../images/sangam.png'
import Emerging from '../images/EMERGING-INDIA-ACCEL.png'
import Container from '../components/Container/container'
import Linkedin from '../images/linkedin.png'
import Twitter from '../images/twitter.png'
import Website from '../images/website.png'


export default class AboutPage extends Component {
  render() {
    return (
        <Layout>
        <SEO title="Home" keywords={[`Seed Funding`, `Startup`, `Clean Tech`]} />
        
        <section
        style={{
            marginBottom : '2rem',
            paddingTop : '99px',
            }}
         >
      
         <div style={{
             gridColumn : '2/3',
             margin : '2rem 0 2rem 0',
           }}>
           <h3>Who we are?</h3>
           <p>Sangam Ventures is a seed and early stage 
            venture fund that invests to improve access 
            to sustainable energy and resource productivity 
            solutions for the underserved in India that 
            can lead to inclusive development and creation 
            of communities that are resilient to climate change.</p>
           <img src={Group} alt="Sangam group"/>

           </div> 
        </section>

        <section
         style={{
            display: 'grid',
            gridColumn: '1/4',
            gridTemplateColumns: 'inherit',
            marginBottom : '2rem',
            }}
        >
             <div style={{
             gridColumn : '2/3',
             margin : '2rem 0 2rem 0',
           }}>
        
        <h3>Our Team</h3>

        <figure className="team-member">
        <div class="team-member-image" >
        <img src={KC} alt="Team Memeber"/>
        </div>
        <figcaption>
        <strong class="name">Karthik Chandrasekar</strong>
        <p class="designation"> Founder </p>
        <p class="short-desc">Karthik started Sangam to find a 
        new model to provide early stage support for climate change 
        pioneers. He spends a lot of his time with the portfolio 
        & within the clean technology eco-system in India & globally.</p>
        <a href="https://www.linkedin.com/in/karthikchandrasekar" target="blank" style={{
          padding : '0 1rem 0 0',
        }}><img src={Linkedin} alt="Linkedin" height="20" width="20"/></a>
        <a href="https://twitter.com/quickgunmurugun" target="blank"><img src={Twitter} alt="Twitter" height="15" width="20" /></a>
        </figcaption>
        </figure>

         <figure className="team-member">
        
        <figcaption style={{

        }}>
        <div class="team-member-image-1">
        <img src={Anisha} alt="Team Memeber"/>
        </div>
        <strong class="name">Anisha Patnaik</strong>
        <p class="designation"> Venture Partner </p>
        <p class="short-desc">Founder at LexStart.in, serves as our legal counsel.
         Previously Anisha was a Partner at K-Law and led multiple investment mandates 
         with Karthik as Acumen’s legal counsel.</p>
         <a href="https://www.linkedin.com/in/anishapatnaik" target="blank" style={{
          padding : '0 1rem 0 0',
        }}><img src={Linkedin} alt="Linkedin" height="20" width="20"/></a>
        <a href="https://twitter.com/AnishaPatnaik" target="blank"><img src={Twitter} alt="Twitter" height="15" width="20" /></a>
        </figcaption>
        <div class="team-member-image-right">
        <img src={Anisha} alt="Team Memeber"/>
        </div>
        </figure>

        <figure className="team-member">
        <div class="team-member-image">
        <img src={Ramesh} alt="Team Memeber"/>
        </div>
        <figcaption>
        <strong class="name">Ramesh Ramaswamy</strong>
        <p class="designation"> CFO </p>
        <p class="short-desc">Ramesh brings strong experience in operational 
        financing for cash & WC management. Prior to Sangam, he was CFO @InKlude 
        Labs working on USAID-funded Deworming project. Ramesh has held various CEO,
        CFO and finance manager positions in his esteemed career including taking 
        an SME public and raising PE investment.</p>
        <a href="https://www.linkedin.com/in/s-r-ramesh-04ab5115" target="blank" style={{
          padding : '0 1rem 0 0',
        }}><img src={Linkedin} alt="Linkedin" height="20" width="20"/></a>
        <a href="https://twitter.com/seepla" target="blank"><img src={Twitter} alt="Twitter" height="15" width="20" /></a>
        </figcaption>
        </figure>

         <figure className="team-member">
         <div class="team-member-image-1" >
        <img src={Shashank} alt="Team Memeber"/>
        </div>
        <figcaption>
        <strong class="name">Shashank Agrawal</strong>
        <p class="designation"> Senior Associate</p>
        <p class="short-desc">Shashank joined Sangam in 2015 and leads
         financial diligence & financial management for Sangam & its 
         portfolio. He is passionate about creating impact in Agriculture. 
         He is a Certified CA and was previously with E&Y in their audit 
         practice.</p>
         <a href="https://www.linkedin.com/in/shashank-agrawal1990" target="blank" style={{
          padding : '0 1rem 0 0',
        }}><img src={Linkedin} alt="Linkedin" height="20" width="20"/></a>
        <a href="https://twitter.com/shashank_awl" target="blank"><img src={Twitter} alt="Twitter" height="15" width="20" /></a>
        </figcaption>
        <div class="team-member-image-right" >
        <img src={Shashank} alt="Team Memeber"/>
        </div>
        </figure>

        </div>
        </section>

        <section
         style={{
            display: 'grid',
            gridColumn: '1/4',
            gridTemplateColumns: 'inherit',
            marginBottom : '2rem',
            }}
        >

            <Container>
           
            <div class="heading"
            style={{
            gridColumn : '1/13',
            padding : '2rem 0 3rem 0',
            }}>    
            <h3>What we do beyond investment?</h3>
            </div>

           <div className="beyond-sangam"
           
               style={{
               display : 'flex',
               flexWrap : 'wrap',
               justifyContent : 'space-evenly',
               gridColumn : '1/13',
           }}>
            <figure
             style={{
                textAlign: 'center',
                width: '300px',
                padding: '0px 2rem 2rem 2rem',
                boxShadow: '0px 4px 7px #ccc',
             }}
            >
              <div><img src={Sangam} /></div>
              <figcaption>
                  <p>Sangam AIC is India's first and only dedicated
                    CleanTech incubator, run by Sangam Ventures in 
                    partnership with the Niti Aayog's Atal Innovation 
                    Mission scheme.</p>
                    <a href="https://www.aic-sangam.org/" target="blank" style={{
          padding : '0 1rem 0 0',
        }}><img src={Website} alt="Linkedin" height="20" width="20"/></a>
                    <a href="https://www.linkedin.com/showcase/sangam-aic/" target="blank" style={{
          padding : '0 1rem 0 0',
        }}><img src={Linkedin} alt="Linkedin" height="20" width="20"/></a>
        <a href="https://twitter.com/AicSangam" target="blank"><img src={Twitter} alt="Twitter" height="15" width="20" /></a>
              </figcaption>
            </figure>

            <figure
            style={{
                textAlign: 'center',
                width: '300px',
                padding: '0px 2rem 2rem 2rem',
                boxShadow: '0px 4px 7px #ccc',
             }}
            >
              <div><img src={Emerging} /></div>
              <figcaption>
                  <p>This startup acceleration program focuses on working hands-on and in the field with start-ups to achieve key milestones towards product-market fit </p>
                    <a href="https://www.aic-sangam.org/eiap2" target="blank" style={{
          padding : '0 1rem 0 0',
        }}><img src={Website} alt="Linkedin" height="20" width="20"/></a>
                    <a href="https://www.linkedin.com/in/karthikchandrasekar" target="blank" style={{
          padding : '0 1rem 0 0',
        }}><img src={Linkedin} alt="Linkedin" height="20" width="20"/></a>
        <a href="https://twitter.com/AicSangam" target="blank"><img src={Twitter} alt="Twitter" height="15" width="20" /></a>
              </figcaption>
            </figure>

            <figure
            style={{
                textAlign: 'center',
                width: '300px',
                padding: '0px 2rem 2rem 2rem',
                boxShadow: '0px 4px 7px #ccc',
             }}
            >
              <div><img src={LexStart} /></div>
              <figcaption>
                  <p>LexStart is a platform that provides legal and compliance services exclusively to start ups. </p>
                    <a href="https://www.lexstart.com/homepage" target="blank" style={{
          padding : '0 1rem 0 0',
        }}><img src={Website} alt="Linkedin" height="20" width="20"/></a>
                    <a href="https://www.linkedin.com/company/lexstart/" target="blank" style={{
          padding : '0 1rem 0 0',
        }}><img src={Linkedin} alt="Linkedin" height="20" width="20"/></a>
        <a href="https://twitter.com/Lexstart_India" target="blank"><img src={Twitter} alt="Twitter" height="15" width="20" /></a>
              </figcaption>
            </figure>
            </div>

           
           </Container>

        </section>
        </Layout>
    )
  }
}
