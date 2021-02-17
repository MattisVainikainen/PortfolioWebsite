import React from "react";
import style from "./BackGroundImage.module.css";
import logo from "./Mattis_Transparent.png";

const BackGroundImage = () => {
  return (
    <div className={style.container}>
      <div className={style.imageBox}>
        <img src={logo} alt="mattis" />
      </div>
    </div>
  );
};

export default BackGroundImage;
