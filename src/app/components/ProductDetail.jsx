import React from 'react'

const ProductDetail = ({product}) => {
  return (
    <div>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <p>{product.description}</p>
      
    </div>
  )
}

export default ProductDetail
