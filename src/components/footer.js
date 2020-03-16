import React from "react"
import styles from "./footer.module.css"

const Footer = () => (
    <footer className={ styles.footer }>
        <p className= { styles.credit }>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a className= { styles.link } href="https://twitter.com/metalandcoffee_">metalandcoffee</a>
        </p>
    </footer>
)

export default Footer
