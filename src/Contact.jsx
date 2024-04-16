import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll } from "react-scroll";

function Contact() {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Form Under Maintenance. Kindly reach me through linkedIn. find the link above the form or at the home page."
    );
  };

  return (
    <div id="contactWrapper">
      <div>
        <h2>
          Contact <span className="color">Me</span>
        </h2>
        <hr />
        <p>
          Form under Maintenance.. Kindly message me through{" "}
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
