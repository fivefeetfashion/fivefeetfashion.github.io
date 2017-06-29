const mainTheme = {
    //Primary Color
    primColor       : (alpha) => (
                        `hsla(338, 78%, 48%, ${alpha})`
                    ),

    //Secondary Color                    
    secColor        : (alpha) => (
                        `hsla(0, 0%, 0%, ${alpha})`
                    ),

    //Secondary Color Contrast                    
    lightColor      : (alpha) => (
                        `hsla(255, 100%, 100%, ${alpha})`
                    ),

    //Background Color                
    bg      : 'white',

    //Border Radius                
    borderRad       : '3px',

    //Font Family
    fontFam         : '"Open Sans", sans-serif',

    //dimensions
    dim :{                     
        sb_w        : "250px", //sidebar height
        sb_h        : "30vh",  //sidebar width
    }
};

export default{
    mainTheme
};