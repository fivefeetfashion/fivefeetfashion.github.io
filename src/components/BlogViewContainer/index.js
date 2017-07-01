import React, { Component }             from 'react';
import { BlogView, PostContainer }      from './BlogView';
import BlogPost                         from './BlogPost';
import Header                           from '../Header';
export default class BlogViewContainer extends Component {
    render() {
        return (
            <BlogView>
                <Header />
                <PostContainer>
                    <BlogPost>
                        <h1>Title</h1>
                        <h3>In ullamco magna minim fugiat adipisicing dolore.</h3>
                        <h4>Excepteur aliquip ea cupidatat aliquip qui aliqua incididunt sunt aute nulla nulla.</h4>
                        <p>Irure sunt sint tempor non ad eu. Fugiat commodo officia eiusmod irure. Anim non dolor consequat laborum in adipisicing pariatur deserunt laborum culpa ut elit ex. Et ut elit cillum incididunt veniam do est enim nostrud fugiat laborum elit. Mollit culpa duis eu in consequat excepteur esse elit occaecat esse fugiat excepteur non laboris. In minim laborum commodo est voluptate sunt et duis nostrud fugiat aliquip amet qui pariatur.</p>
                    </BlogPost>
                </PostContainer>
            </BlogView>  
        );
    }
};