import React from "react"

async function getJoke(id) {
  try {
    const res = await fetch(
      "https://official-joke-api.appspot.com/jokes/" + id,
      {
        method: "GET",
        next: {
          revalidate: 60,
        },
      }
    )
    return res.json()
  } catch (error) {
    console.log(error)
    return []
  }
}

export default async function JokeDetails({ params }) {
  const joke = await getJoke(params.id)
  return (
    <main>
      <nav>
        <h2>Joke Details</h2>
      </nav>
      <div className="card">
        <p>{joke.setup}</p>
        <p>{joke.punchline}</p>
        <div className={`pill ${joke.type}`}>{joke.type} Type</div>
      </div>
    </main>
  )
}
