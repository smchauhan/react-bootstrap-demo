import { useReducer, useState } from "react"
import { WishlistContext } from "../context"
import { WishlistReducer } from "../reducers/WishlistReducer"
import { v4 as uuid } from "uuid"
const WishlistProvider = ({ children }) => {
    const initialValues = {
        userid: 1,
        wishlistItems: []
    }
    const [wishlistState, wishlistDispatch] = useReducer(WishlistReducer, initialValues)

    return (
        <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
            {children}
        </WishlistContext.Provider>
    )
}

export default WishlistProvider
