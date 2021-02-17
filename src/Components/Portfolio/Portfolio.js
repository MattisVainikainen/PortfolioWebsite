import React from "react";
import BackGroundImage from "../BackGroundImage/BackGroundImage";
import style from "./Portfolio.module.css";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <div className={style.box}>
      <BackGroundImage />

      {Projects.map((project) => (
        <div className={style.container} key={project.id}>
          <div className={style.textInfo}>
            <h3>{project.title}</h3>
            <h5>{project.desc}</h5>
          </div>
          <img src={project.Image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
