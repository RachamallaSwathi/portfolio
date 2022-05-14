import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="container flex justify_center hero column">
      <figure className="flex_48">
        <img src="/images/profession3.jpg" alt="" />
      </figure>

      <div className="hero_data flex_48 flex justify_center items_center">
        <div>
          <h1
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
          >
            {" "}
            Hi, I am <span className="name_color">Swathi Rachamalla.</span>
          </h1>
          <h2>A Full Stack Web Developer.</h2>
          <p>
          Analytical and detail-oriented Full Stack Web Developer who
          is proficient with MERN stack and good at user-centric
          solutions. Collaborative, team player, and proficient in
          working with interdisciplinary teams and executing goaloriented project
          </p>
          <nav className="flex justify_center items_center">
            <ul className="flex_15 flex justify_between icons">
              <li>
                <a href="https://github.com/RachamallaSwathi">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/swathi-rachamalla-97065b1b6/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Swathi_1217">
                  <i className="fab fa-twitter-square"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Hero;