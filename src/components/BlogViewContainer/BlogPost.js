import styled  from 'styled-components';

const BlogPost = styled.div`
    min-height          : 100vh;
    margin              : 0 auto;
    color               : ${props => props.theme.primColor(0.8)};

    > h1 {
        text-align      : center;
        margin          : 0;
        margin-bottom   : 30px;
        font-weight     : 500;
        font-size       : 3em;
    }

    > h3 {
        font-weight     : 500;
        font-size       : 1.8em;
        margin-top      : 30px;
    }

    > h4 {
        font-weight     : 500;
        font-size       : 1.5em;
        margin-bottom   : 5px;
    }

    > p {
        color           : ${props => props.theme.secColor(0.7)};
        font-weight     : 400;
        font-size       : 1.1em;
        line-height     : 1.5em;
    }

    > img {
        display         : block;
        max-height      : 80vh;
        margin          : 20px auto;
        max-width       : 100%;
    }

    > a {
        color           : ${props => props.theme.primColor(0.8)};
    }
`;

  

export default BlogPost;
