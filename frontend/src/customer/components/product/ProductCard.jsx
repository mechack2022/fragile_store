import React from 'react'
import './ProductCard.css'

const ProductCard = ({product}) => {
  return (
   <div className="productCard w-[15rem] transition-all cursor-pointer m-3">
    <div className="h-[20rem]">
        <img src={product.imageUrl} alt="" className="h-full w-full object-cover object-left-top" />
    </div>
    <div className="textPart bg-white p-3">
        <div>
            <p className="font-bold opacity-60">{product.brand}</p>
            <p> {product.title} </p>
        </div>
        <div className="flex items-center space-x-2 ">
            <p className="font-semibold">{product.discountedPrice}</p>
            <p className="line-through opacity-50">{product.price}</p>
            <div className="text-green-600 font-semibold">{product.discountPersent}% off</div>
        </div>
    </div>
   </div>
  )
}

export default ProductCard