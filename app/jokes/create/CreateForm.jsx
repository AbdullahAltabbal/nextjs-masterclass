"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

// This is not working because we are not able to add joke to the api
// but all the code is working

export default function CreateForm() {
  const router = useRouter()
  const [setup, setSetup] = useState("")
  const [punchline, setPunchline] = useState("")
  const [type, setType] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)

    //     const joke =    {
    //         setup, punchline, type
    //     }
    //     const response = await fetch("http://localhost:3000/jokes/create",{
    //         method: "POST",
    //         headers:{"Content-type" : "application/json"},
    //         body: JSON.stringify(joke)
    //     })
    //   }

    // We should check here if the response ok is.. we well force the push anyway
    // because we are not really adding anything!
    // // // if (response.status === 201) {
    // // //   router.push("/tickets")
    // // // }
    router.refresh()
    router.push("/jokes")
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Setup:</span>
        <input
          type="text"
          onChange={(e) => setSetup(e.target.value)}
          value={setup}
        />
      </label>

      <label>
        <span>Punchline:</span>
        <textarea
          onChange={(e) => setPunchline(e.target.value)}
          value={punchline}
          name="punchline"
          id="punchline"
          cols="30"
        ></textarea>
      </label>

      <label>
        <span>Type:</span>
        <select
          onChange={(e) => setType(e.target.value)}
          name="type"
          id="type"
          value={type}
        >
          <option value="general"> General </option>
          <option value="programming"> Programming </option>
          <option value="knock"> Knock-Knock </option>
        </select>
      </label>

      <button className="btn-primary" disabled={isLoading}>
        {isLoading ? "Adding..." : "Add"}
      </button>
    </form>
  )
}
