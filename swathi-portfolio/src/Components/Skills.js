import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="container skills">
      <h2 className="heading" id="skills">
        Skills
      </h2>
      <div className="skills flex items_center column">
        <div className="flex justify_center">
          <ul className="flex  flex_wrap flex_48 justify_center skills">
            <li
              className="skill flex justify_center items_center"
              data-aos="flip-left"
            >
              <img src="/images/git.png" alt="" />
            </li>
            <li
              className="skill flex justify_center items_center"
              data-aos="flip-left"
            >
              <img src="/images/html.png" alt="" />
            </li>
            <li
              className="skill flex justify_center items_center"
              data-aos="flip-left"
            >
              <img src="/images/css.png" alt="" />
            </li>
            <li
              className="skill flex justify_center items_center"
              data-aos="flip-left"
            >
              <img src="/images/sass.png" alt="" />
            </li>
            <li
              className="skill flex justify_center items_center"
              data-aos="flip-left"
            >
              <img src="/images/tailwindcss.jpg" alt="" />
            </li>
            <li
              className="skill flex justify_center items_center"
              data-aos="flip-left"
            >
              <img src="/images/js.png" alt="" />
            </li>
            <li
              className="skill flex justify_center items_center"
              data-aos="flip-left"
            >
              <img src="/images/react.png" alt="" />
            </li>
            <li
              className="skill flex justify_center items_center"
              data-aos="flip-left"
            >
              <img src="/images/redux.png" alt="" />
            </li>
            
          </ul>
        </div>

        <figure className="flex_33">
          <img className="width_full" src="/images/profession2.png" alt="" />
        </figure>
      </div>
    </section>
  );
}

export default Skills;