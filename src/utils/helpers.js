import themes from './themes.js';

const helpers = {
    minWidthLaptop              : '@media screen and (min-width: 1025px)',
    maxWidthLaptop              : '@media screen and (max-width: 1024px)',
    
    flexContainer: {
        display                 : 'flex',
        flexDirection           : 'row',

        [`@media (min-width: ${themes.dimensions.laptop})`]: {
            flexDirection       : 'column'       
        }
    },

    cardWidth: {
        width                   : '90vw',

        [this.minWidthLaptop]: {
            width               : '65vw'
        }
    },

    centerItems: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    primaryBackground : (alpha) => (
        {
            background: `hsla(338, 78%, 48%, ${alpha})`
        }
    ),
};

export default helpers;