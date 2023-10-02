import React, { Suspense } from "react"
import JokesList from "./JokesList"
import Loading from "../loading"

export default function Jokes() {
  return (
    <main>
      <nav>
        <h2>Jokes</h2>
        <p>
          <small>Currently Jokes</small>
        </p>
      </nav>

      <Suspense fallback={<Loading />}>
        <JokesList />
      </Suspense>
    </main>
  )
}
