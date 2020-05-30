import React, { useContext, useEffect, Fragment } from 'react';
import Contacts from '../Contact/Contact';
import ContactForm from '../Contact/ContactForm';
import ContactFilter from '../Contact/ContactFilter';
import AuthContext from '../../context/auth/auth.context';
import styled, { createGlobalStyle } from 'styled-components';

import Post from './../Post/Post';
import Sidenav from './../Sidenav/Sidenav';
import ButtonTile from './../Shared/ButtonTile';

import Card from './../Shared/Card';

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

    const onClick = () => {
        console.log('algo aqui');
    }

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
                            footer="Hélio 2020.02.26 16:00:00"
                            tags="DAYCORP"
                            tagColor="#464646"
                            icon="fa fa-birthday-cake"
                        />
                        <div className="container-test">
                            <Post
                                title="A QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
                                content={textoPost}
                                footer="Hélio 2020.02.26 16:00:00"
                                tags="SEXTOU"
                                tagColor="#464646"
                                icon="fa fa-glass"
                            />
                            <Post
                                title="A QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
                                content={textoPost}
                                footer="Hélio 2020.02.26 16:00:00"
                                tags="SPAM"
                                tagColor="#464646"
                                icon="fa fa-asterisk"
                            />
                        </div>
                        <Post
                            title="A QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
                            content={textoPost}
                            footer="Hélio 2020.02.26 16:00:00"
                            tags="DAYCORP"
                            tagColor="#464646"
                            icon="fa fa-birthday-cake"
                        />
                        <Post
                            title="A QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
                            content={textoPost}
                            footer="Hélio 2020.02.26 16:00:00"
                            tags="SPAM"
                            tagColor="#464646"
                            icon="fa fa-asterisk"
                        />
                        <Post
                            title="A QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
                            content={textoPost}
                            footer="Hélio 2020.02.26 16:00:00"
                            tags="SPAM"
                            tagColor="#464646"
                            icon="fa fa-asterisk"
                        />
                        <Post
                            title="A QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
                            content={textoPost}
                            footer="Hélio 2020.02.26 16:00:00"
                            tags="SPAM"
                            tagColor="#464646"
                            icon="fa fa-asterisk"
                        />
                        <div className="mock-footer">
                            2020 | &copy; ConferenciaCorp - Todos os direitos reservados
                        </div>
                    </div>
                </div>
                <div className="fixed-cards">

                    <div className="action-container">
                        <ButtonTile 
                            backColor="#464646" 
                            fontColor="#f0f0f0"
                            text="Post" 
                            icon="fas fa-plus-circle"
                            onClick={onClick} />

                        <ButtonTile 
                            backColor="#464646" 
                            fontColor="#f0f0f0"
                            text="CAFÉ" 
                            icon="fas fa-coffee"
                            onClick={onClick} />   
                        
                        <ButtonTile 
                            backColor="#464646" 
                            fontColor="#f0f0f0"
                            text="VOTAÇÃO" 
                            icon="fas fa-vote-yea"
                            onClick={onClick} /> 

                        <ButtonTile 
                            backColor="#464646" 
                            fontColor="#f0f0f0"
                            text="SUGESTÃO" 
                            icon="fas fa-comment-alt"
                            onClick={onClick} /> 

                        <ButtonTile 
                            backColor="#464646" 
                            fontColor="#f0f0f0"
                            text="EVENTO" 
                            icon="fas fa-glass-cheers"
                            onClick={onClick} /> 

                        <ButtonTile 
                            backColor="#464646" 
                            fontColor="#f0f0f0"
                            text="BUSCAR" 
                            icon="fas fa-search"
                            onClick={onClick} /> 
                    </div>

                    <Card 
                        headerTitle="ANIVERSARIANTE DO MÊS" 
                        headerColor="linear-gradient(to left, #f85032, #e73827)"
                    />

                    <Card 
                        headerTitle="Próximos eventos" 
                        headerColor="linear-gradient(to left, #f85032, #e73827)"
                    />

                    <Card 
                        headerTitle="Próximos eventos" 
                        headerColor="linear-gradient(to left, #f85032, #e73827)"
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default Home;