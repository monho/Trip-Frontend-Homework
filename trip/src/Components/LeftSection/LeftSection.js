import React from 'react';
import styled , {keyframes} from 'styled-components';
import TripLogoimg from "../../assets/img/triple2x.png";

const LeftSection = () => {

    const boxFade = keyframes`
          0% {
            opacity: 0;
            duration:700ms;
            transform: translate3d(0, 8%, 0);
        }
        to {
            opacity: 1;
            duration:700ms;
            transform: translateZ(0);
        }
    `;
    const Textfade = keyframes`
    0% {
      opacity: 0;
      duration:700ms;
      transform: translate3d(0, 100%, 0);
  }
  to {
      opacity: 1;
      duration:700ms;
      transform: translateZ(0);
  }
`;
    const LeffArticle = styled.article`
        display: flex;
        flex-direction: column;

    `;
    const TripLogo = styled.img`
        width: 400px;
        height: 338px;
        animation-duration: 700ms;
        animation:${boxFade} 1.5s; //1초동안 선형 무한 속성값주기
        
    `;
    const TextArea = styled.article`
        width: 400px;
        text-align: center;
        position: absolute;
        top: 38%;
        animation-duration: 700ms;
        animation:${Textfade} 1.6s; //1초동안 선형 무한 속성값주기
        font-size: 15px;
        color: rgba(58, 58, 58, 0.7);
    `;

    
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