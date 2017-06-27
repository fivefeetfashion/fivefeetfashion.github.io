import styled           from 'styled-components';
import * as helpers     from '../../../utils/helpers.js';

const FollowIcon = styled.i`
    font-family     : "fontello";
    font-style      : normal;
    font-weight     : normal;
    font-size       : 30px;
    text-align      : center;
    color           : ${helpers.secondaryColor(0.8)};

    speak           : none;
    cursor          : pointer;
    align-self      : center;
    display         : inline-block;

    margin          : 5px 5px;
    padding-top     : 4px;
    width           : 50px;
    height          : 50px;
    background      : white;
    border-radius   : 2em;

    @media (max-height: 580px) {
        width           : 40px;
        height          : 40px;
        font-size       : 23px;
    }

    &:hover, &:focus {
        background      : ${helpers.primaryColor(0.7)};
        color           : ${helpers.lightTextColor(0.8)};
    }

    ${helpers.itemsMiddle()}
`;

export default FollowIcon;