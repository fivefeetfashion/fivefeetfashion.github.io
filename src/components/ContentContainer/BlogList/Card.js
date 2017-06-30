import { CardWidth, media } from '../../utils/helpers.js';

const Card = CardWidth.extend`
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