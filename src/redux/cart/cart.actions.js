import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const deleteItemFromCart = item => ({
    type: CartActionTypes.DELETE_ITEM_FROM_CART,
    payload: item
});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
});