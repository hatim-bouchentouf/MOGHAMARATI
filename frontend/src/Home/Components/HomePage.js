import React from "react";
import "./HomePage.css";
import vid from "../../mp4/smoke.mp4";
import { Link } from "react-router-dom";
import Moghamarati from "../../shared/components/UIElements/Moghamarati";
function HomePage() {
  return (
    <section className="home" id="home">
      <video autoPlay muted>
        <source src={vid} type="video/mp4" />
      </video>
      <div className="block">
        <h1>WELCOME TO MOGHAMARATI</h1>
        <h1>WELCOME TO MOGHAMARATI</h1>
        <div className="cv-btn">
          <Link to="/users">Discover</Link>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
