import React from 'react';
import styled from 'styled-components';

const StyledCheckBox = styled.div`

    font-size: 13px;
    width: 200px;
    
    input[type="checkbox"] { 
        display: none; 
    }

    input[type="checkbox"] + label {
        display: block;
        position: relative;
        padding-left: 32px;
        margin-bottom: 22px;
        color: #fff;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }

    input[type="checkbox"] + label:last-child { 
        margin-bottom: 0; 
    }

    input[type="checkbox"] + label:before {
        content: '';
        display: block;
        width: 18px;
        height: 18px;
        border: 2px solid #fff;
        position: absolute;
        left: 0;
        top: 0;
        -webkit-transition: all .12s, border-color .08s;
        transition: all .12s, border-color .08s;
    }

    input[type="checkbox"]:checked + label:before {
        width: 8px;
        top: -4px;
        left: 4px;
        border-radius: 0;
        border-color: ${props => props.theme.primary};
        border-top-color: transparent;
        border-left-color: transparent;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;


const CheckBox = ({name, text}) => {
    return (
        <StyledCheckBox>
            <input type="checkbox" id={name}/>
            <label htmlFor={name}>{text}</label>
        </StyledCheckBox>
    );
}

export default CheckBox;