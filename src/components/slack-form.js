import React from "react"
import styles from "./slack-form.module.css"

const SlackForm = () => (
  <div className={ styles.container }>
    <form name="slack-sign-up" method="post" data-netlify="true">
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
        <input type="text" name="subject" id="subject" />
      </label>
      <label className={ styles.label }>
        How do you use WordPress?
        <textarea name="message" id="message" rows="5" />
      </label>
      <label className={ styles.label }>
        Preferred Slack Username
        <input type="text" name="subject" id="subject" />
      </label>
      <button type="submit">Send</button>
    </form>
  </div>
)

export default SlackForm
