import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

function Home() {
  const handleImageLoad = () => {
    const image = document.getElementById("image");
    const tiltedPlus = document.querySelector(".tiltedPlus");
    const tilted = document.querySelector(".tilted");
    image.classList.replace("rotationLoadingAnimation", "secondImageAnimation");
    tiltedPlus.style.boxShadow = `7px 0 10px var(--foreground)`;
    tilted.style.boxShadow = `7px 0 10px var(--foreground)`;
  };
  const socialLinksArr = [
    {
      name: "In",
      link: "https://www.linkedin.com/in/baraka-karuru-b59b12251/",
    },
    {
      name: "X",
      link: "https://x.com/_barakka7?t=o0p8TiNGHNb6YQmE5AyNKw&s=09",
    },
    {
      name: "IG",
      link: "https://www.instagram.com/_barakka?igsh=YzhtendncGt1M3N1",
    },
    {
      name: "Github",
      link: "https://github.com/barakkka",
    },
  ];

  const handleSocialClick = (id) => {
    const socialLink = document.createElement("a");
    socialLink.href = socialLinksArr[id].link;
    socialLink.target = "_blank";
    document.body.appendChild(socialLink);
    socialLink.click();
    document.body.removeChild(socialLink);
  };

  const handleDownload = () => {
    //create an anchor element
    const link = document.createElement("a");
    //set the href attribute of the new a element
    link.href = "/Portfolio/Barakia Karuru Resume.pdf";
    //set the download attribute to the desired filename:
    link.download = "Baraka Karuru Resume";
    //append the anchor element to the document body:
    document.body.appendChild(link);
    //trigger a click event on the element:
    link.click();
    //remove the element from the document body:
    document.body.removeChild(link);
  };

  // useEffect(() => {

  // }, [imageLoaded])

  useEffect(() => {
    //I am a what.. styling... switching between different skills
    const myRoles = document.getElementById("textMotion");
    const myRolesArr = [
      "Full-Stack Web Engineer",
      "Frontend Developer",
      "React Developer",
    ];
    let i = 0;
    const switchRoles = () => {
      myRoles.textContent = myRolesArr[i];

      i = (i + 1) % myRolesArr.length;
    };
    switchRoles();

    setInterval(switchRoles, 10000);
  }, []);

  return (
    <section id="homeWrapper">
      <div id="myIntro">
        <div id="introText">
          <h2>Hello, It's Me</h2>
          <h1 id="myName">Baraka Karuru</h1>
          <div id="relativeH2">
            <h2>
              And I'm a <span id="textMotion"></span>
            </h2>
            <div id="hide">
              <div></div>
            </div>
          </div>
          <p id="firstP">
            Genuinely interested and driven towards creating visually appealing
            interfaces that are dynamic and responsive.
          </p>
          <div id="socialMedia">
            <button
              id="linkedin"
              className="social"
              onClick={() => handleSocialClick(0)}
            >
              in
            </button>
            <button
              id="x"
              className="social"
              onClick={() => handleSocialClick(1)}
            >
              X
            </button>
            <button
              id="ig"
              className="social"
              onClick={() => handleSocialClick(2)}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </button>
            <button
              id="github"
              className="social"
              onClick={() => handleSocialClick(3)}
            >
              <div className="hideGithub">
                <FontAwesomeIcon icon={faGithub} className="github" />
              </div>
            </button>
          </div>
          <div id="cvContainer">
            <button id="cvButton" className="button" onClick={handleDownload}>
              Download CV
            </button>
          </div>
        </div>
      </div>
      <div id="myImage">
        <div id="image" className="rotationLoadingAnimation">
          <img
            src="/Portfolio/images/Baraka Chilling.svg"
            alt="Me"
            id="baraka"
            onLoad={handleImageLoad}
          />
          <div className="octagon"></div>
          <div className="octagon tilted"></div>
          <div className="octagon tiltedPlus"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
