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
        if (window.innerWidth < 1300) {
          expandHeight.style.height = "34rem";
          console.log("less than 1300px");
        } else {
          expandHeight.style.height = "31rem";
          console.log("more than 1300px");
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

  return (
    <div id="aboutWrapper">
      <section id="homeWrapper">
        <div id="myIntro">
          <div id="introText" className="expandHeight">
            <h1 id="myName">
              About <span className="color">Me</span>
            </h1>
            <h2>Frontend Developer!</h2>
            <p>
              Hardworking, insightful and results-driven 4th year student
              pursuing a degree in Business and Information Technology.
              Technologically adept and solution focused employee equipped with
              the necessary analytical skills required in prioritizing tasks,
              identifying technical issues and providing timely solutions. I am
              ready to utilize my expertise and passion to further the mission
              of your company.
              <span id="moreDetails">
                I have completed a total of 11 front-end web projects so far,
                with 7 of them utilizing React, demonstrating proficiency in
                modern web development technologies. Additionally, I performed
                Website Development & Management at Zaridi School Ltd., where I
                gained hands-on experience in designing, developing, and
                maintaining websites to meet the organization's needs. This
                experience has further honed my skills in website design,
                development, and content management systems. I am passionate
                about leveraging technology to drive innovation and solve
                complex business challenges. As someone who is open to new
                opportunities and eager to learn and grow professionally, I am
                excited about the prospect of blending my skills and experiences
                to tackling new challenges.
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
          <div id="image" className="firstImageAnimation">
            <img
              src="/images/Baraka Chilling.svg"
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
