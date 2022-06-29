import React from 'react'; // import 로 useState 를 불러온다!
import styled , {keyframes} from 'styled-components';
import TripLogoimg from "../../assets/img/triple2x.png";

const LeftSection = () => {


const animation = keyframes`
0% {
  transform: translateY(0);
}
50% {
    transform: translateY(0);
}
100%{
    transform: translateY(-15px);
}
`;
    const LeffArticle = styled.article`
        display: flex;
        flex-direction: column;

    `
    const TripLogo = styled.img`
        width: 400px;
        height: 338px;
        animation:${animation} 1s ease; //1초동안 선형 무한 속성값주기
        
    `
    const TextArea = styled.article`
        width: 400px;
        text-align: center;
        position: absolute;
        top: 41%;
        font-size: 15px;
        color: rgba(58, 58, 58, 0.7);
    `

    
    return(
        <LeffArticle>
            <TripLogo src={TripLogoimg} />
            <TextArea>
                2021년 12월 기준
            </TextArea>
        </LeffArticle>     
    )

}

export default LeftSection;