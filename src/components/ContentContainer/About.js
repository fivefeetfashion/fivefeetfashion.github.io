import React            from 'react';
import BlogPost         from '../BlogViewContainer/BlogPost';
import { getAbout }     from '../utils/generate_post.js';

export default function About() {
    return (
        <BlogPost>
            {getAbout()}
        </BlogPost>
    )
}