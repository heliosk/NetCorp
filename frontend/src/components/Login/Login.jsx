import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alert.context';
import AuthContext from '../../context/auth/auth.context';
import styled, { createGlobalStyle } from 'styled-components';
import { device } from '../../utils/device';

import backgroundLogin from './../../assets/images/background-login-1.jpg';
import logo from  './../../assets/images/logo-branco.png'

import Button from './../Shared/Button';
import InputWithIcon from './../Shared/InputWithIcon';
import CheckBox from './../Shared/CheckBox';
import Footer from './../Shared/Footer';

import './Login.scss';


const GlobalStyle = createGlobalStyle`
    body {
        background-image: url(${backgroundLogin});

        ${'' /* background-image: linear-gradient(to bottom, #ece9e6, #ffffff); */}

        font-family: 'Montserrat', sans-serif;
        color: #fff;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
    }

    ::selection {
        background-color: ${ props => props.theme.primary };
        color: #000;
    }
`;

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    @media ${device.minMobile} {
        
    }
`;

const Content = styled.div`

    > * {
        margin-left: 35px;
        margin-right: 35px;
    }

    position: absolute;
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    height: 100%;

    @media ${device.minMobile} {
        width: 900px;
        height: 500px;
        flex-direction: row;
        backdrop-filter: blur(4px);
    }
    
    background: rgba(0,0,0,0.8);
    box-shadow: 0px 10px 12px -6px rgba(0,0,0,0.4);
    
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`;


const Login = (props) => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {

        if(isAuthenticated) {
            props.history.push('/');
        }

        if(error === 'Invalid credentials') {
            setAlert(error, 'danger');
            clearErrors();
        }
    // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if(email === '' || password === '') {
            setAlert('Por favor, Preencha todos os campos', 'danger');
        } else {
            login({
                email,
                password
            });
        }
    }

    return (
        <React.Fragment>
            <GlobalStyle />
            <Container>
                <Content>
                    <div className="logo-area">
                        <img className="logotipo" src={logo} alt="logo"/>
                        <h3 className="title">NetCorp | INTRANET</h3>
                        <p className="description">
                            Espaço do colaborador, seja bem-vindo(a)!
                        </p>
                    </div>
                    <form className="login-form">
                        <InputWithIcon
                            type="text"
                            label="Usuário"
                            name="email"
                            value={email}
                            onChange={onChange}
                            placeholder="Digite o seu login" 
                            icon="far fa-laugh"
                        />
                        <InputWithIcon
                            type="password"
                            label="Senha"
                            name="password"
                            value={password}
                            onChange={onChange}
                            placeholder="Digite a sua senha" 
                            icon="fa fa-key"
                        />
                        <div className="aux-login">
                            <div className="aux-checkbox">
                                <CheckBox 
                                    name="remember"
                                    text="Manter conectado?"
                                />
                            </div>
                            <div className="center-link">
                                <a className="forgot-pass" href="#!">Esqueci a senha</a>
                            </div>
                        </div>
                        <div className="center-button">
                            <Button 
                                backColor="#F0F0F0" 
                                fontColor="#000"
                                text="Login" 
                                onClick={onSubmit} />
                        </div>
                    </form>
                </Content>
                <Footer />
            </Container>
        </React.Fragment>
    );
}

export default Login;
