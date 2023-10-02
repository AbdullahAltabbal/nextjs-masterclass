import React from "react"
import JokesList from "./JokesList"

export default function Jokes() {
  return (
    <main>
      <nav>
        <h2>Jokes</h2>
        <p>
          <small>Currently Jokes</small>
        </p>
      </nav>
      <JokesList />
    </main>
  )
}
