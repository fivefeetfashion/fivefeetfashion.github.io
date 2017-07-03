import { FlexContainer, media }    from '../utils/helpers.js';

const Navbar = FlexContainer.extend`
    background          : ${props => props.theme.secColor(0.87)};
    height              : ${props => props.theme.dim.sb_h};
    min-height          : 160px;
    flex-wrap           : none;
    align-items         : center;
    justify-content     : space-between;

    ${media.minLaptop`
        position        : fixed;
        top             : 0;
        bottom          : 0;
        width           : ${props => props.theme.dim.sb_w};
        height          : 100vh;
        min-height      : 600px;
        justify-content : flex-start
        `
    } 
`;   

export default Navbar;