import { useState } from "react";
import { navLinks } from "../../constants";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className={classes.navbar}>
      {/* Logo */}
      <span>Bao Nguyen</span>

      {/* Navlink for normal screen */}
      {isMobile ?? (
        <ul>
          {navLinks.map((link) => (
            <li>
              <a>{link.name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
