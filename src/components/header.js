import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.svg"

import Mail from "../images/icon-email.svg"

import "./reset.css"
import "./layout.css"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
      }}
    >  
      <Link to="/">
        <img src={Logo} alt="Smash Covid Logo" />
      </Link>
      <ul
        className="main-nav"
        style={{
          display: `flex`,
        }}
      >
        <li>
          <Link
            to="/#section-1"
          >
            Our Mission
          </Link>
        </li>
        <li>
          <Link
            to="/#section-2"
          >
            How it works
          </Link>
        </li>
        <li>
          <Link
            to="/#section-3"
          >
            View the designs
          </Link>
        </li>
        <li>
          <a href="mailto:team@smashcovid19.com"><img className="link-email" src={Mail} alt="Mail Icon" /></a>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
