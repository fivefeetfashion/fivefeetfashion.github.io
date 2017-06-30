import { CardWidth } from '../utils/helpers.js';

const Blurb = CardWidth.extend`
    margin  : 0 auto 100px auto;
     > h4 {
        text-align      : left; 
        > span {
            cursor      : pointer;
            color       : ${props => props.theme.primColor(1)};
        }
    }
`;

export default Blurb;