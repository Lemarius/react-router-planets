import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
	    font-family: sans-serif;
        background-image: url(./images/background-stars.svg);
        background-repeat: no-repeat;
        background-size: cover;
        
        
    }
    
    body {
        height: 100vh;
        background-color: #070724;
    }
    
    a{
        text-decoration: none;
        color: inherit;
    }
`;

export {GlobalStyles};