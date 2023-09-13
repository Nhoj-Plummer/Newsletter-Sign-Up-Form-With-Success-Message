import React from "react"
import "./Input.css"
import Form from "../Form/Form"
import Mobile from "../../assets/illustration-sign-up-mobile.svg"
import Desktop from "../../assets/illustration-sign-up-desktop.svg"
import Icon from "../../assets/icon-list.svg"

const textList = [{ text: "Product discovery and building what matters" }, { text: "Measuring to ensure updates are a success" }, { text: "And much more!" }]

const listText = textList.map(data => (
  <li>
    <img src={Icon} alt="Icon" />

    <span>{data.text}</span>
  </li>
))

const Input = () => {
  return (
    <Form>
      <div className="input-container_text-container">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managaers receiving monthly updates on:</p>
        <ul>{listText}</ul>
        <form>
          <p>Email Address</p>
          <div className="input-container_text-container-form">
            <input type="email" name="email" placeholder="Email Address" required />
          </div>
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
