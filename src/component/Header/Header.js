import React from 'react'
import "./Header.css"
import {NavLink} from 'react-router-dom'

function Header() {
  const nav=[{
    name:"About",
    value:'/about'
  },{
    name:"Work",
    value:'/work'
  },{
    name:'Contact',
    value:'/contact'
  }]
  return (
    <div>
      <div className="header">

        <NavLink to={'/'}  className="header-left">LOGO</NavLink>
        <div className="header-right">
          {
            nav.map((i) =>(
               <NavLink to={i.value} className="links">{i.name}</NavLink>


            ))
          }






        {/* <div>About</div>
        <div>Work</div>
        <div>Contact</div> */}
        </div>
    </div>
    </div>
  )
}

export default Header
