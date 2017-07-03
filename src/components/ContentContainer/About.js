import React            from 'react';
import BlogPost         from '../BlogViewContainer/BlogPost';
import { getAbout }     from '../utils/generate_post.js';


const LeftText = BlogPost.extend`
    text-align : left;
`;

export default function About() {
    return (
        <LeftText>
            {getAbout()}
        </LeftText>
    )
}

