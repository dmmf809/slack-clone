import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: box-sizing;
    }

    body{
        overflow: hidden;
        --slack-color: #3f0f40;
        font-family: 'Noto Sans', sans-serif;

    }
`;
