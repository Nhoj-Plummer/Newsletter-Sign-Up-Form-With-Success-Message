import React from "react"
import "./Output.css"
import Success from "../../assets/icon-success.svg"

const Output = ({ email }) => {
  return (
    <>
      <div className="output-container section-padding">
        <img src={Success} alt="success" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <span>{email}</span>. Please open it and click the button inside to confirm your subscription.
        </p>
        <button>Dismiss message</button>
      </div>
    </>
  )
}

export default Output
