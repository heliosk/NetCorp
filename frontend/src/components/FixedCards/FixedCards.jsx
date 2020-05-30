import React from 'react';
import styled from 'styled-components';
import { device } from '../../utils/device';

import ButtonTile from './../Shared/ButtonTile';
import Card from './../Shared/Card';

import './FixedCards.scss';

const FixedCards = () => {

    const onClick = () => {
        console.log('algo aqui');
    }

    return(
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
    );

}

export default FixedCards;