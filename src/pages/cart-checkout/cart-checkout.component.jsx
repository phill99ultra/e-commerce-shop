import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CartCheckoutItem from '../../components/cart-checkout-item/cart-checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { CheckoutPage, CheckoutHeader, HeaderBlock, TotalContainer, WarningContainer } from './cart-checkout.style';

const CartCheckoutPage = ({ cartItems, total }) => {
    return(
        <CheckoutPage>
           <CheckoutHeader>
               <HeaderBlock>
                   <span>Product</span>
               </HeaderBlock>
               <HeaderBlock>
                   <span>Description</span>
               </HeaderBlock>
               <HeaderBlock>
                   <span>Quantity</span>
               </HeaderBlock>
               <HeaderBlock>
                   <span>Price</span>
               </HeaderBlock>
               <HeaderBlock>
                   <span>Remove</span>
               </HeaderBlock>
           </CheckoutHeader>
           {
               cartItems.map(cartItem => (
                   <CartCheckoutItem key={cartItem.id} cartItem={cartItem}/>
               ))
           }
           <TotalContainer>
               <span>TOTAL: ${total}</span>
           </TotalContainer>
           <WarningContainer>
               *Please use the following test credit card for payments*
               <br />
               4242 4242 4242 4242 Exp: 01/22 CVV: 123
           </WarningContainer>
           <StripeCheckoutButton price={total} />
        </CheckoutPage>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CartCheckoutPage);