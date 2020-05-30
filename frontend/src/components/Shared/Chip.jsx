import React from 'react';
import styled from 'styled-components';

const StyledChip = styled.div`

    display: inline-block;
    background-color: transparent;
    /* border: 1px solid ${props => props.color}; */
    color: ${props => props.color};
    padding: 2px 10px;
    margin: 0 8px;
    
    font-size: 10px;
    font-style: normal;
    font-weight: 400;

    &:hover {
        cursor: pointer;
    }
`;

const Chip = ({text, icon, tagColor}) => {
    return (
        <StyledChip color={tagColor}>
            <i className={icon} aria-hidden="true"></i>
            <span> {text}</span>
        </StyledChip>
    );
};

export default Chip;