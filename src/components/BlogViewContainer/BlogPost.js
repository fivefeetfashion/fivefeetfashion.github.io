import styled  from 'styled-components';

const BlogPost = styled.div`
    min-height          : 100vh;
    margin              : 0 auto;
    color               : ${props => props.theme.primColor(0.8)};
    
    > h1 {
        text-align      : center;
        margin          : 0;
        margin-bottom   : 30px;
    }

    > p {
        color           : ${props => props.theme.secColor(0.7)};
    }

    > img {
        max-height      : 80vh;
    }

    > a {
        color           : ${props => props.theme.primColor(0.8)};
    }
`;

  

export default BlogPost;
