import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

function Portfolio() {
  return (
    <div id="portfolioWrapper">
      <div id="latestProject">
        <h2>
          Latest <span className="color">Projects</span>
        </h2>
      </div>
      <div id="myProjectsContainer">
        {/* ------------- PROJECT 1 ------------------ */}
        <div className="project">
          <div className="hoverDetails">
            <h2>Random Quote Machine</h2>
            <p>
              From handling JSON data to dynamically updating the UI, this
              project greatly improved my skills in working with external data
              sources.
            </p>
            <a
              href="https://barakkka.github.io/random-quote-machine/"
              target="_blank"
            >
              <button className="goToProject">
                <FontAwesomeIcon icon={faExternalLink} />
              </button>
            </a>
          </div>
          <img src="/Portfolio/images/quotes.jpeg" alt="random quotes" id="quoteImage" />
        </div>
        {/* ------------- PROJECT 2 ------------------ */}
        <div className="project">
          <div className="hoverDetails">
            <h2>Music Player App</h2>
            <p>
              Algorithmic thinking. Nested Data structures. 
            </p>
            <a
              href="https://barakkka.github.io/Music-Player-App/"
              target="_blank"
            >
              <button className="goToProject">
                <FontAwesomeIcon icon={faExternalLink} />
              </button>
            </a>
          </div>
          <img
            src="/Portfolio/images/HD-wallpaper-music-neon-icon.jpg"
            alt="Music Logo"
            id="musicImage"
          />
        </div>
        {/* ------------- PROJECT 3 ------------------ */}
        <div className="project">
          <div className="hoverDetails">
            <h2>Drum Machine</h2>
            <p>
              Creating Interactive user interfaces, passing data between
              components, audio playback and state management.
            </p>
            <a href="https://barakkka.github.io/drum-machine/" target="_blank">
              <button className="goToProject">
                <FontAwesomeIcon icon={faExternalLink} />
              </button>
            </a>
          </div>
          <img src="/Portfolio/images/drum.jpg" alt="drums" id="drumImage" />
        </div>
        {/* ------------- PROJECT 4 ------------------ */}
        <div className="project">
          <div className="hoverDetails">
            <h2>Todo List App</h2>
            <p>
              Organizing and structuring data, implementing CRUD operations and
              a responsive user interface
            </p>
            <a href="https://barakkka.github.io/todo-list-app/" target="_blank">
              <button className="goToProject">
                <FontAwesomeIcon icon={faExternalLink} />
              </button>
            </a>
          </div>
          <img
            src="/Portfolio/images/todolist.jpg"
            alt="todolist image"
            id="todolistImage"
          />
        </div>
        {/* ------------- PROJECT 5 ------------------ */}
        <div className="project">
          <div className="hoverDetails">
            <h2>Markdown Converter</h2>
            <p>
              Parsing and rendering markdown syntax in real-time. Integration of
              third-party libraries
            </p>
            <a
              href="https://barakkka.github.io/markdown-previewer/"
              target="_blank"
            >
              <button className="goToProject">
                <FontAwesomeIcon icon={faExternalLink} />
              </button>
            </a>
          </div>
          <img
            src="/Portfolio/images/markdown.png"
            alt="markdown logo"
            id="markdownImage"
          />
        </div>
        {/* ------------- PROJECT 6 ------------------ */}
        <div className="project">
          <div className="hoverDetails">
            <h2>Defeat The Dragon Game</h2>
            <p>
              Design and implement complex game logic. Engaging user experience.
              Visual feedback.
            </p>
            <a
              href="https://barakkka.github.io/defeat-the-dragon/"
              target="_blank"
            >
              <button className="goToProject">
                <FontAwesomeIcon icon={faExternalLink} />
              </button>
            </a>
          </div>
          <img
            src="/Portfolio/images/dragon.jpg"
            alt="dragon standing on mountain"
            id="dragonImage"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
