import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
   body {
    background: ${props => props.theme.color.background};
    color: ${props => props.theme.color.baseText};
   }

   body, input, textarea, button {
    font-family: ${props => props.theme.family.baloo2};
    font-weight: ${props => props.theme.weight.regular};
    font-size: ${props => props.theme.size.textMd};
    line-height: ${props => props.theme.lineHeight.large};
   }
`;
