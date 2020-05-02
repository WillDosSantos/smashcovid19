import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import bluemug1 from "../images/blue-mug/blue-mug-1.png"
import bluemug2 from "../images/blue-mug/blue-mug-2.png"
import bluemug3 from "../images/blue-mug/blue-mug-3.png"
import bluemug4 from "../images/blue-mug/blue-mug-4.png"
import bluemug5 from "../images/blue-mug/blue-mug-5.png"
import bluemugart from "../images/blue-mug/blue-mug-art.png"
import shirt3 from "../images/blue-mug/thumbnail-image.jpg"

const FifthPage = () => (
  <Layout>
    <div className="content">
      <div>
        <div className="article-header">
          <div className="article-header--left">
            <h1>LOVE TO BLUE MUG</h1>
            <span><strong>Date:</strong> April 28, 2020</span>
          </div>
          <a class="btn btn--primary" href="https://smashcovid19.threadless.com/designs/love-to-bug-mug">Buy Love to Blue Mug...</a>
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
          <p>Blug Mug has a wide variety of to-go drinks which you can <a href="http://www.blue-mug.com/menu/">view here</a>.</p>
          <img className="push-right img-small" src={bluemug1} alt="Tasty Treats" />
          <p>In addition to their drinks, Blue Mug also offers a variety of delicious pastries and snacks for you to enjoy.</p>
          <p>I mean, who wouldn't enjoy a Donut, Crumb Cake or nice Danish. And Cinnamon Rolls...let's not forget about the Cinnamon Rolls. So in addition to a great beverage, treat yourself to some good food.</p>
          </article>
          <article>
         <h2 className="mt-1">The People</h2>
          <hr/>
          <img className="push-left img-small" src={bluemug3} alt="Blue Mug Crew" />
          <p>Blug Mug Coffe and Tea is owned by Stephanie Shumate. Along with her small crew, Stephanie serves the people of Escondido with great tasting drinks and a friendly atmosphere.</p>
          <p>The people of Blug Mug also support local community charities including and especially local law enforcement.</p>
          <p>To find out more about Blug Mug, check out their social media on <a href="https://www.facebook.com/BlueMugCoffeeTea/">Facebook</a>, <a href="https://www.yelp.com/biz/blue-mug-coffee-and-tea-escondido-2">Yelp</a></p>
          </article>
        <article>
          <h2 style={{
            marginTop: `7em`,
          }}>THE DESIGN</h2>
          <hr/>
          <img className="push-left" src={shirt3} alt="Get Your Steak on shirt" />
          <p>Anyone can see from their social media, that Blue Mug has a heart for their community. It's more than just creating a little foam design in your coffee, it's the efforts that are made through community awareness and encoruagement.</p>
          <p>Because of the love that is expressed through their actions, we thought that would be a good place to start for the design.</p>
          <p>Most of my initial designs, at first if I'm honest, I wasn't thrilled with. I began to sketch ideas around how I could incorporate a heart into the design. The first few ideas were more retro looking that I would have liked.</p>
          <p>Then, I tried something with steam. Then a combination of a head on perspective of the steam of the coffee, and a top down view of the mug with the traditional heart foam design that has become a widely known signature of talented baristas.</p>
          <p>I'm very happy with the way the design came out, and I hope you enjoy it as well. It's easy to be afraid, angry, or anxious. But with places like Blue Mug out there, it's one of the many reasons to focus on being positive, promoting good will towards each other, and have a heart.</p>
          <p>Be sure to check out the design on our <a href="https://smashcovid19.threadless.com/designs/love-to-bug-mug">shop</a>. With your purchase, you are showing the love to Blue Mug.</p>
          <p>Doing something great today, and support this great local business. Show the Love to Blue Mug.</p>
          <img className="tab-full" src={bluemugart} alt="Love to Blue Mug" />
        </article>
      </div>
    </div>
  </Layout>
)

export default FifthPage