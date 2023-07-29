import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../context/shop-context';
import { PRODUCTS } from '../../products';
import { CartItem } from './cart-item';
import './cart.css'

export const Cart = () => {

    const { cartItems, getTotalCartAmount } = React.useContext(ShopContext);
    const navigate = useNavigate();

    return (
        <div className='cart'>
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className='cartItems'>
                {PRODUCTS.map(product => {
                    if (cartItems[product.id] > 0)
                        return <CartItem key={product.id} product={product} />
                })}
            </div>
            {getTotalCartAmount() > 0 ?
                <div className='checkout'>
                    <p>Sub total: ${getTotalCartAmount()}</p>
                    <button onClick={() => navigate("/")}>Continue Shopping</button>
                    <button>Checkout</button>
                </div> : <div><h1>Your cart is empty</h1></div>}
        </div>
    )
}
