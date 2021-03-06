import React from 'react';
import { 
    GroupContainer,
    FormInputContainer,
    FormInputLabel } from './form-input.style';

const FormInput = ({ label, handleChange, ...otherProps }) => {
    return(
        <GroupContainer>
            <FormInputContainer onChange={handleChange} {...otherProps}/>
            {
                label ?
                (<FormInputLabel 
                    className={`${otherProps.value.length ? 'shrink' : ''}`}>
                    {label}
                </FormInputLabel>) 
                : null
            }
        </GroupContainer>
    )
}

export default FormInput;