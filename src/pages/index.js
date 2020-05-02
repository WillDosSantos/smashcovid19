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
import shirt3 from "../images/shirt-3.png"
import shirt4 from "../images/blue-mug/thumbnail-image.jpg"

import hero from "../images/hero-image.svg"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="section--hero">
      <div className="content">
        <div data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1200" className="inner-content">
          <h1 className="hero-title">BUY A SHIRT <strong>SUPPORT A BUSINESS</strong></h1>     
          <p className="hero-tag">All proceeds go to small businesses and the CDC Foundation under the <a href="https://give4cdcf.org/cdcf2020/smashcovid19">team SmashCOVID19.</a></p>
          <span style={{ color: `#c9c9c9`, marginTop: `0em`, display: `block`, marginBottom: `1em` }}>With ♥︎ from San Diego CA</span>
          <a className="btn" href="https://smashcovid19.threadless.com/">Buy & Support</a>
        </div>
         <img data-sal="slide-left" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="900" className="hero-img" src={hero} alt="illustration for small business" />
      </div>
    </section>
     <section id="section-3">
      <div className="content">
        <h4 data-sal="slide-up" data-sal-easing="ease" data-sal-duration="900" className="hope-title">There is always dry land <strong>after the flood.</strong></h4>
      </div>
      <div className="content">
        <ul className="product-list">
          <li>
              <Link to="/six-feet-apart/">
                <img className="content-img--full" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="900" src={shirt1} alt="Six Feet Apart Shirt" />
              </Link>
              <div data-sal="slide-left" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="900" className="content--shirt">          
              <h2>SIX FEET APART</h2>
              <h3>Amount Raised: $190.60</h3>
              <p>Even though we are phyiscally separate, we are not emotionally or spiritually. We can still be there for eachother. All earnings from this design goes towards the CDC Foundation. Check out our <a href="https://give4cdcf.org/cdcf2020/smashcovid19">team page.</a></p>
              <div className="link-container">
                <a className="btn" href="https://smashcovid19.threadless.com/designs/six-feet-apart">View on shop</a>
                <Link to="/six-feet-apart/">Learn More</Link>
              </div>
            </div>
          </li>
          <li>
            <Link to="/love-your-mama/">
              <img className="content-img--full" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="900" src={shirt2} alt="Love Your Mama Shirt" />
            </Link>
            <div data-sal="slide-left" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="900" className="content--shirt">
              <h2>LOVE YOUR MAMA</h2>
              <h3>Amount Raised: $124.75</h3>
              <p>Mama Kats Restaurant and Pie Shop is a family run restaurant in San Marcos CA. They are known for their friendly atmosphere and fantastic food - breakfast and brunch are big things here! 
They are one of the many businesses that have been impacted by the COVID-19 Pandemic.</p>
              <div className="link-container">
                <a className="btn" href="https://smashcovid19.threadless.com/designs/love-your-mama">View on shop</a>
                <Link to="/love-your-mama/">Learn More</Link>
                </div>
            </div>
          </li>
          <li>
            <Link to="/get-your-steak-on/">
              <img className="content-img--full" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="900" src={shirt3} alt="Get Your Shirt On Shirt" />
            </Link>
            <div data-sal="slide-left" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="900" className="content--shirt">
              <h2>GET YOUR STEAK ON</h2>
              <span className="pill">+ Bonus</span>
              <h3>Amount Raised: $41.25</h3>
              <p>Philly Frank's has brought the passion for Philly Cheesesteaks and Hoagies to North County San Diego. This place is truly a gem if there ever was one. Philly Frank's is a family run business, and much of their business depends on the foot traffic of people looking for a great place to dine. They are currently doing orders with Uber Eats and GrubHub. So order now if you are in the area. Get your Steak on!</p>
              <div className="link-container">
                <a className="btn" href="https://smashcovid19.threadless.com/designs/get-your-steak-on">View on shop</a>
                <Link to="/get-your-steak-on/">Learn More</Link>
                </div>
            </div>
          </li>
          <li>
            <Link to="/blue-mug/">
              <img className="content-img--full" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="900" src={shirt4} alt="Get Your Shirt On Shirt" />
            </Link>
            <div data-sal="slide-left" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="900" className="content--shirt">
              <h2>HEART OF BLUE MUG</h2>
              <h3>Amount Raised: $0.00</h3>
              <p>This time, we are helping bring some hope to a coffee and tea shop in the <em>heart</em> of Escondido California called Blue Mug - Coffee and Tea! These folks have had to adapt to the lockdowns associated with COVID-19, and they still support their community with love and commitment. Check out the Heart of Blue Mug.</p>
              <div className="link-container">
                <a className="btn" href="https://smashcovid19.threadless.com/designs/love-to-blue-mug">View on shop</a>
                <Link to="/blue-mug/">Learn More</Link>
                </div>
            </div>
          </li>
        </ul>
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
              <p>Each week, our volunteer designers donate some of their time and design a brand new custom shirt for a small business that has been impacted by the COVID-19 pandemic.</p>
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
    <section className="section--color section--color__anchor d-f">
      <div className="content content--center">
        <h4>Want a cool shirt for your business?</h4>
        <p>If you have a business (or know of a business) that is struggling with the lockdowns as a result of the COVID19 Pandemic, we would love to help you. Feel free to drop us a line.</p>
        <a href="mailto:team@smashcovid19.com" className="btn btn--lte">Email Us</a>
      </div>
    </section>
  </Layout>
)

export default IndexPage
