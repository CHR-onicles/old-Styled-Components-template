import { css } from "styled-components";

// Helper function to convert from px to rem (1rem = 16px by default for most browsers)
export const rem = (value, omitUnit = false) => {
    return `${(value / 16)}${omitUnit === true ? '' : 'rem'}`;
}

// Helper function to add alpha values to rgb and hsl colors
export const alpha = (color, opacity=1) => {
    if (color.includes('#')) {
        throw new Error('Alpha function does not support Hex values, just RGB and HSL currently.');
    }
    if (opacity < 0 || opacity > 1) {
        throw new Error('Opacity cannot be less than 0 or greater than 1');
    }
    if (color.includes('a')) {
        // Format: hsla(100, 100%, .8)
        if (color[color.length - 4] === '0') color = color.slice(0, color.length - 6) + ')'; // its 6 here and 5 in the next line because I'm factoring in the space after the comma.
        else color = color.slice(0, color.length - 5) + ')';
    }
    let newColor = color.slice(0, color.length - 1) + `, ${opacity} )`; // works without adding the letter 'a' to rgb or hsl
    // console.log(newColor);
    return newColor;
}

// Breakpoints object with values from mobile to larger screens
export const bp = {
    small: `${rem(768, true)}em`,
    medium: `${rem(1024, true)}em`,
    large: `${rem(1200, true)}em`,
    xlarge: `${rem(1440, true)}em`,
    xxlarge: `${rem(2100, true)}em`
}

export const theme = {
    colors: {
        // Primary
        primary100: '',
        primary400: '',
        primary700: '',

        // Accents
        accent100: '',
        accent400: '',
        accent700: '',

        // neutral
        white: 'hsl(0, 100%, 100%)',
        black: 'hsl(0,0%, 0%)',

    },
    fonts: {
        primary: '',
        accent: '',
    },
    ease: {
        // easing functions
    }
}

/*********************************************************************
CSS UTILITIES (like Sass mixins)
**********************************************************************/
export const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const flexColumn = css`
    display: flex;
    flex-direction: column;
`;

export const flexSpBetween = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const absoluteCenter = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const pseudo = css`
    content: '';
    position: absolute;
`;

export const size = (width, height = width) => {
    return css`
        width: ${width};
        height: ${height};
    `;
}

export const mq = (breakpoint) => {
    return css`
        @media screen and (min-width: ${breakpoint})
    `;
}