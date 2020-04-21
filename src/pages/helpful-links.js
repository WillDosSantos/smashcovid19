import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"


const HelpfulLinks = () => ( 
  <Layout>
    <section
      style={{
          paddingTop: `3em`,
          paddingBottom: `4em`,
      }}>
    >
      <div className="container">
        <h1 
        style={{
          paddingTop: `3em`,
          marginBottom: `1em`,
        }}>
          The Good Stuff
        </h1>
        <p>We've got some links that are dedicated to giving you a little boost of confidence during this season. We even have a resume template and cover letter for you to download and use if you are needing it for your next interview.</p>
      
        <h4 style={{paddingTop: `3em`}}>News and Data</h4>
        <hr/>
        <ul>
          <li>
            <h4>
              1point3acres - Coronavirus Data
            </h4>
            <p>Some really cool people have developed a fantasic application to track data for the coronavirus. It's unbiased and informative which our team has found to be helpful during this time.
            There is even things like job statics, who's hiring, laying off, etc. Check out their work and buy them a Boba Tea if you found it useful.
            </p>
            <a href="https://coronavirus.1point3acres.com/en" className="btn">Coronavirus Data</a>
          </li>
        </ul>

        <h4 style={{paddingTop: `3em`}}>Job Training Materials</h4>
        <hr/>
        <p>If you have experienced a layoff, and are looking for work, here are some helpful links and resources for you.</p>
        <ul>
          <li>Again, the folks are <strong>1point3arces</strong> have gathered the newest job listings. <a href="https://jobs.1point3acres.com/">Check them out!</a></li>
        </ul>

        <h4 style={{paddingTop: `3em`}}>Community Help</h4>
        <hr/>
        <p>Want to get involved helping your community. There are folks out there that need help.</p>
        <ul>
          <li><p>The Rock San Diego - The Rock Church has been doing outreach and community volunteering for years, and now they are stepping up again to help the community.
          If you want to learn more go to <a href="https://www.sdrock.com/ministries/disaster/coronavirus/">their page for the coronavirus</a> to see how you can help, or text <em>INFO to 52525</em>
          </p>
          </li>
        </ul>

        </div>
    </section>
  </Layout>
)

export default HelpfulLinks