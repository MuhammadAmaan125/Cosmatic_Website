import React from 'react'
import offer_banner1 from "../images/offer-banner-1.jpg"
import offer_banner2 from "../images/offer-banner-2.jpg"
import "../Css/special_offer.css"
import { useEffect, useState } from "react"
function Special_offer() {
  
//   var sent
//   var days
//   var hours
//   var minutes
//   var seconds
  
//   // Set the date we're counting down to
// var countDownDate = new Date("aug 25, 2023 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {
// console.log(hours)
//   // Get today's date and time
//   var now = new Date().getTime();
    
//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
    
//   // Time calculations for days, hours, minutes and seconds
//    days = Math.floor(distance / (1000 * 60 * 60 * 24));
//    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//  seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   // Output the result in an element with id="demo"
//   sent = `<b>${days}<b/> : <b>${hours}<b/> : <b>${minutes}<b/> : <b>${seconds}<b/> `
//   // document.getElementById("demo").innerHTML =+ ;
    
//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);
const getTimeRemaining = (endTime) => {
  const total = Date.parse(endTime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
};


const offerEndTime = new Date('2023-08-31T23:59:59'); // Replace with your offer end time

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(offerEndTime));

  useEffect(() => {
    const timer = setInterval(() => {
      const remainingTime = getTimeRemaining(offerEndTime);
      setTimeLeft(remainingTime);

      if (remainingTime.total <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [offerEndTime]);

  
  
  
  return (
    <>
      <div className="container  " >
      <div className="row offer-row">
        <div className="col col-lg-3 col-md-6 col-sm-12 col-12 ">
            <div className='special-offer1'>
                <img src={offer_banner1} className='special-img1' alt="" />
            </div>
        </div>
        <div className="col col-lg-4 col-md-6 col-sm-12 col-12"> 
            <div className="special-offer2">
                <img src={offer_banner2} className='special-img2' alt="" />
            </div>
        </div>
        <div className="col col-lg-5 col-md-12 col-sm-12 col-12">
       <div className='special-content'>
        <span>SPECIAL OFFER</span> <div className='bg-success rounded text-light px-3 d-inline-block mx-2'>-20%</div>
        <h1 className='fw-bolder mt-3'>Mountain Pine Bath Oil</h1>
        <p>
          Made using clean, non-toxic ingredients. our products are designed for everyone. 
        </p>
        <p id="demo" className='fs-1 text-success fw-bold'>
        
           {timeLeft.total <= 0 ? (
            <p>Offer has ended.</p>
          ) : (
            <p>
              {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}  
            </p>
          )}
          
        
        </p>
        <button className='banner-btn  my-4'>Get Only $39.00 </button> 
       </div>


        </div>
      

      </div>
    
      </div> 
         </>
  )
}

export default Special_offer
 