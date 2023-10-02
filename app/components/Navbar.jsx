import Image from "next/image"
import Link from "next/link"
import Bean2 from "./Bean2.png"

export default function Navbar() {
  return (
    <nav>
      <Image
        alt="bean-image"
        src={Bean2}
        width={70}
        quality={100}
        placeholder="blur"
      />
      <Link href="/"> Dashboard </Link>
      <Link href="/jokes"> Jokes </Link>
      <Link href="/jokes/create"> Create </Link>
    </nav>
  )
}
