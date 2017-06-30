import React, { Component }         from 'react';
import Content                      from './Content';
import Header                       from '../Header';
import BlogList                     from './BlogList';
import Blurb                        from './Blurb';
import { getBlurb }                 from '../utils/generate_post.js'

export default class ContentContainer extends Component {
    componentWillMount() {
        this.blurb = getBlurb().data[0].text
    }
    render() {
        
        return(
            <Content>
                <Header />
                <Blurb> 
                    <h4>
                        {`${this.blurb}`}
                        <br/>
                        Wanna know more about how i got started? visit my <span id='About'>about</span> page.
                    </h4>    
                </Blurb>
                <BlogList />
            </Content>
        )
    }
}   
