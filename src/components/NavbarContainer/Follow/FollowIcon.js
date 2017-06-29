import styled                   from 'styled-components';
import {itemsMiddle, media}     from '../../utils/helpers.js';

const FollowIcon = styled.i`
    font-family     : "fontello";
    font-style      : normal;
    font-weight     : normal;
    font-size       : 30px;
    color           : ${props => props.theme.secColor(0.8)};

    cursor          : pointer;
    align-self      : center;
    display         : inline-block;

    margin          : 5px 5px;
    width           : 50px;
    height          : 50px;
    background      : ${props => props.theme.lightColor(1)};
    border-radius   : 2em;

    ${media.maxPhone`
        width           : 40px;
        height          : 40px;
        font-size       : 23px;
    `}

    &:active {
        background      : ${props => props.theme.primColor(0.7)};
        color           : ${props => props.theme.lightColor(1)};
    }

    ${media.minTablet`
        &:hover {
            background      : ${props => props.theme.primColor(0.7)};
            color           : ${props => props.theme.lightColor(1)};
        }
    `}
    
    ${itemsMiddle()}
`;

export default FollowIcon;