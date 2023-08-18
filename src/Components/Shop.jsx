import React from 'react'
import "../Css/shop.css"
import feature1 from "../images/feature-1.jpg"
import feature2 from "../images/feature-2.jpg"
import feature3 from "../images/feature-3.jpg"
function Shop() {
  return (
    <>
    
      <div className="container-fluid  pt-5" >
     <div className='text-center'>
        <h1 className='fw-bolder' >Why Shop <span className='under-line'>With</span> Glowing?</h1>
     </div>

      <div class="row mt-5" >
      <div class="col-md-4">
      <div class="card shop-card mb-5 ">
           
      <div class="feature-div w-100">
      <img src={feature1} class="feature-img" alt="" />
</div>
       
          <div class="card-body text-center">
            <h5 class="card-title">Guaranteed PURE</h5>
            <p class="card-text"> All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients</p>
          </div>
        </div>
 </div>

      <div class="col-md-4">
      <div class="card shop-card mb-5">
      <div class="feature-div w-100">
      <img src={feature2} class="feature-img" alt="Client 3" />
</div>
          <div class="card-body text-center" >
            <h5 class="card-title">Completely Cruelty-Free</h5>
            <p class="card-text">All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients</p>
          </div>
        </div>

      </div>

      <div class="col-md-4">
        <div class="card shop-card mb-5">
        <div class=" feature-div w-100">
      <img src={feature3} class="feature-img" alt="Client 3" />
</div>
          <div class="card-body text-center" >
            <h5 class="card-title">Ingredient Sourcing</h5>
            <p class="card-text">All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients</p>
            <span id='offer'></span>
          </div>
        </div>
       
      </div>
    </div>

      </div>
   
    </>
  )
}

export default Shop
