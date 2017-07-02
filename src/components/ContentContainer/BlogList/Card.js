import { media }    from '../../utils/helpers.js';
import styled       from 'styled-components';

const Card = styled.div`
    display         : inline-block;
    cursor          : pointer;
    
    &:hover {
        > h4 { 
            > span {
                color   : ${props => props.theme.primColor(1)};
            }
        }    
    }

    > h4 {
        > span {
            color       : ${props => props.theme.primColor(0.5)};

            ${media.minLaptop`
                color   : ${props => props.theme.primColor(0.4)};
            `}
        }
    }   
`;

export default Card;