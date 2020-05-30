import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`

    width: 300px;
    height: 180px;    

    font-size: 13px;

    box-shadow: 0 8px 6px -6px #B2B2B2;
    
    margin: 20px 20px;

    .header {
        height: 140px;
        background: ${props => props.headerColor};
        align-items: center;
        padding-left: 10px;
        color: #fff;
        display: flex;
        align-items: center;


        text-align: center;
    }

    .content {
        background: ${props => props.headerColor};
        color: #fff;
        padding-left: 10px;
        height: 40px;
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        padding-right: 10px;
    }
`;


const Card = ({headerTitle, headerColor}) => {
    return (
        <StyledCard headerColor={headerColor}>
            <div className="header">
                {headerTitle}
            </div>
            <div className="content">
                32 de junho | 2020
            </div>
        </StyledCard>
    );
}

export default Card;
