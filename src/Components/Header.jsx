import React from 'react'
import "../Css/header.css"
import hero_banner_1 from "../images/the-only-skincare-products-i-use-endota-spa-11564000592fsk57hm7ry-removebg-preview.png"
import hero_banner_2 from "../images/png-transparent-lotion-natural-skin-care-soap-natural-skin-care-cream-food-herbal-removebg-preview.png"
import { CiUser } from 'react-icons/ci';
import { AiOutlineStar } from 'react-icons/ai';
import { BsHandbag } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
function Header() {


window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  const sticky = navbar.offsetTop;

  if (window.scrollY > sticky) {
    navbar.classList.add("sticky");
  navbar.classList.remove("nav-class")
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("nav-class")

  }
});



  return (
    <>
      <div className="container-fluid">
        <div className='header-content ' id='home'>
          <div className='header-content-div mt-2'>
          <form class="form-inline  my-2 my-lg-0">
      <input class="form-control inp mr-sm-2"  placeholder="Search product" aria-label="Search"/>
    <i className='fas'><FaSearch/></i>
    </form>
          </div>
          <div className='header-content-div' >
            <h1 className='fw-bolder'><span style={{color:"#6a6f55"}}>GLO</span>WING</h1>
          </div>
          <div className='header-content-div mt-2'>
            <CiUser className='icon ' />
            <AiOutlineStar className='icon' />
            <span className='header-text'>$0.00</span>
            <BsHandbag className='icon' />
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg  nav-class" id='navbar'>
        <div className="container-fluid mt-3 mb-3 nav-container" >
            <div className='nav-heading' >
              <h4 className=' fw-bolder nav-head'>GLOWING</h4>
            </div>
          <button class="navbar-toggler mt-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className=' collapse navbar-collapse' id="navbarSupportedContent">

         <nav  className='navbar-nav' >
         <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item '><a href="#home" class="link nav-link active hover-underline-animation" >Home</a></li>
              <li className='nav-item '><a href="#collection" class="link nav-link active hover-underline-animation" >Collection</a></li>
              <li className='nav-item '><a href="#shop" class="link nav-link active hover-underline-animation">Shop</a></li>
              <li className='nav-item '><a href="#offer" class="link nav-link active hover-underline-animation">Offer</a></li>
              <li className='nav-item '><a href="#blog" class="link nav-link active hover-underline-animation">Blog</a></li>
            </ul>
         </nav>
          </div>

        </div>
      </nav>



     
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active bg-dark" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className='bg-dark' ></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div id = "animated-example" className="slider-text  animated fadeInDown">
       <div className='slider-item'>
 
       <b className='tag'>Starting at $7.99</b> 
       <h1 className='slider-heading mt-2'>
          Reveal The Beauty of Skin
        </h1>
        <p>
          Made using clean, non-toxic ingredients, our products are designed for everyone
        </p> 
        <div className="banner-btn-div">
 
   <button className='banner-btn mt-4 fw-bolder'>Shop Now </button>
</div>

       </div>
      </div>
<div className='hero-img animate fadeInLeft'>
<img src={hero_banner_1} class=" hero_img d-block" alt="..."/>

</div>
    </div>
    <div class="carousel-item">
    <div id = "animated-example" className="slider-text  animated fadeInDown">
        <div className='slider-item'>
        <b className='tag'>Starting at $7.99</b>
        <h1 className='slider-heading mt-2'>
          Reveal The Beauty of Skin
        </h1>
        <p>
          Made using clean, non-toxic ingredients, our products are designed for everyone
        </p> 
        <div className="banner-btn-div">
   
   <button className='banner-btn mt-4 fw-bolder'>Shop Now </button>
</div>

        </div>
      </div>
<div className='hero-img animate fadeInLeft '>
<img src={hero_banner_2} class="hero_img d-block " alt="..."/>

</div>
    </div>
 
  </div>
 
</div>

    </>
  )
}

export default Header
