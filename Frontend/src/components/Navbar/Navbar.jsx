import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { navLinks } from "../../data/data";
import {
  Nav,
  NavInner,
  Logo,
  LogoAccent,
  NavList,
  NavItem,
  NavLink,
  CtaBtn,
  MobileToggle,
  MobileMenu,
  MobileLink,
} from "./Navbar.styles";

const headerLinks = navLinks.filter((link) => link.path !== "/");

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <>
      <Nav $scrolled={scrolled}>
        <NavInner>
          <Logo to="/">
            <LogoAccent>ARP</LogoAccent> Associate Services
          </Logo>

          <NavList>
            {headerLinks.map((link) => (
              <NavItem key={link.path}>
                <NavLink
                  to={link.path}
                  $active={location.pathname === link.path}
                >
                  {link.label}
                </NavLink>
              </NavItem>
            ))}
          </NavList>

          <CtaBtn to="/contact">Free Consultation</CtaBtn>

          <MobileToggle onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <FontAwesomeIcon icon={open ? faTimes : faBars} />
          </MobileToggle>
        </NavInner>
      </Nav>

      <MobileMenu $open={open}>
        {headerLinks.map((link) => (
          <MobileLink
            key={link.path}
            to={link.path}
            $active={location.pathname === link.path}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </MobileLink>
        ))}
        <CtaBtn
          to="/contact"
          style={{
            display: "block",
            marginTop: "1rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          Free Consultation
        </CtaBtn>
      </MobileMenu>
    </>
  );
};

export default Navbar;
