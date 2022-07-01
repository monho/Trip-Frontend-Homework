import { useEffect, useState } from 'react'
import styled , {keyframes} from 'styled-components';
import FirstMedalIcon from "../../assets/img/play-store2x.png";
import SecondAppleIcon from "../../assets/img/badge-apple4x.png";
const RightSection = () => {
    const [count, setCount] = useState(0);


    const boxFade = keyframes`
          0% {
            opacity: 0;
            transform: translate3d(0, 10%, 0);
        }
        25%{
            opacity: 0;
            transform: translate3d(0, 10%, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }
    `;

        const medalFade = keyframes`
        0% {
        opacity: 0;
        transform: translate3d(0, 50%, 0);
        }
        25%{
        opacity: 0;
        duration:700ms;
        transform: translate3d(0, 50%, 0);
        }
        to {
        opacity: 1;
        transform: translateZ(0);
        }
        `;

    const RightArticle = styled.article`
        margin: 0 0 0 225px;
    `
    const TestList = styled.ul`
        margin-bottom: 0px;
        animation-duration: 700ms;
        animation:${boxFade} 1.7s; //1초동안 선형 무한 속성값주기
    `
    const TextItem = styled.li`
        margin-bottom: 15px;
        list-style: none;
        font-size: 36px;
        letter-spacing: -1px;
    `
    const RightImgArea = styled.div`
        width: 450px;
        margin-top: 50px;
        padding-left: 40px;
        display: flex;
        animation-duration: 700ms;
        animation:${medalFade} 1.8s;
    `
    const FirstIconArea = styled.div`

    `
    const FirstIcon = styled.img`
        width: 54px;
    `
    const FirtstTextArea = styled.div`
        
        padding: 5px 0px 5px 5px;
    `
    const Text = styled.p`
        margin: 0px 0px 4px 0px;
        font-size: 14px;
        font-weight: bold;
        color: rgba(58, 58, 58, 0.8);
    `
    const SecondIconArea = styled.div`
        margin: 0 0 0 39px;

    `
    const SecondIcon = styled.img`
        width: 54px;
    `
    const SecontTextArea = styled.div`
        padding: 5px 0px 5px 5px;
    `
    return(
        <RightArticle>
            <TestList>
                <TextItem>
                    <strong>{count}만 명</strong>의 여행자
                </TextItem>
                <TextItem>
                    <strong>{count}만 개</strong>의 여행 리뷰
                </TextItem>
                <TextItem>
                    <strong>{count}만 개</strong>의 여행 일정
                </TextItem>
            </TestList>
            <RightImgArea>
                <FirstIconArea>
                    <FirstIcon src={FirstMedalIcon}/>
                </FirstIconArea>
                <FirtstTextArea>
                        <Text>2018 구글 플레이스토어</Text>
                        <Text>올해의 앱 최우수상 수상</Text>
                </FirtstTextArea>
                <SecondIconArea>
                    <SecondIcon src={SecondAppleIcon}/>
                </SecondIconArea>
                <SecontTextArea>
                        <Text>2018 애플 앱스토어</Text>
                        <Text>오늘의 여행앱 선정</Text>
                </SecontTextArea>
            </RightImgArea>
        </RightArticle>
    )

}

export default RightSection;