import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import philly1 from "../images/philly-franks/franks-1.png"
import philly2 from "../images/philly-franks/photo-1.png"
import philly3 from "../images/philly-franks/photo-2.png"
import mama4 from "../images/mama-kats/mama-4.png"
import mama5 from "../images/mama-kats/mama-5.png"
import shirt3 from "../images/shirt-3.png"
import mama6 from "../images/mama-kats/mama-6.png"

const FourthPage = () => (
  <Layout>
    <div className="content">
      <div>
        <h1 className="main-title">GET YOUR STEAK ON</h1>
        <span style={{
          marginBottom: `1em`,
        }}><strong>Date:</strong> April 14, 2020</span>
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
          <img className="push-left" src={shirt3} alt="mama kats shirt" />
          <p>The folks at Philly Frank's have a special place in my heart and they were one of the first that came to mind when the lockdowns first were put in place.</p>
          <p>While I was working on this design, I was thinking about one of my favorite designers, Aaron Draplin, and a story he told about some friends of his that he helped out.</p>
          <p>To summarize, Aaron Draplin had a friend that was using an image for his companies logo that he ended up getting into hot water for, so Mr. Draplin set aside time and rebranded his site for free.</p>
          <p>So, needless to say, I was more or less "Draplin inspired" on this design.</p>
          <p>I'm pretty stoked for this shirt and I can't to wear it. I hope you join me and add this to your Smash Covid19 collection. Remember all the designer earnings go towards the restaurant and helps out Philly Frank's during this time.</p>
          <p>With the <a href="https://smashcovid19.threadless.com/designs/get-your-steak-on">Get Your Steak On</a> shirt, you are making sure that people can keep "Getting Their Steak On", and get that great tasting cheesesteak when you stop by for a visit after all this is done and over with.</p>
          <p>Be a part of something special today. Get your steak on!</p>
          <img className="tab-full" src={philly1} alt="Philly Frank's shirt design" />
        </article>
        <a class="btn mt-1" href="https://smashcovid19.threadless.com/designs/get-your-steak-on">Buy Get Your Steak On...</a>
      </div>
    </div>
  </Layout>
)

export default FourthPage