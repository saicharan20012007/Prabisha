import {
  RBDContainer,
  RBDTitle,
  RBDSpan,
  RBDDescription,
  RBDBottomSection,
  RBDSubSection1,
  RBDSpanEl,
  RBDContact,
  RBDContactContainer,
  MailIcon,
  AYGRightContainer,
  AYGProposalFormContainer,
  AYGProposalFormTitle,
  AYGProposalFormSpan,
  AYGProposalFormName,
  PhoneIcon,
  RBDImage,
  AYGProposalFormBtn,
} from "./RBDStyledComponents";

const RealBusinessDevelopment = () => (
  <RBDContainer>
    <RBDTitle>
      Real Business Development & Effective Revenue Generation Strategy
      <br />
      <RBDSpan>Top Digital Marketing Company in London</RBDSpan>
    </RBDTitle>
    <RBDDescription>
      We are brand builders, makers & promoters. Having experience of more than
      5+ years in providing transparent & quality marketing solutions to 300+
      small-mid-sized businesses, we're the pioneers who can take your business
      to the new height of success with <b>Organic -Paid solutions</b>,
      <RBDSpan> Website Design</RBDSpan>,{" "}
      <b>
        Social media marketing, Search engine optimisation, Content marketing,
        Digital PR, Email marketing, Google & PPC ads.
      </b>
      The Prabisha team helps increase your profits and marketing ROI through
      modern digital tools and a tailored strategy. We're the{" "}
      <b>Award Awning Digital Marketing Agency in London</b>, specialising in
      unlocking the marketing prospects & helping your business grow online with
      the proficient style that suits your brand's needs & creativity. Why stay
      low-key when you have innumerable opportunities to give your brand
      fruitful digital acknowledgement? Our passionate, professional digital
      strategists magnify their innovative thinking into organic & paid
      marketing to develop exceptional digital strategies that not only engage
      and convert customers but also help your brand stands out & catches the
      spotlight!
    </RBDDescription>
    <RBDBottomSection>
      <RBDSubSection1>
        <RBDTitle>
          Get a free digital marketing growth plan for our specialist!
          <br />
          <RBDSpanEl>Talk to us</RBDSpanEl>
        </RBDTitle>
        <RBDContactContainer>
          <RBDContact>
            <PhoneIcon />
            +44 (0) 7867090363
          </RBDContact>
          <RBDContact>
            <MailIcon />
            care@prabisha.co.uk
          </RBDContact>
        </RBDContactContainer>
        <RBDContactContainer>
          <RBDImage
            src="https://www.prabisha.co.uk/wp-content/uploads/2022/09/PC-Logo-NEW-for-Website-Page-PNG-1-300x140.png"
            alt="logo"
          />
        </RBDContactContainer>
      </RBDSubSection1>
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
    </RBDBottomSection>
  </RBDContainer>
);

export default RealBusinessDevelopment;
