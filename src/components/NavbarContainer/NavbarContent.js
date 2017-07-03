import {FlexContainer, media}   from '../utils/helpers.js';

const NavbarContent = FlexContainer.extend`
    margin-right        : 20px;
    flex-direction      : column-reverse;
    justify-content     : space-between;
    align-self          : stretch;
    position            : relative;

    ${media.minLaptop`
        margin              : 30px 0 30px 0;
        flex-direction      : column;
        justify-content     : space-around;
    `}

    ${media.maxPhone`
        margin-right        : 5px;
    `}
`;

export default NavbarContent;