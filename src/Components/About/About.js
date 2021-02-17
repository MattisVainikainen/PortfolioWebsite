import React from "react";
import BackGroundImage from "../BackGroundImage/BackGroundImage";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.box}>
      <BackGroundImage />

      <div className={style.about}>
        <p>
          <b>Personality if you ask others:</b>
        </p>
        <b className={style.test}>
          - High social skills (when needed) <br />
          - Creative (solo / team) <br />
          - Loyal <br />
          - Hard Worker <br />
          - Funny (atleast trying to be haha) <br />
          - Including people <br />
          - Problem solver <br />
        </b>
        <p>
          <b>Skills so far. Always learning.</b>
        </p>
        <b>
          - C# | Blazor | CSS <br />
          - Javascript (Basic) | React <br />
          - MS SQL | SQLite | MongoDB <br />
          - Git | GitLab <br />
          - Figma | Gimp2.0 | Blender | Unity <br />
        </b>
      </div>
    </div>
  );
};

export default About;
