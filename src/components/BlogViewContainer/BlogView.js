import styled       from 'styled-components';
import { media }    from '../utils/helpers.js';

const BlogView = styled.div`
    height          : auto;
    position        : absolute;
    top             : 0;
    bottom          : 0;
    left            : 0;
    right           : 0;
    overflow        : auto;
    background      : white;
    padding-top     : 70px;
    padding-bottom  : 20vh;

    ${media.minLaptop`
        margin-left     : ${props => props.theme.dim.sb_w};
        padding-top     : 3vh;
    `}
`;

const PostContainer = styled.div`
    margin          : 0 auto;
    width           : 80%;

    ${media.maxLaptop`
        position        : relative;
        width           : 90%;
    `}
`;

export {
    BlogView,
    PostContainer
};