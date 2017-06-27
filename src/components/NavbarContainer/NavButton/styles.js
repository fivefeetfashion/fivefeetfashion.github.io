import helpers from '../../../utils/helpers.js';

const styles = {

    h4: {
        padding         : '10px 10px', 
    },

    button: {
        cursor          : 'pointer',
        alignSelf       : 'center',
        textAlign       : 'center',
        margin          : '0 5px',
        border          : 'none',
        outline         : 'none',

        ...helpers.secondaryBackground(0),
        ...helpers.lightTextColor(0.8),

        ':hover' : {
            ...helpers.secondaryBackground(0.4),
            cursor      : 'pointer'
        },

        [helpers.minWidthLaptop] : {
            alignSelf   : 'stretch',
            margin      : 0
        },

        [helpers.maxWidthLaptop] : {
            ...helpers.secondaryBackground(0.2),
        }
    }    
}

export default styles;