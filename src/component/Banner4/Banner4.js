import React from 'react'
import "./Banner4.css"
import img1 from "../../Assets/Image (8).png"
import img2 from "../../Assets/Image (9).png"
import img3 from "../../Assets/Image (10).png"
import img4 from "../../Assets/Image (11).png"
import img5 from "../../Assets/Image (12).png"
import img6 from "../../Assets/Image (13).png"

function Banner4() {
    const sixbox=[
       {
        boximg:img1,
        boxtitle:"Project Title",
        boxcontent:"UI,Art Direction"
    },{
        boximg:img2,
        boxtitle:"Project Title",
        boxcontent:"UI,Art Direction"
    },{
        boximg:img3,
        boxtitle:"Project Title",
        boxcontent:"UI,Art Direction"
    },{
        boximg:img4,
        boxtitle:"Project Title",
        boxcontent:"UI,Art Direction"
    },{
        boximg:img5,
        boxtitle:"Project Title",
        boxcontent:"UI,Art Direction"
    },{
        boximg:img6,
        boxtitle:"Project Title",
        boxcontent:"UI,Art Direction"
    }
    ]
  return (
    <div>
      <div className="banner4">
           <div className="late"><span >Latest Work</span></div>
            <div className="maingrid">
        {
            sixbox.map((i)=>(
            <>
             
               
                <div className="grid1">
                    <div className="imgg1"><img alt='banner4img' src={i.boximg}></img></div>
                    <div className="headd1"><h2>{i.boxtitle}</h2></div>
                    <div className="paraa1"><h4>{i.boxcontent}</h4></div>
                </div>
              
            </>
            ))
        }
        
        </div> 
         </div>

    </div>
  )
}

export default Banner4
