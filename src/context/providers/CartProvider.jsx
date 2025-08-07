import { useReducer, useState } from "react"
import { WishlistContext } from "../context"
import { WishlistReducer } from "../reducers/WishlistReducer"
import { v4 as uuid } from "uuid"
const CartProvider = ({ children }) => {
    const initialValues = {
        cartItems: [],
        cartSummary: {
            subTotal: 0,
            discount: 0,
            coupon: '',
            shipping: 5,
            tax: 18,
            taxAmount: 0
        },
        // Sample Coupons
        couponCodes: [
            { code: 'DIS5', discout: 5 },
            { code: 'DIS10', discout: 10 }
        ],
        totalQty: 0
    }
    const [wishlistState, wishlistDispatch] = useReducer(WishlistReducer, initialValues)

    return (
        <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
            {children}
        </WishlistContext.Provider>
    )
}

export default CartProvider
