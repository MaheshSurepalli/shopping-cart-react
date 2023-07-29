import React, { useState } from 'react'
import { PRODUCTS } from '../products';

export const ShopContext = React.createContext();

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i <= PRODUCTS.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addCartItem = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const removeCartItem = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const updateCartItemCount = (itemId, count) => {
        setCartItems((prev) => ({ ...prev, [itemId]: count }));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = PRODUCTS.find(product => product.id === Number(item));
                totalAmount = totalAmount + (cartItems[item] * itemInfo.price);
            }
        }
        return totalAmount;
    };

    const contextValue = { cartItems, addCartItem, removeCartItem, updateCartItemCount, getTotalCartAmount }

    return (
        <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
    );
}
