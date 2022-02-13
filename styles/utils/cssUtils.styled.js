import { css } from "styled-components";

// Breakpoints with values from mobile(default) to larger screens
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