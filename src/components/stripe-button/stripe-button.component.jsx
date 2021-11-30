import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JWM2vJHhbak3k8FV3lzkSl4KKigXzWp76LnmkfNbwy76D5YwML949q97UwcNa0lPoDbDlCwjiGXykcnsfCuafmt00Atb3B3Uw';
    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    }
    return(
        <StripeCheckout
            label='Pay Now'
            name='Crown Clothing SRL'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;