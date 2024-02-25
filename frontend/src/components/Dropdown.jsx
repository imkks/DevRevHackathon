// components/Dropdown.js

import React from "react";

const Dropdown = ({ data }) => {
  // Assuming data is an object with key-value pairs
  const options = Object.values(data).map((value, index) => (
    <option key={index} value={value}>
      {value}
    </option>
  ));

  return (
    <div className="custom-select">
      <select>
        <option value="">Select Value</option>
        {options}
      </select>
    </div>
  );
};

export default Dropdown;
