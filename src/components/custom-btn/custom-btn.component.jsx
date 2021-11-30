import React from 'react';
import { CustomBtnContainer } from './custom-btn.style';

const CustomButton = ({children, ...props}) => {
    return (
        <CustomBtnContainer {...props}>
            { children }
        </CustomBtnContainer>
    )
}

export default CustomButton;