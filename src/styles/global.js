import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    ${({ theme }) => css`
      background-color: ${theme.colors.mainBg};
    `}
  }

  a {
    text-decoration: none;
    outline: none;
  }
`;
