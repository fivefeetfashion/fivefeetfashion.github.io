import styled       from 'styled-components';
import { media }    from '../utils/helpers.js';
const Content = styled.div`
    height          : auto;
    text-align      : center;
    margin          : 5vh auto;
    padding-bottom  : 5vh;
    
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

export default Content;