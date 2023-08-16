import React from 'react'
import "../Css/product.css"
import product1 from "../images/product-01.jpg"
import product2 from "../images/product-02.jpg"
import product3 from "../images/product-03.jpg"
import product4 from "../images/product-04.jpg"
import product5 from "../images/product-05.jpg"
import product6 from "../images/product-06.jpg"
import product7 from "../images/product-07.jpg"
import product8 from "../images/product-08.jpg" 
import product9 from "../images/product-09.jpg" 
import product10 from "../images/product-10.jpg" 
import product11 from "../images/product-11.jpg" 
import product15 from "../images/product-15.jpg" 
import product16 from "../images/product-16.jpg" 
import product17 from "../images/product-17.jpg" 

import Slider from "react-slick";
import {AiFillStar , AiFillLike , AiOutlineShoppingCart, AiFillHeart,AiOutlineArrowRight} from'react-icons/ai'
import "../Css/best_sellers.css"
function Best_Sellers() {
  
    var settings = {
      arrows: false,
      dots: false,
      prevArrow: false,
      nextArrow: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: false,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
            }
          }
        ]
      };
  
    return (
    <>
      <div class="container  mt-5">
    
        <div>
          <h1 className='heading-price'>  <span className='under-line'>Our</span> Bestsellers</h1>
          <span className='seller-heading'>Shop All Products <AiOutlineArrowRight  /> </span>
        </div>
    
      <Slider  {...settings} className='mt-5'>
          

		<div>
  
   <div className="card mx-2">
  <div className='card best-card seller-img'>
  <img src={product1} className='card-img' alt="" />
  <div className='seller-animation'>
    <ul className='sci list-unstyled  mx-3'>
                <li ><AiFillLike className='saller-icon mt-3' /></li>
                <li><AiOutlineShoppingCart className='saller-icon mt-3' /></li>
                <li><AiFillHeart className='saller-icon mt-3'/></li>
             </ul> 

    </div>
   
  </div>
    <div className="card-content mt-3 text-center justify-content-center">
<del className='seller-price mx-1 fw-lighter'>$39.00</del> <b>$29.00</b> <br />
<b className='seller-title'>Facial Cleanser</b>
<ul className='seller-ul list-unstyled d-flex mx-3'>
                <li ><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li className='seller-rev mt-1 mx-2 fw-lighter'>5170 reviews</li>
             </ul> 
    </div>
   </div>
    </div>


		<div>
  
   <div className="card mx-2">
   <div className='card best-card seller-img'>
   <img src={product2} className='card-img' alt="" />
   <div className='seller-animation'>
    <ul className='sci list-unstyled  mx-3'>
                <li ><AiFillLike className='saller-icon mt-3' /></li>
                <li><AiOutlineShoppingCart className='saller-icon mt-3' /></li>
                <li><AiFillHeart className='saller-icon mt-3'/></li>
             </ul> 

    </div>
  
   </div>
    <div className="card-content mt-3 text-center justify-content-center">
 <b>$29.00</b> <br />
<b className='seller-title'>Facial Cleanser</b>
<ul className='seller-ul list-unstyled d-flex mx-3'>
                <li ><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li className='seller-rev mt-1 mx-2 fw-lighter'>5170 reviews</li>
             </ul> 
    </div>
   </div>
    </div>


		<div>
  
   <div className="card mx-2">
<div className='card best-card seller-img'>
<img src={product3} className='card-img' alt="" />
<div className='seller-animation'>
    <ul className='sci list-unstyled  mx-3'>
                <li ><AiFillLike className='saller-icon mt-3' /></li>
                <li><AiOutlineShoppingCart className='saller-icon mt-3' /></li>
                <li><AiFillHeart className='saller-icon mt-3'/></li>
             </ul> 

    </div>
  
</div>
    <div className="card-content mt-3 text-center justify-content-center">
 <b>$29.00</b> <br />
<b className='seller-title'>Facial Cleanser</b>
<ul className='seller-ul list-unstyled d-flex mx-3'>
                <li ><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li className='seller-rev mt-1 mx-2 fw-lighter'>5170 reviews</li>
             </ul> 
    </div>
   </div>
    </div>



		<div>
  
   <div className="card mx-2">
<div className='card best-card seller-img'>
<img src={product4} className='card-img' alt="" />
<div className='seller-animation'>
    <ul className='seller-ul sci list-unstyled  mx-3'>
                <li ><AiFillLike className='saller-icon mt-3' /></li>
                <li><AiOutlineShoppingCart className='saller-icon mt-3' /></li>
                <li><AiFillHeart className='saller-icon mt-3'/></li>
             </ul> 

    </div>
  
</div>
    <div className="card-content mt-3 text-center justify-content-center">
 <b>$29.00</b> <br />
<b className='seller-title'>Facial Cleanser</b>
<ul className='seller-ul list-unstyled d-flex mx-3'>
                <li ><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li className='seller-rev mt-1 mx-2 fw-lighter'>5170 reviews</li>
             </ul> 
    </div>
   </div>
    </div>


		<div>
  
   <div className="card mx-2">
 <div className='card best-card seller-img'>
 <img src={product5} className='card-img' alt="" />
 <div className='seller-animation'>
    <ul className='sci list-unstyled  mx-3'>
                <li ><AiFillLike className='saller-icon mt-3' /></li>
                <li><AiOutlineShoppingCart className='saller-icon mt-3' /></li>
                <li><AiFillHeart className='saller-icon mt-3'/></li>
             </ul> 

    </div>
  
 </div>
    <div className="card-content mt-3 text-center justify-content-center">
 <b>$29.00</b> <br />
<b className='seller-title'>Facial Cleanser</b>
<ul className='seller-ul list-unstyled d-flex mx-3'>
                <li ><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li className='seller-rev mt-1 mx-2 fw-lighter'>5170 reviews</li>
             </ul> 
    </div>
   </div>
    </div>


		<div>
  
   <div className="card mx-2">
<div className='card best-card seller-img'>

<img src={product6} className='card-img' alt="" />
<div className='seller-animation'>
    <ul className='sci list-unstyled  mx-3'>
                <li ><AiFillLike className='saller-icon mt-3' /></li>
                <li><AiOutlineShoppingCart className='saller-icon mt-3' /></li>
                <li><AiFillHeart className='saller-icon mt-3'/></li>
             </ul> 

    </div>
  
</div>
    <div className="card-content mt-3 text-center justify-content-center">
 <b>$29.00</b> <br />
<b className='seller-title'>Facial Cleanser</b>
<ul className='seller-ul list-unstyled d-flex mx-3'>
                <li ><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li className='seller-rev mt-1 mx-2 fw-lighter'>5170 reviews</li>
             </ul> 
    </div>
   </div>
    </div>



		<div>
  
   <div className="card mx-2">
<div className='card best-card seller-img'>
<img src={product7} className='card-img' alt="" />
<div className='seller-animation'>
    <ul className='sci list-unstyled  mx-3'>
                <li ><AiFillLike className='saller-icon mt-3' /></li>
                <li><AiOutlineShoppingCart className='saller-icon mt-3' /></li>
                <li><AiFillHeart className='saller-icon mt-3'/></li>
             </ul> 

    </div>
  
</div>
    <div className="card-content mt-3 text-center justify-content-center">
 <b>$29.00</b> <br />
<b className='seller-title'>Facial Cleanser</b>
<ul className='seller-ul list-unstyled d-flex mx-3'>
                <li ><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li><AiFillStar style={{color:"#198754"}}/></li>
                <li className='seller-rev mt-1 mx-2 fw-lighter'>5170 reviews</li>
             </ul> 
    </div>
   </div>
    </div>


		<div>
  
    </div>

        
                       </Slider>
     </div>
     <div class="container mt-5 " >
    
    <div>
      <h2 className='heading-price'><span className='under-line'>Under</span>     $25</h2>
      <span className='seller-heading'>Shop All Products <AiOutlineArrowRight/> </span>
    </div>

  <Slider  {...settings} className='mt-5'>
      

<div>

<div className="card mx-2">
<div className='card best-card seller-img'>
<img src={product8} className='card-img' alt="" />
<div className='seller-animation'>
<ul className='sci list-unstyled  mx-3'>
            <li ><AiFillLike className='saller-icon mt-3' /></li>
            <li><AiOutlineShoppingCart className='saller-icon mt-3' /></li>
            <li><AiFillHeart className='saller-icon mt-3'/></li>
         </ul> 

</div>

</div>
<div className="card-content mt-3 text-center justify-content-center">
<del className='seller-price mx-1 fw-lighter'>$39.00</del> <b>$29.00</b> <br />
<b className='seller-title'>Facial Cleanser</b>
<ul className='seller-ul list-unstyled d-flex mx-3'>
            <li ><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li className='seller-rev mt-1 mx-2 fw-lighter'>5170 reviews</li>
         </ul> 
</div>
</div>
</div>


<div>

<div className="card mx-2">
<div className='card best-card seller-img'>
<img src={product9} className='card-img' alt="" />
<div className='seller-animation'>
    <ul className='sci list-unstyled  mx-3'>
                <li ><AiFillLike className='saller-icon mt-3' /></li>
                <li><AiOutlineShoppingCart className='saller-icon mt-3' /></li>
                <li><AiFillHeart className='saller-icon mt-3'/></li>
             </ul> 

    </div>
  
</div>
<div className="card-content mt-3 text-center justify-content-center">
<b>$29.00</b> <br />
<b className='seller-title'>Facial Cleanser</b>
<ul className='seller-ul list-unstyled d-flex mx-3'>
            <li ><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li className='seller-rev mt-1 mx-2 fw-lighter'>5170 reviews</li>
         </ul> 
</div>
</div>
</div>


<div>

<div className="card mx-2">
<div className='card best-card seller-img'>

<img src={product10} className='card-img' alt="" />

<div className='seller-animation'>
    <ul className='sci list-unstyled  mx-3'>
                <li ><AiFillLike className='saller-icon mt-3' /></li>
                <li><AiOutlineShoppingCart className='saller-icon mt-3' /></li>
                <li><AiFillHeart className='saller-icon mt-3'/></li>
             </ul> 

    </div>
  
</div>
<div className="card-content mt-3 text-center justify-content-center">
<b>$29.00</b> <br />
<b className='seller-title'>Facial Cleanser</b>
<ul className='seller-ul list-unstyled d-flex mx-3'>
            <li ><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li className='seller-rev mt-1 mx-2 fw-lighter'>5170 reviews</li>
         </ul> 
</div>
</div>
</div>



<div>

<div className="card mx-2">
<div className='card best-card seller-img'>
<img src={product11} className='card-img' alt="" />
<div className='seller-animation'>
    <ul className='sci list-unstyled  mx-3'>
                <li ><AiFillLike className='saller-icon mt-3' /></li>
                <li><AiOutlineShoppingCart className='saller-icon mt-3' /></li>
                <li><AiFillHeart className='saller-icon mt-3'/></li>
             </ul> 

    </div>
  
</div>
<div className="card-content mt-3 text-center justify-content-center">
<b>$29.00</b> <br />
<b className='seller-title'>Facial Cleanser</b>
<ul className='seller-ul list-unstyled d-flex mx-3'>
            <li ><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li className='seller-rev mt-1 mx-2 fw-lighter'>5170 reviews</li>
         </ul> 
</div>
</div>
</div>


<div>

<div className="card mx-2">
<div className='card best-card seller-img'>
<img src={product15} className='card-img' alt="" />

<div className='seller-animation'>
    <ul className='sci list-unstyled  mx-3'>
                <li ><AiFillLike className='saller-icon mt-3' /></li>
                <li><AiOutlineShoppingCart className='saller-icon mt-3' /></li>
                <li><AiFillHeart className='saller-icon mt-3'/></li>
             </ul> 

    </div>
  
</div>
<div className="card-content mt-3 text-center justify-content-center">
<b>$29.00</b> <br />
<b className='seller-title'>Facial Cleanser</b>
<ul className='seller-ul list-unstyled d-flex mx-3'>
            <li ><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li className='seller-rev mt-1 mx-2 fw-lighter'>5170 reviews</li>
         </ul> 
</div>
</div>
</div>


<div>

<div className="card mx-2">
<div className='card best-card seller-img'>
<img src={product16} className='card-img' alt="" />

<div className='seller-animation'>
    <ul className='sci list-unstyled  mx-3'>
                <li ><AiFillLike className='saller-icon mt-3' /></li>
                <li><AiOutlineShoppingCart className='saller-icon mt-3' /></li>
                <li><AiFillHeart className='saller-icon mt-3'/></li>
             </ul> 

    </div>
  
</div>
<div className="card-content mt-3 text-center justify-content-center">
<b>$29.00</b> <br />
<b className='seller-title'>Facial Cleanser</b>
<ul className='seller-ul list-unstyled d-flex mx-3'>
            <li ><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li className='seller-rev mt-1 mx-2 fw-lighter'>5170 reviews</li>
         </ul> 
</div>
</div>
</div>



<div>

<div className="card mx-2">
<div className='card best-card seller-img'>
<img src={product17} className='card-img' alt="" />

<div className='seller-animation'>
    <ul className='sci list-unstyled  mx-3'>
                <li ><AiFillLike className='saller-icon mt-3' /></li>
                <li><AiOutlineShoppingCart className='saller-icon mt-3' /></li>
                <li><AiFillHeart className='saller-icon mt-3'/></li>
             </ul> 

    </div>
  
</div>
<div className="card-content mt-3 text-center justify-content-center">
<b>$29.00</b> <br />
<b className='seller-title'>Facial Cleanser</b>
<ul id='collection' className='seller-ul list-unstyled d-flex mx-3'>
            <li ><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li><AiFillStar style={{color:"#198754"}}/></li>
            <li className='seller-rev mt-1 mx-2 fw-lighter'>5170 reviews</li>
         </ul> 
</div>
</div>
</div>


<div>

</div>

    
                   </Slider>
 </div>
 </>
  )
}

export default Best_Sellers