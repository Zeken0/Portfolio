import { createGlobalStyle } from "styled-components";
import media from "styled-media-query";

const GlobalStyle = createGlobalStyle`
:root {
    --font-body:  'Montserrat', sans-serif;
    --font-paragraph: 'PT Serif', serif;
    --font-skills: 'Source Sans Pro', sans-serif;

    /* FONT SIZES */
    --font-size-base: 16px;
    --font-size-xxs: 0.296rem;
    --font-size-xs: 0.444rem;
    --font-size-sm: 0.667rem;
    --font-size: 1rem;
    --font-size-md: 1.5rem;
    --font-size-lg: 2.25rem;
    --font-size-xl: 3.375rem;
    --font-size-xxl: 5.068rem;
    --font-size-huge: 7.594rem;
    --font-size-jumbo: 11.391rem;

    /* SPACING */
    --size-xxs: 4px;
    --size-xs: 7px;
    --size-sm: 11px;
    --size: 16px;
    --size-md: 24px;
    --size-lg: 36px;
    --size-xl: 54px;
    --size-xxl: 81px;
    --size-huge: 121px;
    --size-jumbo: 182px;

    /* COLORS */
    --color-primary: #c83cb9;
    --color-secondary: #9A2CA0;
    --color-tertiary: #f5f5f5;
    --color-quaternary: #f1f1f1;
    --color-quinary: #858686;
    --color-senary: #6c6c6c;
    --color-white: #fff;
    --color-black: #080707;

    --c-action: var(--color-secondary);
    --c-danger: rgb(190, 47, 47);
    --c-success: var(--color-primary);
    --c-info: var(--color-tertiary);
    --c-skills-bg: var(--color-tertiary);
    --c-paragraphs: var(--color-tertiary);
    --c-text--inverse: var(--color-white);
    --c-disabled: var(--color-quaternary);

    /* RADIUS */
    --radius-base: 6px;
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 10px;

    /* Animation speed */
    --speed-base: 300ms;
    --speed-fast: 120ms;
    --speed-medium: 200ms;
    --speed-slow: 500ms;

    --animate-duration: var(--speed-base);
    --animate-delay: var(--speed-fast);

    /* Z-index */
    --z-base: 300;
    --z-ground: 400;
    --z-cieling: 1000;
    --z-sky: 9999;

    /* Elevation */
    --shadow-base: 0 2px 2px 0 rgb(0 0 0 / 14%);
    --shadow-1: 0 3px 4px 0 rgb(0 0 0 / 14%);
    --shadow-2: 0 5px 6px 0 rgb(0 0 0 / 16%);
    --shadow-3: 0 8px 10px 0 rgb(0 0 0 / 22%);

    ${media.greaterThan("huge")`
        --font-size-base: 18px;

        --size-xxs: 6px;
        --size-xs: 8px;
        --size-sm: 13px;
        --size: 20px;
        --size-md: 30px;
        --size-lg: 40px;
        --size-xl: 58px;
        --size-xxl: 92px;
        --size-huge: 130px;
        --size-jumbo: 150px;
    `};    
}

  html {
    background: var(--c-bg);
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    scroll-behavior: smooth;
  }
  
  html,
  body {
    text-decoration: none;
    paddding:0;
    margin:0;
    scroll-behavior: smooth;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  a {
    color: var(--color-white);
  }
  
  .my-element {
    display: inline-block;
    margin: 0 0.5rem;
  
    animation: bounce; /* referring directly to the animation's @keyframe declaration */
    animation-duration: var(--speed-medium); /* don't forget to set a duration! */
  }
`;
export default GlobalStyle;
