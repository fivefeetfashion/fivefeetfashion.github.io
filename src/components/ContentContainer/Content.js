import styled       from 'styled-components';
import { media }    from '../utils/helpers.js';

const Content = styled.div`
    height          : auto;
    text-align      : center;
    margin          : 0 auto;
    padding-bottom  : 10vh;
    
    ${media.minLaptop`
        margin-left     : ${props => props.theme.dim.sb_w};
        position        : absolute;
        top             : 0;
        bottom          : 0;
        left            : 0;
        right           : 0;
        overflow        : auto;
    `}
`;

export default Content;