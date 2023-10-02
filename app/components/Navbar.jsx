import Image from "next/image"
import Link from "next/link"
import Logo from "./logo.png"

export default function Navbar() {
  return (
    <nav>
      <Image
        alt="bean-image"
        src={Logo}
        width={50}
        quality={100}
        placeholder="blur"
      />
      <Link href="/"> Dashboard </Link>
      <Link href="/jokes"> Jokes </Link>
      <Link href="/jokes/create"> Create </Link>
    </nav>
  )
}
