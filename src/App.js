import React, { useState, useEffect } from 'react';
// import Header from './Components/Header'
// import Products from './Components/Products'
// import Best_Sellers from "./Components/Best_Sellers"
// import New_collection from './Components/New_collection'
// import Shop from './Components/Shop'
// import Special_offer from './Components/Special_offer'
// import Discover from './Components/Discover'
// import Footer from './Components/Footer'
// import loader from "./images/Spinner-5.gif"
import {ThreeCircles} from "react-loader-spinner"
import Allcomp from './Components/Allcomp';
function App() {
 const [loader,setloader]=useState(false)
 useEffect(()=>{
setloader(true)
setTimeout(()=>{
setloader(false)
},2000)

 },[]) 
 


  return (
    <>

{loader ? 
        <div className="container">
      	<div className='loader '>
        <ThreeCircles
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
</div> 
        </div>
      :
      
<Allcomp/>

}
<>

{/* <div className='loader loading'>
  <img src={loader} alt=''  />
</div> */}


    {/* <Header/>  */}
    {/* <Products/>
    <Best_Sellers/>
    <New_collection/>
    <Shop/>
    <Special_offer/>
    <Discover/>
    <Footer/> */}

    
      </>
        

{/* } */}
    </>
  )
}

export default App


