import React from 'react'
import "./Banner.css"
import bannerImage from '../../Assets/HeaderImage 1 (3).png'
function Banner(props) {
  return (
    <div>
       <div className="banner">
    <div className="banner-left">
        <div className="first-line">Branding | Image making</div>
        <div className="second-line">Visual Designer</div>
        <div className="third-line">This is a template Figam file, turned into code using Anima.<br></br>Learn more at AnimaApp.com</div>
        <button onClick={()=>props.setModal(true)}>Contact</button>
    </div>
    <div className="banner-right">
        <img alt='bannerimage' src={bannerImage} ></img>
    </div>
    </div>
    </div>
  )
}

export default Banner
