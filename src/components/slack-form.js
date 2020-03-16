import React from "react"
import styles from "./slack-form.module.css"

const SlackForm = () => (
  <div className={ styles.container }>
    <form name="slack-sign-up" method="post" data-netlify="true">
      <input type="hidden" name="form-name" value="slack-sign-up" />
      <label className={ styles.label }>
        Name
        <input type="text" name="name" id="name" />
      </label>
      <label className={ styles.label }>
        Email
        <input type="email" name="email" id="email" />
      </label>
      <label className={ styles.label }>
        Twitter Handle
        <input type="text" name="twitter" id="twitter" />
      </label>
      <label className={ styles.label }>
        How do you use WordPress?
        <textarea name="wordpresslove" id="wordpresslove" rows="5" />
      </label>
      <label className={ styles.label }>
        Preferred Slack Username
        <input type="text" name="slackusername" id="slackusername" />
      </label>
      <button type="submit">Send</button>
    </form>
  </div>
)

export default SlackForm
