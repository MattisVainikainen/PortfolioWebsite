import React from "react";
import BackGroundImage from "../BackGroundImage/BackGroundImage";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={style.box}>
      <BackGroundImage />
      <div className={style.contactInfo}>
        <b>
          Email: Mattis.Vainikainen@gmail.com <br />
          PhoneNumber: 0706617207
        </b>
      </div>
      <div className={style.SocialMedia}>
        <div className={style.instagram}>
          <a href="http://www.instagram.com/mattisvainikainen">
            <img src="./Images/Instagram.png" alt="instagram" />
          </a>
        </div>
        <div className={style.github}>
          <a href="https://github.com/MattisVainikainen">
            <img src="./Images/GitHub.png" alt="github" />
          </a>
        </div>
        <div className={style.linkedin}>
          <a href="https://se.linkedin.com/in/mattisv">
            <img src="./Images/Linkedin.png" alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
