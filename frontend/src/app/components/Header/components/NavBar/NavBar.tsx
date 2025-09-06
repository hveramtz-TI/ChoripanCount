import React from 'react'
import "./NavBar.scss"
import Link from 'next/link'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className="nav-bar">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  )
}

export default NavBar