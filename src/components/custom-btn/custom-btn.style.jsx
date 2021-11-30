import styled, { css } from "styled-components";

const invertedButtonStyle = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;

const googleSignInStyle = css`
    background-color: #4285f4;
    color: white;   
    &:hover {
        background-color: #357ae8;        
    }
`;

const getButtonStyles = props => {
    if (props.isGoogleSignIn) return googleSignInStyle;
    return props.inverted ? invertedButtonStyle : buttonStyles;
}

const buttonStyles = css`
    background-color: black;
    color: white;   
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
    `;

export const CustomBtnContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;   
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;   
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: center;  
    ${ getButtonStyles } 
`;