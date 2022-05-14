import React from "react";
function Header() {
  return (
    <>
      <header className="container flex justify_between items_center">
        <h2>Portfolio</h2>
        <nav className="flex_25 ">
          <ul className="flex justify_between">
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
              <div></div>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            {/* <li>
              <a href="home">Experience</a>
            </li> */}
            <li>
              <a href="#education">Contact me</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Header;