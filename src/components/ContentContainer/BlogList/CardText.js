import styled from 'styled-components';
import { media } from '../../utils/helpers.js';

//TODO add font settings
const CardTitle = styled.h2`
    text-align      : left;
    color           : ${props => props.theme.primColor(0.9)};
    ${media.minLaptop`
        
    `}
`;

//TODO add font settings
const CardSummary = styled.h4`
    text-align      : left;
    color           : ${props => props.theme.secColor(0.6)};
`;

export {
    CardTitle,
    CardSummary
};