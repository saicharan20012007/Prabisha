import styled from "styled-components";
import "typeface-raleway";

export const DSContainer = styled.div`
  @media (min-width: 900px) {
    height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (max-width: 900px) {
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const DSSubContainer = styled.div`
  @media (min-width: 900px) {
    height: 500px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 900px) {
    height: 500px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const DSImage = styled.img``;

export const DSTitle = styled.h1`
  color: #362e68;
  font-family: "Raleway", sans-serif;
  font-size: 33px;
  font-weight: 400;
`;
export const DSTitle2 = styled.h2`
  color: #362e68;
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  font-weight: 400;
`;

export const DSSpanTitle = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 33px;
  font-weight: 400;
  color: #c99b3b;
`;

export const Item = styled.li`
  color: #c99b3b;
  font-weight: 500;
  font-size: 20px;
`;
