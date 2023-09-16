import React, { useState } from "react"
import "./Input.css"
import Form from "../Form/Form"
import Mobile from "../../assets/illustration-sign-up-mobile.svg"
import Desktop from "../../assets/illustration-sign-up-desktop.svg"

const textList = [{ text: "Product discovery and building what matters" }, { text: "Measuring to ensure updates are a success" }, { text: "And much more!" }]

const listText = textList.map(data => (
  <li>
    <span>{data.text}</span>
  </li>
))

const Input = ({ setEmail, setShowOutputPage }) => {
  const [emailData, setEmailData] = useState("")
  const [error, setError] = useState(null)

  function validateEmail(emailData) {
    return /\S+@\S+\.\S+/.test(emailData)
  }

  const handleChange = e => {
    /*Conditnional Formations */

    // Not Filled COmpletely or no correctly made
    if (!validateEmail(e.target.value)) {
      setError(true)
    }
    // Empty Field
    if (e.target.value === "") {
      setError(false)
    }

    // Filled Field
    if (validateEmail(e.target.value)) {
      setError(false)
    }
    setEmailData(e.target.value)
  }

  // Submit when email condition is met
  const handleSubmit = e => {
    e.preventDefault()
    if (!error) {
      setEmail(emailData)
      setShowOutputPage(true)
    }
  }

  return (
    <Form>
      <div className="input-container_text-container">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>{listText}</ul>
        <form onSubmit={handleSubmit}>
          {error ? (
            <div className="input-container_text-container-form_error ">
              <p>
                Email Address <span>Valid email required</span>
              </p>
              <input type="email" id="email" value={emailData} name="email" placeholder="email@company.com" onChange={handleChange} required />
            </div>
          ) : (
            <div className="input-container_text-container-form">
              <p>Email Address</p>
              <input type="email" id="email" value={emailData} name="email" placeholder="email@company.com" onChange={handleChange} required />
            </div>
          )}
          <button type="submit">Subscribe to monthly newsletter</button>
        </form>
      </div>
      <div className="input-cotainer_img-container">
        <picture>
          <source media="(min-width: 541px)" srcSet={Desktop} />
          <img src={Mobile} alt="img" />
        </picture>
      </div>
    </Form>
  )
}

export default Input
