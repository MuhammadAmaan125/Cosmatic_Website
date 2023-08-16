import React from 'react'
import Header from './Header'
import Products from './Products'
import Best_Sellers from "./Best_Sellers"
import New_collection from './New_collection'
import Shop from './Shop'
import Special_offer from './Special_offer'
import Discover from './Discover'
import Footer from './Footer'

function Allcomp() {
  return (
    <>
       <Header/> 
     <Products/>
    <Best_Sellers/>
    <New_collection/>
    <Shop/>
    <Special_offer/>
    <Discover/>
    <Footer/>
    </>
  )
}

export default Allcomp
