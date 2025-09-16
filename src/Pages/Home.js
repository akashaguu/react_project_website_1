import React from 'react'

import Banner from '../component/Banner/Banner';
import Banner2 from '../component/Banner2/Banner2';
import Banner3 from '../component/Banner3/Banner3';
import Banner4 from '../component/Banner4/Banner4';
import Banner5 from '../component/Banner5/Banner5';
import Banner6 from '../component/Banner6/Banner6'; 
import ContactModals from '../ContactModals'
import { useState } from 'react';

function Home() {
  const [modal,setModal]=useState(false)
  return (
    <div>
       
 {modal && <ContactModals setModal={setModal}/>}
    <Banner setModal={setModal} />
    <Banner2 />
    <Banner3 /> 
    <Banner4 />
    <Banner5 />
    <Banner6 />
      
    </div>
  )
}

export default Home
