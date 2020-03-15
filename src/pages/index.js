import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>WordPress Women of Color</h1>
    <p>WordPress Women of Color is a community that strives to connect <span role="img" aria-label="plug-emoji">🔌</span> and spark <span role="img" aria-label="sparkle-emoji">✨</span> women, trans-women, and non-binary adults of color throughout the wonderful WordPress community.</p>
    <ul>
      <li>Are you a casual enjoyer of WordPress</li>
      <li>Are you an ultimate power user of WordPress?</li>
      <li>Do you develop themes & plugins for WordPress?</li>
    </ul>
    <p>Join our community for a safe space to connect with poeple who look like you in the WordPress community.</p>
    <p>Sign up for the Slack community!</p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
