import { createGlobalStyle } from 'styled-components';

import GorditaMedium from '../fonts/Gordita-Medium.otf';
import ManropeBold from '../fonts/Manrope-Bold.otf';
import ManropeMedium from '../fonts/Manrope-Medium.otf';

const GlobalStyle = createGlobalStyle`
 @font-face {
    font-family: 'Gordita Medium';
    src: url(${GorditaMedium}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Manrope Bold';
    font-weight: bold;
    src: url(${ManropeBold}) format('truetype');
  }
  @font-face {
    font-family: 'Manrope Medium';
    src: url(${ManropeMedium}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin:0;
  }

  h1{
    font-size:48px;
    @media (max-width:768px){
      font-size:38px;
    }
  }
  p{
    font-family:'Manrope Medium';
    font-size:20px;
    color:rgba(20, 20, 20, 0.6)
  }
  button{
    background:transparent;
    border:none;
    cursor:pointer;
  }
  .black{
    color:#000000 !important;
  }
  .gray{
    color:rgba(20, 20, 20, 0.6) !important;
  }
   .link{
    color:#276FFB;
    cursor:pointer;
    font-family: 'Manrope Medium'!important;
    font-size:18px;
  }
  .manropeBold{
    font-family: 'Manrope Bold';
  }
  .manropeMedium{
    font-family: 'Manrope Medium' !important;
  }
  .noMargin{
    margin:0;
  }
  .smallP{
    font-family: 'Manrope Medium' !important;
    font-size:18px;
  }
  .tag{
    font-size:24px;
    color:#276FFB;
  }


`;

export default GlobalStyle;
