import { Close, Menu } from "@mui/icons-material";
import { useState } from "react";
import { navLinks } from "../../constants";
import classes from "./Navbar.module.css";

const Navbar = () => {
  // Cái này có thể là CSS hoặc là state? Nhưng khả năng cao là CSS

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={classes.navbar}>
      {/* Logo */}
      <span>Bao Nguyen</span>

      {
        <ul className={classes.navList}>
          {navLinks.map((link) => (
            <li>
              <a>{link.name}</a>
            </li>
          ))}
        </ul>
      }

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
          </ul>
        </div>
      }
    </div>
  );
};

export default Navbar;
