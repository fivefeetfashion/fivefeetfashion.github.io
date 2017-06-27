import React    from 'react';
import Radium   from 'radium';
import logo     from './logo.svg'
import s        from './styles.js';

function Logo() {
    return (
        <img 
            style={s.img}
            src={logo} 
            alt="logo" />
    );
};

export default Radium(Logo);