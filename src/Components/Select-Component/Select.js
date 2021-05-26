import React from "react";
import "./Select.css";
function Select() {
  return (
    <div className="select--tag">
      <select ClassName="module--first" style={{ width: "15%" }}>
        <option>Select Query Type</option>
        <option value="1">Query-1</option>
        <option value="2">Qurery-2</option>
        <option value="3">Query-3</option>
      </select>
      <select style={{ width: "15%" }}>
        <option>Select Module</option>
        <option value="1">Module-1</option>
        <option value="2">Module-2</option>
        <option value="3">Module-3</option>
      </select>
      <select style={{ width: "15%" }}>
        <option>Select Submodule</option>
        <option value="1">Submodule-1</option>
        <option value="2">Submodule-2</option>
        <option value="3">Submodule-3</option>
      </select>
      <select style={{ width: "15%" }}>
        <option>Select Chapter</option>
        <option value="1">Chapter-1</option>
        <option value="2">Chapter-2</option>
        <option value="3">Chapter-3</option>
      </select>
    </div>
    // <div>
    //   <div className="dropdown">
    //     <div className="dropdown-select">
    //       <span className="select">Selected item</span>
    //       <i className="fa fa-caret-down icon"></i>
    //     </div>
    //     <div className="dropdown-list">
    //       <div className="dropdown-list__item">Pepsi</div>
    //       <div className="dropdown-list__item">Coca</div>
    //       <div className="dropdown-list__item">Monster</div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Select;
