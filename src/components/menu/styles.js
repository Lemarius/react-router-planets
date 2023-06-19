import styled from "styled-components";

const StyledContainer = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 2px solid white;
    margin: 0;
`;

const StyledH1 = styled.h1`
    font-family: 'Antonio', sans-serif;
    font-size: 38px;
    font-weight: 500;
    padding-left: 25px;
    color: white;
    cursor: pointer;
`;

const StyledUl = styled.ul`
    width: 820px;
    height: 25px;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 35px;
`;

const StyledLi = styled.li`
    font-family: 'League Spartan', sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: white;
    letter-spacing: 2px;
    margin: 0;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    position: relative;
    top: 1px;
    right: 0;
`;


export {StyledContainer, StyledH1, StyledUl, StyledLi};