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
      <div class="header">

        <NavLink to={'/'}  class="header-left">LOGO</NavLink>
        <div class="header-right">
          {
            nav.map((i) =>(
               <NavLink to={i.value}>{i.name}</NavLink>


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
