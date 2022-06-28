import React from 'react'; // import 로 useState 를 불러온다!
import styled from 'styled-components';
import TripLogoimg from "../../assets/img/triple2x.png";

const LeftSection = () => {

    const LeffArticle = styled.article`
    `
    const TripLogo = styled.img`
        width: 400px;
        height: 338px;
        
    `
    const LeftText = styled.p`
        font-size: 15px;
        color: rgba(58,58,58,0.7);
        margin: 0px;
        position: absolute;
        top: 40%;
        left: 27%;
    `
    return(
        <LeffArticle>
            <TripLogo src={TripLogoimg} />
            <LeftText>
                2021년 12월 기준
            </LeftText>
        </LeffArticle>     
    )

}

export default LeftSection;