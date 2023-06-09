import styled from "styled-components";

export const PortfolioSection = styled.div`
  box-sizing: border-box;
  background-color: #ffffff;
`;
export const PortfolioHead = styled.h1`
  color: #0b034f;
  font-size: 2.1rem;
  opacity: 80%;
  font-weight: 450;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;
export const TabsAndImagesCont = styled.div`
  background-color: #ebecf2;
`;

export const TabsUnlist = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 90px 50px 50px 50px;
  @media (max-width: 768px) {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-center: center;
    align-items: center;
  }
`;

export const ImagesUnlist = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  flex-wrap: wrap;
  flex-grow: 0;
`;
