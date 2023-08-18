import React from 'react'
import "../Css/Footer.css"
import {FaFacebook,FaTwitter,FaInstagram,FaYoutube} from'react-icons/fa'
import {GrAmex} from "react-icons/gr"
import {LiaCcVisa} from "react-icons/lia"
import {SiApplepay,SiGooglepay} from "react-icons/si"
import { CiUser } from 'react-icons/ci';
import { AiOutlineStar } from 'react-icons/ai';
import { BsHandbag } from 'react-icons/bs';
import {BiPaperPlane} from'react-icons/bi'

function Footer() {
  return (
    <>
       <footer class="bg-light text-dark ">
  <div class="container  mt-3  ">
    <div class="row py-5 ">
      <div class="col col-lg-3 col-md-4 col-sm-6 col-12 " >
        <h5 className='fw-bolder'>Company</h5>
        <ul class="list-unstyled py-2">
          <li className='py-2'><a href="" className='text-decoration-none text-dark'>Find a Location nearest you. See</a></li>
          <li className='py-2'> <a href="" className='fw-bolder text-dark'>Our Stores</a></li>
          <li className='py-2 fw-bolder'> <a href="" className='text-decoration-none text-dark'>+391 (0)35 2568 4593</a></li>
          <li className='py-2 '><a href="" className='text-decoration-none text-dark'>hello@domain.com</a></li>
          <li className='py-2'>
          <ul class="list-unstyled d-flex " >
                <li className='  fs-4'><a href="" className='text-decoration-none text-dark'><FaFacebook className='f-icon b-icon'  /></a></li>
                <li className=' ms-3 fs-4'><a href="" className='text-decoration-none text-dark'><FaTwitter  className='f-icon b-icon' /></a></li>
                <li className=' ms-3 fs-4'><a href="" className='text-decoration-none text-dark'><FaInstagram  className='f-icon i-icon' /></a></li>
                <li className=' ms-3 fs-4'><a href="" className='text-decoration-none text-dark'><FaYoutube className='f-icon y-icon'  /></a></li>
            </ul>
       
          </li>
        </ul>
      </div>
      <div class="col col-lg-3 col-md-4 col-sm-6 col-12">
        <h5 className='fw-bolder'>Useful Links</h5>
        <ul class="list-unstyled py-2">
          <li className='py-2'> <a href="" className='text-decoration-none text-dark'>New Products</a></li>
          <li className='py-2'><a href="" className='text-decoration-none text-dark'>Best Sellers</a></li>
          <li className='py-2'><a href="" className='text-decoration-none text-dark'>Bundle & Save</a></li>
          <li className='py-2'><a href="" className='text-decoration-none text-dark'>Online Gift Cart</a></li>
          
        </ul>
      </div>
      <div class="col col-lg-3 col-md-4 col-sm-6 col-12">
        <h5 className='fw-bolder'>Information</h5>
        <ul class="list-unstyled py-2">
        <li className='py-2'><a href="" className='text-decoration-none text-dark'>Start  a Retrun</a></li>
          <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Contact Us</a></li>
          <li className='py-2'><a href="" className='text-decoration-none text-dark'>Shipping FAQ</a></li>
          <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Terms & Conditions</a></li>
          <li className='py-2'><a href="" className='text-decoration-none text-dark'>Privacy Policy</a></li>
        </ul>
      </div>
      <div class="col col-lg-3 col-md-4 col-sm-6 col-12">
        <h2 className='fw-bolder'>Good Emails.</h2>
      <p>Enter your email below to be the frist to known about new collections and product launches </p>
      <div class="input-group mb-3 mt-4 ">
 
 <input type="text" class="form-control frm" placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1"/>
 <span class="input-group-text footer_icon" id="basic-addon1"><BiPaperPlane style={{color:"#83a329",fontSize:"25px"}}/></span>
</div>
      </div>
    </div>
    <div className="row  f-row  ">
      <div className="col footer-content col-lg-4 col-md-6 col-sm-8 col-12">
            <div className=' d-flex justify-content-center '>
            <p className='text-center mt-4 fw-bolder'> Create by Muhammad Aman</p>
            </div>
        </div> 
        <div className="hide-box col col-lg-4 col-md-6 col-sm-8 col-12">
            <div className=' d-flex justify-content-center py-1'>
           <h1 className='fw-bolder '><span style={{color:"#6a6f55"}}>GLO</span>WING</h1>
            </div>
        </div> 
        <div className="col col-lg-4 col-md-6 col-sm-8 col-12">
            <div className='d-flex justify-content-center py-1'>
        <GrAmex className='fs-1 mx-1'/>
        <SiApplepay className='fs-1 mx-1'/>
     <SiGooglepay className='fs-1 mx-1'/>
     <LiaCcVisa className='fs-1 mx-1' />
            </div>
        </div>
    </div>


  </div>
  <div className='hide-div fixed-bottom bg-light py-3 px-3 mt-5'>
            <CiUser className='icon' />
            <AiOutlineStar className='icon' />
            <BsHandbag className='icon ' />
            <span className='header-text'>$0.00</span>
          </div>

</footer>


    </>
  )
}

export default Footer
