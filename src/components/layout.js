/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import facebook from "../images/facebook.svg"
import twitter from "../images/twitter.svg"
import instagram from "../images/instagram.svg"
import youtube from "../images/youtube.svg"
import Logo from "../images/logo.svg"

import Header from "./header"
import Helmet from 'react-helmet'

import favicon from '../images/favicon.png'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{height: `100%`}}>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={{height: `100%`}}>
        <main>{children}</main>
        <footer>
          <div className="content content--footer">
            <div className="col">
              <img src={Logo} alt="Smashcovid19 Logo"/>
              © {new Date().getFullYear()}
            </div>
            <div className="col">
              <h4>Company</h4>
              <ul>
                <li>
                <Link to="/about/">
                  About us
                </Link>
                </li>
                <li>
                <Link to="/faq/">
                  FAQ
                </Link>
                </li>
                <li>
                  <a href="mailto:smashcovid@gmail.com">Contact us</a>
                </li>
                <li>
                  <Link to="/helpful-links/">
                    Helpful Links
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Further Information</h4>
              <ul>
                <li>
                  <Link to="/terms/">Terms and Conditions</Link>
                </li>
                <li>
                  <a href="https://app.termly.io/document/privacy-policy/702f231a-a7d9-4ab6-b354-f89f37578327">
                  Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Follow Us</h4>
              <ul className="social-nav">
                <li>
                <a href="https://twitter.com/Smashcovid19">
                  <img src={twitter} alt="twitter icon" />
                </a>
                </li>
                <li>
                <a href="https://www.facebook.com/smashcovid.smashcovid.7">
                  <img src={facebook} alt="facebook icon" />
                </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/smashcovid/">
                    <img src={instagram} alt="instagram icon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCGrLsdQhlINi_Vo5JraCOcA?disable_polymer=true">
                    <img src={youtube} alt="youtube icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
