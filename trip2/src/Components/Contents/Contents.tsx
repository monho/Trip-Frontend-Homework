import React from 'react'; // import 로 useState 를 불러온다!
import styled from 'styled-components';
// import LeftSection from '../LeftSection/LeftSection';
// import RightSection from '../RightSection/RightSection';


import LeftSection from '../LeftSection/LeftSection';
import RightSection from '../RightSection/RightSection';
const Contents = () => {
    
    const MainSection = styled.section`
        width: 100%;

        margin: 5% 0 0 0;
`; 

    const MainDiv = styled.div`
        margin: 0 auto;
        width: 1040px;
        display: flex;
    `;  

    return(
        <MainSection>
            <MainDiv>
               <LeftSection /> 
               <RightSection />
            </MainDiv>
        </MainSection>
    )

}

export default Contents;