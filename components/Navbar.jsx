import Link from "next/link";

function Navbar() {
  return (
    <div><nav>
    <h1>Nav Bar</h1>
    <ul>
      <li>
        <Link href="/dynamos" >Dynamos</Link>
      </li>
      <li>
        <Link href="/testimonios" >Testimonios</Link>
      </li>
      <li>
        <Link href="/eventos" >Eventos</Link>
      </li>
      <li>
        <Link href="/team" >Team + Unete</Link>
      </li>
    </ul>
  </nav></div>
  )
}

export default Navbar