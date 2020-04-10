import React from "react"
import { Link } from "gatsby"

import shirt1 from "../images/shirt-1.png"
import shirt2 from "../images/six-feet-apart/photo-shirt.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <div className="content">
      <div>
        <h1 className="main-title">SIX FEET APART</h1>
        <article>
          <h2 style={{
            marginTop: `1em`,
          }}>The Inspiration</h2>
          <hr/>
          <img className="push-left" src={shirt1} alt="six feet apart shirt" />
          <p>There is a lot of help that is needed on the medicial frontlines during the COVID-19 pandemic. Without proper social distancing and containment, the virus can easily spread from person to person and would lead to overwhelming our hospitals and medical professionals.</p>
          <p>However, with social distancing comes it's own set of anxious feelings and stresses. We can easily get fixated on our own fears and thoughts and disregard others. But it's important to remember that hope is rejuvenating and fear is toxic.</p>
          <p>Even though we need to be physically distant from one and other right now, we can still support one another with our thoughts, feelings, and prayers. We can still smile at people, or hold the door open for someone when you are out getting your essentials. We can still support one another and be heros for our communities.</p>
          <p>And every hero needs a symbol and an outfit that stands as a becon of hope. But don't worry, you don't have to wear spandex.</p>
        </article>
        <article>
          <h2 style={{
            marginTop: `1em`,
          }}>What it supports</h2>
          <hr/>
          <img className="push-right" src={shirt2} alt="six feet apart shirt photo" />
          <p>There is a lot of help that is needed on the medicial frontlines during the COVID-19 pandemic. Without proper social distancing and containment, the virus can easily spread from person to person and would lead to overwhelming our hospitals and medical professionals.</p>
          <p>With every sale of this shirt, we donate all of the earnings to the CDC Foundation, to assist with their efforts in preparing for and dealing with the peak of patients that may contract COVID-19.</p>
          <p>For more information on our team page or to donate to the CDC directly, please visit the <a href="https://give4cdcf.org/cdcf2020/smashcovid19">CDC Foundation website.</a></p>
          <a class="btn mt-1" href="https://smashcovid19.threadless.com/">Buy Six Feet Apart...</a>
        </article>
      </div>
    </div>
  </Layout>
)

export default SecondPage
