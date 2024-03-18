import React, { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";

function Header() {
  const [clicked, setClicked] = useState("");
  const [navBars, setNavBars] = useState("bars");

  const navigationArr = [
    {
      content: "Home",
      div: "homeContainer",
      clicked: "home",
      id: "homeWrapper",
    },
    {
      content: "About",
      div: "aboutContainer",
      clicked: "about",
      id: "aboutWrapper",
    },
    {
      content: "Skills",
      div: "skillsContainer",
      clicked: "skills",
      id: "skillsWrapper",
    },
    {
      content: "Portfolio",
      div: "workContainer",
      clicked: "work",
      id: "portfolioWrapper",
    },
    {
      content: "Lets Talk!",
      div: "contactContainer",
      clicked: "contact",
      id: "contactWrapper",
    },
  ];

  const handleNavClick = (event, name, componentId) => {
    event.preventDefault();
    setClicked(name);
    if (window.innerWidth <= 650) {
      document.getElementById("navigation").style.top = "-16rem";
      setNavBars("bars");
    }
    const component = document.getElementById(componentId).offsetTop - 70;
    animateScroll.scrollTo(component);
  };

  useEffect(() => {
    const bars = document.getElementById("closeOpen");
    const navigation = document.getElementById("navigation");
    bars.addEventListener("click", function () {
      if (navBars === "bars") {
        setNavBars("times");
        navigation.style.top = "3.5rem";
      } else {
        setNavBars("bars");
        navigation.style.top = "-16rem";
      }
    });
  }, [navBars]);

  useEffect(() => {
    const scrollToComponent = (componentId) => {};
  }, []);

  return (
    <div id="fixedHeader">
      <div id="headerContainer">
        <div id="zIndex">
          <div id="portfolio">
            <h3>Portfolio.</h3>
          </div>
          <div id="closeOpen">
            <div
              id={navBars === "times" ? "topBar" : ""}
              className="eachBar"
            ></div>
            <div
              id={navBars === "times" ? "middleBar" : ""}
              className="eachBar"
            ></div>
            <div
              id={navBars === "times" ? "bottomBar" : ""}
              className="eachBar"
            ></div>
          </div>
        </div>
        <div id="navigation">
          {navigationArr.map((element, index) => {
            return (
              <div
                key={index}
                id={element.div}
                className={
                  clicked === element.clicked ? "navItem" : "navclicked navItem"
                }
                onClick={(e) => handleNavClick(e, element.clicked, element.id)}
              >
                <a
                  href=""
                  id={element.clicked}
                  className={
                    clicked === element.clicked ? "color navlink" : "navlink"
                  }
                  onClick={(e) => handleNavClick(e, element.clicked)}
                >
                  {element.content}
                </a>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
