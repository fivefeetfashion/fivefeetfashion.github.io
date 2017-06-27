import styled               from 'styled-components';
import { FlexContainer }    from '../../../utils/helpers.js';
import theme                from '../../../utils/themes.js';


const ShareButtonContainer = FlexContainer.extend`
    justify-content     : center;
    align-self          : center;

    @media (max-width = ${theme.dimensions.laptop}) {
        margin-top      : 40px;
    }
    @media (min-width = 1024px) {
        top             : 0;
        position        : absolute;
        margin-top      : 30px;
    }

`;

export default ShareButtonContainer;