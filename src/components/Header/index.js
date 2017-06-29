import React            from 'react';
import Masthead         from './Masthead';
import mastheadImage    from './masthead.svg';
export default function() {
    return (
        <Masthead>
            <img src={mastheadImage} alt="Five Feet Fashion" />
            <hr/>
        </Masthead>
    );
}