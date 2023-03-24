import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  PhoneIcon,
  MailIcon,
  ContactInfo1,
  ContactInfo2,
  Text,
  MobileSectionNavbar,
  Section2logo,
  NavItem,
  Section2NavItems,
  DesktopNavContainer,
  Menu,
  Sidebar,
  NavContainer,
  HeaderContainer,
  IconSection,
  CloseButton,
  Logo,
  LogoDesktop,
  AboutSection,
  AboutTitle,
  ContactContainer,
} from "./headerStyledComponents";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <IconSection>
          <LinkedinIcon />
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <YoutubeIcon />
        </IconSection>
        <ContactContainer>
          <ContactInfo1>
            <PhoneIcon />
            <Text>+44(0)7867090363</Text>
          </ContactInfo1>
          <ContactInfo2>
            <MailIcon />
            <Text>care@prabisha.co.uk</Text>
          </ContactInfo2>
        </ContactContainer>
      </HeaderContainer>
      <NavContainer>
        <MobileSectionNavbar>
          <Section2logo href="prabisha.co.uk">
            <Logo
              src="https://www.prabisha.co.uk/wp-content/uploads/2022/09/PC-Logo-NEW-for-Website-Page-PNG-1-300x140.png"
              alt="logo"
            />
          </Section2logo>
          <Menu onClick={toggleMenu} />
          <Sidebar style={{ width: isOpen ? "250px" : "0" }}>
            <CloseButton onClick={closeMenu}>×</CloseButton>

            <Link to="/">
              <NavItem>HOME</NavItem>
            </Link>
            <Link to="/services">
              <NavItem>SERVICES</NavItem>
            </Link>
            <Link to="/portfolio">
              <NavItem>PORTFOLIO</NavItem>
            </Link>
            <Link to="/blogs">
              <NavItem>BLOG</NavItem>
            </Link>
            <Link to="/about">
              <NavItem>ABOUT</NavItem>
            </Link>
            <Link to="/contact">
              <NavItem>CONTACT</NavItem>
            </Link>
          </Sidebar>
        </MobileSectionNavbar>
        <DesktopNavContainer>
          <Section2logo href="prabisha.co.uk">
            <LogoDesktop
              src="https://www.prabisha.co.uk/wp-content/uploads/2022/09/PC-Logo-NEW-for-Website-Page-PNG-1-300x140.png"
              alt="logo"
            />
          </Section2logo>
          <Section2NavItems>
            <Link to="/">
              <NavItem>HOME</NavItem>
            </Link>
            <Link to="/services">
              <NavItem>SERVICES</NavItem>
            </Link>
            <Link to="/portfolio">
              <NavItem>PORTFOLIO</NavItem>
            </Link>
            <Link to="/blogs">
              <NavItem>BLOG</NavItem>
            </Link>
            <Link to="/about">
              <NavItem>ABOUT</NavItem>
            </Link>
            <Link to="/contact">
              <NavItem>CONTACT</NavItem>
            </Link>
          </Section2NavItems>
        </DesktopNavContainer>
        <AboutSection>
          <AboutTitle>BLOGS</AboutTitle>
        </AboutSection>
      </NavContainer>
    </>
  );
};

export default Header;
