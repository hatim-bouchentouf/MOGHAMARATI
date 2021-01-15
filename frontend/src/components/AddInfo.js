import React from "react";
import "./AddInfo.css";
import LogEntryForm from "./LogEntryForm";
function AddInfo() {
  return (
    <div className="addInfo">
      <h1>Add Your Adventure</h1>
      <LogEntryForm />
    </div>
  );
}

export default AddInfo;
