import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_X2xV5MCKgNFO196N37fCErIe00BOMYV7gE';
    
    const onToken = token => {
        alert('Payment successfull');
    }


    return (
        <StripeCheckout 
            label='Pay Now'
            name='CROWN Clothing'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel = 'Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};


export default StripeCheckoutButton;