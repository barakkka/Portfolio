import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faGitSquare,
} from "@fortawesome/free-brands-svg-icons";
import reactLogo from "/react.svg";

function Skills() {
  const [scrolling, setScrolling] = useState(true);
  const [speedVisual, setSpeedVisual] = useState(3);

  const skillArr = [
    {
      name: "Creative-Video-Production",
      content: ` Leveraging my role as Director of a full-service production and creative design startup, I specialize in creative video production that captivates audiences and delivers impactful messages.<br/><br/>

      From conceptualization to execution, I work closely with clients to understand their objectives and translate them into visually compelling stories. My expertise extends to scriptwriting, where I craft narratives that resonate with viewers and evoke emotional responses. Utilizing advanced filming techniques and state-of-the-art equipment, I ensure that each shot is meticulously planned and executed to achieve the desired aesthetic and storytelling effect.<br/><br/>
      
      My approach to creative video production is collaborative and client-focused, prioritizing open communication and feedback throughout the process. I believe in creating an environment where ideas are freely exchanged, allowing for innovation and creativity to flourish. By fostering strong partnerships with clients, I am able to deliver video content that not only meets but exceeds their expectations, driving results and achieving their goals. With a keen eye for detail and a passion for storytelling, I bring a unique perspective to every project, resulting in videos that leave a lasting impression on audiences..`,
    },
    {
      name: "Video-Editing",
      content: `As a skilled video editor, I excel in transforming raw footage into polished and engaging content that captures the attention of viewers.<br/><br/>

      My expertise lies in using industry-leading software such as Adobe Premiere Pro and Adobe After Effects to bring videos to life with seamless transitions, captivating visual effects, and immersive sound design. From short-form social media clips to long-form documentaries, I approach each project with creativity and precision, ensuring that every frame contributes to the overall narrative and message.<br/><br/>
      
      My video editing process is characterized by meticulous attention to detail and a commitment to excellence. I meticulously review and refine each edit to ensure coherence, consistency, and visual appeal. Whether it's color grading to enhance mood and atmosphere or audio editing to create immersive soundscapes, I leverage a wide range of tools and techniques to elevate the quality of the final product. With a deep understanding of pacing, timing, and storytelling, I craft videos that not only entertain but also inform and inspire audiences.<br/><br/>
      `,
    },
    {
      name: "Emotional-Storytelling",
      content: `My expertise in emotional storytelling stems from a deep understanding of human psychology and narrative techniques. By tapping into the fundamental aspects of human emotion, I create video content that resonates with audiences on a profound level.<br/><br/>

      Whether it's evoking feelings of joy, empathy, or inspiration, I craft narratives that elicit a strong emotional response, forging a deeper connection between the viewer and the message being conveyed. Through thoughtful scripting, pacing, and visual composition, I guide viewers on a journey that leaves a lasting impression and drives meaningful engagement.<br/><br/>
      `,
    },
    {
      name: "Videography",
      content: `With a keen eye for composition and a passion for visual storytelling, I excel in both photography and videography. Armed with professional-grade equipment, including a Canon EOS 90D, I capture stunning visuals that bring stories to life.<br/><br/>

      Whether it's documenting special moments, capturing the essence of a brand, or showcasing the beauty of a landscape, my photography and videography skills enable me to create compelling imagery that resonates with viewers. From framing and lighting to editing and post-production, I ensure that every image and video reflects the unique vision and narrative of the project.<br/><br/>
      `,
    },
    {
      name: "Social-Media-Engagement",
      content: `My proficiency in social media engagement is rooted in a thorough understanding of platform dynamics and audience preferences. By staying abreast of the latest trends and algorithms, I craft video content that resonates with target demographics and maximizes engagement.
      <br/><br/>
      From crafting attention-grabbing thumbnails to optimizing video descriptions and hashtags, I employ proven strategies to increase visibility and drive traffic. By fostering authentic interactions and building a loyal following, I help clients establish a strong online presence and achieve their marketing objectives on social media platforms.
      <br/><br/>
      `,
    },
    {
      name: "Adobe",
      content: `My expertise in Adobe software, particularly Adobe Premiere Pro and Adobe After Effects, is the cornerstone of my video production and editing capabilities. Through formal training and continuous practice, I have developed a deep understanding of these industry-standard tools, enabling me to leverage their full potential in creating professional-grade content.<br/><br/>

      From timeline editing and color grading to motion graphics and visual effects, I utilize a wide range of features and functionalities to enhance the quality and impact of my videos. With a keen eye for detail and a commitment to staying updated on the latest advancements, I ensure that my skills remain at the forefront of the industry.<br/><br/>
      `,
    },
    {
      name: "Project-Management",
      content: `My proficiency in project management is grounded in years of experience overseeing video production projects from inception to completion. I excel in coordinating diverse teams and resources to ensure seamless execution and delivery of high-quality content within budget and timeline constraints.<br/><br/>

      By establishing clear objectives, setting achievable milestones, and implementing efficient workflows, I streamline the production process and mitigate potential risks. Through effective communication and stakeholder engagement, I foster collaborative partnerships that drive project success and exceed client expectations.`,
    },
    {
      name: "Cinematic-Editing",
      content: `My passion for cinematic editing is evident in my meticulous attention to detail and dedication to crafting visually stunning videos that resonate with audiences. Leveraging advanced editing techniques and creative storytelling elements, I transform raw footage into immersive cinematic experiences that captivate and inspire.<br/><br/>

      From dynamic transitions and seamless cuts to atmospheric sound design and color grading, I imbue each video with a cinematic flair that elevates the storytelling and evokes emotion. With a deep understanding of pacing, rhythm, and narrative structure, I bring a cinematic touch to every project, ensuring that each video leaves a lasting impression on viewers.`,
    },
  ];

  useEffect(() => {
    const body = document.querySelector("body");
    if (!scrolling) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflowY = "scroll";
    }
  }, [scrolling]);

  useEffect(() => {
    const readMoreSkill = document.querySelectorAll(".readMoreSkill");
    const moreSkillContainer = document.getElementById("moreSkillContainer");
    const moreSkillHead = document.getElementById("moreSkillHead");
    const moreSkillText = document.getElementById("moreSkillText");
    const closeExtraDetails = document.querySelector(".closeExtraDetails");
    const skillsMotion = document.getElementById("skillsMotion");
    const readMoreSkillArr = Array.from(readMoreSkill);
    const skillContainer = document.querySelectorAll(".skillContainer");
    const faster = document.getElementById("faster");
    const slower = document.getElementById("slower");
    const reset = document.getElementById("reset");

    const speedArray = [`140s`, `120s`, `100s`, `80s`, `60s`, `40s`, `20s`];
    faster.addEventListener("click", function () {
      let updated = false;
      for (let i = 0; i < speedArray.length - 1; i++) {
        let computedStyle = window.getComputedStyle(skillsMotion);
        if (computedStyle.animationDuration === speedArray[i] && !updated) {
          skillsMotion.style.animationDuration = speedArray[i + 1];
          // console.log(
          //   `Array Value: ${speedArray[i + 1]} Computed Style: ${
          //     window.getComputedStyle(skillsMotion).animationDuration
          //   }`
          // );
          setSpeedVisual((prev) => prev + 1);
          updated = true;
          break;
        }
      }
    });
    slower.addEventListener("click", function () {
      let updated = false;
      for (let i = 1; i < speedArray.length; i++) {
        let computedStyle = window.getComputedStyle(skillsMotion);
        if (computedStyle.animationDuration === speedArray[i] && !updated) {
          skillsMotion.style.animationDuration = speedArray[i - 1];
          setSpeedVisual((prev) => prev - 1);
          updated = true;
          break;
        }
      }
    });
    reset.addEventListener("click", function () {
      skillsMotion.style.animationDuration = `100s`;
      setSpeedVisual(3);
    });

    const setRunning = () => {
      moreSkillContainer.style.display = "none";
      skillsMotion.style.animationPlayState = "running";
    };

    readMoreSkillArr.map((button) => {
      button.addEventListener("click", function () {
        setScrolling(false);
        try {
          skillsMotion.removeEventListener("mouseleave", setRunning);
        } catch (error) {
          console.log("no event listener added yet");
        }
        //scroll to the skills component
        scrollToSkills();
        //stop animation:
        skillsMotion.style.animationPlayState = "paused";
        skillArr.map((arrElement) => {
          if (button.classList.contains(arrElement.name)) {
            //set the content of it to an element.
            moreSkillContainer.style.display = "block";
            moreSkillHead.textContent = arrElement.name;
            moreSkillText.innerHTML = arrElement.content;
          }
        });
        closeExtraDetails.addEventListener("click", function () {
          setScrolling(true);
          setRunning();
          skillsMotion.addEventListener("mouseleave", setRunning);
        });
      });
    });
    const scrollSkill = () => {
      skillsMotion.addEventListener("mousedown", function () {
        const startMouseRect = skillsMotion.getBoundingClientRect().left;
        skillsMotion.addEventListener("mousemove", function (event) {
          const displacement = event.clientX - startMouseRect;
          skillsMotion.style.transform = `translateX(${displacement})`;
        });
      });
    };
    scrollSkill();
  }, [scroll]);

  const scrollToSkills = () => {
    const skillsWrapper = document.getElementById("skillsWrapper");
    const wrapperRectTop = skillsWrapper.getBoundingClientRect().top;
    const scrollPosition = window.scrollY + wrapperRectTop;
    scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <div id="skillsWrapper">
      {/* -----HIDDEN CONTAINER----- */}
      <div id="moreSkillContainer">
        <h3 id="moreSkillHead">{/* -----Push the Name----- */}</h3>
        <p id="moreSkillText"></p>
        <button className="button closeExtraDetails">Close</button>
      </div>
      {/* -----MY SKILLS----- */}
      <div>
        <h2>
          My <span className="color">Skills</span>
        </h2>
      </div>
      <div id="mySkillsContainer">
        <div id="skillsMotion">
          {/* -----Skill: HTML----- */}
          <div className="skillContainer">
            <div className="skillImage">
              {/* <FontAwesomeIcon icon={faHtml5} className="color icon" /> */}
            </div>
            <h3>Creative Video Production</h3>
            <p>
              Leveraging my role as Director of a full-service production and
              creative design startup, I excel in conceptualizing and executing
              video projects from start to finish.
            </p>
            <button className="button readMoreSkill Creative-Video-Production">
              Read More
            </button>
          </div>
          {/* -----Skill: CSS----- */}
          <div className="skillContainer">
            <div className="skillImage">
              {/* <FontAwesomeIcon icon={faCss3} className="color icon" /> */}
            </div>
            <h3>Video Editing</h3>
            <p>
              As a skilled video editor, I excel in transforming raw footage
              into polished and engaging content that captures the attention of
              viewers.
            </p>
            <button className="button readMoreSkill Video-Editing">
              Read More
            </button>
          </div>
          {/* -----Skill: JAVASCRIPT----- */}
          <div className="skillContainer">
            <div className="skillImage color">
              {/* <div id="javaScriptBorder">
                <div id="javaScriptText">JS</div>
              </div> */}
            </div>
            <h3>Emotional Storytelling</h3>
            <p>
              My expertise in emotional storytelling stems from a deep
              understanding of human psychology and narrative techniques. By
              tapping into the fundamental aspects of human emotion, I create
              video content that resonates with audiences on a profound level.
            </p>
            <button className="button readMoreSkill Emotional-Storytelling">
              Read More
            </button>
          </div>
          {/* -----Skill: REACT----- */}
          <div className="skillContainer">
            <div className="skillImage">
              {/* <img src={reactLogo} alt="react Logo" className="reactImage" /> */}
            </div>
            <h3>Videography</h3>
            <p>
              With a keen eye for composition and a passion for visual
              storytelling, I excel in both photography and videography. Armed
              with professional-grade equipment, including a Canon EOS 90D, I
              capture stunning visuals that bring stories to life.
            </p>
            <button className="button readMoreSkill Videography">
              Read More
            </button>
          </div>
          {/* -----Skill: GIT----- */}
          <div className="skillContainer">
            <div className="skillImage">
              {/* <FontAwesomeIcon icon={faGitSquare} className="color icon" /> */}
            </div>
            <h3>Social Mdia Engagement</h3>
            <p>
              My proficiency in social media engagement is rooted in a thorough
              understanding of platform dynamics and audience preferences. By
              staying abreast of the latest trends and algorithms, I craft video
              content that resonates with target demographics and maximizes
              engagement.
            </p>
            <button className="button readMoreSkill Social-Media-Engagement ">
              Read More
            </button>
          </div>
          {/* -----Skill: NODE----- */}
          <div className="skillContainer">
            <div className="skillImage">
              {/* <img
                src="/Portfolio/images/nodejs-logo-vector.svg"
                alt="node.js logo"
                className="skillLogo"
              /> */}
            </div>
            <h3>Adobe</h3>
            <p>
              My expertise in Adobe software, particularly Adobe Premiere Pro
              and Adobe After Effects, is the cornerstone of my video production
              and editing capabilities.
            </p>
            <button className="button readMoreSkill Adobe">Read More</button>
          </div>
          {/* -----Skill: EXPRESS----- */}
          <div className="skillContainer">
            <div className="skillImage">
              {/* <br />
              <hr className="hrColor" />
              <hr className="hrColor" /> */}
            </div>
            <h3>Project Management</h3>
            <p>
              My proficiency in project management is grounded in years of
              experience overseeing video production projects from inception to
              completion.
            </p>
            <button className="button readMoreSkill Project-Management">
              Read More
            </button>
          </div>
          {/* -----Skill: MYSQL----- */}
          <div className="skillContainer">
            <div className="skillImage">
              {/* <img
                src="/Portfolio/images/mysql-logo-vector-1.svg"
                alt="mysql logo"
                className="skillLogo mysql"
              /> */}
            </div>
            <h3>Cinematic Editing</h3>
            <p>
              My passion for cinematic editing is evident in my meticulous
              attention to detail and dedication to crafting visually stunning
              videos that resonate with audiences.
            </p>
            <button className="button readMoreSkill Cinematic-Editing">
              Read More
            </button>
          </div>
          {/* ------------------------DUPLICATE SKILLS SET------------------------- */}

          {/* -----Skill: HTML----- */}
          <div className="skillContainer">
            <div className="skillImage">
              {/* <FontAwesomeIcon icon={faHtml5} className="color icon" /> */}
            </div>
            <h3>Creative Video Production</h3>
            <p>
              Leveraging my role as Director of a full-service production and
              creative design startup, I excel in conceptualizing and executing
              video projects from start to finish.
            </p>
            <button className="button readMoreSkill Creative-Video-Production">
              Read More
            </button>
          </div>
          {/* -----Skill: CSS----- */}
          <div className="skillContainer">
            <div className="skillImage">
              {/* <FontAwesomeIcon icon={faCss3} className="color icon" /> */}
            </div>
            <h3>Video Editing</h3>
            <p>
              As a skilled video editor, I excel in transforming raw footage
              into polished and engaging content that captures the attention of
              viewers.
            </p>
            <button className="button readMoreSkill Video-Editing">
              Read More
            </button>
          </div>
          {/* -----Skill: JAVASCRIPT----- */}
          <div className="skillContainer">
            <div className="skillImage color">
              {/* <div id="javaScriptBorder">
                <div id="javaScriptText">JS</div>
              </div> */}
            </div>
            <h3>Emotional Storytelling</h3>
            <p>
              My expertise in emotional storytelling stems from a deep
              understanding of human psychology and narrative techniques. By
              tapping into the fundamental aspects of human emotion, I create
              video content that resonates with audiences on a profound level.
            </p>
            <button className="button readMoreSkill Emotional-Storytelling">
              Read More
            </button>
          </div>
          {/* -----Skill: REACT----- */}
          <div className="skillContainer">
            <div className="skillImage">
              {/* <img src={reactLogo} alt="react Logo" className="reactImage" /> */}
            </div>
            <h3>Videography</h3>
            <p>
              With a keen eye for composition and a passion for visual
              storytelling, I excel in both photography and videography. Armed
              with professional-grade equipment, including a Canon EOS 90D, I
              capture stunning visuals that bring stories to life.
            </p>
            <button className="button readMoreSkill Videography">
              Read More
            </button>
          </div>
          {/* -----Skill: GIT----- */}
          <div className="skillContainer">
            <div className="skillImage">
              {/* <FontAwesomeIcon icon={faGitSquare} className="color icon" /> */}
            </div>
            <h3>Social Mdia Engagement</h3>
            <p>
              My proficiency in social media engagement is rooted in a thorough
              understanding of platform dynamics and audience preferences. By
              staying abreast of the latest trends and algorithms, I craft video
              content that resonates with target demographics and maximizes
              engagement.
            </p>
            <button className="button readMoreSkill Social-Media-Engagement ">
              Read More
            </button>
          </div>
          {/* -----Skill: NODE----- */}
          <div className="skillContainer">
            <div className="skillImage">
              {/* <img
                src="/Portfolio/images/nodejs-logo-vector.svg"
                alt="node.js logo"
                className="skillLogo"
              /> */}
            </div>
            <h3>Adobe</h3>
            <p>
              My expertise in Adobe software, particularly Adobe Premiere Pro
              and Adobe After Effects, is the cornerstone of my video production
              and editing capabilities.
            </p>
            <button className="button readMoreSkill Adobe">Read More</button>
          </div>
          {/* -----Skill: EXPRESS----- */}
          <div className="skillContainer">
            <div className="skillImage">
              {/* <br />
              <hr className="hrColor" />
              <hr className="hrColor" /> */}
            </div>
            <h3>Project Management</h3>
            <p>
              My proficiency in project management is grounded in years of
              experience overseeing video production projects from inception to
              completion.
            </p>
            <button className="button readMoreSkill Project-Management">
              Read More
            </button>
          </div>
          {/* -----Skill: MYSQL----- */}
          <div className="skillContainer">
            <div className="skillImage">
              {/* <img
                src="/Portfolio/images/mysql-logo-vector-1.svg"
                alt="mysql logo"
                className="skillLogo mysql"
              /> */}
            </div>
            <h3>Cinematic Editing</h3>
            <p>
              My passion for cinematic editing is evident in my meticulous
              attention to detail and dedication to crafting visually stunning
              videos that resonate with audiences.
            </p>
            <button className="button readMoreSkill Cinematic-Editing">
              Read More
            </button>
          </div>

          {/* --end of skills-- */}
        </div>
      </div>
      <div id="speedContainer">
        <button id="slower" className="speed">
          &lt; slow down
        </button>
        <button id="reset" className="speed">
          Reset
        </button>
        <button id="faster" className="speed">
          speed up &gt;
        </button>
      </div>

      <div id="speedVisualContainer">
        <div className={speedVisual === 1 ? "visual active" : "visual"}></div>
        <div className={speedVisual === 2 ? "visual active" : "visual"}></div>
        <div className={speedVisual === 3 ? "visual active" : "visual"}></div>
        <div className={speedVisual === 4 ? "visual active" : "visual"}></div>
        <div className={speedVisual === 5 ? "visual active" : "visual"}></div>
        <div className={speedVisual === 6 ? "visual active" : "visual"}></div>
        <div className={speedVisual === 7 ? "visual active" : "visual"}></div>
      </div>
    </div>
  );
}

export default Skills;
