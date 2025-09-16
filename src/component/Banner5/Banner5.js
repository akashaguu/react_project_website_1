import React from 'react'
import "./Banner5.css"
import climg from "../../Assets/Client Image & Info.png"


function Banner5() {
    const bann5=[{
        testbox:"This is a template Figma file, turned into code using Anima.Learn more at AnimaApp.com",
        testimg:climg
    },{
        testbox:"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
        testimg:climg
    },{
        testbox:"This is a template Figma file, turned into code using Anima.Learn more at AnimaApp.com",
        testimg:climg
    },{
        testbox:"This is a template Figma file, turned into code using Anima.Learn more at AnimaApp.com",
        testimg:climg
    },{
        testbox:"This is a template Figma file, turned into code using Anima.Learn more at AnimaApp.com",
        testimg:climg
    },{
        testbox:"This is a template Figma file, turned into code using Anima.Learn more at AnimaApp.com",
        testimg:climg
    }]
  return (
    <div className="banner5">
        <div className="test"><span >Testimonial</span></div>
            <div className="gridd">
            {
                bann5.map((i)=>(
                   
                        <div className="text1">
                            <p>{i.testbox}</p>
                            <img alt='banner5img' src={i.testimg} ></img>
                        </div>
                    
                ))
            } 
    </div>
</div>
  )
}

export default Banner5
