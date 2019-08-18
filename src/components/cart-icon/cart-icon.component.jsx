import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import {toggleCartHidden} from '../../redux/cart/cart.actions.js';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors.js';

import './cart-icon.styles.scss';


const CartIcon = ({ toggleCartHidden, countItems }) => (
    <div className="cart-icon" onClick={() => toggleCartHidden()}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>
        {
            countItems
        }</span>
    </div>
)


const mapdispatchtoprops = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
  countItems: selectCartItemsCount
});


export default connect(mapStateToProps, mapdispatchtoprops)(CartIcon);