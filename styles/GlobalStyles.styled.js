import { createGlobalStyle } from "styled-components";
import { theme } from "./utils/cssUtils.styled";

export const GlobalStyles = createGlobalStyle`

    :root {
        // insert CSS variables here
    }

    *, ::before, ::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth-scroll;
    }

    body {
        min-height: 100vh;
        background-color: ${theme.colors.white};
        /* font-family: ${theme.fonts.primary}; */
        color: ${theme.colors.black};
        overflow-x: hidden;
        line-height: 1.5;
    }

    h1, h2 {
        line-height: 1.1;
    }

    h3, h4, h5, h6 {
        line-height: 1.2;
    }

    img, iframe {
        display: block;
        max-width: 100%;
        object-fit: cover;
        object-position: center;
    }

    ul, ol {
        list-style-type: none;
    }

    a {
        display: inline-block;
        text-decoration: none;
    }

    button, input {
        border: none;
        background: none;
    }

    // Remove all animations and transitions for users
    // who have it turned off in system settings (use JS to add a listener in case it's updated)
    @media (prefers-reduced-motion: reduce) {
    *,
    ::before,
    ::after {
        animation-delay: -1ms !important;
        animation-duration: 1ms !important;
        animation-iteration-count: 1 !important;
        background-attachment: initial !important;
        scroll-behavior: auto !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
    }
}
`;