import styled from 'styled-components';

import HeroImage from '../images/hero.png';
import HeroImageMobile from '../images/hero-mobile.png';

const HeroStyledContainer = styled.header`
align-items:center;
background-image: url(${HeroImage});
background-position:center top;
background-size:cover;
display:flex;
flex-direction:column;
height:540px;
justify-content:center;
width:100vw;

button{
    background: transparent linear-gradient(90deg, #266EFD 0%, #3876F1 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 17px #3876F194;
    border-radius: 5px;
    opacity: 1;
    height:52px;
    width:220px;
}

h1,p,button{
    font-family: 'Gordita Medium';
    margin:10px 0;
}

.heroContent{
    align-items:flex-start;
    display:flex;
    flex-direction:column;
    height:540px;
    justify-content:center;
    margin:0 auto;
    object-fit:contain;
    width:90vw;

h1,p{
    color:white;
}
}
@media (max-width: 945px){
background-image: linear-gradient(45deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.1)
    ),url(${HeroImageMobile});
background-position: center bottom;
}
`;

export default HeroStyledContainer;
