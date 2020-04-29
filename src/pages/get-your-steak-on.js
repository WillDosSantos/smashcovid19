import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import philly1 from "../images/philly-franks/franks-1.png"
import philly2 from "../images/philly-franks/photo-1.png"
import philly3 from "../images/philly-franks/photo-2.png"
import philly4 from "../images/philly-franks/bonus-shirt.jpg"
import shirt3 from "../images/shirt-3.png"

const FourthPage = () => (
  <Layout>
    <div className="content">
      <div>
        <div className="article-header">
          <div className="article-header--left">
            <h1>GET YOUR STEAK ON</h1>
            <span><strong>Date:</strong> April 14, 2020</span>
          </div>
          <a class="btn btn--primary" href="https://smashcovid19.threadless.com/designs/get-your-steak-on">Buy Get Your Steak On...</a>
        </div>
        <br/>
           <article>
            <div style={{
                marginBottom: `2em`,
                marginTop: `1em`,
              }}
              className="video-container">
              <iframe className="video" src="https://www.youtube.com/embed/WKg7uTVZur8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </article>
        <br/>
        <br/>
        <article>
          <div className="d-f jc-sb ac-i">
            <h2>About Philly Frank's</h2>
            <span><strong>Designer:</strong> William dos Santos</span>
          </div>
          <hr/>
          <img className="push-left" src={philly2} alt="Philly Frank's Restaurant" />
          <p>If there is one place that I was very excited to help out during the COVID-19 lockdowns, it is Philly Frank's. For the best cheesesteaks on the West Coast, I don't think this place is that far off. Every time I see these folks, they are always happy to cook and talk with you. If you are in the area, and want to get a real good cheesesteak, you need to order from Philly Frank's. Now, I have been super fortunate to work for a place that has had Philly Frank's cater for us, and when they do, everyone is excited and ready to chow-down.</p>  
          <p>I think I have ordered about five so far during the lockdown, so as soon as the gyms open I should probably get back at it. Check out their site <a href="http://www.phillyfranks.com/">their website</a> or order from them on <strong>Uber Eats</strong> or <strong>GrubHub</strong>.</p>
          <img className="tab-full" src={philly3} alt="Philly Frank's Cheesesteak Sandwich" />
          </article>
        <article>
          <h2 style={{
            marginTop: `1em`,
          }}>THE DESIGN</h2>
          <hr/>
          <img className="push-left" src={shirt3} alt="Get Your Steak on shirt" />
          <p>The folks at Philly Frank's have a special place in my heart and they were one of the first that came to mind when the lockdowns first were put in place.</p>
          <p>While I was working on this design, I was thinking about one of my favorite designers, Aaron Draplin, and a story he told about some friends of his that he helped out.</p>
          <p>To summarize, Aaron Draplin had a friend that was using an image for his companies logo that he ended up getting into hot water for, so Mr. Draplin set aside time and rebranded his site for free.</p>
          <p>So, needless to say, I was more or less "Draplin inspired" on this design.</p>
          <p>I'm pretty stoked for this shirt and I can't to wear it. I hope you join me and add this to your Smash Covid19 collection. Remember all the designer earnings go towards the restaurant and helps out Philly Frank's during this time.</p>
          <p>With the <a href="https://smashcovid19.threadless.com/designs/get-your-steak-on">Get Your Steak On</a> shirt, you are making sure that people can keep "Getting Their Steak On", and get that great tasting cheesesteak when you stop by for a visit after all this is done and over with.</p>
          <p>Be a part of something special today. Get your steak on!</p>
          <img className="tab-full" src={philly1} alt="Philly Frank's shirt design" />
        </article>
        <article>
          <h2 style={{
            marginTop: `1em`,
          }}>BONUS DESIGN</h2>
          <hr/>
          <img className="push-left" src={philly4} alt="Philly Franks Bonus shirt - Give me the works" />
          <p>Normally, it's not common to have two designs for something like this but because I felt a little more inspired after having a cheesesteak sandwich from Philly Franks called "The Works". Well, the "works" put me to work.</p>
          <p>And I've come to find out that I have a secret passion for designing cheese. Something about the cheeseholes makes me happy. I'm not really sure why and maybe the lockdowns are getting to me.</p>
          <p>Either way, I dig this shirt and I'm going to order one for myself in red. You can look forward to seeing me wearing it on social media as I destroy yet another cheesesteak sandwich. Summer bod here I come!</p>
          <p>Side note: I also wanted to include the Liberty Bell because you know...cheesesteaks....philly....yeah you got it ;)</p>
          <a class="btn btn--primary" href="https://smashcovid19.threadless.com/designs/bonus-philly-franks-give-me-the-works">Buy Give Me The Works...</a>
          </article>
      </div>
    </div>
  </Layout>
)

export default FourthPage