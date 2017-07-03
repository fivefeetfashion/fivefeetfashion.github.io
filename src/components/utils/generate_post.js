import React from 'react';
import Posts from './posts';


function parsePost(post) {
    let blogPost = [];
    blogPost.push( <h1 key={"h1" + 0}> {post.title} </h1>);

    blogPost.push(
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
    return blogPost;
}

const getAbout = () => {
    return parsePost(Posts.about);
};

function getFirstImage(data) {
    for(let obj of data) {
        if(obj.type === "img") {
            return obj.url;
        }
    }
    return '/img/img.js';
}

function getSummary(data) {
    let text = '';
     for (let obj of data) {
        if(obj.type === "text") {
            text = obj.text.substring(0,140);
            break;
        }
    }
    return text + '...';
}

const getBlogList = () => {
    return Posts.posts.map((item) => {
        return{
            title       : item.title,
            img         : getFirstImage(item.data),
            summary     : getSummary(item.data)
        }
    });
}; 

const getBlurb = () => {
    return Posts.blurb.data[0].text;
};

const getPost = (index) => {
    if(index >= Posts.posts.length) {
        return undefined;
    }
    return parsePost(Posts.posts[index]);
};

export {
    getAbout,
    getBlogList,
    getBlurb,
    getPost
};