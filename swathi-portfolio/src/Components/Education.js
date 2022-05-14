import React from "react";
import Contact from "./Footer";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Button from "@mui/material/Button";

function Education() {
  return (
    <section className="container education">
      <h2 className="heading" id="education">
        Education
      </h2>
      <div className="flex justify_center items_start column">
        <article className="flex_42 degree_received">
          <h3 className="sub_heading">Degree Received</h3>
          <div className="">
            <img
              data-aos="flip-left"
              className="education_img"
              src="/images/jntuh.png"
              alt=""
            />

            <div>
              <h4 className="clg_name">Jawaharlal Nehru Technological University Hyderabad</h4>
              <h5 className="course_name">Bachelor of Technology</h5>
              
              <a
                className="website"
                href="https://jntuh.ac.in/"
              >
                Website
              </a>
            </div>
          </div>
        </article>

        <article className="contact flex_42" id="contact">
          <h2 className="sub_heading">Contact</h2>
          <article>
            <div className="flex items_center justify_center">
              <img
                data-aos="flip-right"
                className="profile"
                src="/images/profile.jpg"
                alt=""
              />
              <nav className="flex justify_center">
                <ul className="flex_15  justify_between icons">
                  <li>
                    <a
                      className="git_linc_twitt"
                      href="https://github.com/RachamallaSwathi"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="git_linc_twitt"
                      href="https://www.linkedin.com/in/swathi-rachamalla-97065b1b6/"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="git_linc_twitt"
                      href="https://twitter.com/Swathi_1217"
                    >
                      <i className="fab fa-twitter-square"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className=" flex">
              <div className="mail_resume flex justify_center flex_30">
                <Button className="em_re_btn" variant="outlined" size="small">
                  <a href="https://swathirachamalla77@gmail.com">Email</a>
                </Button>

                <Button className="em_re_btn" variant="outlined" size="small">
                  <CloudDownloadIcon />
                  <a href="/" download>
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </article>
        </article>
      </div>
    </section>
  );
}

export default Education;