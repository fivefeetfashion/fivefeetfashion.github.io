const styles = {
    App: {
        textAlign: 'center'
    },

    logo: {
        animation: 'App-logo-spin infinite 20s linear',
        height: '80px'
    },

    header: {
        backgroundColor: '#222',
        height: '150px',
        padding: '20px',
        color: 'white'
    },

    intro: {
        fontSize: 'large'
    },

    '@keyframes logo-spin': {
        from: { 
            transform: 'rotate(0deg)'
        },
        to: { 
            transform: 'rotate(360deg)'
        }
    }

};

export default styles;
