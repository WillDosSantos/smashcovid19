import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import bluemug1 from "../images/blue-mug/blue-mug-1.png"
import bluemug2 from "../images/blue-mug/blue-mug-2.png"
import bluemug3 from "../images/blue-mug/blue-mug-3.png"
import bluemug4 from "../images/blue-mug/blue-mug-4.png"
import bluemug5 from "../images/blue-mug/blue-mug-5.png"
import shirt3 from "../images/blue-mug/thumbnail-image.jpg"

const FifthPage = () => (
  <Layout>
    <div className="content">
      <div>
        <div className="article-header">
          <div className="article-header--left">
            <h1>HEART OF BLUE MUG</h1>
            <span><strong>Date:</strong> April 28, 2020</span>
          </div>
          <a class="btn btn--primary" href="https://smashcovid19.threadless.com/designs/heart-of-bug-mug">Buy Heart of Blue Mug...</a>
        </div>
        <br/>
        <br/>
        <article>
          <div className="d-f jc-sb ac-i">
            <h2>About Blue Mug</h2>
            <span><strong>Designer:</strong> William dos Santos</span>
          </div>
          <hr/>
          <img className="push-left" src={bluemug4} alt="Blue Mug Restaurant" />
          <p>When it comes to Blue Mug Coffee and Tea, they really do put love into what they do. It has been very inspiring to see this little coffee shop be such a beckon of hope for their community.</p>  
          <p>With all that is going on with the COVID-19 lockdowns, and the fear from the virus itself, they still push forward in keeping their business alive and serving their city with great coffee and tea to bring you that comfort of home and what we have to look foward to when this is all over.</p>
          <p>Blug Mug is a great way to start your morning. Wake up, and swing by the shop for your to-go order, and treat yourself to a relaxing break, rather than reveling in things that are outside of your control.</p>
          <p>And if you aren't in the area, you can still help this great establishment by purchasing this t-shirt. As always all earnings go to the business we support.</p>
          <img className="push-right img-small" src={bluemug3} alt="Blue Mug Crew" />
          <img className="push-left img-small" src={bluemug1} alt="Blue Mug shirt design" />
          </article>
        <article>
          <h2 style={{
            marginTop: `1em`,
          }}>THE DESIGN</h2>
          <hr/>
          <img className="push-left" src={shirt3} alt="Get Your Steak on shirt" />
          <p>The folks at Blue Mug have a special place in my heart and they were one of the first that came to mind when the lockdowns first were put in place.</p>
          <p>While I was working on this design, I was thinking about one of my favorite designers, Aaron Draplin, and a story he told about some friends of his that he helped out.</p>
          <p>To summarize, Aaron Draplin had a friend that was using an image for his companies logo that he ended up getting into hot water for, so Mr. Draplin set aside time and rebranded his site for free.</p>
          <p>So, needless to say, I was more or less "Draplin inspired" on this design.</p>
          <p>I'm pretty stoked for this shirt and I can't to wear it. I hope you join me and add this to your Smash Covid19 collection. Remember all the designer earnings go towards the restaurant and helps out Blue Mug during this time.</p>
          <p>With the <a href="https://smashcovid19.threadless.com/designs/heart-of-bug-mug">Get Your Steak On</a> shirt, you are making sure that people can keep "Getting Their Steak On", and get that great tasting cheesesteak when you stop by for a visit after all this is done and over with.</p>
          <p>Be a part of something special today. Get your steak on!</p>
        </article>
        <br/>
        <article>
          <p>Normally, it's not common to have two designs for something like this but because I felt a little more inspired after having a cheesesteak sandwich from Philly Franks called "The Works". Well, the "works" put me to work.</p>
          <p>And I've come to find out that I have a secret passion for designing cheese. Something about the cheeseholes makes me happy. I'm not really sure why and maybe the lockdowns are getting to me.</p>
          <p>Either way, I dig this shirt and I'm going to order one for myself in red. You can look forward to seeing me wearing it on social media as I destroy yet another cheesesteak sandwich. Summer bod here I come!</p>
          <p>Side note: I also wanted to include the Liberty Bell because you know...cheesesteaks....philly....yeah you got it ;)</p>
        </article>
      </div>
    </div>
  </Layout>
)

export default FifthPage