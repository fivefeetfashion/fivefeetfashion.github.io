import styled           from 'styled-components';
import * as helpers     from '../../../utils/helpers.js';
import theme            from '../../../utils/themes.js';

const NavButton = styled.button`
    cursor      : pointer;
    align-self  : center;
    margin      : 0 5px;
    border      : none;
    outline     : none;
    background  : ${(props) => props.active ? helpers.lightTextColor(1) : helpers.secondaryColor(0.2)};
    color       : ${(props) => props.active ?  helpers.secondaryColor(0.8) : helpers.lightTextColor(0.8)};

    &:hover {
            ${(props) => {
                if(!props.active) {
                    return `background : ${helpers.secondaryColor(0.3)};`;
                }
            }}
    }

    @media (min-width: ${theme.dimensions.laptop}) {
        background  : ${(props) => props.active ? helpers.lightTextColor(1) : helpers.secondaryColor(0)};
        align-self      : stretch;
        margin          : 0;
        padding         : 0;
    }

    > h4 {
        text-align  : center;
        padding     : 10px 10px;
    }
`;

export default NavButton;