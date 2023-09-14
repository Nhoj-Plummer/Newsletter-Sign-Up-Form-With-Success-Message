import React from "react"
import "./Email.css"

const Email = () => {
  return (
    <form>
      <div className="email-container-form">
        <p>Email Address</p>
        <input type="email" name="email" placeholder="email@company.com" required />
        <button type="submit">Subscribe to monthly newsletter</button>
      </div>
    </form>
  )
}

export default Email
