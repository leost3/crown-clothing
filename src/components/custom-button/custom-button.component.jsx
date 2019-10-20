import React from 'react';

import './custom-buttom.styles.scss';
import { CustomButtomContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtomContainer {...props}>{children}</CustomButtomContainer>
);

// const CustomButton = ({
//   children,
//   isGoogleSignIn,
//   inverted,
//   ...otherProps
// }) => (
//   <button
//     onClick={() => console.log('asdasd')}
//     className={`${inverted ? 'inverted' : ''} custom-button`}
//     {...otherProps}
//   >
//     {children}
//   </button>
// );

export default CustomButton;
