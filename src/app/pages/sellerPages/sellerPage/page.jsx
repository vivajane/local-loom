import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'
import SellerHero from '../sellerComponents/SellerHero'
import HowItWorks from '../sellerComponents/HowItWorks'
import WhySell from '../sellerComponents/WhySell'
import Ready from '../sellerComponents/Ready'
import Subscribe from '../sellerComponents/Subscribe'

const SellerHome = () => {
  return (
    <div>
    
        <SellerHero/>
        <HowItWorks/>
        <WhySell/>
        <Ready/>
        <Subscribe/>
      
    </div>
  )
}

export default SellerHome
