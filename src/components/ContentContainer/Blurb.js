import styled from 'styled-components';

const Blurb = styled.div`
    margin  : 0 auto 100px auto;
     > h4 {
        font-size       : 1.1em;
        line-height     : 1.5em;
        text-align      : left; 

        color           : ${props => props.theme.secColor(0.8)};

        > a {
            cursor      : pointer;
            color       : ${props => props.theme.primColor(1)};
        }
    }
`;

export default Blurb;