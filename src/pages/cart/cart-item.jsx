import React from 'react'
import { ShopContext } from '../../context/shop-context';

export const CartItem = ({ product }) => {

    const { cartItems, addCartItem, removeCartItem, updateCartItemCount } = React.useContext(ShopContext);

    return (
        <div className='cartItem'>
            <img src={product.productImage}></img>
            <div className='description'>
                <p>
                    <b>{product.productName}</b>
                </p>
                <p>${product.price}</p>
                <div className='countHandler'>
                    <button onClick={() => removeCartItem(product.id)}>-</button>
                    <input value={cartItems[product.id]} onChange={(e) => updateCartItemCount(product.id, Number(e.target.value))} />
                    <button onClick={() => addCartItem(product.id)}>+</button>
                </div>
            </div>
        </div>
    )
}
