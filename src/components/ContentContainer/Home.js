import React            from 'react';
import { Link }         from 'react-router-dom';

import BlogList         from './BlogList';
import Blurb            from './Blurb';
import { getBlurb }     from '../utils/generate_post.js'

export default function Home() {
    return (
        <div>
            <Blurb> 
                <h4>
                    {getBlurb()}
                    <br/>
                    Wanna know more about how i got started? visit my <Link to='/about'>about</Link> page.
                </h4>    
            </Blurb>
            <BlogList />
        </div>
    );
}