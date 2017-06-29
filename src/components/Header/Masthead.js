import { CardWidth, media }     from '../utils/helpers.js';

const Masthead = CardWidth.extend`
    text-align          : center;
    margin              : 30px auto 30px auto;

    > img {
        width           : inherit;
    }

    > hr {
        border-top      : 2px solid ${props => props.theme.primColor(1)};
        text-align      : center;
        height          : auto;
        width           : 70%;
        ${media.minLaptop`
            margin      : 1.7vw auto;
        `}

        &:after {
            content         : 'Anokhi Bhardwaj';
            display         : inline-block;
            position        : relative;
            top             : -18px;
            padding         : 0 10px;
            background      : ${props => props.theme.bg};
            color           : ${props => props.theme.secColor(1)};

            ${media.minLaptop`
                top         : -40px;
                font-size   : 28px;
            `}
        }
    }
`;

export default Masthead;