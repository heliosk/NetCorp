import React from 'react';
import styled from 'styled-components';

import Chip from './../Shared/Chip';

const StyledPost = styled.div`

    width: auto;
    height: auto;
    padding: 20px;
    text-align: justify;

    box-shadow: 0 8px 6px -6px #B2B2B2;
    
    background-color: #fff;
    margin: 25px 30px;


    .title {
        margin-bottom: 10px;
        font-weight: bold;
    }

    .footer {
        margin-top: 10px;
        text-align: right;
        font-weight: 600;
        font-style: italic;
        font-size: 0.8em;
    }

    .date {
        position: relative;
        background-color: red;
        color: #fff;

        width: 50px;
        height: 50px;
        border-radius: 50px;
        float: right;

        margin: 0 0 10px 10px;

        text-align: center;
    }
`;


const Post = ({title, content, footer, tags, icon, tagColor}) => {
    return (
        <StyledPost>
            <div className="title">
                {title}
            </div>
            <div className="body">
                {content}
            </div>
            <div className="footer">
                <Chip 
                    text={tags} 
                    icon={icon}
                    tagColor={tagColor}    
                />
                {footer}
            </div>
        </StyledPost>
    );
}

export default Post;
