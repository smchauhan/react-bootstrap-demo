import { v4 as uuid } from 'uuid'
export const WishlistReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case "ADD_TO_WISHLIST":
            return {
                ...state,
                wishlistItems: [
                    ...state.wishlistItems,
                    {
                        id: payload.id,
                        title: payload.title,
                        thumbnail: payload.thumbnail
                    },
                ]
            }
        case "REMOVE_FROM_WISHLIST":
            return {
                ...state,
                wishlistItems: state.wishlistItems.filter((item) => item.id !== payload)
            }
        default:
            return state;
    }
}