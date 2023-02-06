import React from 'react'
import  "../Style/Product.css";

const Home = ({products,addToCart}) => {
  return (
    <div className='products'>
      {products.map((product)=>{
        return(
          <div className='product' key={product.id}>
            <img src={product.image} alt="" />
            <div className='page'>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={()=>{
              addToCart(product)
            }}>Add to Cart</button>
            </div>
          </div>
        )
      })}


    </div>
  )
}

export default Home