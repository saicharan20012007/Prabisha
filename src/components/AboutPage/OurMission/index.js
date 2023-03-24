import {
  OurMissionContainer,
  OurMissionTitle,
  OurMissionDescription,
  OurMissionCardsContainer,
  OurMissionCard1,
  OurMissionCard2,
  OurMissionImage,
  OurMissionCard2Description,
} from "./OMStyledComponents";

const OurMission = () => (
  <OurMissionContainer>
    <OurMissionTitle>Our Mission</OurMissionTitle>
    <OurMissionDescription>
      At Prabisha Consulting, we're dedicated to empowering small- to mid-size
      businesses with diversified digital marketing solutions. We believe that
      SME businesses are the backbone of the economy, and as trusted and
      reliable marketing consultants, we're committed to helping them navigate
      and create a digital roadmap for their brand growth.
    </OurMissionDescription>
    <OurMissionCardsContainer>
      <OurMissionCard1>
        <OurMissionImage
          src="https://prabisha.co.uk/wp-content/uploads/2022/09/Core-Value.png"
          alt="OurMission"
        />
      </OurMissionCard1>
      <OurMissionCard2>
        <OurMissionCard2Description>
          1. We are a team of result-driven professionals. Our project
          completion is fully time-specific.
        </OurMissionCard2Description>
        <OurMissionCard2Description>
          2. We love to work with businesses, we love to make digital strategies
          for your business growth, and with our passion and enthusiasm, we
          greet challenges and make them easier to handle.
        </OurMissionCard2Description>
        <OurMissionCard2Description>
          3. Prabisha always works as a client-centric service provider; we like
          to know more details about your goals to develop the most suitable
          plan for your brand.
        </OurMissionCard2Description>
        <OurMissionCard2Description>
          4. Being the nation’s top digital marketing & IT service provider, we
          build credible & influential strategies.
        </OurMissionCard2Description>
      </OurMissionCard2>
    </OurMissionCardsContainer>
  </OurMissionContainer>
);

export default OurMission;
