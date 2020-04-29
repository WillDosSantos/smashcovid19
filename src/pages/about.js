import React from "react"
import {Link} from "gatsby"

import profile1 from "../images/about/wills-pic.png"

import Layout from "../components/layout"


const About = () => ( 
  <Layout>
    <section>
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
                <ul>
                  <li>
                    Github
                  </li>
                  <li>
                    Instagram
                  </li>
                  <li>
                    Email
                  </li>
                </ul>
              </div>
            </div>
            <div class="card">
              <div>Image</div>
              <div className="card-info">
                <h4>Ashley Dos Santos</h4>
                <span className="job">Support & Social Media</span>
                <ul>
                  <li>
                    Github
                  </li>
                  <li>
                    Instagram
                  </li>
                  <li>
                    Email
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </section>

    <section className="section--color">
      <div className="container">
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
        <p>Jesus came to this world not to condem it, but to save it. He came to spread the love of God and did not limit that to only certain groups of people, but to all of us.</p>
      </div>
    </section>
  </Layout>
)

export default About