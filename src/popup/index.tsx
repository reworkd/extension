import { useState } from "react"

import "../styles/globals.css"
import Logo from "../components/Logo";

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div className="bg-black flex flex-col bg-black text-white p-4 gap-4">
        <div className="flex flex-row items-end justify-between">


        <img
            src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
            alt=""
            className="object-cover w-8 h-8 rounded"
        />

        <h1 className="dark:text-white text-xl">REWORKD</h1>
        </div>
        <div className="flex flex-row">
            <label
                htmlFor="FirstName"
                className="block text-xs font-medium text-gray-700 dark:text-gray-200"
            >
                First Name
            </label>

            <input
                type="text"
                id="FirstName"
                className="w-full mt-1 border-gray-200 rounded-md shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
            />
        </div>
        <div className="flex flex-row">
            <label>Mood:</label>
            <input></input>
        </div>
        <div className="flex flex-row">
            <label>Length:</label>
            <input></input>
        </div>
        <div className="flex flex-row">
            <label>Type:</label>
            <input></input>
        </div>
        <button className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-xl py-2 text-2xl">Generate</button>

    </div>
  )
}

export default IndexPopup
