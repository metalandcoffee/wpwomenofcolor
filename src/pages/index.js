import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import Form from "../components/slack-form"
import SEO from "../components/seo"
import styles from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className={ styles.heading }>WordPress Women of Color</h1>
    <p>WordPress Women of Color is a community that strives to spark <span role="img" aria-label="sparkle-emoji">✨</span> and connect <span role="img" aria-label="plug-emoji">🔌</span> cis and transgender women and non-binary people of color throughout the wonderful WordPress community.</p>
    <ul>
      <li>Are you a casual enjoyer of WordPress?</li>
      <li>Are you an ultimate power user of WordPress?</li>
      <li>Do you develop themes & plugins for WordPress?</li>
    </ul>
    <p><strong>and</strong> are you a womxn or a non-binary person of color?</p>
    <p>Join our community for a safe space to connect with people who look like you in the WordPress community.</p>
    <p>Sign up for the Slack community!</p>
    <p>This community was founded by <a href="https://profiles.wordpress.org/metalandcoffee/">Ebonie Butler</a> on her last day at WordCamp St. Louis 2019. See her tweet <a href="https://twitter.com/metalandcoffee_/status/1191346394843557888">here!</a></p>
    <Form />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
