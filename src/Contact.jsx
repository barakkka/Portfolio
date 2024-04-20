import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll } from "react-scroll";

function Contact() {
  const [typing, setTyping] = useState(false);
  const [intro, setIntro] = useState(false);
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  const firstText = `INITIALIZING SYSTEM --- *PLEASE STAND BY*`;
  const messageText = `Form Under Maintenance. Kindly reach me through my linkedIn account.
Find the link above the form or at the home page.
    OOH..! Don't worry. I haven't Hacked Your Device.
    I'm Just Typing From My end.
    Now Check your phone
                                                                                                                                                                                                         Heyy.. Im Joking`;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (typing) {
      return;
    } else {
      setTyping(true);
      const message = document.getElementById("message");
      const hackedSound = document.getElementById("hackedSound")
      message.value = ``;
      hackedSound.play()
      hackedSound.volume = 0.5;

      const introFunc = () => {
        message.style.textAlign = `center`;
        message.style.lineHeight = `14rem`

        const introArr = firstText.split("");
        //loop though each character
        introArr.forEach((char, index) => {
          setTimeout(() => {
            message.value += char;
          },  100 * index);
        });
      };
      setTimeout(introFunc, 3000);

      const textFunc = () => {
        message.value = ``;
        message.style.lineHeight = `normal`
        const charactersArr = messageText.split("");
        //loop through each character
        charactersArr.forEach((char, index) => {
          setTimeout(() => {
            message.value += char;
            if (char === "-") {
              console.log("reached end");
            }
          }, 100 * index);
        });
      };
      setTimeout(textFunc, 11000)
    }
  };

  useEffect(() => {
    const message = document.getElementById("message");
    if (typing) {
      message.classList.add("activated");
    }
  }, [typing]);

  return (
    <div id="contactWrapper">
      <div>
        <h2>
          Contact <span className="color">Me</span>
        </h2>
        <hr />
        <p>
          Form under Maintenance.. Kindly reach me through{" "}
          <a
            href="https://www.linkedin.com/in/baraka-karuru-b59b12251/"
            target="blank"
            id="maintenance"
          >
            my linkedIn account
          </a>
        </p>
        <hr />
      </div>
      <div>
        <form action="#" id="form">
          <div id="formFlexContainer">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input"
              required
            />
            <input
              type="phone"
              name="mobile"
              placeholder="Mobile Number"
              className="input"
            />
            <input
              type="text"
              name="subject"
              placeholder="Email Subject"
              className="input"
              required
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <input
            type="submit"
            className="button"
            id="submit"
            name="submit"
            value={"Send Message"}
            onClick={handleSubmit}
          />
        </form>
      </div>
      <audio src="/Portfolio/sounds/Hacking Sound Effect.mp3" id="hackedSound"></audio>
      <div id="footer">
        <div id="copyrightText">
          <p>Copyright &copy; 2024 By Baraka Karuru | All Rights Reserved</p>
        </div>
        <div id="backToTop">
          <button className="button" id="buttonHide" onClick={scrollToTop}>
            <FontAwesomeIcon icon={faChevronUp} id="topIcon" />
            <FontAwesomeIcon icon={faChevronUp} id="topIconHidden" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
