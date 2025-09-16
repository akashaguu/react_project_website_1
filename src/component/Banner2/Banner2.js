import React from 'react'
import "./Banner2.css"
import group from "../../Assets/Group 5334 (2).png"
import nike from "../../Assets/image 1 (Traced) (3).png"
import samsung from "../../Assets/image 5 (Traced) (1).png"
import apple from "../../Assets/image 2 (Traced) (1).png"
import adidas from "../../Assets/image 7 (Traced) (1).png"


function Banner2() {
    const icons=[{
        bannerImage:group
    },{
        bannerImage:nike
    },{
        bannerImage:samsung
    },{
        bannerImage:apple
    },{
        bannerImage:adidas
    }
]
  return (
    <div>
       <div className="banner2">
        {
            icons.map((i) =>(
                 <img className="google" alt='banner2img' src={i.bannerImage} ></img>


            ))
        }
        
         
    </div>
    </div>
  )
}

export default Banner2
