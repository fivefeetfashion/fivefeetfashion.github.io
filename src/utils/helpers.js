import theme    from './themes.js';
import styled   from 'styled-components';

const FlexContainer = styled.div`
    display             : flex;
    flex-direction      : row;

    @media (min-width: ${theme.dimensions.laptop}) {
        flex-direction  : column;
    } 
`;

const primaryColor = (alpha) => (
    `hsla(338, 78%, 48%, ${alpha})`
);

const secondaryColor = (alpha) => (
    `hsla(0, 0%, 0%, ${alpha})`
);

const lightTextColor = (alpha) => (
    `hsla(255, 100%, 100%, ${alpha})`
);     

export {
    FlexContainer,
    primaryColor,
    secondaryColor,
    lightTextColor
};