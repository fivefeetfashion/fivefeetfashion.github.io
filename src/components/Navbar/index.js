import React                    from 'react';
import Radium                   from 'radium';
import s                        from './styles.js';
import Logo                     from './Logo';

function Navbar() {
    return (
        <div style={s.navbar}>
            <div style={s.logo}>
                <Logo />
            </div>    
        </div>
    );
};

export default Radium(Navbar);