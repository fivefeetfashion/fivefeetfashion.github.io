import theme from '../../utils/themes.js';
import helpers from '../../utils/helpers.js';

const styles = {
    navbar: {
       background           : theme.colors.secondaryColor,
       height               : theme.dimensions.sidebar_height,
       minHeight            : '160px', 

       ...helpers.flexContainer,
       flexWrap             : 'none',


       [helpers.minWidthLaptop] : {
           position         : 'fixed',
           top              : 0,
           bottom           : 0,
           width            : theme.dimensions.sidebar_width,
           height           : '100vh',
           minHeight        : '600px',
           justifyContent   : 'flex-start'
       }
    },

    logo: {
        width               : '23vh',
        minHeight           : '140px',
        minWidth            : '118px',
        alignSelf           : 'center',
        marginLeft          : '1vh',

        [helpers.minWidthLaptop] : {
            margin          : '30px 0 10px 0',
            width           : '70%' 
        }   
    }
};

export default styles;