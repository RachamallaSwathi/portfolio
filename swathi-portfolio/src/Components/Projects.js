import React, { useEffect } from "react";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="container flex justify_between items_center projects">
      <div className=" projects" id="projects">
        <h2 className="heading">Projects</h2>
        <div className="flex justify_between flex_wrap">
          <article className="flex_28 " data-aos="fade-up">
            <h3 className="app_name">blog app</h3>
            <p>
              You’ve read all your free member-only stories, become a member to
              get unlimited access. Your membership fee supports Casey
              Botticello and the voices you want to hear more from.
            </p>
            <ul className="flex flex_wrap justify_center tag_names">
              <li>ReactJs</li>
              <li>Material UI</li>
              <li>TailwindCSS</li>
              <li>CSS</li>
            </ul>
            <nav className="flex justify_center items_center">
              <ul className="flex_15 flex justify_between git_hub_link">
                <li>
                  <a
                    href="https://blog-application-six.vercel.app/"
                    target="blank"
                  >
                    {/* <i className="fab fa-creative-commons-share"></i> */}
                    <OpenInNewRoundedIcon />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="article_underline"></div>
          </article>

          <article className="flex_28" data-aos="fade-down">
            <h3 className="app_name">conduit api</h3>
            <p>
              You’ve read all your free member-only stories, become a member to
              get unlimited access. Your membership fee supports Casey
              Botticello and the voices you want to hear more from.
            </p>
            <ul className="flex flex_wrap justify_center tag_names">
              <li>MongoDB</li>
              <li>Express Js</li>
              <li>Node</li>
            </ul>
            <nav className="flex justify_center items_center">
              <ul className="flex_15 flex justify_between git_hub_link">
                
              </ul>
            </nav>
            <div className="article_underline"></div>
          </article>

          <article className="flex_28 " data-aos="fade-up">
            <h3 className="app_name">Github battle</h3>
            <p>
              This project is a "Github Battle" app. You'll be able to see the
              most popular repos for a variety of languages as well as battle
              two Github users
            </p>
            <ul className="flex flex_wrap justify_center tag_names">
              <li>ReactJs</li>
              <li>TailwindCSS</li>
              <li>CSS</li>
              <li>Material UI</li>
            </ul>
            <nav className="flex justify_center items_center">
              <ul className="flex_15 flex justify_between git_hub_link">
                <li>
                  <a href="https://github.com/RachamallaSwathi/GitHub-Battle/tree/main/github-battle">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github-battle-using-hooks.vercel.app/">
                    <OpenInNewRoundedIcon />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="article_underline"></div>
          </article>

          <article className="flex_28 " data-aos="fade-down">
            <h3 className="app_name">Shopping Cart</h3>
            <p>
              It is a small shopping cart inspired from flipkart, amazon , it
              will display the all list of products and we can filter the
              products size wise and sort the prices, we can add the products in
              cart
            </p>
            <ul className="flex flex_wrap justify_center tag_names">
              <li>ReactJs</li>
              <li>TailwindCSS</li>
              <li>CSS</li>
            </ul>
            <nav className="flex justify_center items_center">
              <ul className="flex_15 flex justify_between git_hub_link">
                <li>
                  <a href="https://github.com/RachamallaSwathi/shopping_Cart_using_Hooks">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://shopping-cart-using-hooks.vercel.app/">
                    <OpenInNewRoundedIcon />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="article_underline"></div>
          </article>

          <article className="flex_28" data-aos="fade-up">
            <h3 className="app_name">Expense-tracker</h3>
            <p>
            It is an SSR application. Here we can log in using various
            methodsIn this app user can manage their expenses .
            </p>
            <ul className="flex flex_wrap justify_center tag_names">
              <li>MongoDB</li>
              <li>Express.js</li>
              <li>Node.js</li>
            </ul>
            <nav className="flex justify_center items_center">
              <ul className="flex_15 flex justify_between git_hub_link">
                <li>
                  <a href="https://github.com/RachamallaSwathi/MonthlyTracker/tree/main/monthly-tracker">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://expense-tracker-x.herokuapp.com/">
                    <OpenInNewRoundedIcon />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="article_underline"></div>
          </article>

          <article className="flex_28 " data-aos="fade-down">
            <h3 className="app_name">Mutlipage-website</h3>
            <p>
            A multi-page website contains multiple pages and subpages within a menu. 
            Unlike the single page website, the only way to navigate to and view pages 
            in multi-page design is to click on the links within the menu.
            </p>
            <ul className="flex flex_wrap justify_center tag_names">
              <li>ReactJs</li>
              <li>TailwindCSS</li>
              <li>CSS</li>
            </ul>
            <nav className="flex justify_center items_center">
              <ul className="flex_15 flex justify_between git_hub_link">
                <li>
                  <a href="https://github.com/RachamallaSwathi/Final-checkpoint-of-HTML-CSS">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://rachamallaswathi.github.io/Final-checkpoint-of-HTML-CSS/">
                    <OpenInNewRoundedIcon />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="article_underline"></div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;