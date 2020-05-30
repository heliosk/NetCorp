import React from 'react';
import styled from 'styled-components';
import { device } from '../../utils/device';

const StyledSidenav = styled.div`

    color: #fff;
    width: 200px;

    background: ${props => props.theme.dark};

    display: none;

    @media ${device.minLaptopL} {
        display: block;        
    }

    a {
        color: #fff;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        
        background: ${props => props.theme.darkLight};
        border-bottom: 1px solid ${props => props.theme.darkLight};
    }

    li a {
        display: block;
        color: #fff;
        text-align: left;
        padding: 16px 16px 16px 25px;
        text-decoration: none;
        transition: all 0.25s ease;
        letter-spacing: 2px;
        font-weight: 600;
        font-size: 12px;
    }

    li a:hover {
        background: ${props => props.theme.dark};
    }

    li i {
        margin-right: 12px;
    }

    .active {
        background-color: ${props => props.theme.dark};

        border-left: 3px solid ${ props => props.theme.primary };
        border-bottom: 1px solid ${props => props.theme.darkLight};
        border-top: 1px solid ${props => props.theme.darkLight};
    }

    .side-header {
        padding: 40px 5px 30px 5px;
        background-color: ${props => props.theme.dark};
        border-bottom: 1px solid ${props => props.theme.darkLight};
    }

    .avatar {
        width: 90px;
        height: 90px;
        border-radius: 5px;
        margin-left: auto;
        margin-right: auto;
        background: ${props => props.theme.darkLight};
        color: #fff;
        font-weight: 600;
        font-size: 48px;
        padding-top: 8px;
        text-align: center;

        margin-bottom: 20px;
    }

    .user-info {
        text-align: center;
    }

`;

const Sidenav = ({user, onLogout}) => {
    return (
        <StyledSidenav>
            <div className="side-header">
                <div className="avatar">
                    He
                </div>
                <div className="user-info">
                    <div>Bom dia, { user && user.name }!</div>
                    <a onClick={onLogout} href="#!">Sair?</a>
                </div>
            </div>
            <ul>
                <li><a href="!#"><i className="fas fa-user"></i>MEU PERFIL</a></li>
                <li className="active">
                    <a href="!#"><i className="fas fa-home"></i>HOME</a>
                </li>
                <li><a href="!#"><i className="fa fa-desktop"></i>SISTEMA</a></li>
                <li><a href="!#"><i className="fas fa-phone-alt"></i>AUDIOCORP</a></li>
                <li><a href="!#"><i className="fas fa-video"></i>WEBCORP</a></li>
                <li><a href="!#"><i className="fas fa-play"></i>CASTCORP</a></li>
                <li>
                    <a href="!#"><i className="fas fa-book"></i>DOCS</a>
                </li>
                <li><a href="!#"><i className="fab fa-wordpress-simple"></i>WORDPRESS</a></li>
                <li><a href="!#"><i className="fas fa-network-wired"></i>SERVIDORES</a></li>
                <li><a href="!#"><i className="fas fa-hammer"></i>70x30</a></li>
            </ul>

        </StyledSidenav>
    );
};

export default Sidenav;







