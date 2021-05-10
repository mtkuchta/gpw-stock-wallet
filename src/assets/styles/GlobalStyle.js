import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

/* font-family: 'Montserrat', sans-serif; */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}


html{
    color:${({ theme }) => theme.colors.BLACK};
    font-size:10px;
  

}

*,*::after, *::before{
    box-sizing:inherit;
    margin:0;
    padding:0;
}

body{
    font-family: 'Montserrat', sans-serif;
    font-size:10px;
    box-sizing:border-box
}

a,button,input{
    font-family:'Montserrat', sans-serif;
}

`;
