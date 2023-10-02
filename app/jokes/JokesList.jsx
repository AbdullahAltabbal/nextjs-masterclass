import Link from "next/link"
import React from "react"

async function getJokes() {
  try {
    const res = await fetch("https://official-joke-api.appspot.com/jokes/ten", {
      method: "GET",
      next: {
        revalidate: 30,
      },
    })
    return res.json()
  } catch (error) {
    console.log(error)
    return new Array()
  }
}

export default async function JokesList() {
  const jokes = await getJokes()
  return (
    <React.Fragment>
      {jokes.length === 0 && (
        <p className="text.center"> There ist no more Jokes for today! </p>
      )}
      {jokes.map((joke) => (
        <div key={joke.id} className="card">
          <Link href={`jokes/${joke.id}`}>
            <p>{joke.setup}</p>
            <div className={`pill ${joke.type}`}>{joke.type} Type</div>
          </Link>
        </div>
      ))}
    </React.Fragment>
  )
}
