import React from 'react';
import styled from 'styled-components';

const StyledInputWithIcon = styled.div`

    position: relative;
    
    input[type="text"], input[type="password"] {
        width: 100%;
        border: none;
        margin: 4px 0 8px 0;
        outline: none;
        padding: 10px;
        box-sizing: border-box;
        transition: 0.3s;
        padding-left: 40px;

        background-color: rgba(92 ,92, 92, 0.6);
        color: #fff;

        &:focus + i {
            color: ${props => props.theme.primary};
        }
    }

    i {
        position: absolute;
        left: 2px;
        top: 30px;
        padding: 9px 8px;
        color: #8d8d8d;
        transition: 0.3s;
    }

    label {
        font-size: 0.9em;
    }
`;

const InputWithIcon = ({type, label, name, value, onChange, placeholder, icon}) => {
    return (
        <StyledInputWithIcon>
            <label htmlFor={name}>{label}</label>
            <input 
                type={type} 
                id={name}
                name={name} 
                value={value} 
                onChange={onChange} 
                placeholder={placeholder} />
            <i className={icon} aria-hidden="true"></i>
        </StyledInputWithIcon>
    )
}

export default InputWithIcon;