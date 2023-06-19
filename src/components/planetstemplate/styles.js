import styled from "styled-components";

const StyledInfoContainer = styled.div`
    width: 85%;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    margin-top: 100px;
`;

const StyledImgCont = styled.div`
    position: relative;
`;

const StyledImg = styled.img`
    width: 100%;
    transition: 0.5s all ease;
`;

const StyledImgSmall = styled.img`
    width: 50%;
    position: absolute;
    bottom: -110px;
    left: 73px;
`;

const StyledInfo = styled.div`
    width: 350px;
`;

const StyledH1 = styled.h1`
    font-family: 'Antonio', sans-serif;
    font-size: 50px;
    color: white;
    font-weight: 500;
    padding-bottom: 30px;
`;

const StyledContent = styled.p`
    font-family: 'League Spartan', sans-serif;
    font-size: 20px;
    font-weight: 300;
    color: white;
    line-height: 25px;
`;

const StyledSourceCont = styled.div`
    display: flex;
    align-items: baseline;
    gap: 5px;
    padding-top: 20px;
`;

const StyledSource = styled.a`
    text-decoration: none;
    font-family: 'League Spartan', sans-serif;
    font-size: 20px;
    font-weight: 300;
    color: gray;
    text-decoration: underline;
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 5px;
`;

const StyledSourceImg = styled.img`
    width: 20px;
    align-self: baseline;
`;

const StyledTabCont = styled.div`
    width: 350px;
    height: 176px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-top: 50px;
`;

const StyledTab = styled.div`
    width: 350px;
    height: 48px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 25px;
    border: 1px solid white;
    cursor: pointer;
    transition: 0.3s all ease;

    &.active {
        background-color: #419EB8;
    }
`;
const StyledTabNum = styled.h1`
    font-family: 'League Spartan', sans-serif;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 3px;
    color: #CBCBCB;
    padding-left: 20px;
    position: relative;
    left: 20px;
`;
const StyledTabH1 = styled.h1`
    font-family: 'League Spartan', sans-serif;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 3px;
    color: white;
    position: relative;
    left: 20px;
`;

const StyledStatsCont = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    margin-top: 80px;
`;

const StyledStats = styled.div`
    width: 255px;
    height: 128px;
    border: 1px solid white;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    padding-right: 18px;
`;

const StyledStatsH3 = styled.h3`
    font-family: 'League Spartan', sans-serif;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 3px;
    color: lightgray;
    position: relative;
    left: 20px;
`;

const StyledStatsH1 = styled.h1`
    font-family: 'Antonio', sans-serif;
    font-size: 50px;
    color: white;
    font-weight: 500;
    position: relative;
    left: 20px;
`;

export {StyledInfoContainer, StyledImg, StyledInfo, StyledH1, StyledContent, StyledSourceCont, StyledSource, StyledImgCont, StyledSourceImg, StyledImgSmall, StyledTabCont, StyledTab, StyledTabH1, StyledTabNum, StyledStatsCont, StyledStats, StyledStatsH1, StyledStatsH3};