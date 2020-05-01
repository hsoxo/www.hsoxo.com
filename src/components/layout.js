/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div
        className={'main-wrapper'}
      >
        <main>{children}</main>
      </div>
      <svg style={{}} className="bg-shape" height="519" width="758">
        <polygon style={{fill: "#d3d3d3"}} points="0,455,693,352,173,0,92,0,0,71" />
      </svg>
      <svg style={{right: -100, top: -100}} className="bg-shape" height="536" width="633">
        <polygon style={{fill: "#b4dfe3"}} points="0,0,633,0,633,536" />
      </svg>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout





