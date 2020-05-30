import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
    cursor: pointer;
    outline: none;
    user-select:none;

    position: relative;
    background: transparent;
    border: 2px solid ${props => props.backColor};
    box-shadow: ${props => props.buttonType === 'secondary' ? '0 7px 6px -6px #B2B2B2' : 'none'};

    font-size: ${props => props.buttonType === 'secondary' ? '0.85em' : '13px' };
    padding: ${props => props.buttonType === 'secondary' ? '4px 4px' : '6px 30px'};

    text-transform: uppercase;
    transition: all 0.2s linear;

    font-weight: 700;
    text-align: center;
    color: ${props => props.backColor};
    width: ${props => props.buttonType === 'secondary' ? '110px' : '150px'};

    a {
        text-decoration: none;
        text-align: center;
    }

    &:hover {
        color: ${props => props.fontColor};
        background: ${props => props.backColor};
        border-color: ${props => props.backColor};
        transition: all 0.10s linear;
    }

    &:active {
        color: ${props => props.fontColor};
        transform: translateY(5%);
        box-shadow: none;
    }
`;


const Button = ({ backColor, fontColor, text, onClick, hasIcon, icon, buttonType}) => {

    return (
        <StyledButton
            backColor={backColor} 
            fontColor={fontColor}
            buttonType={buttonType}
            onClick={onClick}>
            
            {hasIcon === "true" ? <i className={icon} /> : null}
            {hasIcon === "true" ? <span> {text}</span> : text}
            
        </StyledButton>
    );
}

export default Button;