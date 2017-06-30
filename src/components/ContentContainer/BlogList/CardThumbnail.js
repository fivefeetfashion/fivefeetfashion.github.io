import styled       from 'styled-components';
import { media }    from '../../utils/helpers.js';

const CardThumbnail = styled.div`
     height         : 60vw;
     border-radius  : ${props => props.theme.borderRad};
     border         : 0.5px solid ${props => props.theme.secColor(0.3)};
     overflow       : hidden;

     ${media.minLaptop`
        height      : 30vw;
     `}

     > img {
         width      : 100%;
     }
`;

export default CardThumbnail;