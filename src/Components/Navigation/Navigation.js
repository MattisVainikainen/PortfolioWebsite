import React from "react";
import style from "./Navigation.module.css";
import { HashLink as Link } from "react-router-hash-link";

const Navigation = () => {
  return (
    <div className={style.container}>
      <ol>
        <li>
          <Link smooth to="/" className={style.linkText}>
            Home
          </Link>
        </li>
        <li>
          <Link smooth to="/about" className={style.linkText}>
            About
          </Link>
        </li>
        <li>
          <Link smooth to="/portfolio" className={style.linkText}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link smooth to="/contact" className={style.linkText}>
            Contact
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default Navigation;
