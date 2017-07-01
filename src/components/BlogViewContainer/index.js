import React, { Component }             from 'react';
import { BlogView, PostContainer }      from './BlogView';
import BlogPost                         from './BlogPost';
import Header                           from '../Header';
import { CloseButton, ShareButton }     from './FixedButton';
import { getPost }                      from '../utils/generate_post.js'

export default class BlogViewContainer extends Component {
    componentWillMount() {
        const post = getPost(0);

        this.blogPost = [];
        this.blogPost.push( <h1 key={"h1" + 0}> {post.title} </h1>);

        this.blogPost.push(
            post.data.map((item, index) => {
                if(item.type === "text") {
                    return <p dangerouslySetInnerHTML={ {__html : item.text}} key={"p" + index} />;

                } else if(item.type === "img") {
                    return <img src={process.env.PUBLIC_URL + item.url} alt={"image" + index} key={"img" + index}/>;
                
                } else if(item.type === "h3") {
                    return <h3 dangerouslySetInnerHTML={ {__html : item.text}} key={"h3" + index} />;
                
                } else if(item.type === "h4") {
                    return <h4 dangerouslySetInnerHTML={ {__html : item.text}} key={"h4" + index} />;
                } else {
                    return "";
                }  
            })
        );
    }
    
    render() {
        return (
            <BlogView>
                <Header />
                <CloseButton> X </CloseButton>
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
        );
    }
};