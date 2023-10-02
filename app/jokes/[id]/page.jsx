import { notFound } from "next/navigation"

export const dynamicParams = true

export async function generateStaticParams() {
  const res = await fetch("https://official-joke-api.appspot.com/jokes/ten")

  const jokes = await res.json()

  return jokes.map((joke) => ({
    id: joke.id.toString(),
  }))
}

async function getJoke(id) {
  const res = await fetch("https://official-joke-api.appspot.com/jokes/" + id, {
    method: "GET",
    next: {
      revalidate: 60,
    },
  })
  if (!res.ok) notFound()
  return res.json()
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
