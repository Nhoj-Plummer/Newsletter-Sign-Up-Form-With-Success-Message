import "./App.css"
import { useState } from "react"
import { Input, Output } from "./components/index"

function App() {
  const [showOutputPage, setShowOutputPage] = useState(false)
  const [email, setEmail] = useState("")
  return <>{showOutputPage ? <Output email={email} /> : <Input setEmail={setEmail} setShowOutputPage={setShowOutputPage} />}</>
}

export default App
