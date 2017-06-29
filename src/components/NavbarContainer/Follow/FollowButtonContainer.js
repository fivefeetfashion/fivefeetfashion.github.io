import { FlexContainer, media }     from '../../utils/helpers.js';

const FollowButtonContainer = FlexContainer.extend`
    justify-content     : center;
    align-self          : center;    
    margin-top          : 30px;

   ${media.minLaptop`
        margin-top      : 40px;
    `}

    ${media.maxLaptop`
        top             : 0;
        position        : absolute;
    `}
`;

export default FollowButtonContainer;