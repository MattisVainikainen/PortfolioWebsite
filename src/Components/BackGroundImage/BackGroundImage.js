import React from "react";
import style from "./BackGroundImage.module.css";

const BackGroundImage = () => {
  return (
    <div className={style.container}>
      <div className={style.imageBox}>
        <img src=".././Images/Mattis_Transparent.png" alt="mattis" />
      </div>
    </div>
  );
};

export default BackGroundImage;
