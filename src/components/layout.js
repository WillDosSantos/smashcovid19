/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

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
          <div className="content">
            <div className="footer-container">
              <ul className="footer--credits">
               <li>
                  <span>Designed by </span>
                  <a href="http://www.willdossantos.com">WDS</a>
                </li>
                <li>
                  © {new Date().getFullYear()}, Built with
                  {` `}
                  <a href="https://www.gatsbyjs.org">Gatsby</a>
                </li>
              </ul>
              <ul className="nav--social">
                <li>
                  <a href="">
                    <img src={twitter} alt="twitter icon" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={instagram} alt="instagram icon" />
                  </a>
                </li>
                <li>
                  <a href="">
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
