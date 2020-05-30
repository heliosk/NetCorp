import React, { useContext, useEffect, Fragment } from 'react';
import AuthContext from '../../context/auth/auth.context';
import styled, { createGlobalStyle } from 'styled-components';

import Post from './../Post/Post';
import Sidenav from './../Sidenav/Sidenav';
import FixedCards from './../FixedCards/FixedCards';

import Footer from './../Shared/Footer';

import './Home.scss';

const GlobalStyle = createGlobalStyle`
    body {

        background: #ece9e6;

        font-family: 'Montserrat', sans-serif;
        font-size: 14px;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
    }
    
    ::selection {
        background-color: #5c5c5c;
        color: #fff;
    }
`;

const Home = () => {

    const authContext = useContext(AuthContext);

    const { isAuthenticated, logout, user } = authContext;

    const textoPost = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus est id sodales sodales. 
                        Nunc facilisis elit ac turpis sodales vestibulum. Morbi convallis ipsum venenatis varius mattis. 
                        Vivamus dignissim nulla ac magna vestibulum tincidunt. Nulla facilisi. Cras laoreet, metus at 
                        finibus dictum, massa justo dapibus nibh, at tempus dolor libero quis est. Nam ac nisl risus. 
                        Etiam pharetra massa sed mauris convallis, cursus maximus est bibendum. Quisque egestas suscipit 
                        nibh vitae lacinia. In eros nunc, scelerisque non tincidunt porttitor, viverra laoreet lectus.                   
                        `;

    const onLogout = () => {
        logout();
    }

    useEffect(() => {
        authContext.loadUser();
    // eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <GlobalStyle/>
            <div className="container">
                <Sidenav user={user} onLogout={onLogout} />

                <div className="post-container">

                    <div className="post-elements">
                        <Post
                            title="A QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
                            content={textoPost}
                            footer="autor: Hélio"
                            tags="DAYCORP"
                            tagColor="#464646"
                            icon="fa fa-birthday-cake"
                        />
                        <Post
                            title="A QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
                            content={textoPost}
                            footer="autor: Hélio"
                            tags="SEXTOU"
                            tagColor="#464646"
                            icon="fa fa-glass"
                        />
                        <Post
                            title="A QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
                            content={textoPost}
                            footer="autor: Hélio"
                            tags="SPAM"
                            tagColor="#464646"
                            icon="fa fa-asterisk"
                        />
                        <Post
                            title="A QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
                            content={textoPost}
                            footer="autor: Hélio"
                            tags="DAYCORP"
                            tagColor="#464646"
                            icon="fa fa-birthday-cake"
                        />
                        <Post
                            title="A QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
                            content={textoPost}
                            footer="autor: Hélio"
                            tags="SPAM"
                            tagColor="#464646"
                            icon="fa fa-asterisk"
                        />
                        <Post
                            title="A QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
                            content={textoPost}
                            footer="autor: Hélio"
                            tags="SPAM"
                            tagColor="#464646"
                            icon="fa fa-asterisk"
                        />
                        <Post
                            title="A QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
                            content={textoPost}
                            footer="autor: Hélio"
                            tags="SPAM"
                            tagColor="#464646"
                            icon="fa fa-asterisk"
                        />
                        
                        <div className="mock-footer">
                            2020 | &copy; ConferenciaCorp - Todos os direitos reservados
                        </div>
                    </div>
                </div>

                <FixedCards />
            </div>
        </Fragment>
    )
}

export default Home;