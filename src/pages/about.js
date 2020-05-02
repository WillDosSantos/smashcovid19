import React from "react"
import {Link} from "gatsby"

import profile1 from "../images/about/wills-pic.png"
import profile2 from "../images/about/ash-pic.png"
import backer from "../images/volunteer-background.svg"

import Layout from "../components/layout"


const About = () => ( 
  <Layout>
    <section data-sal="slide-up" data-sal-easing="ease" data-sal-duration="900">
      <div className="container">
        <h1
          style={{
              paddingTop: `3em`,
              marginBottom: `0.5em`,
            }}
        >Our Team</h1>
        <div className="card-container">
            <div class="card">
              <img src={profile1} alt="William Dos Santos"/>
              <div className="card-info">
                <h4>William G Dos Santos</h4>
                <span className="job">Owner & Lead Designer</span>
                <ul className="d-f btn-group mt-1">
                  <li>
                    <a className="btn btn--small" href="https://github.com/WillDosSantos/">Github</a>
                  </li>
                  <li>
                    <a className="btn btn--small" href="http://www.willdossantos.com">Website</a>
                  </li>
                  <li>
                    <a className="btn btn--small" href="mailto:will@smashcovid19.com">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card">
              <img src={profile2} alt="Ashley Dos Santos"/>
              <div className="card-info">
                <h4>Ashley Dos Santos</h4>
                <span className="job">Support & Social Media</span>
                <ul className="d-f btn-group mt-1">
                  <li>
                    <a className="btn btn--small" href="https://github.com/valo159">Github</a>
                  </li>
                  <li>
                    <a className="btn btn--small" href="mailto:ashley@smashcovid19.com">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </section>
    <section data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1500" style={{ marginTop: `8em` }}>
      <div className="container p-r">
        <div style={{

          zIndex: `100`,

        }} className="content fd-c p-r">
          <h4>Want to join us? We'd love to work with you.</h4>
          <p className="ta-c">If you are someone that has design, development, or communication skills and are able to volunteer your time, send us an email and we will get in touch with you. The more people that help out during this time, the better.</p>
          <a className="btn" href="">Join the effort</a>
        </div>
        <img style={{ maxWidth: `600px` }} className="img-background" src={backer} alt="background"/>
      </div>
    </section>
    <section className="section--color">
      <div className="container">
        <h1
          style={{
              paddingTop: `3em`,
              marginBottom: `0.5em`,
            }}
        >Our Ethos</h1>
        <h4 
        style={{
          marginTop: `4em`,
          marginBottom: `1em`,
        }}>
          Love defeats fear
        </h4>
        <p>The COVID-19 pandemic has turned everyones life upside down in some way. However, there are some of us that have been more affected than others. Whether it's the loss of life, or financial struggle, there are people out there that can use our help.</p>
        <p>Our ethos is rooted in our faith. We believe that we are called to help all who are in need regardless of faith, race, creed, or politics.</p>
        <p>One of the greatest verses in the Bible to us, is <br/>
        <strong>1 John 4:18</strong><br/>
        <em>"There is no fear in love; but perfect love casts out fear, because fear involves torment. But he who fears has not been made perfect in love."</em>
        </p>
        <p>God sent his Son into the world not to condem it, but to save it. He came to spread the love of God and did not limit that to only certain groups of people, but to all of us.</p>
        <p>Unfortunately, there are many that use the name of God for their own personal gain or agenda, and we are committed to turning that around.</p>
        <p>Even though we are a Christian based organization, we work with people of all faiths and beliefs that promote a positive outlook and encourage the betterment of mankind without causing harm. We are commiting to using our skill sets to help the community during times of striff or hardship.</p>
        <br/>
        <br/>
        <br/>
        </div>
    </section>
  </Layout>
)

export default About