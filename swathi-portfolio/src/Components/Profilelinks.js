import React from "react";

function Profilelinks() {
  return (
    <div>
      <div className="flex items_center justify_center profile_links">
        <nav className="flex_22 flex">
          <ul className="">
            <li>
              <a href="https://github.com/Narasimhuluv">
                <i className="fab fa-github"></i>
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/vasam-narasimhulu-8085901b3/">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>

            <li>
              <a href="https://twitter.com/NarasimhuluV7">
                <i className="fab fa-twitter-square"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Profilelinks;