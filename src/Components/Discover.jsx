import React from 'react'
import "../Css/discover.css"
import blog1 from "../images/blog-1.jpg"
import blog2 from "../images/blog-2.jpg"
import blog3 from "../images/blog-3.jpg"
import { BsArrowRightShort } from 'react-icons/bs';

function Discover() {
  return (
    <>
    
      <div className="container-fluid  discover-con" id='blog'   >
     <div className='text-center '>
        <h1 className=' fw-bolder'  >More <span className='under-line'>to</span> Discover</h1>
     </div>

      <div class="row mt-5" >
      <div class="col-md-4">
      <div class="card mb-5 border-0">
          
      <div class="geeks w-100">
      <img src={blog1} class="card-img-top" alt="Client 3" />
</div>
       
          <div class="card-body card_body text-center" >
            <h5 class="card-title fs-4 fw-bolder">Find a Store</h5>
            <p class="card-text fw-bolder">Our Store <BsArrowRightShort className='d-icon fs-4' /> </p>
          </div>
        </div>
 </div>

      <div class="col-md-4">
      <div class="card mb-5 border-0">
          
      <div class="geeks w-100">
      <img src={blog2} class="card-img-top" alt="Client 3" />
</div>
       
          <div class="card-body card_body text-center" >
            <h5 class="card-title fs-4 fw-bolder">From Our Blog</h5>
            <p class="card-text fw-bolder">Our Store <BsArrowRightShort className='d-icon fs-4' /> </p>
          </div>
        </div>
      </div>

      <div class="col-md-4">
      <div class="card mb-5 border-0">
          
          <div class="geeks w-100">
          <img src={blog3} class="card-img-top" alt="Client 3" />
    </div>
           
              <div class="card-body card_body text-center" >
                <h5 class="card-title fs-4 fw-bolder">Our Story</h5>
                <p class="card-text fw-bolder">Our Store <BsArrowRightShort className='d-icon fs-4' /> </p>
              </div>
            </div> </div>
    </div>

      </div>
    </>
  )
}

export default Discover
