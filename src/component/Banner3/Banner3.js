import React from 'react'
import "./Banner3.css"
import image1 from '../../Assets/Skills Card Icon (2).png'
import image2 from '../../Assets/Skills Card Icon (3).png'
import image3 from '../../Assets/Rectangle 25.png'

function Banner3() {
    const threecards=[{
    cardname:"ProductDesign",
    cardtext:"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    cardImage:
    },{
        cardname:"Visual Design",
        cardtext:"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
    },{
        cardname:"Art Design",
        cardtext:"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
    }]
  return (
    <div>
      <div class="banner3">
        <div class="pord">
            <div class="img1" ><img src="C:\Users\USER\Desktop\Sajesh\javascript\images\Skills Card Icon (2).png"></img></div>
            <div class="head1"><h2>Product Design</h2></div>
            <div class="para1"><h4>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</h4></div>
        </div>
        <div class="pord2">
            <div class="img2" ><img src="C:\Users\USER\Desktop\Sajesh\javascript\images\Skills Card Icon (3).png"></img></div>
            <div class="head2"><h2>Visual Design</h2></div>
            <div class="para2"><h4>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</h4></div>
        </div>
        <div class="pord3"> 
            <div class="img3" ><img src="C:\Users\USER\Desktop\Sajesh\javascript\images\Rectangle 25.png"></img></div>
            <div class="head3"><h2>Art Design</h2></div>
            <div class="para3"><h4>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</h4></div>
        </div>
    </div>
    </div>
  )
}

export default Banner3
