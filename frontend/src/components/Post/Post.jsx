import React from 'react';
import styled from 'styled-components';

import Chip from './../Shared/Chip';

const StyledPost = styled.div`

    display: flex;
    width: auto;
    height: auto;
    box-shadow: 0 8px 6px -6px #B2B2B2;
    margin: 25px 30px;
    
    .content {
        background-color: #fff;
        padding: 20px;
        text-align: justify;
        flex: 1;
    }

    .title {
        margin-bottom: 10px;
        font-weight: bold;
    }

    .footer {
        margin-top: 10px;
        text-align: right;
        font-size: 0.85em;
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

    .side {
        background: linear-gradient(to top, #f85032, #e73827);
        flex-basis: 60px;
        padding: 15px 12px 15px 10px;
        color: #fff;
        font-weight: 600;
        font-size: 1.1em;
        text-align: right;
    }
`;


const Post = ({title, content, footer, tags, icon, tagColor}) => {
    return (
        <StyledPost>
            <div className="side">
                <div>01</div>
                <div>MAR</div>
                <div>20</div>
            </div>
            <div className="content">
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
            </div>
        </StyledPost>
    );
}

export default Post;
