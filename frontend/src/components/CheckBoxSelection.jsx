// CheckBoxSelection.jsx

import React from 'react';

const CheckBoxSelection = ({ values }) => {
  return (
    <div>
      {values.map((value, index) => (
        <div key={index}>
          <input type="checkbox" id={`checkbox-${index}`} value={value} />
          <label htmlFor={`checkbox-${index}`}>{value}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckBoxSelection;
