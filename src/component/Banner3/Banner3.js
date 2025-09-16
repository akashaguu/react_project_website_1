import React from 'react'
import "./Banner3.css"
import image1 from '../../Assets/Skills Card Icon (2).png'
import image2 from '../../Assets/Skills Card Icon (3).png'
import image3 from '../../Assets/Rectangle 25.png'

function Banner3() {
    const threecards=[{
    cardname:"ProductDesign",
    cardtext:"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    cardImage:image1
    },{
        cardname:"Visual Design",
        cardtext:"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
        cardImage:image2
    },{
        cardname:"Art Design",
        cardtext:"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
        cardImage:image3
    }]
  return (
    <div>
      <div className="banner3">
      
          {
            threecards.map((i) =>(
              <>
                <div className="pord">
              <div className="img1" ><img alt='banner3img' src={i.cardImage}></img></div>
            <div className="head1"><h2>{i.cardname}</h2></div>
            <div className="para1"><h4>{i.cardtext}</h4></div>
         </div>
</>
            ))
          }
            </div>
      
    </div>
  
  )
}

export default Banner3
