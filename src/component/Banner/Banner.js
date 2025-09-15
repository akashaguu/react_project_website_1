import React from 'react'
import "./Banner.css"
import bannerImage from '../../Assets/HeaderImage 1 (3).png'
function Banner(props) {
  return (
    <div>
       <div class="banner">
    <div class="banner-left">
        <div class="first-line">Branding | Image making</div>
        <div class="second-line">Visual Designer</div>
        <div class="third-line">This is a template Figam file, turned into code using Anima.<br></br>Learn more at AnimaApp.com</div>
        <button onClick={()=>props.setModal(true)}>Contact</button>
    </div>
    <div class="banner-right">
        <img src={bannerImage}></img>
    </div>
    </div>
    </div>
  )
}

export default Banner
