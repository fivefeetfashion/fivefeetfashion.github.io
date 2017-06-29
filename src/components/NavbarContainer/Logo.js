import styled                   from 'styled-components';
import { media }                from '../utils/helpers.js';

const Logo = styled.div`
    width       : 23vh;
    min-height  : 140px;
    min-width   : 118px;
    align-self  : center;
    margin-left : 1vh;
    background  : ${props => props.theme.primColor(0.8)};

    ${media.minLaptop`
        margin  : 30px 0 10px 0;
        width   : 70%;
    `}
`;

export default Logo;