import styled                   from 'styled-components';
import { itemsMiddle }   from '../utils/helpers.js';
 
const FixedButton = styled.div`
    background      : ${props => props.theme.primColor(0.65)};
    position        : fixed;
    font-weight     : bold;
    cursor          : pointer;
    height          : 40px;
    width           : 40px;
    text-align      : center;
    border-radius   : ${props => props.theme.borderRad};
    color           : white;
    z-index         : 111111;
    ${itemsMiddle()}

    &:hover {
        background  : ${props => props.theme.primColor(0.8)};
    }
`;

const CloseButton = FixedButton.extend`
    top     : 20px;
    right   : 20px;
`;

const ShareButton = FixedButton.extend`
    bottom  : 20px;
    right   : 20px;

    > a {
        > i {
            font-family : "fontello";
            font-style  : normal;
            font-weight : normal;
            speak       : none;
            color       : ${props => props.theme.lightColor(0.9)};
        }
    }
`;

export {
    CloseButton,
    ShareButton
};