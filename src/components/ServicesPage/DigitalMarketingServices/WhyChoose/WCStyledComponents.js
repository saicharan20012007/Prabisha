import styled from "styled-components";
import "typeface-raleway";

export const AMGContainer = styled.div`
  @media (min-width: 900px) {
    height: 250px;
    background-color: #d5d1f678;
    padding: 20px;
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 900px) {
    min-height: 250px;
    background-color: #d5d1f678;
    padding: 20px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const AMGTitle = styled.h1`
  text-align: center;
  font-family: "Raleway", sans-serif;
  color: #362e68;
  font-size: 33px;
  font-weight: 400;
  margin: 0px;
`;

export const AMGDescription = styled.p`
  color: black;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  line-height: 25px;
  text-align: center;
`;
