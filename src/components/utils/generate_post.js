import Posts from './posts';

const getAbout = () => {
    return Posts.about;
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
    return Posts.blurb;
};

const getPost = (index) => {
    if(index >= Posts.posts.length) {
        return undefined;
    }
    return Posts.posts[index];
};

export {
    getAbout,
    getBlogList,
    getBlurb,
    getPost
};