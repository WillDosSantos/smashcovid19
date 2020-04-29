import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import mama1 from "../images/mama-kats/mama-1.png"
import mama2 from "../images/mama-kats/mama-2.png"
import mama3 from "../images/mama-kats/mama-3.png"
import mama4 from "../images/mama-kats/mama-4.png"
import mama5 from "../images/mama-kats/mama-5.png"
import shirt2 from "../images/shirt-2.png"
import mama6 from "../images/mama-kats/mama-6.png"

const ThirdPage = () => (
  <Layout>
    <div className="content">
      <div>
        <div className="article-header">
          <div className="article-header--left">
            <h1>LOVE YOUR MAMA</h1>
            <span><strong>Date:</strong> March 29, 2020</span>
          </div>
          <a class="btn btn--primary" href="https://smashcovid19.threadless.com/designs/love-your-mama">Buy Love Your Mama...</a>
        </div>  
        <br/>      
        <article>
          <div style={{
              marginBottom: `2em`,
              marginTop: `1em`,
            }}
            className="video-container">
            <iframe className="video" src="https://www.youtube.com/embed/R_WbpeJM3U4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          </article>
        <br/>
        <article>
          <div className="d-f jc-sb ac-i">
            <h2>About Mama Kats</h2>
            <span><strong>Designer:</strong> William dos Santos</span>
          </div>
          <hr/>
          <img className="push-left" src={mama5} alt="mama kats booth" />
          <p>If you've ever been to North County San Diego, and are craving breakfast on an early morning, chances are you have heard of this little gem of an establishment in San Marcos California called Mama Kats.</p>
          <p>Mama Kats Restaurant and Pie shop is a family run business and as been around since 2008, serving North County with it's delicious food and warm atmosphere. Owner Michael Herrera and his wife Kristen work together with their dedicated employees to make sure that people have an enjoyable meal in warm and comforting setting.</p>
          <img className="push-right img-small" src={mama3} alt="mama kats booth" />
          <p>With the recent events of the COVID-19 Pandemic, and the policies that have been set by the federal and state governments, the Mama Kats crew has been forced to adapt to the situation. They are currently working with a skeleton crew and doing online and to go orders. So if you are in the mood for some good food during your lock down, get an order from these guys. Personal opinion, you can't go wrong with Southern Comfort.</p>
          <p>For more information on Mama Kats, you can visit <a href="http://www.mamakats.com/">their website</a> or follow them on <a href="https://www.instagram.com/mamakatspieshop/">Instagram</a>, or <a href="https://www.facebook.com/mamakatsrestaurant?ref=hl">Facebook</a>.</p>
          
          </article>
        <article>
          <h2 style={{
            marginTop: `1em`,
          }}>THE DESIGN</h2>
          <hr/>
          <img className="push-left" src={shirt2} alt="mama kats shirt" />
          <p>I've been dining at the Mama Kats restaurant and pie shop for a few years now. Michael and Kristen are some of the best people that you could hope to meet. They are a staple in the community of North County and they have worked hard to get to where they are. You can see this as soon as you enter the restaurant. I've never experienced a sour face or bad attitude. Their employees are always happy and eager to take your order. Whenever I dine there, I always walk away just feeling good about life.</p>
          <p>While working on this design, I referenced a lot of old neon signs. Something about the light of a neon sign always catches my attention. And during dark times, you need to have a light out there.</p>
          <p>I also thought about the staff that I have met over the years there at Mama Kats. Thinking about there time away from their work and seeing their friendly faces.</p>
          <img className="push-right" src={mama6} alt="mama kats shirt design" />
          <p>With all that in mind, started sketching out some letters and <em>Love Your Mama</em> just started to come out. Probably because I was thinking about my mom as well.</p>
          <p>Ultimately, I'm pretty happy with the design. Even if I'm the only one that buys it, I'm glad I did it.</p>
          <p>With the <a href="https://smashcovid19.threadless.com/designs/love-your-mama">Love Your Mama</a> shirt, you can help save the pies and keep this place going, and the folks that are out of work can get a little relief. Mama Kats has always looked out for the community not just with comforting food, but with it's charitable giving programs. Now it's time for the community to step up and help these fine folks.</p>
          <p>Be a part of something special today. Love your Mama and Save the Pies.</p>
         
        </article>
      </div>
    </div>
  </Layout>
)

export default ThirdPage