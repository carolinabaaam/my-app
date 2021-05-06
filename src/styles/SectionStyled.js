import styled from 'styled-components';

export const CircleIcon = styled.div`
align-items:center;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #B9B9B9;
border-radius: 87px;
display:flex;
justify-content:center;
opacity: 1;
width: 91px;
height: 91px;

svg {
      fill: #141414;
      opacity:0.6;
  }
`;

const SectionStyledContainer = styled.div`
align-items:center;
display:flex;
flex-direction:column;
min-height:450px;
justify-content:center;
margin:0 auto;
object-fit:contain;
max-width:90vw;

h1{
    /* font-size:48px; */
    font-family:'Manrope Bold';
  }
.border{
    border-left:1px solid #AAAAAA;
    border-right:1px solid #AAAAAA  ;
    padding:0 40px;
   
}
.border{

    button{
        margin-right:2.5rem !important;
    }
}
    

.companyIcons{
    display: grid;
    grid-auto-columns:50px;
    grid-gap: 10px;
    grid-template-columns: repeat(9, 1fr);
    grid-auto-rows: minmax(min-content, max-content);
    width:100%;
}
.mobile{
    display:none;
}
.offers{
    display: grid;
    grid-auto-columns:50px;
    grid-gap: 40px;
    grid-template-columns: repeat(3,auto);
    grid-template-rows: repeat(1, minmax(200px, auto));
    width:100%;
}

.time{
    margin:0
}

.title{
    align-items:center;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:100%;
}
@media  (max-width: 1400px) {
    height:auto;
    margin-top:40px;
    margin-bottom:40px;
    
    .border{
        border-right:none;
        
    }

    .companyIcons {
        grid-template-columns: repeat(3, 1fr);
    }

    .offers {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, minmax(200px, auto));
    }
}

@media  (max-width: 768px) {
    height:auto;
    justify-content:flex-start;
   
    .border{
        border:none;
        padding:0;
       
    }
    .border{ button {
        margin-right:0 !important;
    }
    }
    .companyIcons {
        grid-template-columns: repeat(3, 1fr);
    }
    .computer{
        display:none;
    }
    .offers {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, minmax(200px, auto));
    }
    .mobile{
        display:flex;
    }
    .time{
        margin-bottom:20px;
    }
    .title{
        align-items:flex-start;
        flex-direction:column;
    }
    .title > h1{
        flex-direction:column;
        text-align:left;
    }
}

@media  (max-width: 600px) {
    .companyIcons {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows:  minmax(200px);
    }
    .time{
        margin:10px 0 ;
    }
    
}
@media  (max-width: 375px) {
    .offers {
        grid-template-rows: repeat(3, minmax(340px, auto));
    }
    
}

`;

export default SectionStyledContainer;
