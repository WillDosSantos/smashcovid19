import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Earth from "../images/earth.svg"

import buy1 from "../images/buy-1.svg"
import buy2 from "../images/buy-2.svg"
import buy3 from "../images/buy-3.svg"

import shirt1 from "../images/shirt-1.png"
import shirt2 from "../images/shirt-2.png"

import hero from "../images/hero-image.svg"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="section--hero">
      <div className="content">
        <div data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1200" className="inner-content">
          <h1 className="hero-title">BUY A SHIRT <strong>SUPPORT A BUSINESS</strong></h1>
          <p className="hero-tag">All proceeds go to small businesses and the CDC Foundation under the <Link to="https://give4cdcf.org/cdcf2020/smashcovid19">team SmashCOVID19.</Link></p>
          <a className="btn" href="https://smashcovid19.threadless.com/">Buy & Support</a>    
        </div>
         <img data-sal="slide-left" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="900" className="hero-img" src={hero} alt="illustration for small business" />
      </div>
    </section>
    <section id="section-1" className="section--dark">
      <div className="content">
        <img data-sal="slide-right" data-sal-delay="300" data-sal-easing="ease" data-sal-duration="900" className="content-img--full" src={Earth} alt="Earth Vector" />
      <div data-sal="slide-left" data-sal-delay="300" data-sal-easing="ease" data-sal-duration="900" className="text-cont">
        <h4>Our Mission</h4>
        <p>On March 11th 2020, the World Health Organization announced the pandemic of COVID-19. The virus has impacted the lives of us all in some way, and some of us more than others.</p>
        <p>This site is dedicated to helping those that have been more directly impacted, on the medical front lines and in the economy with small businesses.</p>
        <p>We are dedicated to making one shirt per week, and taking all the earnings from the sales, and donating them to the CDC Foundation and the small businesses that are having to quickly adjust as a result of this time.</p>
      </div>
      </div>
    </section>
    <section id="section-2" className="section--color">
      <div className="content">
        <ul>
          <h1 style={{
              marginTop: `1em`,
              marginBottom: `1em`,
          }}>
          BUY AND GIVE
          </h1>
          <li>
            <div data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="900">
              <h4>Step 1</h4>
              <p>Each week a brand new custom shirt will be designed for a small business that has been  impacted by the COVID-19 pandemic.</p>
            </div>
            <img data-sal="slide-left" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="900" className="content-img--full" src={buy1} alt="shirt design" />
          </li>
          <li>
            <div data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="900">
              <h4>Step 2</h4>
              <p>We list the shirt on our <a href="https://smashcovid19.threadless.com/">Threadless page</a> for sale along with a description on about the business we are supporting. Each week, viewers are able to see a new design for a small business as well as how they have help make an impact during this season.</p>
            </div>
            <img data-sal="slide-left" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="900" className="content-img--full" src={buy2} alt="shirt design purchase" />
          </li>
          <li>
            <div data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="900">
              <h4>Step 3</h4>
              <p>Viewers can purchase the shirt of their choosing. 100% of the designer earnings goes towards the small business to help their employees and their families during this time. <strong>Smashcovid19.com and Design For Hope Inc. take zero commission, fees, or earnings from the resulted sales.</strong></p>
              <a className="mt-1 btn btn--lte" href="https://smashcovid19.threadless.com/">Take me to the shop</a>
              </div>
            <img data-sal="slide-left" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="900" className="content-img--full" src={buy3} alt="money goes to small business" />
          </li>
          
        </ul>
      </div>
    </section>
    <section id="section-3">
      <div className="content">
        <h1 data-sal="slide-up" data-sal-easing="ease" data-sal-duration="900" className="hero-title">There is always dry land <strong>after the flood.</strong></h1>
      </div>
      <div className="content">
        <ul className="product-list">
          <li>
              <img className="content-img--full" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="900" src={shirt1} alt="Six Feet Apart Shirt" />
            <div data-sal="slide-left" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="900" className="content--shirt">          
              <h2>SIX FEET APART</h2>
              <h3>Amount Raised: $150</h3>
              <p>Even though we are phyiscally separate, we are not emotionally or spiritually. We can still be there for eachother. All earnings from this design goes towards the CDC Foundation. Check out our <a href="https://give4cdcf.org/cdcf2020/smashcovid19">team page.</a></p>
              <div className="link-container">
                <a className="btn" href="https://smashcovid19.threadless.com/designs/six-feet-apart">View on shop</a>
                <Link to="/six-feet-apart/">Learn More</Link>
              </div>
            </div>
          </li>
          <li>
             <img className="content-img--full" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="900" src={shirt2} alt="Love Your Mama Shirt" />

            <div data-sal="slide-left" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="900" className="content--shirt">
              <h2>LOVE YOUR MAMA</h2>
              <h3>Amount Raised: $32</h3>
              <p>Mama Kats Restaurant and Pie Shop is a family run restaurant in San Marcos CA. They are known for their friendly atmosphere and fantastic food - breakfast and brunch are big things here! 
They are one of the many businesses that have been impacted by the COVID-19 Pandemic.</p>
              <div className="link-container">
                <a className="btn" href="https://smashcovid19.threadless.com/designs/love-your-mama">View on shop</a>
                <Link to="/love-your-mama/">Learn More</Link>
                </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section className="section--color d-f">
      <div className="content content--center">
        <h1>Does your business need help?</h1>
        <p>If you have a business (or know of a business) that is struggling with the lockdowns as a result of the COVID19 Pandemic, we would love to help you. Feel free to drop us a line.</p>
        <div className="btn btn--lte">Email Us</div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
