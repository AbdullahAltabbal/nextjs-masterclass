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
    return []
  }
}

export default async function JokesList() {
  const jokes = await getJokes()
  return (
    <>
      {jokes.length === 0 && (
        <p className="text.center"> There ist no more Jokes for today! </p>
      )}
      {jokes.map((t) => (
        <div key={t.id} className="card">
          <p>{t.setup}</p>
          <p>{t.punchline}</p>
          <div className={`pill ${t.type}`}>{t.type} Type</div>
        </div>
      ))}
    </>
  )
}
