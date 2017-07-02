import styled from 'styled-components';

const Blurb = styled.div`
    margin  : 0 auto 100px auto;
     > h4 {
        text-align      : left; 
        > a {
            cursor      : pointer;
            color       : ${props => props.theme.primColor(1)};
        }
    }
`;

export default Blurb;