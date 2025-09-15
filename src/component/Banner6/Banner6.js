import React from 'react'
import "./Banner6.css"
import socimg from "../../Assets/Social Links (1).png"

function Banner6() {
    const social=[{
        coninfo:"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
        conimg:socimg
    }]
  return (
    
      <div class="banner6">
        <div class="lets">
            <span>Lets work together</span>
        </div>
        <div class="sub">
            {
                social.map((i)=>(
                        <div class="contact">
                <h3>{i.coninfo}</h3>
                <img src={i.conimg}></img>
            </div>
                ))
            }
            
            <div class="form9">
                <input class="conname" type="text" placeholder="Name"></input><br></br><br></br>
                <input class="conemail" type="text" placeholder="Email"></input><br></br>
                <button class="b2">Submit</button>
            </div>
        </div>
    </div>
    
  )
}

export default Banner6
