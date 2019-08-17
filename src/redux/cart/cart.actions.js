import cartActionTypes from './cart.types';


export const toggleCartHidden = () => ({ // payload argument is optional
    type: cartActionTypes.TOOGLE_CART_HIDDEN
});