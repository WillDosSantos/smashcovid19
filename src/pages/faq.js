import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"

const FAQ = () => ( 
  <Layout>
    <section className="section--color section--color--faq">
      <div className="content fd-c">
            <h1 style={{
              marginTop: `4em`,
              marginBottom: `1em`,
          }}>
          Frequently Asked Questions
          </h1>
          <h4>For the business owners</h4>
          <p className="notification ta-c notification--dark">It's likely that if you are working with us, that we have addressed most of your concerns. But just incase, here's some more information to help clarify.</p>
        <ul className="faq-list" style={{clear: 'both', marginTop: '4em',}}>
          <li>
            <div>
              <h5>Will I get all the money from the sale?</h5>
              <p>Unfortunately no. Production of t-shirts costs money and because Smashcovid19 has not partnered with a print shop, or on demand printing company like Threadless, those costs do come out of the sale. But the entire amount of the designer earnings belongs to you.</p>
            </div>
          </li>
          <li>
            <div>
              <h5>What are <em>designer earnings</em>?</h5>
              <p>Designer earnings is the left over profit that is made from the sale of a garment or product. Since our designers are volunteers, they do not claim the earnings and those are given to your business.</p>
            </div>
          </li>
          <li>
            <div>
              <h5>How often will I get my designer earnings check?</h5>
              <p>We recieve payment for sales a month out from the first intial sale. Once the amount is cleared we will transfer it to you.</p>
              </div>
          </li>
          <li>
            <div>
              <h5>How will I get paid?</h5>
              <p>We prefer to stick with PayPal as that is how we are paid out through <a href="https://www.threadless.com">Threadless</a>. If you don't have a PayPal don't worry. We can work it out. :)</p>
            </div>
          </li>
          <li>
            <div>
              <h5>Can we keep the design?</h5>
              <p>Yes! We will provide a vector file with your artwork and you are free to use it how you would like.</p>
            </div>
          </li>
          <li>
            <div>
              <h5>How long will my shirt be on the shop?</h5>
              <p>As long as the lockdowns are in affect in your area, and your businesses has been affected, your shirt will remain on the shop.</p>
            </div>
          </li>
          <li>
            <div>
              <h5>When the COVID-19 lockdowns end, will I still have my design on the shop?</h5>
              <p>So good new there, is the lockdowns have lifted, right? But no, once the lockdowns end, we will turn our attention to helping others in need. However, if you would like to open your own Threadless, TeeSpring, or Printful shop, we would encourage you to do so and will provide any information that you might need in order to set that up.</p>
            </div>
          </li>
          <li>
          <div>
            <h5>How come my shirt is not getting a lot of sales?</h5>
            <p>We do our best to show all of our designs in equal light, however our marketing arm is only so strong. We are running ads whenever possible for the shirts that need that extra boost. We highly recommend reaching out in your community on social media to encourage purchasing of the shirt.</p>
          </div>
        </li>
        </ul>
        </div>
    </section>
    <section className="section--faq">
      <div className="content fd-c">
      <h4>For the Buyers/Donors</h4>
      <p className="notification ta-c">Yay! You bought a shirt, but maybe you have questions? Let us help.</p>
      <ul className="faq-list faq-list--lte" style={{clear: 'both', marginTop: '4em',}}>
        <li>

            <h5>I got my shirt but there is something wrong with it.</h5>
            <p>We strive to make sure all designs are perfect on our end, but mistakes can and will happen. If your shirt is less than perfect or does not look like what you ordered, <a href="mailto:smashcovid@gmail.com">please email us</a> so we can get in touch with our reps at Threadless.</p>
        </li>
        <li>

            <h5>Does the business I want to support receive 100% of my purchase?</h5>
            <p>Unfortunately because we work with a third party printing company <a href="https://www.threadless.com">(Threadless)</a> we do not control production costs or any costs on their end. So while a significant portion will go towards the production, all designer earnings go to the business.</p>

      </li>
      <li>
    
          <h5>I don't want a shirt, but I want to help.</h5>
          <p>If you don't want a shirt that's cool. Many of these businesses provide services and goods, and if you are in the area, we recommend checking them out. If you are not in the area but would like to help the businesses some other way, we encourage you to reach out to them.</p>
      
      </li>
      <li>
   
          <h5>How can I make sure Smashcovid19 is paying the business I want to support?</h5>
          <p>Transparency is a must in this situation, and we will do whatever we can to make you comfortable with your purchase and support. For verification, we encourage you to reach out to the businesses themselves. We also will try to update all donation amounts weekly to make sure people are informed.</p>
       
      </li>
      </ul>
      </div>
    </section>
  </Layout>
)

export default FAQ