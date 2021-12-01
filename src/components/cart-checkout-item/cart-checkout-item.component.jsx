import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import { 
        CheckoutItemContainer,
        ImageContainer,
        TextContainer,
        RemoveButtonContainer,
        QuantityContainer } from './cart-checkout-item.style';

const CartCheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const dispatch = useDispatch();
    const  deleteItemClickHandler = item => dispatch(deleteItemFromCart(item));
    const addItemClickHandler = item => dispatch(addItem(item));
    const removeItemClickHandler = item => dispatch(removeItem(item));
    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item" />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => removeItemClickHandler(cartItem)}>&#10134;</div>
                <span>
                    {quantity}
                </span>                    
                <div onClick={() => addItemClickHandler(cartItem)}>&#10133;</div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick={() => deleteItemClickHandler(cartItem)}>
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}

export default CartCheckoutItem;