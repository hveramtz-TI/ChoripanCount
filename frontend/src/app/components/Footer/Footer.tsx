import React from 'react'
import "./Footer.scss"

type Props = {}


const Footer = (props: Props) => {
  return (
    <div className="footer-fixed">
      <div className='content'>
        <p>© 2024 hveramtz.dev. All rights reserved.</p>
        <p>
          <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
        </p>
      </div>
    </div>
  )
}

export default Footer