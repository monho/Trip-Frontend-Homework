import React from 'react'; // import 로 useState 를 불러온다!
import styled from 'styled-components';
import FirstMedalIcon from "../../assets/img/play-store2x.png";
import SecondAppleIcon from "../../assets/img/badge-apple4x.png";
const RightSection = () => {
    
    const RightArticle = styled.article`
        margin: 0 0 0 225px;
    `
    const TestList = styled.ul`
        margin-bottom: 0px;
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
                    <strong>700만 명</strong>의 여행자
                </TextItem>
                <TextItem>
                    <strong>100만 개</strong>의 여행 리뷰
                </TextItem>
                <TextItem>
                    <strong>470만 개</strong>의 여행 일정
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