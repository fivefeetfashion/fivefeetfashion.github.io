import React, { Component }             from 'react';
import { Link }                         from 'react-router-dom'
import ReactCSSTransitionGroup          from 'react-addons-css-transition-group';

import { BlogView, PostContainer }      from './BlogView';
import BlogPost                         from './BlogPost';
import { CloseButton, ShareButton }     from './FixedButton';
import { getPost }            from '../utils/generate_post.js'

export default class BlogViewContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: props.match.params.id
        }
    }
    componentWillMount() {
        const { match } = this.props;
        this.blogPost = getPost(match.params.id);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            post: nextProps.match.params.id
        });
        this.blogPost = getPost(nextProps.match.params.id);
    }
    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>

                <BlogView key='1'>
                    <Link to='/'>
                        <CloseButton> X </CloseButton>
                    </Link>
                    <ShareButton>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ffivefeetfashion.github.io%2F&amp;src=sdkpreparse"
                        target="_blank" rel="noreferrer noopener">
                            <i className="icon-forward">&#xe801;</i>
                        </a>   
                    </ShareButton>
                    <PostContainer>
                        <BlogPost>
                            {this.blogPost}    
                        </BlogPost>
                    </PostContainer>
                </BlogView>  

            </ReactCSSTransitionGroup>
        );
    }
};