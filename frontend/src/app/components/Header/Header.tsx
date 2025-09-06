import React from 'react'
import "./Header.scss"
import NavBar from './components/NavBar/NavBar'
import Link from 'next/link'

type Props = {
  
}


const Header = (props: Props) => {
  return (
    <div className="header-top">
      <div className='content'>
        <div className='logo'>
          <Link href="/"><img src="/icon.png" alt="Logo" /></Link>
        </div>
        <NavBar />
      </div>
    </div>
  )
}

export default Header