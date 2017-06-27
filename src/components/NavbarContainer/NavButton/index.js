import React                    from 'react';
import Radium                   from 'radium';
import s                        from './styles.js';

function NavButton(props) {
    return(
        <button style={s.button}>
            <h4 style={s.h4}>{props.text}</h4>
        </button>
    );
};

export default Radium(NavButton);