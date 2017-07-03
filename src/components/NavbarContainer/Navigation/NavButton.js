import styled                                       from 'styled-components';
import { media }     from '../../utils/helpers.js';

const NavButton = styled.button`
    transition  : all 0.3s ease 0.2s;
    cursor      : pointer;
    align-self  : center;
    margin      : 0 5px;
    border      : none;
    outline     : none;
    background  : ${(props) => props.active ? props.theme.bg : props.theme.secColor(0.2)};
    color       : ${(props) => props.active ?  props.theme.secColor(0.8) : props.theme.lightColor(0.8)};

    &:hover {
            ${(props) => {
                if(!props.active) {
                    return `background : ${props => props.theme.secColor(0.3)};`;
                }
            }}
    }

    ${media.minLaptop`
        background  : ${(props) => props.active ? props.theme.bg : props.theme.secColor(0)};
        align-self      : stretch;
        margin          : 0;
        padding         : 0;
    `}

    > h4 {
        text-align  : center;
        padding     : 10px;
        margin      : 5px;
        font-size   : 1.2em;
    }
`;

export default NavButton;