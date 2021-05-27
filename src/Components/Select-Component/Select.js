import React from "react";
import "./Select.css";
function Select() {
  return (
    <div className="select--tag">
      {" "}
      &nbsp; &nbsp;
      <select
        style={{
          width: "24%",
          height: "40px",
          marginTop: "8px",
          backgroundColor: "#282828",
          color: "#fff",
        }}
      >
        <option>Select Query Type</option>
        <option value="1">Query-1</option>
        <option value="2">Qurery-2</option>
        <option value="3">Query-3</option>
      </select>{" "}
      &nbsp;
      <select
        style={{
          width: "24%",
          height: "40px",
          marginTop: "8px",
          backgroundColor: "#282828",
          color: "#fff",
        }}
      >
        <option>Select Module</option>
        <option value="1">Module-1</option>
        <option value="2">Module-2</option>
        <option value="3">Module-3</option>
      </select>{" "}
      &nbsp;
      <select
        style={{
          width: "24%",
          height: "40px",
          marginTop: "8px",
          backgroundColor: "#282828",
          color: "#fff",
        }}
      >
        <option>Select Submodule</option>
        <option value="1">Submodule-1</option>
        <option value="2">Submodule-2</option>
        <option value="3">Submodule-3</option>
      </select>{" "}
      &nbsp;
      <select
        style={{
          width: "24%",
          height: "40px",
          marginTop: "8px",
          backgroundColor: "#282828",
          color: "#fff",
        }}
      >
        <option>Select Chapter</option>
        <option value="1">Chapter-1</option>
        <option value="2">Chapter-2</option>
        <option value="3">Chapter-3</option>
      </select>
    </div>
  );
}

export default Select;
