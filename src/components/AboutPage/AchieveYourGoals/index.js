import {
  AYGContainer,
  AYGTitle,
  AYGLeftContainer,
  AYGDescription,
  AYGRightContainer,
  AYGProposalFormTitle,
  AYGProposalFormContainer,
  AYGProposalFormSpan,
  AYGProposalFormName,
  AYGProposalFormBtn,
} from "./AYGStyledComponents";

const AchieveYourGoals = () => (
  <AYGContainer>
    <AYGLeftContainer>
      <AYGTitle>
        We will help you achieve your goals and will be honest about the process
      </AYGTitle>
      <AYGDescription>
        Every brand that comes to us is different, and we treat them each as an
        individual case. We take the time to get to know their business inside
        and out before developing personalised solutions to help their progress.
      </AYGDescription>
      <AYGTitle>
        Quick Response | <AYGProposalFormSpan>24/7</AYGProposalFormSpan> |
        Result Driven |
        <AYGProposalFormSpan> Customer Satisfaction </AYGProposalFormSpan>
      </AYGTitle>
      <AYGDescription>
        Our team comprises experts from all different walks of life, so we are
        able to provide a unique and well-rounded perspective for each client.
        Our team at Prabisha Consulting is equipped with multilingual
        capabilities, enabling us to meet the requirements of various
        geographies and markets. This makes us the perfect choice for businesses
        looking to expand their reach to new markets and need a team who can
        communicate effectively with their target audience.
      </AYGDescription>
    </AYGLeftContainer>
    <AYGRightContainer>
      <AYGProposalFormContainer>
        <AYGProposalFormTitle>
          <AYGProposalFormSpan>
            Any Questions? Reach out to us now!
          </AYGProposalFormSpan>
        </AYGProposalFormTitle>
        <AYGProposalFormName placeholder="Name" />
        <AYGProposalFormName placeholder="Email" />
        <AYGProposalFormName placeholder="Mobile" />
        <AYGProposalFormName placeholder="Service" />
        <AYGProposalFormBtn>Submit</AYGProposalFormBtn>
      </AYGProposalFormContainer>
    </AYGRightContainer>
  </AYGContainer>
);

export default AchieveYourGoals;
