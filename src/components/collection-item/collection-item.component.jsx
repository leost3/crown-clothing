import React from 'react';
import { connect } from 'react-redux';


import CustomButtom from '../custom-button/custom-button.component';
import {addItem} from '../../redux/cart/cart.actions.js';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => (
  <div className='collection-item' >
    <div
      className='image'
      style={{
        backgroundImage: `url(${item.imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{item.name}</span>
      <span className='price'>{item.price}</span>
    </div>
    <CustomButtom inverted onClick={() => addItem(item)}>Add to cart</CustomButtom>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});


export default connect(null,mapDispatchToProps)(CollectionItem);
