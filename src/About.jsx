import React, { useEffect, useState } from "react";

function About() {
  const [display, setDisplay] = useState("none");
  useEffect(() => {
    const readMore = document.querySelector(".readMore");
    const moreDetails = document.getElementById("moreDetails");
    const expandHeight = document.querySelector(".expandHeight");
    readMore.addEventListener("click", function () {
      if (display === "none") {
        setDisplay("block");
        if(window.innerWidth < 500){
          expandHeight.style.height = "55rem"
        }
        else if (window.innerWidth < 1300) {
          expandHeight.style.height = "41rem";
        } else {
          expandHeight.style.height = "31rem";
        }
        moreDetails.style.display = "block";
        moreDetails.style.opacity = "1";
        readMore.textContent = "Less";
      } else {
        setDisplay("none");
        moreDetails.style.display = "none";
        readMore.textContent = "Read More";
        expandHeight.style.height = "20rem";
      }
    });
  }, [display]);

  useEffect(() => {
    const observeIntro = document.querySelector(".observeIntro");
    const observeImage = document.querySelector(".observeImage");
    const style = getComputedStyle(observeImage);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            entry.target.style.marginRight = `0px`;
            entry.target.style.padding = `0px`
            entry.target.style.opacity = `100`;
          }
        },
        {
          threshold: 0.3,
        }
      );
    });

    observer.observe(observeImage);
    observer.observe(observeIntro);
  }, []);

  return (
    <div id="aboutWrapper">
      <section id="homeWrapper">
        <div id="myIntro">
          <div id="introText" className="expandHeight">
            <h1 id="myName" className="observeIntro">
              About <span className="color">Me</span>
            </h1>
            <h2>Frontend Developer!</h2>
            <p>
              Hardworking, insightful and results-driven full-stack web
              engineer, technologically adept and solution focused employee
              equipped with the necessary analytical skills required in
              prioritizing tasks, identifying technical issues and providing
              timely solutions. I am ready to utilize my expertise and passion
              to further the mission of your company
              <span id="moreDetails">
                <br />I have completed a total of 12 projects so far, with 7 of
                them utilizing React, and another being a full stack app,
                demonstrating proficiency in modern web development
                technologies. I have good understanding how the server side
                code, coupled with the database, work together with the client
                side. My understanding in this realm (server side) include the
                following technologies, node.js, express.js, and MySQL. I am
                passionate about leveraging technology to drive innovation and
                solve complex business challenges. As someone who is open to new
                opportunities and eager to learn and grow professionally, I am
                excited about the prospect of blending my skills and experiences
                within a corporate setting.
              </span>
            </p>

            <div id="cvContainer">
              <button id="cvButton" className="button readMore">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div id="myImage">
          <div id="image" className="firstImageAnimation observeImage">
            <img
              src="/Portfolio/images/Baraka Chilling.svg"
              alt="Baraka karuru"
              id="karuru"
            />
            <div className="octagon"></div>
            <div className="octagon tilted"></div>
            <div className="octagon tiltedPlus"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
