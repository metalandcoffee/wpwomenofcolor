import React from "react"
import styles from "./slack-form.module.css"

const SlackForm = () => (
  <div className={ styles.container }>
    <form name="slack-sign-up" method="post" data-netlify="true">
      <input type="hidden" name="form-name" value="slack-sign-up" />
      <label className={ styles.label }>
        <p>Name</p>
        <input type="text" name="name" id="name" required/>
      </label>
      <label className={ styles.label }>
        <p>Email</p>
        <input type="email" name="email" id="email" required/>
      </label>
      <label className={ styles.label }>
        <p>Twitter Handle <small>(if applicable)</small></p>
        <input type="text" name="twitter" id="twitter"/>
      </label>
      <label className={ styles.label }>
        <p>Wordpress.org Username <small>(if applicable)</small></p>
        <input type="text" name="wporg" id="wporg"/>
      </label>
      <label className={ styles.label }>
        <p>How do you use WordPress?</p>
        <textarea className={ styles.textarea } name="wordpresslove" id="wordpresslove" rows="5" required/>
      </label>
      <label className={ styles.label }>
        <p>Preferred Slack Username</p>
        <input type="text" name="slackusername" id="slackusername" required/>
      </label>
      <button className={ styles.submit } type="submit">Send</button>
    </form>
  </div>
)

export default SlackForm
