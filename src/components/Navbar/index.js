import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Asigurare Rapida UK</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home">PAGINA PRINCIPALĂ</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="reviews">RECENZII</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="faq">ÎNTREBĂRI FRECVENTE</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Solicită apel</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

{
  /* <NavBtnLinkRO to='https://form.jotformeu.com/61345148994364'>
              Formular Asigurare
            </NavBtnLinkRO>
            <NavBtnLinkRU to='https://form.jotformeu.com/73354099456365'>
              Заполните анкету
            </NavBtnLinkRU>
            <NavBtnLinkBG to='https://form.jotformeu.com/92712547528362'>
              Попълнете формуляра
            </NavBtnLinkBG> */
}
