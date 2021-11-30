import React from 'react';
import { connect } from 'react-redux';
import { deleteItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import { 
        CheckoutItemContainer,
        ImageContainer,
        TextContainer,
        RemoveButtonContainer,
        QuantityContainer } from './cart-checkout-item.style';

const CartCheckoutItem = ({ cartItem, deleteItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item" />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => removeItem(cartItem)}>&#10134;</div>
                <span>
                    {quantity}
                </span>                    
                <div onClick={() => addItem(cartItem)}>&#10133;</div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick={() => deleteItem(cartItem)}>
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CartCheckoutItem);