import React from "react";
import { Link } from "react-router-dom";
import "./Moghamarati.css";

function Moghamarati(props) {
  return (
    <Link to="/">
      <div className="logo">
        <h1>{props.title}</h1>
        <h1>{props.title}</h1>
      </div>
    </Link>
  );
}

export default Moghamarati;
