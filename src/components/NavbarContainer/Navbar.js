import theme                from '../../utils/themes.js';
import { FlexContainer }    from '../../utils/helpers.js';

const Navbar = FlexContainer.extend`
    background          : ${theme.colors.secondaryColor};
    height              : ${theme.dimensions.sidebar_height};
    min-height          : 160px;
    flex-wrap           : none;

    @media (min-width: ${theme.dimensions.laptop}) {
        position        : fixed;
        top             : 0;
        bottom          : 0;
        width           : ${theme.dimensions.sidebar_width};
        height          : 100vh;
        min-height      : 600px;
        justify-content : flex-start
    } 
`;

export default Navbar;