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

  const skillArr = [
    {
      name: "HTML",
      content: `I began my journey into web development by learning HTML back in 2023 through freeCodeCamp's interactive projects. HTML's structure and simplicity fascinated me, as it provided the foundation for building web pages and organizing content effectively.<br/><br/>

      As I delved deeper, I discovered the power of semantic HTML, understanding how proper markup not only enhances accessibility but also improves SEO and overall code readability. Through hands-on projects and experimentation, I honed my skills in crafting well-structured and semantically meaningful HTML documents.<br/><br/>
      
      HTML opened the door to the world of web development for me, igniting my passion for creating visually appealing and accessible websites. Its versatility and fundamental role in web development continue to inspire me as I embark on new projects and challenges.`,
    },
    {
      name: "CSS",
      content: `My journey into web development took an exciting turn when I delved into CSS after mastering HTML. Learning CSS through freeCodeCamp's projects opened my eyes to the endless possibilities of styling and designing web pages.<br/><br/>

      I found CSS incredibly fascinating for its ability to transform the appearance of HTML elements, from basic text formatting to complex layout designs. Through hands-on projects, I learned various CSS properties and techniques, including selectors, positioning, flexbox, and grid layout.<br/><br/>
      
      Exploring CSS not only enhanced my understanding of web design principles but also sparked my creativity in crafting visually appealing and responsive layouts. I enjoyed experimenting with colors, typography, and animations to bring websites to life and create engaging user experiences.<br/><br/>
      
      CSS's flexibility and power in shaping the visual presentation of web content continue to inspire me as I tackle new design challenges and push the boundaries of my creativity.`,
    },
    {
      name: "JAVASCRIPT",
      content: `My journey into web development took a significant leap forward with the introduction of JavaScript into my skillset. After mastering HTML and CSS, I delved into JavaScript, eager to add interactivity and dynamic behavior to my web projects.<br/><br/>

      FreeCodeCamp's interactive platform provided an excellent foundation for learning JavaScript, allowing me to grasp the basics and quickly move on to solving real-world coding challenges. The integrated console provided a sandbox environment where I could experiment with JavaScript syntax and concepts, strengthening my understanding through hands-on practice.<br/><br/>
      
      As I progressed, I transitioned from solving coding challenges to building interactive web applications, such as a music player app, a dragon slayer game, and a palindrome game, as showcased in my portfolio. These projects not only reinforced my knowledge of JavaScript but also challenged me to think critically and problem-solve creatively.
      <br/><br/>
      JavaScript's versatility and power as a programming language continue to amaze me, from manipulating the DOM to handling asynchronous operations and beyond. With each project I undertake, I discover new ways to leverage JavaScript's capabilities and push the boundaries of what I can create on the web.`,
    },
    {
      name: "REACT",
      content: `My journey into front-end development reached new heights when I began learning React, a powerful JavaScript library for building user interfaces. Guided by freeCodeCamp's comprehensive curriculum, I quickly grasped the fundamentals of React and embarked on developing interactive and dynamic web applications.<br/><br/>

      React's component-based architecture resonated with me, offering a structured and modular approach to building UI components. I was captivated by React's ability to efficiently manage state and seamlessly update the user interface in response to user interactions and data changes.<br/><br/>
      
      One of my pivotal learning experiences with React was developing a todo list app, which served as a practical exercise in applying React's concepts, including state management, props, and component lifecycle methods. Through this project and subsequent applications, I gained invaluable experience in building scalable and maintainable React applications.<br/><br/>
      
      As I continue to explore React's ecosystem and integrate additional libraries and tools such as Redux for state management, I am constantly amazed by its versatility and flexibility in tackling complex front-end challenges. React has empowered me to create immersive user experiences and push the boundaries of web development.`,
    },
    {
      name: "GIT",
      content: `During my journey of learning web development, I recognized the importance of version control in managing code changes and collaborating with others effectively. It was during my exploration of React that I also delved into Git, a distributed version control system that revolutionized the way I track, commit, and share my code.
      <br/><br/>
      Through freeCodeCamp's resources and hands-on projects, I learned the fundamentals of Git, including creating repositories, making commits, branching, merging, and resolving conflicts. Git provided me with the confidence to experiment with new features and innovations, knowing that I could always revert to previous states if needed.
      <br/><br/>
      As I continued to build and contribute to projects, Git became an indispensable tool in my development workflow. It enabled me to collaborate seamlessly with teammates, synchronize code changes across different environments, and maintain a cohesive codebase throughout the development lifecycle.<br/><br/>
      
      My proficiency in Git extends beyond basic commands; I have experience working with remote repositories on platforms like GitHub, where I manage project repositories, participate in open-source communities, and showcase my work to a broader audience.<br/><br/>
      
      Git's role in modern software development is undeniable, and my expertise in utilizing Git allows me to work efficiently and confidently in both individual and team settings, ensuring the integrity and stability of codebases while fostering collaboration and innovation.`,
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

    const setRunning = () => {
      moreSkillContainer.style.display = "none";
      skillsMotion.style.animationPlayState = "running";
    };
    const setPaused = () => {
      skillsMotion.style.animationPlayState = "paused";
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
          skillsMotion.addEventListener("mouseover", setPaused);
          skillsMotion.addEventListener("mouseleave", setRunning);
        });
      });
    });
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
              <FontAwesomeIcon icon={faHtml5} className="color icon" />
            </div>
            <h3>HTML</h3>
            <p>
              I began my journey into web development by learning HTML back in
              2023 through freeCodeCamp's interactive projects. HTML's structure
              and simplicity fascinated me, as it provided the foundation for
              building web pages and organizing content effectively.
            </p>
            <button className="button readMoreSkill HTML">Read More</button>
          </div>
          {/* -----Skill: CSS----- */}
          <div className="skillContainer">
            <div className="skillImage">
              <FontAwesomeIcon icon={faCss3} className="color icon" />
            </div>
            <h3>CSS</h3>
            <p>
              My journey into web development took an exciting turn when I
              delved into CSS after mastering HTML. Learning CSS through
              freeCodeCamp's projects opened my eyes to the endless
              possibilities of styling and designing web pages.
            </p>
            <button className="button readMoreSkill CSS">Read More</button>
          </div>
          {/* -----Skill: JAVASCRIPT----- */}
          <div className="skillContainer">
            <div className="skillImage color">
              <div id="javaScriptBorder">
                <div id="javaScriptText">JS</div>
              </div>
            </div>
            <h3>JavaScript</h3>
            <p>
              My journey into web development took a significant leap forward
              with the introduction of JavaScript into my skillset. After
              mastering HTML and CSS, I delved into JavaScript, eager to add
              interactivity and dynamic behavior to my web projects.
            </p>
            <button className="button readMoreSkill JAVASCRIPT">
              Read More
            </button>
          </div>
          {/* -----Skill: REACT----- */}
          <div className="skillContainer">
            <div className="skillImage">
              <img src={reactLogo} alt="react Logo" className="reactImage" />
            </div>
            <h3>React</h3>
            <p>
              My journey into front-end development reached new heights when I
              began learning React. Guided by freeCodeCamp's comprehensive
              curriculum, I quickly grasped the fundamentals of React and
              embarked on developing interactive and dynamic web applications.
            </p>
            <button className="button readMoreSkill REACT">Read More</button>
          </div>
          {/* -----Skill: GIT----- */}
          <div className="skillContainer">
            <div className="skillImage">
              <FontAwesomeIcon icon={faGitSquare} className="color icon" />
            </div>
            <h3>GIT</h3>
            <p>
              I recognized the importance of version control in managing code
              changes and collaborating with others effectively. It was during
              my exploration of React that I also delved into Git, a distributed
              version control system that revolutionized the way I track,
              commit, and share my code.
            </p>
            <button className="button readMoreSkill GIT ">Read More</button>
          </div>

          {/* ------------------------DUPLICATE SKILLS SET------------------------- */}

          {/* -----Skill: HTML----- */}
          <div className="skillContainer">
            <div className="skillImage">
              <FontAwesomeIcon icon={faHtml5} className="color icon" />
            </div>
            <h3>HTML</h3>
            <p>
              I began my journey into web development by learning HTML back in
              2023 through freeCodeCamp's interactive projects. HTML's structure
              and simplicity fascinated me, as it provided the foundation for
              building web pages and organizing content effectively.
            </p>
            <button className="button readMoreSkill HTML">Read More</button>
          </div>
          {/* -----Skill: CSS----- */}
          <div className="skillContainer">
            <div className="skillImage">
              <FontAwesomeIcon icon={faCss3} className="color icon" />
            </div>
            <h3>CSS</h3>
            <p>
              My journey into web development took an exciting turn when I
              delved into CSS after mastering HTML. Learning CSS through
              freeCodeCamp's projects opened my eyes to the endless
              possibilities of styling and designing web pages.
            </p>
            <button className="button readMoreSkill CSS">Read More</button>
          </div>
          {/* -----Skill: JAVASCRIPT----- */}
          <div className="skillContainer">
            <div className="skillImage color">
              <div id="javaScriptBorder">
                <div id="javaScriptText">JS</div>
              </div>
            </div>
            <h3>JavaScript</h3>
            <p>
              My journey into web development took a significant leap forward
              with the introduction of JavaScript into my skillset. After
              mastering HTML and CSS, I delved into JavaScript, eager to add
              interactivity and dynamic behavior to my web projects.
            </p>
            <button className="button readMoreSkill JAVASCRIPT">
              Read More
            </button>
          </div>
          {/* -----Skill: REACT----- */}
          <div className="skillContainer">
            <div className="skillImage">
              <img src={reactLogo} alt="react Logo" className="reactImage" />
            </div>
            <h3>React</h3>
            <p>
              My journey into front-end development reached new heights when I
              began learning React. Guided by freeCodeCamp's comprehensive
              curriculum, I quickly grasped the fundamentals of React and
              embarked on developing interactive and dynamic web applications.
            </p>
            <button className="button readMoreSkill REACT">Read More</button>
          </div>
          {/* -----Skill: GIT----- */}
          <div className="skillContainer">
            <div className="skillImage">
              <FontAwesomeIcon icon={faGitSquare} className="color icon" />
            </div>
            <h3>GIT</h3>
            <p>
              I recognized the importance of version control in managing code
              changes and collaborating with others effectively. It was during
              my exploration of React that I also delved into Git, a distributed
              version control system that revolutionized the way I track,
              commit, and share my code.
            </p>
            <button className="button readMoreSkill GIT ">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
