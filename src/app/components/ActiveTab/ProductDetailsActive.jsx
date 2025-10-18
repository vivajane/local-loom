import React from 'react'

const ProductDetailsActive = ({product}) => {
  return (
    <div className='space-y-3'>
        <h1 className='font-extrabold'>{product.name}</h1>
        <p>{product.description}</p>
      
    </div>
  )
}

export default ProductDetailsActive
