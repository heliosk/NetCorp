import React from 'react';
import styled from 'styled-components';
import { device } from '../../utils/device';

const StyledFooter = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1rem;
    text-align: center;
    font-size: 0.7em;

    /* css para tamanho maior que o abaixo */
    @media ${device.minMobile} {
        font-size: 0.8em;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            2020 | &copy; ConferenciaCorp - Todos os direitos reservados
        </StyledFooter>
    );
};


export default Footer;