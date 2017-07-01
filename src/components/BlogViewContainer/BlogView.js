import styled       from 'styled-components';
import { media }    from '../utils/helpers.js';

const BlogView = styled.div`
    height          : auto;
    padding-bottom  : 30vh; 

    ${media.minLaptop`
        margin-left     : ${props => props.theme.dim.sb_w};
        padding         : 0;
        position        : absolute;
        top             : 0;
        bottom          : 0;
        left            : 0;
        right           : 0;
        overflow        : auto;
    `}
`;

const PostContainer = styled.div`
    margin      : 0 auto;
    width       : 70%;

    ${media.maxLaptop`
        position    : relative;
        width       : 90%;
    `}
`;

export {
    BlogView,
    PostContainer
};