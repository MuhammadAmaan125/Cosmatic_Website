import React from 'react'
import banner1 from "../images/banner-1.jpg"
import banner2 from "../images/banner-2.jpg"
import "../Css/collection.css"
function New_collection() {
  return (
    <>
      <div className="container-fluid py-5 " >
        <div className="row">
            <div className="col col-lg-8 col-12 banner-1 mt-3">
                <img src={banner1} className='banner-img1' alt="" />
            <div className='banner1'>
<h3 > New Collection</h3> 
<h1 className='fw-bold'>Discover Our Autumn Skincare</h1>
<button className='banner-btn  mt-5'>Explore More </button> 

            </div>
            </div>
            <div className="col col-lg-4 col-12 banner-2 mt-3" >
            <img src={banner2} className='banner-img2' alt="" />
                
                <div className="banner2 ">
                  <h2 className='fw-bolder'>25% off Everything</h2>
                  <p>Makeup with extanded ranges in colors for every human </p>
              
                  <button  className='banner-btn   mt-5'>Shop Sale </button> 
              
                </div>
            </div>
        </div>
        <span id='shop'></span>
      </div >
    </>
  )
}

export default New_collection
