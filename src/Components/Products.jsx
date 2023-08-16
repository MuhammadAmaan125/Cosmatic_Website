import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs';
import "../Css/product.css"
function Products() {
  return (
    <>
      <div className="container mt-5 ">
        <div className="row">
        <div class="col-sm-12 col-md-6 col-lg-4 mb-4"><div class="card product_card text-dark card-has-bg click-col card-bg">
        <div class="card-img-overlay d-flex flex-column">
         <div class="card-body">
           
            <h4 class="card-title mt-0 fw-bolder ">Summer Collection</h4>
           <b>Starting at $17.99 </b>
          </div>
          <div class="card-footer">
           <div class="media">

  <div class="media-body mb-3">
    <h6 class="product_text my-0 text-dark d-block fw-bolder">Shop Now <BsArrowRightShort className='product-icon' /> </h6>
  </div>
</div>
          </div>
        </div>
      </div></div>
      <div class="col-sm-12 col-md-6 col-lg-4 mb-4"><div class="card product_card text-dark card-has-bg click-col card-bg1">
        <div class="card-img-overlay d-flex flex-column">
         <div class="card-body">
           
            <h4 class="card-title mt-0 fw-bolder ">What's New?</h4>
           <b>Get the glow</b>
          </div>
          <div class="card-footer">
           <div class="media">

  <div class="media-body mb-3">
    <h6 class="product_text my-0 text-dark d-block fw-bolder">Discover Now <BsArrowRightShort className='product-icon' /> </h6>
  </div>
</div>
          </div>
        </div>
      </div></div>
      <div class="col-sm-12 col-md-6 col-lg-4 mb-4"><div class="card product_card text-dark card-has-bg click-col card-bg2">
        <div class="card-img-overlay d-flex flex-column">
         <div class="card-body">
           
            <h4 class="card-title mt-0 fw-bolder ">Buy 1 Get 1</h4>
           <b>Starting at $17.99 </b>
          </div>
          <div class="card-footer">
           <div class="media">

  <div class="media-body mb-3">
    <h6 class="product_text my-0 text-dark d-block fw-bolder">Discover Now <BsArrowRightShort className='product-icon' /> </h6>
  </div>
</div>
          </div>
        </div>
      </div></div>
     </div>
      </div>

    </>
  )
}

export default Products
