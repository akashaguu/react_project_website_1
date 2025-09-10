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
       <div class="banner2">
        {
            icons.map((i) =>(
                 <img class="google" src={i.bannerImage} ></img>


            ))
        }
        
         {/* <img class="google" src={group} ></img>
         <img  class="nike" src={nike}></img>
         <img class="samsung" src={samsung} ></img>
         <img class="apple" src={apple}></img>
         <img class="adidas" src="C:\Users\USER\Downloads\image 7 (Traced) (1).png"></img>
         */}
    </div>
    </div>
  )
}

export default Banner2
