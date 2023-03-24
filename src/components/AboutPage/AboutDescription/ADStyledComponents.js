import styled from "styled-components";

export const ADContainer = styled.div`
  @media (min-width: 900px) {
    min-height: 500px;
    padding: 125px 125px 125px 125px;
  }
  @media (max-width: 900px) {
    min-height: 500px;
    padding: 5px;
  }
`;

export const AboutDescriptionContent1 = styled.p`
  color: black;
  font-family: "Raleway";
  font-size: 19px;
  line-height: 33px;
`;
export const AboutDescriptionContent2 = styled.div`
  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

export const AboutDescriptionSubSection = styled.div`
  @media (min-width: 900px) {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 900px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const AboutDescriptionImage = styled.img`
  @media (min-width: 900px) {
    height: 170px;
    width: 320;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  @media (max-width: 900px) {
    height: 170px;
    width: 320;
    self-align: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const AboutDescriptionSpan = styled.span`
  color: #c99b3b;
  font-family: "Raleway";
  font-size: 19px;
  line-height: 33px;
  margin-left: 4px;
`;
