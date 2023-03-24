import styled from "styled-components";
import "typeface-raleway";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

export const RBDContainer = styled.div`
  @media (min-width: 900px) {
    min-height: 900px;
    padding-left: 150px;
    padding-right: 150px;
    padding-top: 25px;
  }
  @media (max-width: 900px) {
    min-height: 900px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 25px;
  }
`;

export const RBDTitle = styled.h1`
  text-align: center;
  color: #362e68;
  font-size: 32px;
  font-weight: 400;
  font-family: "Raleway", sans-serif;
`;

export const RBDSpan = styled.span`
  color: #c99b3b;
  font-size: 32px;
  font-weight: 400;
  font-family: "Raleway", sans-serif;
`;

export const RBDDescription = styled.p`
  text-align: center;
  color: #000000;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  line-height: 29px;
`;

export const RBDBottomSection = styled.div`
  @media (min-width: 900px) {
    margin-top: 20px;
    display: flex;
  }
  @media (max-width: 900px) {
    margin-top: 20px;
  }
`;

export const RBDSubSection1 = styled.div`
  @media (min-width: 900px) {
    width: 50%;
    min-height: 500px;
  }
  @media (max-width: 900px) {
    width: 100%;
    min-height: 500px;
  }
`;

export const RBDSubSectionTitle = styled.h2`
  font-family: "Raleway", sans-serif;
  color: #362e68;
  font-size: 18px;
  font-weight: 500;
`;

export const RBDSpanEl = styled.span`
  color: #c99b3b;
  font-family: "Raleway", sans-serif;
`;

export const RBDContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  min-height: 30px;
`;
export const PhoneIcon = styled(BsFillTelephoneFill)`
  height: 20px;
  width: 20px;
  color: #c99b3b;
  padding-left: 10px;
  padding-right: 10px;
`;

export const MailIcon = styled(AiOutlineMail)`
  height: 20px;
  width: 20px;
  color: #c99b3b;
  padding-left: 10px;
  padding-right: 10px;
`;

export const RBDContact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #c99b3b;
  font-weight: 500;
`;

export const RBDImage = styled.img`
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  justify-content: center;
`;

export const AYGRightContainer = styled.div`
  @media (min-width: 900px) {
    width: 45vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (max-width: 900px) {
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const AYGProposalFormTitle = styled.h2`
  color: #ffffff;
  font-family: "Raleway", sans-serif;
  font-size: 25px;
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 30px;
  text-align: center;
`;

export const AYGProposalFormContainer = styled.div`
  @media (min-width: 900px) {
    width: 90%;
    background-color: #0b034f;
    height: 550px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 900px) {
    width: 80vw;
    background-color: #0b034f;
    min-height: 500px;
    margin-top: 150px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const AYGProposalFormSpan = styled.span`
  color: #c99b3b;
  font-size: 24px;
  margin-left: 5px;
  font-weight: 500;
`;

export const AYGProposalFormName = styled.input`
  type:"text"
  background-color:white;
  height:47px;
  border-radius:5px;
  width:300px;
  padding-left:14px;
  outline:none;
  font-size:18px;
  cursor:pointer;
  margin-bottom:20px;
  
`;

export const AYGProposalFormBtn = styled.button`
  background-color: #c99b3b;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 12px;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 7px;
  align-self: left;
  border-width: 0px;
  color: white;
`;
