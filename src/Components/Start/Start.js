import React from "react";
import style from "./Start.module.css";
import About from "../About/About";
import BackGroundImage from "../BackGroundImage/BackGroundImage";

const Start = () => {
  return (
    <div className={style.container}>
      <BackGroundImage />
      <div className={style.text}>
        <h1>Mattis Vainikainen</h1>
        <p>I was born early 1978 in Gothenburg.</p>
        <b>Love solving problems as a developer!</b>
        <span>
          <div className={style.hr}>
            c# | Blazor | ReactJS | Javascript | CSS | HTML | SQL | SQLite |
            MongoDB | Unity | FIGMA | Gimp2.0 | Blender | Git | GitLab
          </div>
        </span>
      </div>
    </div>
  );
};

export default Start;
