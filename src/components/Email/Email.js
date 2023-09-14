import React, { useState } from "react"
import "./Email.css"

const Email = ({ email }) => {
  const [emailValue, setEmailValue] = useState("")
  const [error, setError] = useState(null)

  function emailValidation(emailValue) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailValue)
  }

  const handleChange = e => {
    setEmailValue(e.target.value)
    if (!emailValidation(emailValue)) {
      console.log("Email is Correct")
    }
  }

  // const handleSubmit = e => {
  //   e.preventDefault()

  // }
  return (
    <form>
      <div className="email-container-form">
        <p>Email Address</p>
        <input type="email" value={emailValue} name="email" placeholder="email@company.com" onChange={handleChange} required />
        <button type="submit">Subscribe to monthly newsletter</button>
      </div>
    </form>
  )
}

export default Email
