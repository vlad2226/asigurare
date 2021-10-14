import React from "react";
import Icon1 from "../../images/Icon-1.svg";
import Icon2 from "../../images/Icon-2.svg";
import Icon3 from "../../images/Icon-3.svg";
import {
  FaqContainer,
  FaqH1,
  FaqWrapper,
  FaqCard,
  FaqIcon,
  FaqP,
  FaqH2,
  FaqBtnWrapper,
  FaqBtn,
} from "./FaqElements";
import { Button } from "../ButtonElement";

const Faq = () => {
  return (
    <>
      <FaqContainer id="faq">
        <FaqH1>Întrebări frecvente</FaqH1>
        <FaqWrapper>
          <FaqCard>
            <FaqIcon src={Icon1} />
            <FaqH2>PUNCTE PENALIZARE UK</FaqH2>
            <FaqP>
              Punctele de penalizare ale șoferilor cu carnet emis în UK pot fi
              verificate foarte simplu online!
            </FaqP>
            <FaqBtnWrapper>
              <FaqBtn>
                <a href="https://www.gov.uk/view-driving-licence"> Click</a>
              </FaqBtn>
            </FaqBtnWrapper>
          </FaqCard>
          <FaqCard>
            <FaqIcon src={Icon2} />
            <FaqH2>VERIFICARE ASIGURARE</FaqH2>
            <FaqP>
              Dacă mașina este asigurată, atunci apare cu verde; dacă
              automobilul nu are asigurare valabilă, atunci apare în culoare
              roșie.
            </FaqP>
            <FaqBtnWrapper>
              <FaqBtn>
                <a href="www.ownvehicle.askmid.com"> Click</a>
              </FaqBtn>
            </FaqBtnWrapper>
          </FaqCard>
          <FaqCard>
            <FaqIcon src={Icon3} />
            <FaqH2>VERIFICARE MAȘINĂ SECOND-HAND</FaqH2>
            <FaqP>
              Accidente anterioare, reparată la timp, mile parcurse etc
            </FaqP>
            <FaqBtnWrapper>
              <FaqBtn>
                <a href="https://totalcarcheck.co.uk/"> Click</a>
              </FaqBtn>
            </FaqBtnWrapper>
          </FaqCard>
        </FaqWrapper>
      </FaqContainer>
    </>
  );
};

export default Faq;
