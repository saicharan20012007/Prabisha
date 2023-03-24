import {
  DSContainer,
  DSSubContainer,
  DSImage,
  DSTitle,
  DSSpanTitle,
  DSTitle2,
  Item,
} from "./DSStyledComponents.js";

const DigitalSolutions = () => (
  <DSContainer>
    <DSSubContainer>
      <DSImage
        src="https://www.prabisha.co.uk/wp-content/uploads/2022/12/digital-marketing3-1.jpg"
        alt="Discuss"
      />
    </DSSubContainer>
    <DSSubContainer>
      <DSTitle>
        Take a glimpse of our <br />
        <DSSpanTitle>360 digital solutions</DSSpanTitle>
      </DSTitle>
      <DSTitle2>Achieve better results & connect with your customer </DSTitle2>
      <ul>
        <Item>Social Media Marketing</Item>
        <Item>Search Engine Optimization</Item>
        <Item>Content Marketing</Item>
        <Item>Pay-Per-Click Advertisement</Item>
        <Item>Digital PR</Item>
        <Item>Email Marketing</Item>
      </ul>
    </DSSubContainer>
  </DSContainer>
);
export default DigitalSolutions;
