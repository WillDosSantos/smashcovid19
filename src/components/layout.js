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

import facebook from "../images/social-facebook.svg"
import twitter from "../images/social-twitter.svg"
import instagram from "../images/social-instagram.svg"
import youtube from "../images/social-youtube.svg"

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
    <>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>
          <div className="content content--fc">
            <div className="footer-container">
              <div className="footer--credits">
                <ul>
                  <li style={{ marginBottom: `10px`}}><Link to="/terms/">Terms and Conditions</Link></li>
                  <li>
                    <span>Designed by </span>
                    <a href="http://www.willdossantos.com">WDS</a>
                  </li>
                  
                </ul>
                <div>
                    © {new Date().getFullYear()} Design For Hope Inc. , Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                  </div>
              </div>
              
              <ul className="nav--social">
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
