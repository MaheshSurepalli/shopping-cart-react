import React from 'react'
import { ShopContext } from '../../context/shop-context';

export const Product = ({ product }) => {

  const { cartItems, addCartItem } = React.useContext(ShopContext);
  const cartAmount = cartItems[product.id];

  return (
    <div className='product'>
      <img src={product.productImage}></img>
      <div className='description'>
        <p>
          <b>{product.productName}</b>
        </p>
        <p>${product.price}</p>
      </div>
      <button onClick={() => addCartItem(product.id)} className='addToCartBttn'>Add to Cart {cartAmount > 0 ? `(${cartAmount})` : ``}</button>
    </div>
  )
}
