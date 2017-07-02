import styled, {css}   from 'styled-components';

//Sizes for media templates
const sizes = {
	minLaptop: 1025,
	maxLaptop: 1024,
    minTablet: 992,
	maxPhone: 376
}
// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => {
        var limit = (label.indexOf('min') === -1) ? 'max' : 'min';
        return css`
            @media (${limit}-width: ${sizes[label] / 16}em) {
                ${css(...args)}
            }
        }
	    `;
    }
	return acc;
}, {});

//Flex Container
const FlexContainer = styled.div`
    display             : flex;
    flex-direction      : row;

    ${media.minLaptop`
        flex-direction  : column;
    `} 
`;

//Flex Container to set all items in the center
const itemsMiddle = () => (
    `
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
    `
);

//Component that spans the width of a card
const CardWidth = styled.div`
    width   : 90vw;
    margin  : 0 auto;
    ${media.minLaptop`
        width: 65vw;
    `}
`;

export {
    FlexContainer,
    itemsMiddle,
    media,
    CardWidth
};