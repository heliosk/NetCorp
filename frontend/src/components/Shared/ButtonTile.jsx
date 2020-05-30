import React from 'react';
import styled from 'styled-components';

const StyledButtonTile = styled.div`
    cursor: pointer;
    outline: none;
    user-select:none;

    position: relative;
    background: transparent;
    border: 2px solid ${props => props.backColor};
    box-shadow: 0 7px 6px -6px #B2B2B2;

    font-size: 0.9em;
    padding: 10px 2px 2px 2px;

    text-transform: uppercase;
    transition: all 0.2s linear;

    font-weight: 600;
    text-align: center;

    color: ${props => props.backColor};
    width: 100px;

    i {
        font-size: 1.5em;
    }

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


const ButtonTile = ({ backColor, fontColor, text, onClick, hasIcon, icon, buttonType}) => {

    return (
        <StyledButtonTile
            backColor={backColor} 
            fontColor={fontColor}
            onClick={onClick}>
            
            <i className={icon} />
            <div>{text}</div>
            
        </StyledButtonTile>
    );
}

export default ButtonTile;