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
    <div class="banner5">
        <div class="test"><span >Testimonial</span></div>
            <div class="gridd">
            {
                bann5.map((i)=>(
                   
                        <div class="text1">
                            <p>{i.testbox}</p>
                            <img src={i.testimg} ></img>
                        </div>
                    
                ))
            } 
    </div>
</div>
  )
}

export default Banner5
