import styled from "styled-components";
import { ImLinkedin2 } from "react-icons/im";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import "typeface-raleway";
import { AiOutlineMail, AiOutlineMenu } from "react-icons/ai";

export const HeaderContainer = styled.div`
  display: flex;
  height: 40px;
  background-color: #0b034f;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const LinkedinIcon = styled(ImLinkedin2)`
  height: 20px;
  width: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;
export const FacebookIcon = styled(BsFacebook)`
  height: 20px;
  width: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;
export const Menu = styled(AiOutlineMenu)`
  height: 30px;
  width: 30px;
  margin: 20px;
  color: black;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
`;

export const Sidebar = styled.div`
  width: 0;
  height: 100vh;
  background-color: #0b034f;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  overflow-x: hidden;
  transition: 0.5s;
`;
export const Logo = styled.img`
  height: 90px;
  width: 220px;
  margin: 20px;
`;
export const TwitterIcon = styled(BsTwitter)`
  height: 20px;
  width: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

export const YoutubeIcon = styled(BsYoutube)`
  height: 20px;
  width: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

export const PhoneIcon = styled(BsFillTelephoneFill)`
  height: 20px;
  width: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;
export const FaBarsIcon = styled(FaBars)`
  height: 20px;
  width: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

export const MailIcon = styled(AiOutlineMail)`
  height: 20px;
  width: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

export const InstagramIcon = styled(BsInstagram)`
  height: 20px;
  width: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

export const IconSection = styled.div`
  display: flex;
  color: #fff;
  padding: 5px;
`;
export const ContactInfo1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;
export const ContactInfo2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
`;
export const NavContainer = styled.div`
  background-image: url("https://www.prabisha.co.uk/wp-content/uploads/2022/11/19-PC-UK-Website-Banner-DIGITAL-MARKETING-SERVICES-scaled.jpg");
  background-size: cover;
  height: 80vh;
  background-size: cover;
`;
export const DesktopNavContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Section2logo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Section2NavItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavItem = styled.h1`
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  margin: 10px;
  font-weight: 400;
  color: black;
`;
export const MobileSectionNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const LogoDesktop = styled.img`
  height: 120px;
  width: 250px;
`;
export const ContactContainer = styled.div`
  display: flex;
`;
export const Text = styled.h4`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
`;

export const AboutTitle = styled.h1`
  color: black;
  font-family: "Raleway";
  font-size: 45px;
  font-weight: 300;
`;
export const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AboutDescription = styled.p`
  color: white;
  text-align: center;
  font-family: "Raleway";
  font-size: 20px;
`;
