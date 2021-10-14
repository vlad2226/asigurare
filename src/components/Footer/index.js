import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterText,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Despre noi</FooterLinkTitle>
                <FooterLink to="/signin">Recenzii</FooterLink>
                <FooterLink to="/signin">Termeni și condiții</FooterLink>
                <FooterText>
                  Datele procesate sunt colectate și procesate de JotForm în
                  corcondanță cu GDPR
                </FooterText>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
