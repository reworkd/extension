import { useState } from "react"

import "../styles/globals.css"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
        className="bg-gradient-to-b from-red-500 to-blue-500 h-96">
      <h2>
        Welcome to your{" "}
        <a href="https://www.plasmo.com" target="_blank">
          Plasmo
        </a>{" "}
        Extension!
      </h2>
      {/*<input onChange={(e) => setData(e.target.value)} value={data} />*/}
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}

export default IndexPopup
