import Button from "@components/button/Button";
import { ArrowForward, Close, Menu } from "@mui/icons-material";
import { useState } from "react";
import { navLinks } from "../../constants";
import classes from "./Navbar.module.css";

const Navbar = () => {
  // Cái này có thể là CSS hoặc là state? Nhưng khả năng cao là CSS
  // TODO: Apply functionality for menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={classes.navbar}>
      <div
        className={`${classes.backdrop} ${isMenuOpen ? classes.menuOpen : ""}`}
      ></div>
      {/* Logo */}
      <span className={classes.logo}>Bao Nguyen</span>

      <ul className={classes.navList}>
        {navLinks.map((link) => (
          <li>
            <a>{link.name}</a>
          </li>
        ))}
      </ul>
      <Button
        className={classes.resumeButton}
        text={"My Resume"}
        onClick={() => console.log("Download Resume")}
        icon={<ArrowForward />}
      />
      {
        <div className={classes.iconWrapper}>
          {isMenuOpen ? (
            <Close onClick={() => setIsMenuOpen(false)} />
          ) : (
            <Menu onClick={() => setIsMenuOpen(true)} />
          )}
        </div>
      }

      {/* Navlink for mobile */}
      {
        <div
          className={`${classes.mobileMenu} ${
            isMenuOpen ? classes.menuOpen : ""
          }`}
        >
          <ul className={`${classes.mobileNavList}`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a>{link.name}</a>
              </li>
            ))}
            <Button
              text={"My Resume"}
              onClick={() => console.log("Download Resume")}
              icon={<ArrowForward />}
            />
          </ul>
        </div>
      }
    </div>
  );
};

export default Navbar;
