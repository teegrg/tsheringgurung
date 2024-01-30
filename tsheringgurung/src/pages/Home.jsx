// import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react";
import About from "../component/About"

import "../style/home.css";
import project1 from "./pic/project1.png";
import project2 from "./pic/project2.png";

function Home() {
  const [role, setRole] = useState("Developer");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRole((prevRole) =>
        prevRole === "Developer" ? "Engineer" : "Developer"
      );
    }, 3000); // Change role every 2000 milliseconds (2 seconds)

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Run this effect once when the component mounts

  return (
    <>
      <div className="home__container">
        <div className="home__text">Tshering Gurung</div>
        <div className="home__text">
          FullStack Software <span className="changing-word">{role}</span>
        </div>
        <div className="home__text__last">Made in New York, US</div>
      </div>
      <About/>
      <div className="project">
        <div className="project__1">
          <a href="https://keepssake.netlify.app/" target="_blank">
            <img className="img" src={project1} alt="pic" />
            <div className="project__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              ipsam nisi aperiam quod itaque consectetur culpa, rerum aliquam
              vel excepturi molestiae quas suscipit dolore eum maiores unde
              exercitationem totam cum.
            </div>
          </a>
        </div>
        <div className="project__2">
          <img className="img" src={project2} alt="pic" />
          <div className="project__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vitae
            ex voluptatum culpa hic eaque in sed. Ad in quas placeat distinctio
            cumque nobis molestias delectus. Itaque voluptas cumque tenetur?
          </div>
        </div>
        <div className="project__3">
          <img className="img" src={project1} alt="pic" />
          <div className="project__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vitae
            ex voluptatum culpa hic eaque in sed. Ad in quas placeat distinctio
            cumque nobis molestias delectus. Itaque voluptas cumque tenetur?
          </div>
        </div>
        <div className="project__4">
          <img className="img" src={project2} alt="pic" />
          <div className="project__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vitae
            ex voluptatum culpa hic eaque in sed. Ad in quas placeat distinctio
            cumque nobis molestias delectus. Itaque voluptas cumque tenetur?
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
