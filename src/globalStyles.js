import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`



*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Oswald', sans-serif;
}
html{
  ${""}
  scroll-behavior:smooth;
  
}
    body,
    html,
    a {
        font-family: 'Oswald', sans-serif;
            }
    body {

        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: var(--background);

        overflow-x: hidden;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin:0;
        padding:0;
    }
    a {

        text-decoration: none;
        outline: none;
    }
    button{
        border:none;
        outline:none;
        &:focus{
            outline:none;
        }
    }

    *:focus {
        outline: none;
    }

    img,svg{
        width:100%;
        height:auto;
    }


`;

