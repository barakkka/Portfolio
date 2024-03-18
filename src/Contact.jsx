import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll } from "react-scroll";

function Contact() {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <div id="contactWrapper">
      <div>
        <h2>
          Contact <span className="color">Me</span>
        </h2>
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
            name="submit"
            value={"Send Message"}
          />
        </form>
      </div>
      <div id="footer">
        <div id="copyrightText">
          <p>Copyright &copy; 2024 By Baraka Karuru | All Rights Reserved</p>
        </div>
        <div id="backToTop">
          <button className="button" onClick={scrollToTop}>
            <FontAwesomeIcon icon={faChevronUp} id="topIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
