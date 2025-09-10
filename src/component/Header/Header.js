import React from 'react'
import "./Header.css"

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

        <div class="header-left">LOGO</div>
        <div class="header-right">
          {
            nav.map((i) =>(
               <div>{i.name}</div>


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
