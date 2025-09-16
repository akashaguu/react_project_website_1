import React from 'react'
import "./Banner6.css"
import socimg from "../../Assets/Social Links (1).png"

function Banner6() {
    const social=[{
        coninfo:"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
        conimg:socimg
    }]
  return (
    
      <div className="banner6">
        <div className="lets">
            <span>Lets work together</span>
        </div>
        <div className="sub">
            {
                social.map((i)=>(
                        <div className="contact">
                <h3>{i.coninfo}</h3>
                <img alt='banner6img' src={i.conimg}></img>
            </div>
                ))
            }
            
            <div className="form9">
                <input className="conname" type="text" placeholder="Name"></input><br></br><br></br>
                <input className="conemail" type="text" placeholder="Email"></input><br></br>
                <button className="b2">Submit</button>
            </div>
        </div>
    </div>
    
  )
}

export default Banner6
