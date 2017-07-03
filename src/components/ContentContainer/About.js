import React                        from 'react';
import BlogPost                     from '../BlogViewContainer/BlogPost';
import { getAbout }                 from '../utils/generate_post.js';
import ReactCSSTransitionGroup      from 'react-addons-css-transition-group';

const LeftText = BlogPost.extend`
    text-align : left;
`;

export default function About() {
    return (
         <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            <LeftText>
                {getAbout()}
            </LeftText>
        </ReactCSSTransitionGroup>    
    )
}

